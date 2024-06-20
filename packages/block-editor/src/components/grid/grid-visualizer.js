/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { useState, useEffect, forwardRef } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { __experimentalUseDropZone as useDropZone } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { __unstableUseBlockElement as useBlockElement } from '../block-list/use-block-props/use-block-refs';
import BlockPopoverCover from '../block-popover/cover';
import { range, GridRect, getGridItemRect, getGridInfo } from './utils';
import { store as blockEditorStore } from '../../store';
import { useGetBlocksBeforeCurrentCell } from './use-get-blocks-before-current-cell';

export function GridVisualizer( { clientId, contentRef } ) {
	const gridElement = useBlockElement( clientId );
	if ( ! gridElement ) {
		return null;
	}
	return (
		<GridVisualizerGrid
			clientId={ clientId }
			gridElement={ gridElement }
			ref={ contentRef }
		/>
	);
}

const GridVisualizerGrid = forwardRef( ( { clientId, gridElement }, ref ) => {
	const [ gridInfo, setGridInfo ] = useState( () =>
		getGridInfo( gridElement )
	);
	const [ isDroppingAllowed, setIsDroppingAllowed ] = useState( false );
	const [ highlightedRect, setHighlightedRect ] = useState( null );

	const { getBlockAttributes } = useSelect( blockEditorStore );
	const { updateBlockAttributes } = useDispatch( blockEditorStore );

	useEffect( () => {
		const observers = [];
		for ( const element of [ gridElement, ...gridElement.children ] ) {
			const observer = new window.ResizeObserver( () => {
				setGridInfo( getGridInfo( gridElement ) );
			} );
			observer.observe( element );
			observers.push( observer );
		}
		return () => {
			for ( const observer of observers ) {
				observer.disconnect();
			}
		};
	}, [ gridElement ] );

	useEffect( () => {
		function onGlobalDrag() {
			setIsDroppingAllowed( true );
		}
		function onGlobalDragEnd() {
			setIsDroppingAllowed( false );
		}
		document.addEventListener( 'drag', onGlobalDrag );
		document.addEventListener( 'dragend', onGlobalDragEnd );
		return () => {
			document.removeEventListener( 'drag', onGlobalDrag );
			document.removeEventListener( 'dragend', onGlobalDragEnd );
		};
	}, [] );

	const getBlocksBeforeCurrentCell = useGetBlocksBeforeCurrentCell(
		clientId,
		gridInfo.numColumns
	);

	let index = 0;

	return (
		<BlockPopoverCover
			className={ clsx( 'block-editor-grid-visualizer', {
				'is-dropping-allowed': isDroppingAllowed,
			} ) }
			clientId={ clientId }
			__unstablePopoverSlot="block-toolbar"
		>
			<div
				ref={ ref }
				className="block-editor-grid-visualizer__grid"
				style={ gridInfo.style }
			>
				{ range( 1, gridInfo.numRows ).map( ( row ) =>
					range( 1, gridInfo.numColumns ).map( ( column ) => {
						index++;
						return (
							<GridVisualizerCell
								key={ `${ row }-${ column }` }
								isHighlighted={
									highlightedRect?.contains( column, row ) ??
									false
								}
								validateDrag={ ( srcClientId ) => {
									const attributes =
										getBlockAttributes( srcClientId );
									const rect = new GridRect( {
										columnStart: column,
										rowStart: row,
										columnSpan:
											attributes.style?.layout
												?.columnSpan,
										rowSpan:
											attributes.style?.layout?.rowSpan,
									} );

									const isInBounds = new GridRect( {
										columnSpan: gridInfo.numColumns,
										rowSpan: gridInfo.numRows,
									} ).containsRect( rect );
									if ( ! isInBounds ) {
										return false;
									}

									const isOverlapping = Array.from(
										gridElement.children
									).some(
										( child ) =>
											child.dataset.block !==
												srcClientId &&
											rect.intersectsRect(
												getGridItemRect( child )
											)
									);
									if ( isOverlapping ) {
										return false;
									}

									return true;
								} }
								onDragEnter={ ( srcClientId ) => {
									const attributes =
										getBlockAttributes( srcClientId );
									setHighlightedRect(
										new GridRect( {
											columnStart: column,
											rowStart: row,
											columnSpan:
												attributes.style?.layout
													?.columnSpan,
											rowSpan:
												attributes.style?.layout
													?.rowSpan,
										} )
									);
								} }
								onDragLeave={ () => {
									// onDragEnter can be called before onDragLeave if the user moves
									// their mouse quickly, so only clear the highlight if it was set
									// by this cell.
									setHighlightedRect(
										( prevHighlightedRect ) =>
											prevHighlightedRect?.columnStart ===
												column &&
											prevHighlightedRect?.rowStart ===
												row
												? null
												: prevHighlightedRect
									);
								} }
								onDrop={ ( srcClientId ) => {
									const attributes =
										getBlockAttributes( srcClientId );
									updateBlockAttributes( srcClientId, {
										style: {
											...attributes.style,
											layout: {
												...attributes.style?.layout,
												columnStart: column,
												rowStart: row,
											},
										},
									} );
									setHighlightedRect( null );
								} }
								color={ gridInfo.currentColor }
								gridClientId={ clientId }
								targetIndex={ getBlocksBeforeCurrentCell(
									index
								) }
							/>
						);
					} )
				) }
			</div>
		</BlockPopoverCover>
	);
} );

function GridVisualizerCell( {
	isHighlighted,
	validateDrag,
	onDragEnter,
	onDragLeave,
	onDrop,
	color,
	gridClientId,
	targetIndex,
} ) {
	const { getDraggedBlockClientIds } = useSelect( blockEditorStore );
	const { moveBlocksToPosition } = useDispatch( blockEditorStore );

	const ref = useDropZone( {
		onDragEnter() {
			const [ srcClientId ] = getDraggedBlockClientIds();
			if ( srcClientId && validateDrag( srcClientId ) ) {
				onDragEnter( srcClientId );
			}
		},
		onDragLeave() {
			onDragLeave();
		},
		onDrop() {
			const [ srcClientId ] = getDraggedBlockClientIds();
			if ( srcClientId && validateDrag( srcClientId ) ) {
				onDrop( srcClientId );
				moveBlocksToPosition(
					[ srcClientId ],
					gridClientId,
					gridClientId,
					targetIndex
				);
			}
		},
	} );

	return (
		<div
			className="block-editor-grid-visualizer__cell"
			style={ {
				boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${ color } 20%, #0000)`,
			} }
		>
			<div
				ref={ ref }
				className={ clsx( 'block-editor-grid-visualizer__drop-zone', {
					'is-highlighted': isHighlighted,
				} ) }
			/>
		</div>
	);
}
