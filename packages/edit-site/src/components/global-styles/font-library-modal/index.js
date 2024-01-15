/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Modal,
	privateApis as componentsPrivateApis,
} from '@wordpress/components';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import InstalledFonts from './installed-fonts';
import FontCollection from './font-collection';
import UploadFonts from './upload-fonts';
import { FontLibraryContext } from './context';
import { unlock } from '../../../lock-unlock';

const { Tabs } = unlock( componentsPrivateApis );

const DEFAULT_TABS = [
	{
		id: 'installed-fonts',
		title: __( 'Library' ),
	},
	{
		id: 'upload-fonts',
		title: __( 'Upload' ),
	},
];

const tabsFromCollections = ( collections ) =>
	collections.map( ( { id, name } ) => ( {
		id,
		title:
			collections.length === 1 && id === 'default-font-collection'
				? __( 'Install Fonts' )
				: name,
	} ) );

function FontLibraryModal( {
	onRequestClose,
	initialTabId = 'installed-fonts',
} ) {
	const { collections } = useContext( FontLibraryContext );

	const tabs = [
		...DEFAULT_TABS,
		...tabsFromCollections( collections || [] ),
	];

	return (
		<Modal
			title={ __( 'Fonts' ) }
			onRequestClose={ onRequestClose }
			isFullScreen
			className="font-library-modal"
		>
			<div className="font-library-modal__tabs">
				<Tabs initialTabId={ initialTabId }>
					<Tabs.TabList>
						{ tabs.map( ( { id, title } ) => (
							<Tabs.Tab key={ id } tabId={ id }>
								{ title }
							</Tabs.Tab>
						) ) }
					</Tabs.TabList>
					{ tabs.map( ( { id } ) => {
						let contents;
						switch ( id ) {
							case 'upload-fonts':
								contents = <UploadFonts />;
								break;
							case 'installed-fonts':
								contents = <InstalledFonts />;
								break;
							default:
								contents = <FontCollection id={ id } />;
						}
						return (
							<Tabs.TabPanel
								key={ id }
								tabId={ id }
								focusable={ false }
							>
								{ contents }
							</Tabs.TabPanel>
						);
					} ) }
				</Tabs>
			</div>
		</Modal>
	);
}

export default FontLibraryModal;
