﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#073A7E";
bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#073A7E";
bookConfig.iconColor="#FFCC66";
bookConfig.pageNumColor="#000000";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.toolbarAlwaysShow="YES";
bookConfig.formFontColor="#FFFFFF";
bookConfig.formBackgroundColor="#494949";
bookConfig.ToolBarAlpha="1";
bookConfig.CurlingPageCorner="True";
bookConfig.showBookInstructionOnStart="false";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.showGotoButtonsAtFirst="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.aboutButtonVisible="Hide";
bookConfig.enablePageBack="Show";
bookConfig.ShareButtonVisible="YES";
shareObj = [];
bookConfig.addCurrentPage="No";
bookConfig.EmailButtonVisible="NO";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.isHideTabelOfContentNodes="yes";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchKeywordFontColor="#FCFFF8";
bookConfig.searchHightlightColor="#EEFFEF";
bookConfig.SelectTextButtonVisible="NO";
bookConfig.PrintButtonVisible="Yes";
bookConfig.BackgroundSoundButtonVisible="Enable";
bookConfig.FlipSound="Enable";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.bgSoundVol="50";
bookConfig.AutoPlayButtonVisible="YES";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="9";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.maxZoomWidth="1400";
bookConfig.defaultZoomWidth="700";
bookConfig.mouseWheelFlip="Yes";
bookConfig.ZoomMapVisible="Show";
bookConfig.DownloadButtonVisible="NO";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Disable";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.MagnifierButtonVisible="Hide";
bookConfig.bgBeginColor="#E2E2E2";
bookConfig.bgEndColor="#E2E2E2";
bookConfig.bgMRotation="90";
bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="0";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="0";
bookConfig.RightShadowAlpha="0.6";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.pageHighlightType="magazine";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="NO";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.FlipDirection="0";
bookConfig.flippingTime="0.6";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.DoubleSinglePageButtonVisible="hide";
bookConfig.thicknessWidthType="Thinner";
bookConfig.thicknessColor="#CCCCCC";
bookConfig.SingleModeBanFlipToLastPage="No";
bookConfig.showThicknessOnMobile="no";
bookConfig.isSingleBookFullWindowOnMobile="no";
bookConfig.isStopMouseMenu="yes";
bookConfig.restorePageVisible="No";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="20";
bookConfig.rightMargin="20";
bookConfig.hideMiniFullscreen="true";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.leftRightPnlShowOption="None";
bookConfig.highDefinitionConversion="no";
bookConfig.LargeLogoPosition="top-left";
bookConfig.LargeLogoTarget="Blank";
bookConfig.isFixLogoSize="No";
bookConfig.logoFixWidth="0";
bookConfig.logoFixHeight="0";
bookConfig.SupportOperatePageZoom="Yes";
bookConfig.showHelpContentAtFirst="No";
bookConfig.updateURLForPage="No";
bookConfig.passwordTips="Please contact the <a href='mailto:author@sample.com'><u>author</u></a> to access the web";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "CDXdtiHIcapgNPaWhhLHUTnjGIaYriNJQShsGGSUolILTdvtLKbYhlNFeUuoAGdSojPIcektICYStjMHddlvGNTRqlDBSSjqOGcVmvCLdQqvPBYesnNGaWojALRQjmLAdWglKNVcosEEfVmnMMXV102fe912_";
bookConfig.Html5Template = "Metro";
bookConfig.searchTextJS="javascript/search_config.js";
bookConfig.searchPositionJS="javascript/text_position[1].js";
bookConfig.totalPageCount=12;
bookConfig.largePageWidth=612;
bookConfig.largePageHeight=792;
bookConfig.bookTitle="Shoresh June 2024";
bookConfig.normalPath="../files/mobile/";
bookConfig.largePath="../files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.useTheAliCloudChart=false;
bookConfig.MidBgColor="#ddf6ea";
bookConfig.bookmarkCR = "a78e6949600357d23a0278a96b3aecf74c3a3607";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="../files/thumb/";
var fliphtml5_pages=[{"l":"../files/mobile/1.jpg","n":"../files/mobile/1.jpg","t":"../files/thumb/1.jpg"},{"l":"../files/mobile/2.jpg","n":"../files/mobile/2.jpg","t":"../files/thumb/2.jpg"},{"l":"../files/mobile/3.jpg","n":"../files/mobile/3.jpg","t":"../files/thumb/3.jpg"},{"l":"../files/mobile/4.jpg","n":"../files/mobile/4.jpg","t":"../files/thumb/4.jpg"},{"l":"../files/mobile/5.jpg","n":"../files/mobile/5.jpg","t":"../files/thumb/5.jpg"},{"l":"../files/mobile/6.jpg","n":"../files/mobile/6.jpg","t":"../files/thumb/6.jpg"},{"l":"../files/mobile/7.jpg","n":"../files/mobile/7.jpg","t":"../files/thumb/7.jpg"},{"l":"../files/mobile/8.jpg","n":"../files/mobile/8.jpg","t":"../files/thumb/8.jpg"},{"l":"../files/mobile/9.jpg","n":"../files/mobile/9.jpg","t":"../files/thumb/9.jpg"},{"l":"../files/mobile/10.jpg","n":"../files/mobile/10.jpg","t":"../files/thumb/10.jpg"},{"l":"../files/mobile/11.jpg","n":"../files/mobile/11.jpg","t":"../files/thumb/11.jpg"},{"l":"../files/mobile/12.jpg","n":"../files/mobile/12.jpg","t":"../files/thumb/12.jpg"}];
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnGoToHome" : "Return Home","btnDownload" : "Download","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnPrint" : "Print","btnThumb" : "Thumbnails","btnBookMark" : "Table of content","frmBookMark" : "Bookmark","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnSocialShare" : "Social Share","btnHelp" : "Help","btnAbout" : "About","btnSearch" : "Search","btnFullscreen" : "Fullscreen","btnExitFullscreen" : "Exit Fullscreen","btnMore" : "More","frmPrintCaption" : "Print","frmPrintall" : "Print All Pages","frmPrintcurrent" : "Print Current Page","frmPrintRange" : "Print Range","frmPrintexample" : "Example: 2,3,5-10","frmPrintbtn" : "Print","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just click the appropriate button below","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","frmaboutcaption" : "Contact","frmaboutcontactinformation" : "Contact Information","frmaboutADDRESS" : "Address","frmaboutEMAIL" : "Email","frmaboutWEBSITE" : "Website","frmaboutMOBILE" : "Mobile","frmaboutAUTHOR" : "Author","frmaboutDESCRIPTION" : "Description","frmSearch" : "Search","frmToc" : "Table Of Contents","btnTableOfContent" : "Table Of Contents","btnNote" : "Annotation","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "Video Gallery","btnSlideShow" : "Slideshow","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "Add To Page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "Remove All","tltCursor" : "Cursor","tltAddHighlight" : "Add highlight","tltAddTexts" : "Add texts","tltAddShapes" : "Add shapes","tltAddNotes" : "Add notes","tltAddImageFile" : "Add image file","tltAddSignature" : "Add signature","tltAddLine" : "Add line","tltAddArrow" : "Add arrow","tltAddRect" : "Add rect","tltAddEllipse" : "Add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","lblPages" : "Pages:","infCopyToClipboard" : "Your browser dose not support clipboard, please do it yourself.","lblDescription" : "Title","frmLinkLabel" : "Link","infNotSupportHtml5" : "Your browser does not support HTML5.","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click to view the table of content, bookmarks and share your books via social networks.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Open the thumbnails to overview all book pages.","frmQrcodeCaption" : "Scan the bottom two-dimensional code to view with mobile phone.","btnClearSearch" : "Clear","frmSearchPrompt" : "Clear","btnHome" : "Home","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnShareEmail" : "Share","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","lblPagesFound" : "Pages:","lblPageIndex" : "Page","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove Bookmark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "	Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","frmPanelTitle" : "Share it","frmShareQRcode" : "QRCode","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Backward","btnPageForward" : "Forward","SelectTextCopy" : "Copy Selected Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock","btnCrop" : "Crop","btnDragButton" : "Drag","btnFlipBook" : "Flip Book","btnSlideMode" : "Slide Mode","btnSinglePageMode" : "Single Page Mode","btnVertical" : "Vertical Mode","btnHotizontal" : "Horizontal Mode","btnClose" : "Close","btnBookStatus" : "Book View","checkBoxInsert" : "Insert Current Page","btnQRCode" : "Click to scan QR code","btnRotateLeft" : "Rotate Left","btnRotateRight" : "Rotate Right","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Preview","TTActionQuiz_PlayAgain" : "Do you wanna play it again","TTActionQuiz_Ration" : "Your ratio is","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnPhoneNumber" : "Telephone","btnWeCharShare" : "WeChat Share","btnMagnifierIn" : "Magnifying Glass","btnMagnifierOut" : "Magnifier Reduction","frmShareSmallProgram" : "smallProgram","btnMagnifier" : "Magnifier","frmPrintPrintLimitFailed" : "Sorry, you can't print the pages."}];var pageEditor =[[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.810221",y:"0.454069",width:"0.086221",height:"0.018216"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://etzchayim.ca"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.810221",y:"0.485003",width:"0.144175",height:"0.018216"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:Lesliemalkin@LofC.ca"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.649799",y:"0.177379",width:"0.291938",height:"0.040933"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://etzchayim.plannedlegacy.com/#/"}}],[],[],[],[],[],[],[]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{}];;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}