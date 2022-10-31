// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "start_here/welcome.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("start_here/welcome.htm"));
rh.consts('HOME_FILEPATH', encodeURI('start_here/welcome.htm'));
rh.consts('START_FILEPATH', encodeURI('start_here/welcome.htm'));
rh.consts('HELP_ID', 'f74ac1d2-e76e-4b6d-9390-2d01600f2ce0' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "en");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"SyncToc":"SyncToc","Show":"Show","Next":">>","Hide":"Hide","Search":"Search","Contents":"Contents","Logo/Author":"Powered By","Disabled Next":">>","Seperate":"|","Index":"Index","Glossary":"Glossary","Disabled Prev":"<<","OpenLinkInNewTab":"Open in new tab","Prev":"<<","BreadcrumbStart":"Home:","BrsNextButton":"Next","BrsPrevButton":"Previous","CloseFavorites":"Close Favorites","ContentsTab":"Contents","CookiesAcceptText":"We ask you to accept cookies for performance, readability and experience purposes. Cookies are used for bookmarking favorite topics and to restore the table of contents, index and glossary on topic change. This setting is asked only once and can be reverted by clearing the browser cookies.","CookiesAcceptButton":"Accept","CookiesDenyButton":"Later","EditFavorites":"Edit Favorites","FavoriteArticle":"saved article","FavoriteArticles":"saved articles","FullScreenButton":"Full Screen","GlossaryTab":"Glossary","GlossResultHeaderLabel":"Glossary Dictionary","HideLeftPanelTip":"Hide Left Panel","HideResults":"Hide Results","HomeButton":"Home","HomePageLogoTitle":"Logo","HomePageSubtitle":"How can we help?","IndexTab":"Index","MCSearchResultShowFullTopic":"Read more...","MiniTOCCaption":"In this Topic","NoResultsFoundText":"No Results Found","PrintButtonTip":"Print","RemoveFavItem":"Remove ","RemoveHighlight":"Remove Highlight","ResultsFoundText":"%1 result(s) found for %2","SearchPlaceHolder":"Search...","IndexFilterKewords":"Find Keyword","GlossaryFilterTerms":"Find Term","SetAsFavorite":"Set as Favorite","ShowLeftPanelTip":"Show Left Panel","TOCTileArticlesCount":"article(s)","ToTopButtonTip":"Go to Top","UnsetAsFavorite":"Unset as Favorite","TopicHiddenText":"This topic is filtered out by the selected filters.","ResetFilters":"Reset Filters","SkipToMainContent":"Skip To Main Content","ClearSearchBox":"Clear Search Box","RemoveFilter":"Remove Filter","SelectedFilters":"Selected Filters","CloseSidebar":"Close Sidebar","OpenMenu":"Open Menu","CloseMenu":"Close Menu","ViewMore":"View More","SearchPaginationLabel":"%1 to %2 of %3 results","NextSearchResults":"Next search page","PrevSearchResults":"Previous search page"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "LinePulse 3 User Guide");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "studio_lp");
model.publish(rh.consts('CHAT_API_SESSION_TOKEN'), "");
model.publish(rh.consts('CHAT_API_PROJ_ID'), "");

model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
model.publish(rh.consts('KEY_LOGO_URL'), "start_here/welcome.htm");
model.publish(rh.consts('KEY_SPECIAL_CHARS'), "0;1;2;3;4;5;6;7;8;9");
})();
