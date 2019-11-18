<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:responsive='true' b:version='2' class='v2' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <script async='async' data-ad-client='ca-pub-2204244106762414' src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'/>
<!-- Title -->
<b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.homepageUrl == data:blog.url'>
	<title><data:blog.pageTitle/></title>
<b:elseif cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'/>
	<title><data:blog.pageName/> - <data:blog.title/></title>
<b:elseif cond='data:blog.pageType in {&quot;index&quot;} and data:blog.pageName == &quot;&quot;'/>
	<title>
    <b:switch var='data:blog.locale'><b:case value='id'/>Semua Postingan - <data:blog.title/><b:default/>All Posts - <data:blog.title/>
    </b:switch>
    </title>
<b:elseif cond='data:blog.pageType in {&quot;error_page&quot;}'/>
	<title> 
    <b:switch var='data:blog.locale'><b:case value='id'/>
    Halaman tidak ditemukan - <data:blog.title/><b:default/>Page Not Found - <data:blog.title/>
    </b:switch>
    </title>
<b:else/>
	<title><data:blog.pageName/></title>
</b:if>

<!-- Meta keywords otomatis homepage, static page, dan post -->
<b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.homepageUrl == data:blog.url'>
	<meta expr:content='data:blog.title' name='keywords'/> 
<b:elseif cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'/>
	<meta expr:content='data:blog.pageName' name='keywords'/>
</b:if>

<!-- Facebook Open Graph Tag -->
<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <meta expr:content='data:blog.pageName' property='og:title'/>
  <meta content='article' property='og:type'/>
<b:else/>
  <meta expr:content='data:blog.pageTitle' property='og:title'/>
  <meta content='website' property='og:type'/>
</b:if>
<b:if cond='data:blog.metaDescription'>
  <meta expr:content='data:blog.metaDescription' property='og:description'/>
</b:if>
<meta expr:content='data:blog.title' property='og:site_name'/>

<b:skin><![CDATA[/*
-----------------------------------------------
Blogger Template Style
Name:     VioMagz
Version:  3.1.0 (Februari 2018)
Designer: Mas Sugeng
----------------------------------------------- */ 

/* Variable definitions start
   ==========================
   <Variable name="keycolor" description="Main Color" type="color" default="#49ACE1" value="#49ACE1"/>

   <Group description="Teks Halaman" selector="body">
     <Variable name="page.text.font" description="Font" type="font"
         default="normal normal 16px Raleway, Arial, sans-serif" value="normal normal 16px Raleway, Arial, sans-serif"/>
     <Variable name="body.text.color" description="Main Text Color" type="color" default="#393939" value="#393939"/>
   </Group>

   <Group description="Warna Background" selector=".body-fauxcolumns-outer">
     <Variable name="body.background.color" description="Body" type="color" default="#ffffff" value="#ffffff"/>
	 <Variable name="posts.background.color" description="Warna Wrapper" type="color" default="#ffffff" value="#ffffff"/>
     <Variable name="header.background.kiri" description="Warna Header Kiri" type="color" default="#5b86e5" value="#5b86e5"/>
	 <Variable name="header.background.kanan" description="Warna Header Kanan" type="color" default="#36d1dc" value="#36d1dc"/>
	 <Variable name="footer.background.color" description="Footer" type="color" default="#222222" value="#222222"/>
   </Group>
   
   <Variable name="body.background" description="Body Background" type="background"
       color="$(body.background.color)" default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>
   <Variable name="body.background.override" description="Body Background Override" type="string" default="" value=""/>
   
   <Group description="Warna Link" selector=".main-outer">
     <Variable name="body.link.color" description="Link Color" type="color" default="#49ACE1" value="#49ACE1"/>
     <Variable name="body.link.visited.color" description="Visited Color" type="color" default="#49ACE1" value="#49ACE1"/>
     <Variable name="body.link.hover.color" description="Hover Color" type="color" default="#555555" value="#555555"/>
   </Group>

   <Group description="Judul Blog" selector=".header">
     <Variable name="header.font" description="Font" type="font"
         default="bold 25px Poppins, Arial, sans-serif" value="bold 25px Poppins, Arial, sans-serif"/>
     <Variable name="header.title.color" description="Title Color" type="color" default="#ffffff"  value="#ffffff"/>
   </Group> 
   
   <Group description="Menu Navigasi" selector="#cssmenu">
     <Variable name="navmenu.font" description="Font" type="font"
         default="bold 12px Raleway, Arial, sans-serif" value="bold 12px Raleway, Arial, sans-serif"/>
     <Variable name="navmenu.font.color" description="Color" type="color" default="#ffffff"  value="#ffffff"/>
     <Variable name="navmenu.font.hover.color" description="Hover Color" type="color" default="#ffffff"  value="#ffffff"/>
   </Group>
   
   <Group description="Submenu Navigasi" selector="#cssmenu">
     <Variable name="navsubmenu.font" description="Font" type="font"
         default="400 12px Raleway, Arial, sans-serif" value="400 12px Raleway, Arial, sans-serif"/>
     <Variable name="navsubmenu.font.color" description="Color" type="color" default="#777777"  value="#777777"/>
     <Variable name="navsubmenu.font.background" description="Background Color" type="color" default="#f8f8f8"  value="#f8f8f8"/>
     <Variable name="navsubmenu.hover" description="Hover Color" type="color" default="#eaeaea"  value="#eaeaea"/>
   </Group>

   <Group description="Icon Pencarian" selector=".search-icon">
     <Variable name="search.icon.color" description="Color" type="color" default="#ffffff"  value="#ffffff"/>
   </Group>
   
   <Group description="Judul Postingan" selector="h2.post-title, .FeaturedPost .post-summary h3">
     <Variable name="post.title.font" description="Font" type="font"
         default="bold 20px Poppins, Arial, sans-serif" value="bold 20px Poppins, Arial, sans-serif"/>
	 <Variable name="posts.title.color" description="Link Color" type="color" default="#555555" value="#555555"/>
	 <Variable name="post.title.hover.color" description="Link Hover Color" type="color" default="#49ACE1" value="#49ACE1"/>
   </Group>

   <Group description="Judul Widget" selector=".sidebar h2, .sidebar-sticky h2, .latest-post-title h2, .above-post-widget h2">
     <Variable name="widget.title.font" description="Title Font" type="font"
        default="normal 15px Raleway, Arial, sans-serif" value="normal 15px Raleway, Arial, sans-serif"/>
	 <Variable name="widget.title.color" description="Color" type="color" default="#555555" value="#555555"/>
	 <Variable name="widget.border.color" description="Border Color" type="color" default="#eaeaea" value="#eaeaea"/>
   </Group>

   <Group description="Label di atas Postingan" selector=".label-info-th">
     <Variable name="label.bg.color" description="Background" type="color" default="#ffffff" value="#ffffff"/>
	 <Variable name="label.color" description="Color" type="color" default="#777777" value="#777777"/>
	 <Variable name="label.border.color" description="Border Color" type="color" default="#efefef" value="#efefef"/>
   </Group>

   <Group description="Teks Postingan" selector=".post-body, .post-snippet">
     <Variable name="post.page.text.font" description="Font" type="font"
         default="normal normal 16px Raleway, Arial, sans-serif" value="normal normal 16px Raleway, Arial, sans-serif"/>
	 <Variable name="post.body.color" description="Color" type="color" default="#393939" value="#393939"/>
   </Group>
   
   <Group description="Post Footer" selector=".post-info">
     <Variable name="post.footer.font" description="Font" type="font"
         default="normal normal 13px Raleway, Arial, sans-serif" value="normal normal 13px Raleway, Arial, sans-serif"/>
     <Variable name="post.footer.color" description="Color" type="color" default="#777777" value="#777777"/>
   </Group>
   
   <Group description="Icon Media Sosial di Footer" selector="#footer-widget-container">
     <Variable name="footerwidget.bg.color" description="Background Color" type="color" default="#f8f8f8"  value="#f8f8f8"/>
	 <Variable name="footerwidget.color" description="Color" type="color" default="#999999"  value="#999999"/>
   </Group>

   <Group description="Menu Navigasi di Footer" selector="#footer-navmenu">
     <Variable name="navmenufooter.font" description="Font" type="font"
         default="bold 14px Raleway, Arial, sans-serif" value="bold 14px Raleway, Arial, sans-serif"/>
	 <Variable name="navmenufooter.bg" description="Background Color" type="color" default="#292929"  value="#292929"/>
     <Variable name="navmenufooter.color" description="Color" type="color" default="#ffffff"  value="#ffffff"/>
     <Variable name="navmenufooter.hover.color" description="Hover Color" type="color" default="#ffffff"  value="#ffffff"/>
   </Group>
   
   <Group description="Warna Footer" selector="#footer-wrapper">
     <Variable name="footer.color" description="Color" type="color" default="#dddddd" value="#dddddd"/>
	 <Variable name="footer.body.link.color" description="Link Color" type="color" default="#dddddd" value="#dddddd"/>
	 <Variable name="footer.hover.color" description="Hover Color" type="color" default="#ffffff" value="#ffffff"/>
   </Group>

   <Group description="Back to Top" selector="#back-to-top"> 
     <Variable name="backtp.background.color" description="Background" type="color" default="#49ACE1" value="#49ACE1"/>
	 <Variable name="backtp.color" description="Color" type="color" default="#ffffff" value="#ffffff"/>
   </Group>
   
   <Group description="Widget Featured Post" selector=".FeaturedPost .post-summary"> 
     <Variable name="jwfp.background.color" description="Background" type="color" default="#ffffff" value="#ffffff"/>
	 <Variable name="jwfp.color" description="Color" type="color" default="#555555" value="#555555"/>
   </Group> 

   Variable definitions end
   ========================*/
   
	<Group description="JANGAN DIEDIT">
		<Variable name="body.text.font" description="Font" type="font" default="normal normal 14px Raleway, Arial, sans-serif" value="normal normal 14px Raleway, Arial, sans-serif"/>
		<Variable name="tabs.font" description="0" type="font" default="normal normal 14px Raleway, Arial, sans-serif" value="normal normal 14px Raleway, Arial, sans-serif"/>
		<Variable name="posts.icons.color" description="1" type="color" default="#707070" value="#707070"/>
		<Variable name="labels.background.color" description="2" type="color" default="#ffffff" value="#ffffff"/>
		<Variable name="blog.title.font" description="3" type="font" default="normal normal 14px Raleway, Arial, sans-serif" value="normal normal 14px Raleway, Arial, sans-serif"/>
		<Variable name="blog.title.color" description="4" type="color" default="#fff" value="#ffffff"/>
		<Variable name="header.icons.color" description="5" type="color" default="#fff" value="#ffffff"/>
		<Variable name="tabs.color" description="14" type="color" default="#ccc" value="#cccccc"/>
		<Variable name="tabs.selected.color" description="6" type="color" default="#fff" value="#ffffff"/>
		<Variable name="tabs.overflow.background.color" description="16" type="color" default="$(posts.background.color)" value="#ffffff"/>
		<Variable name="tabs.overflow.color" description="7" type="color" default="#393939" value="#393939"/>
		<Variable name="tabs.overflow.selected.color" description="18" type="color" default="#393939" value="#393939"/>
		<Variable name="posts.title.font" description="8" type="font" default="normal normal 20px Raleway, Arial, sans-serif" value="normal normal 20px Raleway, Arial, sans-serif"/>
		<Variable name="posts.text.font" description="9" type="font" default="normal normal 14px Raleway, Arial, sans-serif" value="normal normal 14px Raleway, Arial, sans-serif"/>
		<Variable name="posts.text.color" description="10" type="color" default="#393939" value="#393939"/>
	</Group>
	
   
/*!************************************************
 * Blogger Template Style
 * Name: vio
 **************************************************/

/**
* Eric Meyer&#39;s Reset CSS v2.0 http://meyerweb.com/eric/tools/css/reset/ 
* http://cssreset.com
*/
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;/*font-size:100%;*/font:inherit;vertical-align:baseline;}
/* HTML5 display-role reset for older browsers */
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;display:block;}*{margin:0;padding:0;}html{display:block;}blockquote,q{quotes:none;}blockquote::before,blockquote::after,q::before,q::after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}

/* Blogger CSS Reset */
.section,.widget{margin:0 0 0 0;padding:0 0 0 0;}
.navbar,.blog-feeds,.feed-links,#backlinks-container,a.home-link,.blog-mobile-link{display:none;}
.quickedit,.edit-post,.item-control{display:none;}
.post-body .separator > a, .post-body .separator > span {margin-left: 0 !important;}

/* FRAMEWORK */
strong,b{font-weight:bold;}
cite,em,i{font-style:italic;}
a:link{color:$(body.link.color);text-decoration:none;outline:none;}
a:visited{color:$(body.link.color);text-decoration:none;}
a:hover{color:$(body.link.hover.color);text-decoration:none;}
a img{border:none;border-width:0;outline:none;}
abbr,acronym{border-bottom:1px dotted;cursor:help;}
sup,sub{vertical-align:baseline;position:relative;top:-.4em;font-size:86%;}
sub{top:.4em;}small{font-size:86%;}
kbd{font-size:80%;border:1px solid #777;padding:2px 5px;border-bottom-width:2px;border-radius:3px;}
mark{background-color:#ffce00;color:black;}
p,blockquote,pre,table,figure,hr,form,ol,ul,dl{margin:0 0 1.5em;}
hr{height:1px;border:none;background-color:#666;}

h1{font-size:1.8rem}
h2{font-size:1.6rem}
h3{font-size:1.4rem}
h4{font-size:1.2rem}
h5{font-size:1rem}
h6{font-size:0.9rem}

/* heading */
h1,h2,h3,h4,h5,h6 {
	margin: 0 0 0.6em;
	font-weight: bold;
}

/* list */
ol,ul,dl{margin: .5em 0em .5em 3em}
li{margin: .5em 0}
dt{font-weight: bold}
dd{margin: 0 0 .5em 2em}

/* form */
input,button,select,textarea{font:inherit;font-size:100%;line-height:normal;vertical-align:baseline;}
textarea{display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}

/* code & blockquote */
pre,code{font-family:"Courier New",Courier,Monospace;color:inherit;}
pre{white-space:pre;word-wrap:normal;overflow:auto;}
blockquote{background:#f6f6f6;margin-left:2em;margin-right:2em;padding:1em 1em;font-style:italic;font-size:105%;}
blockquote::before {
	content: "\f10d"; 
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	text-decoration: inherit;
	padding-right:4px;
	color:#666;
}

/* table */
table[border="1"] td, table[border="1"] th {
	vertical-align: top;
	text-align: left;
	font-size: 13px;
	padding: 3px 5px;
	border: 1px solid #f6f6f6;
}
table[border="1"] th {
	background: #eee;
}
table, img {
	max-width: 100%;
	height: auto;
}
iframe {
	max-width: 100%;
}
td.tr-caption {
	color: #777;
}
.clear {
	clear: both;
}
.clear::after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}


/* TRANSISI */
a:link, .label-count, #cssmenu ul ul li, #cssmenu > ul > li.has-sub > a::before, #cssmenu ul ul li.has-sub > a::before, .berlangganan-box input.submit-email[type="submit"], .berlangganan-box input.email-address[type="text"] {
	transition: all 0.2s;
	-moz-transition: all 0.2s;
	-webkit-transition: all 0.2s;
}

.related-post-style-3 .related-post-item {
	transition: opacity 0.2s linear;
}
.label-info-th a, .info-1, .info-2, h2.post-title, .post-snippet, .sidebar-sticky {
	transition: all .2s linear; 
	-o-transition: all .2s linear; 
	-moz-transition: all .2s linear; 
	-webkit-transition: all .2s linear; 
}
.img-thumbnail, .img-thumbnail img {
	transition: width .2s linear; 
	-o-transition: width .2s linear; 
	-moz-transition: width .2s linear; 
	-webkit-transition: width .2s linear; 
}

#searchfs input[type="search"], h1,h2,h3,h4,h5,h6 {
	transition: font-size .2s linear; 
	-o-transition: font-size .2s linear; 
	-moz-transition: font-size .2s linear; 
	-webkit-transition: font-size .2s linear; 
}

.img-thumbnail, .img-thumbnail img, .FeaturedPost .post-summary, .FeaturedPost .image, .PopularPosts .item-thumbnail, .PopularPosts .widget-content ul li img, .Profile .widget-content, .PopularPosts .widget-content ul, .list-label-widget-content ul, .label-info-th a, .displaypageNum a, .showpage a, .pagecurrent, #blog-pager-newer-link a, #blog-pager-older-link a, .Profile .profile-link, .label-size, .berlangganan-box, #baca-juga, #baca-juga h2, .related-post-item-thumbnail, #baca-juga ul, .PopularPosts ul li .item-thumbnail-only::before, .PopularPosts ul li .item-content::before, .PopularPosts ul li > a::before {
	border-radius: 3px;
}
#share a:first-child {
	border-radius: 3px 0 0 3px;
}
#share a:last-child {
	border-radius: 0 3px 3px 0;
}

body {
	background: $(body.background);
	margin: 0 0 0 0;
	padding: 0 0 0 0;
	color: $(body.text.color);
	font: $(page.text.font);
	text-align: left;
}

/* WRAPPER */
#wrapper {
	background: $(posts.background.color);
	max-width: 1000px;
	margin: 0 auto;
	padding: 70px 30px 30px;
	overflow: hidden;
}

/* HEADER */
#header-container {
	background: $(header.background.kiri);
	background: linear-gradient(to right, $(header.background.kiri), $(header.background.kanan));
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	z-index: 999;
	height: 48px;
}
#header-wrapper {
	max-width: 1000px;
	margin: 0 auto;
	position: relative;
}
.header {
	max-width: 400px;
	float: left;
	margin-right: 28px;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.header h1.title, .header p.title {
	font: $(header.font);
	color: $(header.title.color);
	margin: 0;
	text-transform: uppercase;
	line-height: 50px;
}
.header .description {
	color: $(header.title.color);
    margin: -10px 0 4px 0;
    padding: 0;
    font-size: 0.7em;
	display: none;
}
.header a, .header a:hover  {
	color: $(header.title.color);
}
.header img {
	display: block;
	width: auto;
    margin: 10px 0;
    max-height: 28px;
}


/* POST WRAPPER */
.post-container {
	padding-right: 25px;
}
#post-wrapper {
	background:transparent;
	float:left;
	width:70%;
	max-width:700px;
	margin:0 0 10px;
}
.breadcrumbs {
	font-size: 0.9em !important;
}
.breadcrumbs a {
	color: $(widget.title.color);
}
.breadcrumbs a:hover {
	color: $(body.link.color);
}
.post {
	margin-bottom: 20px;
}
.post-body {
	font:$(post.page.text.font);
	color:$(post.body.color);
	line-height: 1.65em;
	text-align: left;
	word-wrap: break-word;
}
h2.post-title, h1.post-title {
	font: $(post.title.font);
}
h1.post-title {
	font-size: 30px;
	margin-bottom: 15px;
}
h2.post-title {
	margin-bottom: 10px;
}
h2.post-title a, h1.post-title a, h2.post-title, h1.post-title {
	color: $(posts.title.color);
	line-height: 1.425em;
}
h2.post-title a:hover, h1.post-title a:hover {
	color: $(post.title.hover.color);
}
.img-thumbnail {
	position: relative;
	float: left;
	width: 255px;
	height: 170px;
	margin-top: 3px;
	overflow: hidden;
}
.img-thumbnail img {
	width: 100%;
	display: block;
}
.label-info-th {
    display: block;
    z-index: 2;
    position: relative;
    margin-bottom: 10px;
	height: 32px;
	overflow: hidden;
}
.label-line, .label-line-c {
	position:relative;
}
.label-line-c {
	text-align: center;
	margin-bottom: 6px;
}
.label-line::before, .label-line-c::before {
	z-index: 1;
    content: "";
    width: 100%;
    height: 2px;
    background: $(label.border.color);
    position: absolute;
    top: 50%;
    left: 0;
	margin-top: -2px;
}
.label-info-th a {
    color: $(label.color);
    background: $(label.bg.color);
    display: inline-block;
    padding: 6px 12px;
	margin: 1px 0;
    font-size: 11px;
	font-weight: 500;
    text-transform: uppercase;
    border: 2px solid $(label.border.color);
}

.label-info-th a:hover {
	color: $(body.link.color);
}
.post-info {
	color: $(post.footer.color);
	font: $(post.footer.font);
	line-height: 1.6em;
}
.post-snippet b, .post-snippet strong, .post-snippet i, .post-snippet em {
	font-weight: normal;
	font-style: normal;
}
.info-1 {
	margin-top: 10px;
}
.info-2 {
	margin-top: 10px;
}
.info-3 {
	margin-bottom: 1.6em;
}
.post-info a {
	display: inline-block;
	color: inherit;
}
.post-info a:hover {
	color: $(body.link.color);
}
.author-info::after, .time-info::after, .label-info::after {
	content: "-";
	padding: 0 2px;
}
.edit-post a {
	color: $(body.link.color);
}
.edit-post a:hover {
	color: $(body.link.hover.color);
}
.edit-post::before {
	content: "-";
	padding: 0 2px;
}

/* AUTHOR POST PROFILE */
.author-profile {
    overflow: hidden;
    margin: 30px 0;
	line-height: 1.5;
}
.author-profile img {
    border: none;
    float: left;
    margin-right: 15px;
    border-radius: 46px;
}
.author-profile > span {
    font-size: 14px;
    opacity: 0.8;
}
.author-profile a.g-profile {
	font-weight: bold;
    color: $(body.link.hover.color);
    font-size: 18px;
    margin-bottom: 5px;
    display: inline-block;
}
.author-profile a.g-profile:hover {
	color: $(body.link.color);
}
.author-profile a.g-profile::after {
	content: "\f058";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    padding-right: 4px;
    color: $(body.link.color);
}


/* SIDEBAR WIDGET */
#sidebar-wrapper {
	background:transparent;
	float:right;
	width:30%;
	max-width:300px;
	margin:0 auto;
}
.sidebar h2, .sidebar-sticky h2, .latest-post-title h2, .above-post-widget h2, .comments h3, .breadcrumbs {
	font: $(widget.title.font);
    margin-bottom: 20px;
	padding: 0px 0px 5px;
    color: $(widget.title.color);
	display: inline-block;
	border-bottom: 2px solid $(widget.border.color);
}
.section:last-child .widget:last-child, .sidebar .widget, .sidebar-sticky .widget, .above-post-widget .widget, .bellow-header-widget .widget, #blog-pager {
	margin:0 0 30px;
	clear:both;
}
.sidebar ul, .sidebar ol, .sidebar-sticky ul, .sidebar-sticky ol {
	list-style-type:none;
	margin: 0;
	padding: 0;
}
.sidebar li, .sidebar-sticky li {
	margin:5px 0;
	padding: 0;
}
.sidebar-sticky {
	z-index: 9;
}
.sidebar .widget-content::after, .sidebar-sticky .widget-content::after, .sidebar .widget-content::before, .sidebar-sticky .widget-content::before {
    content: "";
	display: table;
	table-layout: fixed;
	clear: both;
}
.bellow-header-widget {
	text-align: center;
}
.bellow-header-widget h2 {
	display: none;
}
.bellow-header-widget .widget {
	overflow: hidden;
}
.bellow-header-widget img, .bellow-header-widget iframe{
	max-width: 100%;
	border: none;
	overflow: hidden;
}

/* CUSTOM WIDGET */

.widget-item-control {
	float: right;
	height: 20px;
	margin-top: -20px;
	position: relative;
	z-index: 10
}

.widget-item-control a {
	opacity: .5
}

.widget-item-control a:hover {
	opacity: 1
}

.widget .widget-item-control a img {
	border: none;
	padding: none;
	background: none;
	-moz-box-shadow: none;
	-webkit-box-shadow: none;
	-ie-box-shadow: none;
	box-shadow: none
}

.widget ul {
	line-height:1.4em;
}


/* GSC */
.gsc-search-box-tools .gsc-search-box .gsc-input {
	margin: 3px 0 !important;
}
.gsib_a {
	padding: 0px 6px 0 !important;
}
.cse .gsc-search-button-v2, .gsc-search-button-v2 {
	padding: 9px 27px !important;
}

/* Label */
.label-size-1,.label-size-2,.label-size-3,.label-size-4,.label-size-5 {
	font-size:100%;
	opacity:10
}
.cloud-label-widget-content {
	text-align:left
}
.label-size {
	transition: all 0.25s;
    -moz-transition: all 0.25s;
    -webkit-transition: all 0.25s;
	line-height:1.2;
    display: block;
    float: left;
    margin: 0 3px 3px 0;
    color: $(body.link.color);
    font-size: 13px;
    text-transform: uppercase;
    border: 1px solid $(body.link.color);
}
.label-size a,.label-size span{
	display: inline-block;
	color: $(body.link.color);
	padding: 6px 8px;
}
.label-size:hover {
	border: 1px solid $(body.link.hover.color);
}
.label-size:hover a, .label-size:hover .label-count {
	color: $(body.link.hover.color);
}
.label-count {
	margin-left: -12px;
    margin-right: 0px;
}

.list-label-widget-content ul {
    -moz-column-count: 2;
    -moz-column-gap: 8px;
    -webkit-column-count: 2;
    -webkit-column-gap: 8px;
    column-count: 2;
    column-gap: 8px;
}

.list-label-widget-content ul li {
	border-bottom: 2px dotted $(label.border.color);
	padding-bottom: 5px;
	margin: 0 0;
	padding-top: 5px;
}

.bellow-header-widget .cloud-label-widget-content {
}

.bellow-header-widget .cloud-label-widget-content .label-size {
	font-weight: bold;
}
.bellow-header-widget .cloud-label-widget-content .label-size a, .bellow-header-widget .cloud-label-widget-content .label-size span {
	padding:  15px 20px;
}


/* Feed */
.Feed ul li {
    display: block;
    margin: 0 0 10px;
}
.Feed ul li:last-child {
	margin-bottom: 10px;
}
.Feed .item-date, .Feed .item-author {
	color: #999;
}
.Feed .item-title {
	font-weight: bold;
}

/* Popular Posts */
.PopularPosts .widget-content ul, .PopularPosts .widget-content ul li {
	margin: 0 0;
	padding: 0 0;
	list-style:none;
	border:none;
	outline:none;
}
.PopularPosts .widget-content ul {
	margin: 0;
	list-style:none;
	counter-reset:num;
}
.PopularPosts .widget-content ul li img {
	display: block;
	width: 70px;
	height: 70px;
	float: left;
}
.PopularPosts .widget-content ul li {
	margin: 0 0 15px;
	counter-increment: num;
	position: relative;
}
.PopularPosts ul li:last-child {
	margin-bottom: 0px;
}
.PopularPosts ul li .item-thumbnail-only::before, .PopularPosts ul li .item-content::before, .PopularPosts ul li > a::before {
	color: $(body.link.color) !important;
}
.PopularPosts ul li .item-thumbnail-only::after, .PopularPosts ul li .item-content::after, .PopularPosts ul li > a::after {
	background: $(label.border.color);
}
.PopularPosts .item-title {
    line-height: 1.6;
	margin-right: 8px;
	min-height: 40px;
	font-weight: bold;
}
.PopularPosts .item-thumbnail {
	float: left;
	margin-right: 8px;
}
.PopularPosts .item-snippet {
    line-height: 1.6em;
	font-size: 14px;
	margin-top: 8px;
	opacity: 0.925;
}
.PopularPosts ul li > a {
	font-weight: bold;
}

/* Featured Post */
.FeaturedPost .post-summary {
	background: #f7f7f7;
	position: relative;
	padding: 0;
    min-height: 190px;
	max-height: 450px;
	overflow: hidden;
}
.FeaturedPost .post-summary h3 {
	font: $(post.title.font);
	position: absolute;
	bottom: 58px;
	z-index: 1;
	font-size: 28px;
	margin: 0 15px;
}
.FeaturedPost .post-summary h3::after {
	content:"";
	position:absolute;
	top:-0.25em;
	right:100%;
	bottom:-0.25em;
	width:0.25em;
}
.FeaturedPost .post-summary h3 a {
	color: $(jwfp.color);
    background: $(jwfp.background.color);
    padding: 3px 8px;
	-webkit-box-decoration-break: clone;
    -o-box-decoration-break: clone;
    box-decoration-break: clone;
}
.FeaturedPost .post-summary h3 a:hover {
	color: $(post.title.hover.color);
}
.FeaturedPost .post-summary p {
	position: absolute;
    background: $(jwfp.background.color);
    color: $(jwfp.color);
    padding: 3px 8px;
    bottom: 15px;
    margin: 0 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.FeaturedPost .image {
	display: block;
}

/* Profile */
.Profile .widget-content {
	text-align: center;
    padding: 30px;
	margin: 0 auto;
	max-width: 300px;
    border: 2px solid $(label.border.color);
}
.Profile .profile-img {
	border-radius: 50%;
    float: none;
}
.Profile .profile-name-link {
	color: $(body.text.color);
    font-size: .9em;
    opacity: 1;
    overflow: hidden;
}
.Profile .profile-name-link:hover {
	color: $(body.link.color);
}
.Profile .profile-link {
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 22px;
    display: inline-block;
    line-height: normal;
}
.profile-textblock {
    margin: .8em 0;
    font-size: 14px;
	line-height: 1.5em;
}
.profile-img {
	float: left;
	display:inline;
	opacity:10;
	margin:0 6px 3px 0;
}
.profile-data {
    margin: 0;
}
.profile-datablock {
    margin: .5em 0;
}
.profile-name-link {
    background: no-repeat left top;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100%;
    min-height: 20px;
    padding-left: 20px;
}

/* Archive */
#ArchiveList .toggle {
    cursor: pointer;
    font-family: Arial, sans-serif;
}
#ArchiveList .toggle-open {
    _font-size: 1.7em;
    line-height: .6em;
}
#ArchiveList {
    text-align: left;
}
#ArchiveList a.post-count-link, #ArchiveList a.post-count-link:link, #ArchiveList a.post-count-link:visited {
    text-decoration: none;
}
#ArchiveList a.toggle, #ArchiveList a.toggle:link, #ArchiveList a.toggle:visited, #ArchiveList a.toggle:hover {
    color: #a0a0a0;
    text-decoration: none;
}
.BlogArchive #ArchiveList ul li {
    background: none;
    list-style: none;
    list-style-image: none;
    list-style-position: outside;
    border-width: 0;
    padding-left: 15px;
    text-indent: -15px;
    margin: .25em 0;
    background-image: none;
}
.BlogArchive #ArchiveList ul ul li {
    padding-left: 1.2em;
}
.BlogArchive #ArchiveList ul {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-image: none;
    border-width: 0;
}
.BlogArchive #ArchiveList ul.posts li {
    padding-left: 1.3em;
}
#ArchiveList .collapsed ul {
    display: none;
}

/* Artikel Terbaru */
.artikel-terbaru ul li {
	border-bottom: 2px dotted $(label.border.color);
    padding-bottom: 8px;
	margin-bottom: 8px;
	font-weight: bold;
}
.LinkList ul li, .PageList ul li {
    border-bottom: 2px dotted $(label.border.color);
    padding: 6px 0px;
}
.artikel-terbaru ul li::before, .list-label-widget-content ul li::before, .LinkList ul li::before, .PageList ul li::before {
    content: "\f14b"; 
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
	margin-right: 6px;
	color: $(body.link.color);
}
.artikel-terbaru ul li::before {
    content: "\f14b";
}
.list-label-widget-content ul li::before {
    content: "\f07b"; 
}
.LinkList ul li::before {
	content: "\f14c"; 
}
.PageList ul li::before {
	content: "\f249"; 
}

/* SUBSCRIBER BOX */
.berlangganan-box {
	background: $(header.background.kiri);
	background: linear-gradient(to right, $(header.background.kiri), $(header.background.kanan));
	color: $(header.title.color);
    padding: 15px;
    margin: 20px 0;
    text-align: center;
}
.berlangganan-box p {
	margin:15px 0;
}
.berlangganan-box input.email-address[type="text"] {
	width: 60%;
    padding: 10px;
    text-align: center;
    border-radius: 2px;
	border: none;
    outline: none;
}
.berlangganan-box input.submit-email[type="submit"] {
	background: #fff;
    padding: 10px 15px;
    border-radius: 2px;
    color: $(body.text.color);
    border: none;
    outline: none;
}
.berlangganan-box input.submit-email[type="submit"]:hover {
	background: $(body.text.color);
	color: #fff;
	cursor: pointer;
}
.berlangganan-box input.email-address[type="text"]:focus {
	background: #fffcd2;
}

/* Back to top */
#back-to-top {
	background:$(backtp.background.color);
	color:$(backtp.color);
	padding:8px 10px;
	font-size:24px;
	border-radius: 22px;
}
.back-to-top {
	position: fixed !important;
    position: absolute;
    bottom: 25px;
    right: 20px;
    z-index: 998;
}

/* Share button */
.share-this-pleaseeeee {
	display: inline-block;
	margin: 0;
	color: $(label.color);;
	text-transform: uppercase;
	font-size: 16px;
	background: #fff;
	z-index: 1;
	position: relative;
	padding: 0 10px;
	font-weight: bold;
}
#share-container {
  	margin: 20px auto 30px;
	overflow: hidden;
}
#share {
	width: 100%;
  	text-align: center;
}
#share a {
    width: 25%;
    height: 40px;
    display: block;
    font-size: 24px;
    color: #fff;
    transition: opacity 0.15s linear;
    float: left;
}
#share a:hover {
	opacity: 0.8;
}
#share i {
  	position: relative;
  	top: 50%;
  	transform: translateY(-50%);
}
.facebook {
 	background: #3b5998;
}
.twitter {
  	background: #55acee;
}
.linkedin {
  	background: #0077b5;
}
.pinterest {
  	background: #cb2027;
}
.whatsapp {
  	background: #25d366;
}


/* Status Msg */

.status-msg-wrap {
    font-size: 110%;
    width: 90%;
    margin: 0 auto 15px;
    position: relative;
}
.status-msg-border {
    border: none;
    filter: alpha(opacity=40);
    -moz-opacity: .4;
    opacity: .4;
    width: 100%;
    position: relative;
}
.status-msg-bg {
    background-color: transparent;
    opacity: .8;
    filter: alpha(opacity=30);
    -moz-opacity: .8;
    width: 100%;
    position: relative;
    z-index: 1;
}
.status-msg-body {
    text-align: center;
    padding: .3em 0;
    width: 100%;
    position: absolute;
    z-index: 4;
}
.status-msg-hidden {
    visibility: hidden;
    padding: .3em 0;
}
.status-msg-wrap a {
    padding-left: .4em;
}

/* SLOT IKLAN */
.iklan-tengah1 .widget, .iklan-tengah2 .widget, .iklan-bawah .widget, .iklan-atas .widget, .iklan-tengah1 .widget-content, .iklan-tengah2 .widget-content, .iklan-bawah .widget-content, .iklan-atas .widget-content {
	margin:0 !important;
}
.iklan-tengah1 h2, .iklan-tengah2 h2, .iklan-bawah h2, .iklan-atas h2 {
	display: none;
}
#kode-iklan-atas ins, #kode-iklan-bawah ins, #kode-iklan-tengah1 ins, #kode-iklan-tengah2 ins {
	margin: 20px 0;
}
.post-body #kode-iklan-tengah1, .post-body #kode-iklan-tengah2, .post-body #kode-iklan-bawah, .post-body #kode-iklan-atas {
	text-align: center;
	display: block;
}
.post-body #baca-juga {
	display: block;
}

/* PAGE NAVIGATION */

#blog-pager {
	clear:both !important;
	padding:2px 0;
	text-align: center;
}
#blog-pager-newer-link a {
	float:left;
	display:block;
}
#blog-pager-older-link a {
	float:right;
	display:block;
}
.displaypageNum a,.showpage a,.pagecurrent, #blog-pager-newer-link a, #blog-pager-older-link a {
	font-size: 14px;
	padding: 8px 12px;
    margin: 2px 3px 2px 0px;
    display: inline-block;
    color: $(body.link.color);
    border: 1px solid $(body.link.color);
}
#blog-pager-older-link a:hover, #blog-pager-newer-link a:hover, a.home-link:hover, .displaypageNum a:hover,.showpage a:hover, .pagecurrent {
	color: $(body.link.hover.color);
	border: 1px solid $(body.link.hover.color);
}
.showpageOf { 
	display: none !important;
}
#blog-pager .pages {
	border: none;
}

/* FOOTER NAV MENU */
#footer-navmenu {
	background: $(navmenufooter.bg);
	padding: 25px 0px;
	font: $(navmenufooter.font);
	color: $(navmenufooter.color);
}
#footer-navmenu-container {
	max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}
#footer-navmenu ul {
    list-style: none;
    margin: 0;
}
#footer-navmenu ul li {
    display: inline-block;
    margin: 6px 0;
}
#footer-navmenu ul li::after {
	content:"/";
}
#footer-navmenu ul li:last-child::after {
	content:"";
}
#footer-navmenu ul li a {
	color: $(navmenufooter.color);
	margin: 0 15px;
}
#footer-navmenu ul li a:hover {
	color: $(navmenufooter.hover.color);
	border-bottom: 2px solid $(navmenufooter.hover.color);
}

/* FOOTER WIDGET */
#footer-widget-container {
	background: $(footerwidget.bg.color);
	font-size: 18px;
}
.footer-widget {
	max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}
.footer-widget h2 {
	display: none;
}
.footer-widget .widget {
	margin-bottom: 0px !important;
	padding: 20px 0px;
}

/* SOCIAL ICON */
ul.nav-social {
    list-style: none;
    margin: 0;
	padding: 0;
}
ul.nav-social li {
    display: inline-block;
    padding: 0px 15px;
	margin: 0;
}
ul.nav-social li a {
	color: $(footerwidget.color);
}

ul.nav-social li a:hover {
	color:#555;
}
ul.nav-social li a.fcb:hover {
	color:#3B5A9B;
}
ul.nav-social li a.gpl:hover {
	color:#DD4B39;
}
ul.nav-social li a.twt:hover {
	color:#1BB2E9;
}
ul.nav-social li a.ytb:hover {
	color:#ED3F41;
}
ul.nav-social li a.lkdn:hover {
	color:#007fb2;
}
ul.nav-social li a.igicon:hover {
	color:#527fa4;
}

/* SEARCH FORM */
.search-icon {
    position: absolute;
    top: 11px;
    right: 0px;
	font-size: 19px;
}
.search-icon a {
	color: $(search.icon.color);
}
#searchfs {
    position: fixed;
	z-index:9999;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    
    -webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
	-o-transition: all 0.1s ease-in-out;
	-ms-transition: all 0.1s ease-in-out;
	transition: all 0.1s ease-in-out;

    -webkit-transform: translate(0px, -100%) scale(0, 0);
	-moz-transform: translate(0px, -100%) scale(0, 0);
	-o-transform: translate(0px, -100%) scale(0, 0);
	-ms-transform: translate(0px, -100%) scale(0, 0);
	transform: translate(0px, -100%) scale(0, 0);
    
    opacity: 0;
}

#searchfs.open {
    -webkit-transform: translate(0px, 0px) scale(1, 1);
    -moz-transform: translate(0px, 0px) scale(1, 1);
	-o-transform: translate(0px, 0px) scale(1, 1);
	-ms-transform: translate(0px, 0px) scale(1, 1);
	transform: translate(0px, 0px) scale(1, 1); 
    opacity: 1;
	z-index: 9999;
}

#searchfs input[type="search"] {
	position: absolute;
    top: 50%;
    left: 0;
    margin-top: -51px;
    width: 70%;
    margin-left: 15%;
    color: rgb(255, 255, 255);
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, .8);
    border-bottom: 2px solid rgba(255, 255, 255, .5);
    border-left: 0px solid transparent;
    border-right: 0px solid transparent;
    font-size: 40px;
    text-align: center;
    outline: none;
    padding: 10px;
}
#searchfs .close {
	position: fixed;
	bottom: 50%;
	right: 50%;
	color: #fff;
	background-color: transparent;
	opacity: 0.8;
	font-size: 40px;
	border: none;
	outline: none;
	margin-bottom: 60px;
	margin-right: -10px;
}
#searchfs .close:hover {
	cursor: pointer;
}


/* NAV MENU */
#cssmenu, #cssmenu ul, #cssmenu ul li, #cssmenu ul li a, #cssmenu #head-mobile {
	border: 0;
	list-style: none;
	line-height: 1;
	display: block;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
#cssmenu ul li a {
	position: relative;
}
#cssmenu #head-mobile {
	position: relative;
}
#cssmenu {
	text-align: left;
}
#cssmenu ul {
	margin: 0;
	display: block;
	height: 48px;
}
#cssmenu #head-mobile {
	display: none;
	position: relative;
}
#cssmenu > ul > li {
	float: left;
	margin: 0;
}
#cssmenu > ul > li > a {
	padding: 0 17px;
	font: $(navmenu.font);
    line-height: 48px;
	letter-spacing: 0.8px;
	text-decoration: none;
	text-transform: uppercase;
	color: $(navmenu.font.color);
}
#cssmenu > ul > li:hover > a, #cssmenu ul li.active a {
	color: $(navmenu.font.hover.color);
}
#cssmenu > ul > li:hover, #cssmenu ul li.active:hover, #cssmenu ul li.active, #cssmenu ul li.has-sub.active:hover {
	background: rgba(64,64,64,0.1);
	-webkit-transition: background .2s ease;
	-ms-transition: background .2s ease;
	transition: background .2s ease;
}
#cssmenu ul li.has-sub {
	position: relative;
}
#cssmenu > ul > li.has-sub > a::after, #cssmenu ul ul li.has-sub > a::after {
    content: "\f0d7"; 
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    margin-left: 10px;
}
#cssmenu ul ul li.has-sub > a::after {
    content: "\f0da"; 
}
#cssmenu > ul > li.has-sub:hover > a::after {
    content: "\f0d8"; 
}
#cssmenu ul ul {
    height: auto;
	position: absolute;
	left: -9999px;
	z-index: 1;
	-webkit-box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
    opacity: 0;
    transform: translateY(-2em);
    transition: all 0.3s ease-in-out 0s;
}
#cssmenu li:hover > ul {
	left: auto;
    opacity: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s; 
}
#cssmenu ul ul li {
	background: $(navsubmenu.font.background);
	margin: 0;
}
#cssmenu ul ul li:hover {
	background: $(navsubmenu.hover);
}
#cssmenu ul ul ul{
	margin-left: 100%;
	top: 0
}
#cssmenu ul ul li a {
    font: $(navsubmenu.font);
    border-bottom: 1px solid rgba(150,150,150,0.15);
    padding: 0 17px;
    line-height: 42px;
    max-width: 100%;
    text-decoration: none;
    color: $(navsubmenu.font.color);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
#cssmenu ul ul li:last-child > a,#cssmenu ul ul li.last-item > a {
	border-bottom: 0
}

#cssmenu ul ul li.has-sub:hover, #cssmenu ul li.has-sub ul li.has-sub ul li:hover {
	background: $(navsubmenu.hover);
}

@media screen and (min-width:801px){
	#cssmenu ul {
		display: block !important;
	}
}
@media screen and (max-width:800px){
	#cssmenu {
		float: none;
	}
	#cssmenu ul {
		background: $(navsubmenu.font.background);
		width: 100%;
		display: none;
		height: auto;
		-webkit-box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
		box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
	}
	#cssmenu > ul {
		max-height: calc(100vh - 48px);
		overflow-y: auto;
	}
	#cssmenu ul ul {
		-webkit-box-shadow: none;
		box-shadow: none;
		display:none;
        opacity: 1;
        transform: translateY(0%);
        transition: unset;
	}
    #cssmenu li:hover > ul {
        transition-delay: 0s, 0s, 0s; 
    }
	#cssmenu ul li {
		width: 100%;
		border-top: 1px solid rgba(150,150,150,0.15);
		background: $(navsubmenu.font.background);
	}
    #cssmenu > ul > li:hover, #cssmenu ul li.active:hover, #cssmenu ul li.active, #cssmenu ul li.has-sub.active:hover {
        background: $(navsubmenu.hover);
    }
    #cssmenu > ul > li:hover > a, #cssmenu ul li.active a {
        color: $(navsubmenu.font.color);
    }
    #cssmenu ul ul li a {
        padding: 0 25px;
    }
	#cssmenu ul li a, #cssmenu ul ul li a {
		width: 100%;
		border-bottom: 0;
		color: $(navsubmenu.font.color);
	}
	#cssmenu > ul > li {
		float: none;
		position: relative;
	}
	#cssmenu ul ul li.has-sub ul li a {
		padding-left: 35px
	}
	#cssmenu ul ul, #cssmenu ul ul ul {
		position: relative;
		left: 0;
		width: 100%;
		margin: 0;
		text-align: left
	}
	#cssmenu > ul > li.has-sub > a::after, #cssmenu ul ul > li.has-sub > a::after {
		display: none
	}
	#cssmenu #head-mobile {
		display: block;
		padding: 24px;
		color: #fff;
		font-size: 12px;
		font-weight: bold
	}
	.button {
		width: 25px;
		height: 20px;
		position: absolute;
		right: 0;
		top: 14px;
		cursor: pointer;
		z-index: 2;
		outline: none;
	}
	.mline1, .mline2, .mline3 {
		position: absolute;
		left: 0;
		display: block;
		height: 3px;
		width: 22px;
		background: $(search.icon.color);
		content:'';
		border-radius: 5px;
		transition: all 0.2s;
	}
	.mline1 {
		top: 0;
	}
	.mline2 {
		top: 7px;
	}
	.mline3 {
		top: 14px;
	}
	.button.menu-opened .mline1 {
		top: 8px;
		border: 0;
		height: 3px;
		width: 22px;
		background: $(navmenu.font.color);
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg)
	}
	.button.menu-opened .mline2 {
		top: 8px;
		background: $(navmenu.font.color);
		width: 22px;
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg)
	}
	.button.menu-opened .mline3 {
        display: none;
        height:0;
    }
	#cssmenu .submenu-button {
		position: absolute;
		z-index: 99;
		right: 0;
		top: 0;
		cursor: pointer;
	}
	#cssmenu .submenu-button::after {
        content: "\f0d7"; 
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        margin: 0 20px;
        color: $(navsubmenu.font.color);
        line-height: 42px;
	}
	#cssmenu .submenu-opened::after {
        content: "\f0d8"; 
    }
	#cssmenu ul ul .submenu-button::after {
		line-height: 36px;
	}
	#cssmenu ul ul ul li.active a{
		border-left: none
	}
	#cssmenu > ul > li.has-sub > ul > li.active > a,#cssmenu > ul ul > li.has-sub > ul > li.active > a{
		border-top: none
	}
}



/* FOOTER */
#footer-container {
	background: $(footer.background.color);
	padding: 20px 5px;
	overflow: hidden;
	color: $(footer.color);
	font-size: 12px;
	text-align: center;
}
#footer-wrapper {
	max-width: 1000px;
	margin: 0 auto;
}
#footer-wrapper a {
	color: $(footer.body.link.color);
}
#footer-wrapper a:hover {
	color: $(footer.hover.color);
}

/* BACA JUGA */
#baca-juga {
	display: none;
    position: relative;
}
#baca-juga h2 {
	color: $(label.color);
    position: absolute;
    top: -15px;
	left: 3.5em;
    border: 2px solid $(label.border.color);
    padding: 2px 12px;
    font-size: 14px;
    background: $(label.bg.color);
    font-weight: bold;
	z-index: 1;
}
#baca-juga a {
	font-weight: bold;
	font-size: 14px;
    display: block;
    padding: 0;
}
#baca-juga ul {
	max-width: 75%;
	margin: 1.5em 0 1.5em 2em;
	padding: 20px 20px 10px 40px;
	position: relative;
	border: 2px solid $(label.border.color);
}
#baca-juga li {
	padding: 0px;
	margin: .6em 0;
}

/* RELATED POSTS */
.related-post {
	margin: 30px auto 0;
	overflow: hidden;
}
.related-post h4 {
	position:relative;
    margin: 0;
    display: inline-block;
    font-weight: bold;
    color: $(label.color);
    text-transform: uppercase;
    font-size: 16px;
    z-index: 1;
    background: #fff;
    padding: 0 10px;
}
.related-post ul {
	padding: 0 !important;
	font-size: 14px;
}

/* Style 3 */
.related-post-style-3,
.related-post-style-3 li {
	margin: 0;
	padding: 0;
	list-style: none;
	word-wrap: break-word;
	overflow: hidden;
}
.related-post-style-3 .related-post-item {
	float: left;
	width: 23.5%;
	height: auto;
	margin-right: 2%;
	margin-bottom: 10px;
}
.related-post-style-3 .related-post-item:nth-of-type(4n+0) {
	margin-right: 0;
}
.related-post-style-3 .related-post-item:nth-of-type(4n+1) {
	clear: both;
}
.related-post-style-3 .related-post-item:hover {
	opacity: 0.7;
}
.related-post-style-3 .related-post-item-thumbnail {
    display: block;
    max-height: none;
    background-color: transparent;
    border: none;
    padding: 0;
    max-width: 100%;
}
.related-post-style-3 .related-post-item-title {
	color: #444;
}
.related-post-style-3 .related-post-item-tooltip {
    padding: 10px 0;
}
.related-post-item-tooltip .related-post-item-title {
    font-weight: bold;
    display: block;
}

@media only screen and (max-width:480px){
	.related-post-style-3 .related-post-item {
		width: 48%;
		margin-right: 4%;
	}
	.related-post-style-3 .related-post-item:nth-of-type(2n+0) {
		margin-right: 0;
	}
	.related-post-style-3 .related-post-item:nth-of-type(2n+1) {
		clear: both;
	}
}

.contact-form-widget {
}
.contact-form-success-message, .contact-form-error-message {
    background: #f9edbe;
    border: 0 solid #f0c36d;
    font-size: 14px;
    text-align: center;
    max-width: 500px;
    border-radius: 3px;
}
.contact-form-success-message-with-border, .contact-form-error-message-with-border {
    background: #f9edbe;
    border: 1px solid #f0c36d;
    font-size: 14px;
    text-align: center;
    max-width: 600px;
    border-radius: 3px;
	box-sizing: border-box;
	padding: 5px 10px;
}
.contact-form-cross {
    height: 11px;
    margin: 0 5px;
    vertical-align: -8.5%;
    width: 11px;
}
.contact-form-email, .contact-form-name {
	color: inherit;
	height: 40px;
    margin-top: 5px;
    max-width: 300px;
    width: 100%;
    padding: 0 15px;
    border-radius: 3px;
    border: 1px solid #cacaca;
    box-sizing: border-box;
}
.contact-form-email-message {
	color: inherit;
    margin-top: 5px;
    vertical-align: top;
    max-width: 600px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #cacaca;
    padding: 15px;
}
.contact-form-email:hover, .contact-form-name:hover, .contact-form-email-message:hover {
	outline: none;
	border: 1px solid $(body.link.color);
}
.contact-form-email:focus, .contact-form-name:focus, .contact-form-email-message:focus {
    outline: none;
	border: 1px solid $(body.link.color);
}
.contact-form-name, .contact-form-email, .contact-form-email-message {
	background: #f8f8f8;
}
.contact-form-button {
	display: block;
	font-size: 14px;
    line-height: 24px;
    padding: 5px 20px;
	margin: 30px 0;
    text-align: center;
    border: none;
    background: $(body.link.color);
    color: #fff;
    border-radius: 3px;
	font-weight: bold;
}
.contact-form-button:hover, .contact-form-button.hover {
	cursor: pointer;
	outline: none;
	opacity: .85;
}
.contact-form-button.focus, .contact-form-button.right.focus, .contact-form-button.mid.focus, .contact-form-button.left.focus {
    outline: none;
}
.contact-form-button-submit:focus, .contact-form-button-submit.focus {
	outline: none;
	opacity: .85;
}
.swajib {
	font-weight: bold;
	color: #e85e5e;
}
.ctitles {
    font-weight: bold;
    display: block;
    margin: 30px 0 0;
}


/* COMMENT FORM */
#comments-block {
	margin: 15px 0;
}
.comment-body {
	padding: 15px 0;
	margin: 0 0;
}
.comment-body p {
	margin: 0;
}
.comment-form {
	overflow: hidden;
	margin-top: 20px;
}
.comment-footer {
	margin: 0 0 30px;
}
#comments-block .avatar-image-container {
	display: none;
}
h4#comment-post-message {
	display: none;
	margin: 0 0 0 0;
}
.comments{
	clear: both;
	margin-top: 10px;
	margin-bottom: 0
}
.comments .comments-content{
	font-size: 14px;
	margin-bottom: 30px
}
.comments .comments-content .comment-thread ol{
	text-align: left;
	margin: 13px 0;
	padding: 0;
	list-style: none;
}
.comment .avatar-image-container {
	float: left;
	max-height: 36px;
	overflow: hidden;
	width: 36px;
}
.comments .avatar-image-container img {
    max-width: 34px;
    border-radius: 17px;
}
.comments .comment-block {
	position: relative;
	padding: 20px;
	margin-left: 45px;
	border: 2px solid $(label.border.color);
	border-radius: 10px;
	word-break: break-word;
}
.comments .comments-content .comment-replies{
	margin:10px 0;
	margin-left:45px
}
.comments .comments-content .comment-thread:empty{
	display:none
}
.comments .comment-replybox-single {
	margin-left:45px;
	margin: 20px 0;
}
.comments .comment-replybox-thread {
	margin: 20px 0;
}

.comments .comments-content .comment{
	margin-bottom:6px;
	padding:0
}
.comments .comments-content .comment:first-child {
	padding:0;
	margin:0
}
.comments .comments-content .comment:last-child {
	padding:0;
	margin:0
}
.comments .comment-thread.inline-thread .comment, .comments .comment-thread.inline-thread .comment:last-child {
	margin:0px 0px 5px 14%
}
.comment .comment-thread.inline-thread .comment:nth-child(6) {
	margin:0px 0px 5px 12%;
}
.comment .comment-thread.inline-thread .comment:nth-child(5) {
	margin:0px 0px 5px 10%;
}
.comment .comment-thread.inline-thread .comment:nth-child(4) {
	margin:0px 0px 5px 8%;
}
.comment .comment-thread.inline-thread .comment:nth-child(3) {
	margin:0px 0px 5px 4%;
}
.comment .comment-thread.inline-thread .comment:nth-child(2) {
	margin:0px 0px 5px 2%;
}
.comment .comment-thread.inline-thread .comment:nth-child(1) {
	margin:0px 0px 5px 0;
}
.comments .comments-content .comment-thread{
	margin:0;
	padding:0
}
.comments .comments-content .inline-thread{
	background:#fff;
	margin:0
}
.comments .comments-content .icon.blog-author {
	display:inline;
	height: 18px;
	margin: 0 0 -4px 6px;
	width: 18px;
}
.comments .comments-content .icon.blog-author::after {
	content:"\f058";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    padding-right:4px;
	color:$(body.link.color);
}
.comments .comments-content .comment-header {
	font-size:14px;
	margin: 0 0 15px;
}
.comments .comments-content .comment-content {
	margin: 0 0 15px;
	text-align: left;
	line-height: 1.6;
}
.comments .comments-content .datetime {
	margin-left: 6px;
}
.comments .comments-content .datetime a {
	color:#bbbbbb;
}
.comments .comments-content .user {
	font-weight: bold;
	font-style: normal;
}
.comments .comment .comment-actions a {
	display: inline-block;
	font-size: 13px;
	line-height: 15px;
	margin: 4px 8px 0 0;
}
.comments .continue a {
	display:inline-block;
	font-size:13px;
	padding: .5em;
}
.comments .comment .comment-actions a:hover, .comments .continue a:hover{
	text-decoration:underline;
}
.pesan-komentar {
}
.pesan-komentar p {
	margin: 5px 0 15px;
}
.deleted-comment {
	font-style: italic;
	opacity: .5;
}

.comments .comments-content .loadmore {
    cursor: pointer;
    margin-top: 3em;
    max-height: 3em
}

.comments .comments-content .loadmore.loaded {
    max-height: 0;
    opacity: 0;
    overflow: hidden
}

.comments .thread-chrome.thread-collapsed {
    display: none
}

.comments .thread-toggle {
    display: inline-block
}

.comments .thread-toggle .thread-arrow {
    display: inline-block;
    height: 6px;
    margin: .3em;
    overflow: visible;
    padding-right: 4px;
    width: 7px
}

.comments .thread-expanded .thread-arrow {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVR42mNgwAfKy8v/48I4FeA0AacVDFQBAP9wJkE/KhUMAAAAAElFTkSuQmCC") no-repeat scroll 0 0 transparent
}

.comments .thread-collapsed .thread-arrow {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg==") no-repeat scroll 0 0 transparent
}

.comments .hidden {
    display: none
}

@media screen and (max-device-width:480px) {
    .comments .comments-content .comment-replies {
        margin-left: 0
    }
}

/* MEDIA QUERY */
@media only screen and (max-width:1080px){
	#wrapper {
		margin: 0 auto;
	}
	.footer-widget, #footer-navmenu-container {
		max-width: 100%;
	}
	#header-wrapper, .footer-widget .widget, #footer-navmenu-container {
		padding-left: 30px;
		padding-right: 30px;
	}
	.sticky-mobile {
		margin-right: 30px;
	}
	.img-thumbnail {
		width: 240px;
		height: 160px;
	}

	.search-icon {
		right: 30px;
	}
}
@media only screen and (max-width:800px){
	#header-wrapper {
		padding-left: 0px;
		padding-right: 0px;
		position: relative;
	}
	#wrapper {
		padding: 70px 20px 20px;
	}
	#cssmenu > ul > li > a {
		padding: 0x 20px;
		line-height: 42px;
	}
	.footer-widget .widget, #footer-navmenu-container {
		padding-left: 20px;
		padding-right: 20px;
	}
	.button {
		left: 20px;
	}
	.header {
		position: absolute;
		top: 0;
		left: 45px;
		right: 45px;
		z-index: 1;
		text-align: center;
		float: none;
		display: inline-block;
		max-width: 100%;
		margin-right: 0;
	}
	.header img {
		display: inline-block !important;
	}
	.img-thumbnail {
		width: 180px;
		height: 120px;
	}

	.search-icon {
		right: 20px;
	}
}
@media only screen and (max-width:768px){
	#post-wrapper, #sidebar-wrapper {
		float:none;
		width:100%;
		max-width:100%
	}
	.post-container {
		padding: 0 0 20px 0;
	}
}

@media only screen and (max-width:640px){
	#wrapper {
		padding: 70px 15px 15px;
	}
	#cssmenu > ul > li > a {
		padding: 0 15px;
	}
	.footer-widget .widget, #footer-navmenu-container {
		padding-left: 15px;
		padding-right: 15px;
	}
	.button {
		left: 15px;
	}
	#post-wrapper, #sidebar-wrapper {
		float:none;
		width:100%;
		max-width:100%
	}

	.search-icon {
		right: 15px;
	}
}

@media only screen and (max-width:480px){
	#footer-navmenu ul li a {
		margin: 0px 8px;
	}
	ul.nav-social li {
		padding: 0px 8px;
	}
	.img-thumbnail {
		width: calc(100% + 30px);
		margin: 0px 0px 15px -15px;
		height: 160px;
		position: relative;
		overflow: hidden;
	}
	.img-thumbnail img {
		width: 100%;
		height: auto;
		position: absolute;
		top: -100%;
		left: 0;
		right: 0;
		bottom: -100%;
		margin: auto;
	}
	.post-snippet {
		margin-top: 10px;
	}
	blockquote {
		margin-left:0;
		margin-right:0;
	}
	#baca-juga ul {
		max-width: 100%;
		margin: 1.5em 0 1.5em 0;
	}
	h1{font-size:170%}
	h2{font-size:150%}
	h3{font-size:130%}
	h4{font-size:120%}
	h5{font-size:110%}
	h6{font-size:100%}
	h2.post-title {
		font-size: 18px;
		display: inline;
	}
	h1.post-title {
		font-size: 24px;
	}
	.section:last-child .widget:last-child, .sidebar .widget, .sidebar-sticky .widget, .above-post-widget .widget, .bellow-header-widget .widget, #blog-pager {
		margin:0 0 20px;
	}
	.comments .comments-content .comment-replies{
		margin-left:20px !important;
	}
	.comments .comment-block {
		padding: 15px !important;
	}
	.comment .comment-thread.inline-thread .comment {
		margin: 0 0 0 0 !important;
	}
	iframe#comment-editor {
		min-height: 270px;
	}
	#searchfs input[type="search"] {
		font-size: 26px;
	}
	.FeaturedPost .post-summary {
		width: calc(100% + 30px);
		margin: 0px 0px 15px -15px;
	}
	.FeaturedPost .post-summary, .FeaturedPost .image, .img-thumbnail, .img-thumbnail img {
		border-radius: unset;
	}
	.FeaturedPost .post-summary h3 {
		font-size: 20px;
		margin: 0 10px;
	}
	.FeaturedPost .post-summary p {
		margin: 0 10px;
	}
	#baca-juga {
		max-width: 100%;
	}
}

/* Tombol Download */
.buttonDownload {
	border-radius: 3px;
	display: inline-block;
	position: relative;
	padding: 10px 25px;
	background-color: $(body.link.color);
	color: white !important;
	font-weight: bold;	
	font-size: 0.9em;
	text-align: center;
	text-indent: 15px;
	transition:all 0.4s;
	-moz-transition:all 0.4s;
	-webkit-transition:all 0.4s;
}
.buttonDownload:hover {
	opacity: .85;
}
.buttonDownload::before, .buttonDownload::after {
	content: ' ';
	display: block;
	position: absolute;
	left: 15px;
	top: 52%;
}
.buttonDownload::before {
	width: 10px;
	height: 2px;
	border-style: solid;
	border-width: 0 2px 2px;
}
.buttonDownload::after {
	width: 0;
	height: 0;
	margin-left: 3px;
	margin-top: -7px;
	border-style: solid;
	border-width: 4px 4px 0 4px;
	border-color: transparent;
	border-top-color: inherit;
	animation: downloadArrow 2s linear infinite;
	animation-play-state: paused;
}
.buttonDownload:hover::after {
	animation-play-state: running;
}
@keyframes downloadArrow {
	0% {
		margin-top: -7px;
		opacity: 1;
	}
	0.001% {
		margin-top: -15px;
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		margin-top: 0;
		opacity: 0;
	}
}

/* Skin for Blogger Tabbed Layout TOC */
.tabbed-toc {
	margin: 0 auto;
	background: $(header.background.kiri);
	background: linear-gradient(to bottom right, $(header.background.kiri), $(header.background.kanan));
	position: relative;
}
.tabbed-toc .loading {
	display: block;
	padding: 2px 12px;
	color: $(navmenu.font.color);
}
.tabbed-toc ul,
.tabbed-toc ol,
.tabbed-toc li {
	margin: 0;
	padding: 0;
	list-style: none;
}
.tabbed-toc .toc-tabs {
	width: 20%;
	float: left;
}
.tabbed-toc .toc-tabs li a {
	display: block;
	font: $(navmenu.font); 
	overflow: hidden;
	color: $(navmenu.font.color);
	text-transform: uppercase;
	text-decoration: none;
	padding: 12px;
}
.tabbed-toc .toc-tabs li a:hover {
	background-color: rgba(64,64,64,0.1);
}
.tabbed-toc .toc-tabs li a.active-tab {
	background: rgba(64,64,64,0.1);
	position:relative;
	z-index:5;
	margin:0 -1px 0 0;
	/* cursor:text; */
}
.tabbed-toc .toc-content,
.tabbed-toc .toc-line {
	width: 80%;
	float: right;
	background-color: white;
	border-left: 5px solid rgba(64,64,64,0.1);
	box-sizing: border-box;
}
.tabbed-toc .toc-line {
	float: none;
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
}
.tabbed-toc .panel {
	position: relative;
	z-index: 5;
}
.tabbed-toc .panel li a {
	display: block;
	position: relative;
	font-weight: bold;
	font-size: 14px;
	padding: 6px 12px;
	overflow: hidden;
}
.tabbed-toc .panel li time {
	display: block;
	font-weight: normal;
	font-size: 11px;
	color: #666;
	float: right;
}
.tabbed-toc .panel li .summary {
	display: block;
	padding: 10px 12px 10px;
	font-size: 13px;
}
.tabbed-toc .panel li .summary img.thumbnail {
	float: left;
	display: block;
	margin: 5px 8px 0 0;
	width: 72px;
	height: 72px;
	background-color: #fafafa;
}
.tabbed-toc .panel li {background-color:#f3f3f3}
.tabbed-toc .panel li:nth-child(even) {background-color:#fff}
.tabbed-toc .panel li a:hover,
.tabbed-toc .panel li a:focus,
.tabbed-toc .panel li.bold a {
	background-color: rgba(64,64,64,0.1);
	outline: none;
}
@media (max-width:700px) {
	.tabbed-toc .toc-tabs,
	.tabbed-toc .toc-content {
		overflow :hidden;
		width: auto;
		float: none;
		display: block;
	}
	.tabbed-toc .toc-tabs li {
		display: inline;
		float: left;
	}
	.tabbed-toc .toc-tabs li a.active-tab {
		background-color: rgba(64,64,64,0.1);
	}
	.tabbed-toc .toc-content { border: none }
	.tabbed-toc .toc-line,
	.tabbed-toc .panel li time { display: none }
}
/* CSS Download Box by caramanual.com */
.dbox-title {
    padding: 8px 10px;
    margin: 8px 0 3px;
    color: #FFF;
    background: #3498db;
}
.dbox-wrap {
font-size: 11px;
font-weight: bold;
background: #F5F5F5;
padding: 10px;
margin: 10px 0;
}
.dbox {
margin: 0;
padding: 0;
list-style: none;
}
.dbox-list {
background: #E4E4E4;
margin-bottom: 2px;
line-height: 26px;
padding: 0 5px;
}
.dbox-list strong {
background: #3498db;
border-right: 2px solid #F5F5F5;
width: 65px;
display: block;
float: left;
margin-left: -5px;
margin-right: 5px;
color: #FFF;
padding: 0 5px;
text-align: center;
}
.dbox-list a {
color: #6d6d6d;
}
.dbox-list a:hover {
color: #222;
}
@media only screen and (max-width: 360px) {
  .dbox-list strong {width:100%}
  .dbox-title {text-align:center}
}
]]></b:skin>

<b:template-skin>
<![CDATA[
/* CSS FOR LAYOUT */
body#layout, body#layout div.section {
	font-family: Arial, sans-serif;
}
body#layout {
	max-width: 1040px;
}
body#layout .sidebar-sticky {
	z-index:0;
}
body#layout #wrapper {
	overflow: unset;
}
body#layout #header-container {
	height: auto;
	position: unset;
}
body#layout::before {
	content: "VioMagz v.3.1.0";
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    padding: 10px 20px;
    font-size: 18px;
    color: #49ACE1;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #d6d6d6;
}
body#layout .widget-content {
	box-shadow: none;
}
body#layout #navbar {
	display: block;
    margin: 0;
    max-width: 100%;
    padding: 0 20px;
	margin-bottom: 12px;
}
body#layout .header {
	width: 200px;
}
body#layout #navbar::before {
	content: "Untuk mempercepat loading blog, klik edit dan nonaktifkan Navbar ==>>";
    position: absolute;
    bottom: 18px;
    z-index: 999;
    right: 80px;
    color: #999;
    font-size: 12px;
}
body#layout #wrapper, body#layout #header-wrapper, body#layout #footer-container, body#layout #footer-widget-container {
	margin: 0 0;
	padding: 0 20px;
}
body#layout #footer-container {
	padding-bottom: 20px;
}
body#layout #cssmenu {
	position: relative;
	height: 33px;
	display: block;
    padding: 20px;
    margin: 8px 0;
    width: 500px;
    font-size: 14px;
    color: #fff;
    background: #bbbbbb;
    font-weight: bold;
    float: right;
	border: 1px solid #8e8e8e;
}
body#layout #cssmenu ul, body#layout #footer-navmenu ul {
	display: none;
}
body#layout #cssmenu::after {
	content: "Menu navigasi harus diedit melalui Edit HTML";
    color: #fff;
    position: absolute;
    top: 30px;
    left: 20px;
    visibility: visible;
}
body#layout .post-container {
	padding: 0 15px 0 0;
}
body#layout .sidebar-container {
	padding: 0 0 0 0;
}
body#layout #searchfs, body#layout .latest-post-title, body#layout .section h4 {
	display: none;
}
body#layout div.section { 
	background: transparent;
	margin: 0px 0px 15px 0px;
	padding: 0px;
	border: none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
body#layout .sidebar-sticky::before {
    content: "Widget Sidebar (Sticky)";
}
body#layout .sidebar::before {
    content: "Widget Sidebar";
}
body#layout .above-post-widget::before {
	content: "Widget di Atas Post (Hanya Homepage)";
}
body#layout .Blog::before {
	content: "Posting Blog";
	margin-bottom: 8px;
}
body#layout .bellow-header-widget::before {
	content: "Widget di Bawah Header/Menu Navigasi";
}
body#layout #footer-widget-container::before {
	content: "Widget di Atas Footer";
}
body#layout .sidebar-sticky::before, body#layout .sidebar::before, body#layout .above-post-widget::before, body#layout .Blog::before, body#layout .bellow-header-widget::before, body#layout #footer-widget-container::before {
    padding: 5px 10px;
    display: block;
    font-size: 14px;
    color: #fff;
    background: #bbbbbb;
	border: 1px solid #8e8e8e;
    font-weight: bold;
}
body#layout .add_widget, body#layout .widget-content {
	padding: 12px;
}
body#layout .add_widget a {
	margin-left: 0px;
	font-size: 14px;
}
body#layout div.layout-title {
	font-size: 14px;
}
body#layout div.layout-widget-description {
	font-size: 12px;
}
body#layout .editlink {
	color: #FFFFFF !important;
	background: #bbbbbb;
    border-radius: 15px;
	padding: 4px 6px;
}

body#layout #footer-wrapper {
	position: relative;
	background: #fff;
    height: 40px;
    border: 1px solid #ddd;
}
body#layout #footer-wrapper::after {
	content:"Footer";
	color:#999;
	position:absolute;
	top:12px;
}
body#layout #footer-navmenu {
	position: relative;
    display: block;
    padding:0;
    font-size: 14px;
    color: #fff;
    background: #bbbbbb;
	border: 1px solid #8e8e8e;
    font-weight: bold;
    margin: 0 20px 8px;
    height: 50px;
}
body#layout #footer-navmenu::after {
    content: "Menu navigasi harus diedit melalui Edit HTML";
    color: #fff;
    position: absolute;
    top: 17px;
    left: 20px;
    visibility: visible;
}

]]></b:template-skin>

<script type='text/javascript'>
var widgetBacaJuga = true;
var relatedPosts = true;
var numberedPagination = true;
var lokasiIklanTengah1 = 2;
var lokasiIklanTengah2 = 10;
var lokasiBacaJuga = 4;
</script>

<b:if cond='data:blog.pageType == &quot;error_page&quot;'>
<style>
/* ERROR PAGE */
.status-msg-body::after, .status-msg-hidden::after {
	content: &quot;404&quot;;
	font-size: 140px;
	display: block;
	margin: 30px 0;
	color: #e86e6e;
	font-weight: bold;
    text-shadow: 6px 6px #eaeaea;
}
#blog-pager, #sidebar-wrapper {
	display: none;
}
#post-wrapper {
	width: 100%;
	max-width: 100%;
}
.status-msg-body {
	padding: 30px 0;
}
</style>
</b:if>


<script type='text/javascript'>//<![CDATA[
/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
//]]></script>  

<b:include name='numberedpopularposts'/>
<b:include name='thumbnailstyle'/>
<b:include name='stickyheaderstyle'/>

</head>
  <script async='async' data-ad-client='ca-pub-2204244106762414' src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'/>

  <body>
  

    <b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;index&quot;}'>
	&lt;div itemscope=&#39;itemscope&#39; itemtype=&#39;http://schema.org/Blog&#39;&gt;
	</b:if> 

  <!-- navbar menu start -->
  <b:section class='navbar' id='navbar' maxwidgets='1' showaddelement='no'>
    <b:widget id='Navbar1' locked='false' title='Navbar' type='Navbar'>
      <b:includable id='main'>&lt;script type=&quot;text/javascript&quot;&gt;
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener(&#39;load&#39;,
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent(&#39;onload&#39;, function(){ object[attribute] = val; });
      }
    }
  &lt;/script&gt;
&lt;div id=&quot;navbar-iframe-container&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://apis.google.com/js/plusone.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
      gapi.load(&quot;gapi.iframes:gapi.iframes.style.bubble&quot;, function() {
        if (gapi.iframes &amp;&amp; gapi.iframes.getContext) {
          gapi.iframes.getContext().openChild({
              url: &#39;https://www.blogger.com/navbar.g?targetBlogID\x3d3438596920880229725\x26blogName\x3dNekopoi+\x26publishMode\x3dPUBLISH_MODE_HOSTED\x26navbarType\x3dLIGHT\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttps://www.seputar-anime2.ga/search\x26blogLocale\x3den\x26v\x3d2\x26homepageUrl\x3dhttps://www.seputar-anime2.ga/\x26vt\x3d7337588212330715552&#39;,
              where: document.getElementById(&quot;navbar-iframe-container&quot;),
              id: &quot;navbar-iframe&quot;
          });
        }
      });
    &lt;/script&gt;&lt;script type=&quot;text/javascript&quot;&gt;
(function() {
var script = document.createElement(&#39;script&#39;);
script.type = &#39;text/javascript&#39;;
script.src = &#39;//pagead2.googlesyndication.com/pagead/js/google_top_exp.js&#39;;
var head = document.getElementsByTagName(&#39;head&#39;)[0];
if (head) {
head.appendChild(script);
}})();
&lt;/script&gt;
</b:includable>
    </b:widget>
  </b:section>
  <!-- navbar menu end -->
  
  <!-- header wrapper start -->
<div id='header-container'>  
  <header id='header-wrapper'>  
  <b:section class='header' id='header' maxwidgets='1' showaddelement='no'>
      <b:widget id='Header1' locked='true' title='Nekopoi  (Header)' type='Header' version='1'>
        <b:widget-settings>
          <b:widget-setting name='displayUrl'/>
          <b:widget-setting name='displayHeight'>0</b:widget-setting>
          <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
          <b:widget-setting name='useImage'>false</b:widget-setting>
          <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
          <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
          <b:widget-setting name='displayWidth'>0</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>

  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <b:if cond='data:mobile'>
          <div id='header-inner'>
            <div class='titlewrapper' style='background: transparent'>
              <h1 class='title' style='background: transparent; border-width: 0px'>
                <b:include name='title'/>
              </h1>
            </div>
            <b:include name='description'/>
          </div>
        <b:else/>
          <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                        + &quot;background-position: &quot;                        + data:backgroundPositionStyleStr + &quot;; &quot;                        + data:widthStyleStr                        + &quot;min-height: &quot; + data:height                        + &quot;_height: &quot; + data:height                        + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
            <div class='titlewrapper' style='background: transparent'>
              <h1 class='title' style='background: transparent; border-width: 0px'>
                <b:include name='title'/>
              </h1>
            </div>
            <b:include name='description'/>
          </div>
        </b:if>
    <b:else/>
      <!--Show the image only-->
      <div id='header-inner'>
	    <b:if cond='data:blog.pageType != &quot;item&quot;'>
		  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
            <h1 style='text-indent:-9999px;margin:0 0 0 0;padding:0 0 0 0;height:0px;'><b:include name='title'/></h1>
          </b:if>
		</b:if>
        <a expr:href='data:blog.homepageUrl' style='display: block'>
          <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
        </a>
        <!--Show the description-->
        <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
          <b:include name='description'/>
		  <b:if cond='data:blog.pageType != &quot;item&quot;'>
		    <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
              <h1 style='text-indent:-9999px;margin:0 0 0 0;padding:0 0 0 0;height:0px;'><b:include name='title'/></h1>
		    </b:if>
		  </b:if>
        </b:if>
      </div>
    </b:if>
  <b:else/>
    <!--No header image -->
    <div id='header-inner'>
      <div class='titlewrapper'>  	
        <b:if cond='data:blog.pageType != &quot;item&quot;'>
		  <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
             <p class='title'><b:include name='title'/></p>
		   <b:else/>
		     <h1 class='title'><b:include name='title'/></h1>
		   </b:if>
		<b:else/>
          <p class='title'><b:include name='title'/></p>
		</b:if>
	    <b:include name='description'/>
      </div>
	</div>
  </b:if>
</b:includable>
        <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
        <b:includable id='title'>
  <b:if cond='data:blog.url == data:blog.homepageUrl'>
    <a expr:href='data:blog.homepageUrl'><data:title/></a>
  <b:else/>
    <a expr:href='data:blog.homepageUrl'><data:title/></a>
  </b:if>
</b:includable>
      </b:widget>
    </b:section>
	
<nav id='cssmenu'>
<div id='head-mobile'/>
<div class='button' id='menu-button'>
<span class='mline1'/>
<span class='mline2'/>
<span class='mline3'/>
</div>

<!-- menu navigasi header start -->
<ul>
  <li><a href='https://www.seputar-anime2.ga/p/aplikasi-nekopoi.html'>aplikasi nekopoi</a></li>
  <li><a href='https://www.youtube.com/channel/UCHdSChMx_jZhIr82lPrZ4eg'>YouTube</a></li>
  <li><a href='https://www.seputar-anime2.ga/p/cara-donwload.html'>cara donwload</a></li>
  <li><a href='https://www.seputar-anime2.ga/p/contak-us.html'>Contact Us</a></li>
  <li><a href='#'>#</a></li>
  <li><a href='#'>#</a></li>
</ul>
<!-- menu navigasi header end -->

</nav>

	<div class='search-icon'>
		<a href='#searchfs'><i class='fa fa-search'/></a>
	</div>

<div id='searchfs'>
<button class='close' type='button'>&#215;</button>
  <form action='/search' id='search-form' method='get'>
    <b:switch var='data:blog.locale'><b:case value='id'/><input name='q' placeholder='ketik katakunci' type='search' value=''/>
    <b:default/><input name='q' placeholder='type to search' type='search' value=''/></b:switch>
	<input name='max-results' type='hidden' value='8'/>
  </form>
</div>


	<div class='clear'/>
  </header> 
  
</div>
  <!-- header wrapper end -->

  <!-- wrapper start -->
  <div id='wrapper'>
  
  <b:section class='bellow-header-widget' id='bellow-header-widget' maxwidgets='1' showaddelement='yes'/>

  <div class='clear'/>
  
  <!-- post wrapper start -->
  <div id='post-wrapper'>
  <div class='post-container'>
  <b:if cond='data:blog.homepageUrl == data:blog.url'> 
  
  <b:section class='above-post-widget' id='above-post-widget' maxwidgets='1' showaddelement='yes'>
     <b:widget id='HTML3' locked='false' title='' type='HTML'>
       <b:widget-settings>
         <b:widget-setting name='content'>&lt;!-- Mgid Sensor --&gt;  
 &lt;script type=&quot;text/javascript&quot;&gt; (function() { var d = document, w = window; w.MgSensorData = w.MgSensorData || []; w.MgSensorData.push({ cid:445853, lng:&quot;us&quot;, nosafari:true, project: &quot;a.mgid.com&quot; }); var l = &quot;a.mgid.com&quot;; var n = d.getElementsByTagName(&quot;script&quot;)[0]; var s = d.createElement(&quot;script&quot;); s.type = &quot;text/javascript&quot;; s.async = true; var dt = !Date.now?new Date().valueOf():Date.now(); s.src = &quot;//&quot; + l + &quot;/mgsensor.js?d=&quot; + dt; n.parentNode.insertBefore(s, n); })();  
 &lt;/script&gt;  
 &lt;!-- /Mgid Sensor --&gt;</b:widget-setting>
       </b:widget-settings>
       <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
     </b:widget>
   </b:section>
  
  <div class='latest-post-title'>
	<h2><b:switch var='data:blog.locale'><b:case value='id'/>Postingan Terbaru<b:default/>Latest Posts</b:switch></h2>
  </div>
  </b:if>
  
  <b:section class='main' id='main' showaddelement='no'>
    <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='1'>
      <b:widget-settings>
        <b:widget-setting name='showDateHeader'>true</b:widget-setting>
        <b:widget-setting name='style.textcolor'>#5b86e5</b:widget-setting>
        <b:widget-setting name='showShareButtons'>true</b:widget-setting>
        <b:widget-setting name='showCommentLink'>true</b:widget-setting>
        <b:widget-setting name='style.urlcolor'>#36d1dc</b:widget-setting>
        <b:widget-setting name='showAuthor'>false</b:widget-setting>
        <b:widget-setting name='disableGooglePlusShare'>true</b:widget-setting>
        <b:widget-setting name='style.linkcolor'>#393939</b:widget-setting>
        <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
        <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
        <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
        <b:widget-setting name='style.layout'>1x1</b:widget-setting>
        <b:widget-setting name='showLabels'>true</b:widget-setting>
        <b:widget-setting name='showLocation'>true</b:widget-setting>
        <b:widget-setting name='showTimestamp'>true</b:widget-setting>
        <b:widget-setting name='postsPerAd'>2</b:widget-setting>
        <b:widget-setting name='showBacklinks'>false</b:widget-setting>
        <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
        <b:widget-setting name='showInlineAds'>true</b:widget-setting>
        <b:widget-setting name='showReactions'>false</b:widget-setting>
      </b:widget-settings>
      <b:includable id='main' var='top'>
	  <b:include data='posts' name='breadcrumb'/>
  <b:if cond='data:mobile == &quot;false&quot;'>

    <!-- posts -->
    <div class='blog-posts'>

      <b:include data='top' name='status-message'/>

      <data:defaultAdStart/>
      <b:loop values='data:posts' var='post'>
	  
	  <b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.homepageUrl == data:blog.url and data:post.isFirstPost == &quot;true&quot;'>
	  <meta expr:content='data:post.firstImageUrl' property='og:image'/>
	  </b:if>

        <b:if cond='data:post.isDateStart'>
          <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
            &lt;/div&gt;&lt;/div&gt;
          </b:if>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>
        <b:include data='post' name='post'/>
        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:include data='post' name='comment_picker'/>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:include data='post' name='comment_picker'/>
        </b:if>
        </div>
        <b:if cond='data:post.includeAd'>
          <b:if cond='data:post.isFirstPost'>
            <data:defaultAdEnd/>
          <b:else/>
            <data:adEnd/>
          </b:if>
          <div class='inline-ad'>
            <data:adCode/>
          </div>
          <data:adStart/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
      <data:adEnd/>
    </div>

    <!-- navigation -->
	<b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>

    <b:if cond='data:top.showStars'>
      <script src='//www.google.com/jsapi'/>
      <script>
        google.load(&quot;annotations&quot;, &quot;1&quot;, {&quot;locale&quot;: &quot;<data:top.languageCode/>&quot;});
        function initialize() {
          google.annotations.setApplicationId(<data:top.blogspotReviews/>);
          google.annotations.createAll();
          google.annotations.fetch();
        }
        google.setOnLoadCallback(initialize);
      </script>
    </b:if>

  <b:else/>
    <b:include name='mobile-main'/>
  </b:if>

  <b:if cond='data:top.showDummy'>
    <data:top.dummyBootstrap/>
  </b:if>

</b:includable>
      <b:includable id='backlinkDeleteIcon' var='backlink'>
  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
      <img src='//www.blogger.com/img/icon_delete13.gif'/>
    </a>
  </span>
</b:includable>
      <b:includable id='backlinks' var='post'>
  <a name='links'/><h4><data:post.backlinksLabel/></h4>
  <b:if cond='data:post.numBacklinks != 0'>
    <dl class='comments-block' id='comments-block'>
      <b:loop values='data:post.backlinks' var='backlink'>
        <div class='collapsed-backlink backlink-control'>
          <dt class='comment-title'>
            <span class='backlink-toggle-zippy'>&#160;</span>
            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
            <b:include data='backlink' name='backlinkDeleteIcon'/>
          </dt>
          <dd class='comment-body collapseable'>
            <data:backlink.snippet/>
          </dd>
          <dd class='comment-footer collapseable'>
            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
          </dd>
        </div>
      </b:loop>
    </dl>
  </b:if>
  <p class='comment-footer'>
    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
  </p>
</b:includable>
      <b:includable id='breadcrumb' var='posts'>
  <b:if cond='data:blog.homepageUrl != data:blog.url'> 
  <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
    <div class='breadcrumbs-outer'><div class='breadcrumbs'><span><a expr:href='data:blog.homepageUrl' rel='nofollow'><b:switch var='data:blog.locale'><b:case value='id'/>Beranda<b:default/>Home</b:switch></a></span> &#8250; <span><data:blog.pageName/></span>
    </div></div>
  <b:else/>
    <b:if cond='data:blog.pageType == &quot;item&quot;'>
    <b:loop values='data:posts' var='post'>
    <b:if cond='data:post.labels'>
    <div class='breadcrumbs-outer'><div class='breadcrumbs'><span itemscope='' itemtype='http://data-vocabulary.org/Breadcrumb'><a expr:href='data:blog.homepageUrl' itemprop='url'><span itemprop='title'><b:switch var='data:blog.locale'><b:case value='id'/>Beranda<b:default/>Home</b:switch></span></a></span> &#8250; <b:loop values='data:post.labels' var='label'><span itemscope='' itemtype='http://data-vocabulary.org/Breadcrumb'><a expr:href='data:label.url + &quot;?&amp;max-results=8&quot;' itemprop='url'><span itemprop='title'><data:label.name/></span></a></span><b:if cond='data:label.isLast != &quot;true&quot;'> &#8250; </b:if> </b:loop>
    </div></div>
    <b:else/>
    <div class='breadcrumbs-outer'><div class='breadcrumbs'><span><a expr:href='data:blog.homepageUrl' rel='nofollow'><b:switch var='data:blog.locale'><b:case value='id'/>Beranda<b:default/>Home</b:switch></a></span> &#8250; <span><b:switch var='data:blog.locale'><b:case value='id'/>Tanpa Kategori<b:default/>No Category</b:switch></span></div></div>
    </b:if>
    </b:loop>
  <b:else/>
    <b:if cond='data:blog.pageType == &quot;archive&quot;'>
    <div class='breadcrumbs-outer'><div class='breadcrumbs'> <span><a expr:href='data:blog.homepageUrl' rel='nofollow'><b:switch var='data:blog.locale'><b:case value='id'/>Beranda<b:default/>Home</b:switch></a></span> &#8250; <span><b:switch var='data:blog.locale'><b:case value='id'/>Arsip untuk<b:default/>Archive for</b:switch> <data:blog.pageName/></span> 
    </div></div>
  <b:else/>
    <b:if cond='data:blog.searchQuery'>
    <div class='breadcrumbs-outer'><div class='breadcrumbs'><span><a expr:href='data:blog.homepageUrl' rel='nofollow'><b:switch var='data:blog.locale'><b:case value='id'/>Beranda<b:default/>Home</b:switch></a></span> &#8250; <span><data:blog.pageName/></span>
    </div></div>
  <b:else/>
    <b:if cond='data:blog.pageType == &quot;index&quot;'> 
    <div class='breadcrumbs-outer'><div class='breadcrumbs'>
    <b:if cond='data:blog.pageName == &quot;&quot;'> <span><a expr:href='data:blog.homepageUrl' rel='nofollow'><b:switch var='data:blog.locale'><b:case value='id'/>Beranda<b:default/>Home</b:switch></a></span> &#8250; <span>Daftar Artikel</span>
    <b:else/>
    <span><a expr:href='data:blog.homepageUrl' rel='nofollow'><b:switch var='data:blog.locale'><b:case value='id'/>Beranda<b:default/>Home</b:switch></a></span> &#8250; <span><data:blog.pageName/></span> 
    </b:if>
    </div></div>
  </b:if>
  </b:if>
  </b:if>
  </b:if>
  </b:if>
  </b:if>
</b:includable>
      <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <div class='pesan-komentar'><p><data:blogCommentMessage/></p></div>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc + &quot;&amp;skin=contempo&quot; + data:variantParam' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' scrolling='no' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <div class='pesan-komentar'><p><data:blogCommentMessage/></p></div>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc + &quot;&amp;skin=contempo&quot; + data:variantParam' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' scrolling='no' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
      <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='//www.blogger.com/img/icon_delete13.gif'/>
      </a>
    </b:if>
  </span>
</b:includable>
      <b:includable id='comment_count_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.canonicalUrl'>
    </span>
  <b:else/>
    <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
      <data:post.commentLabelFull/>:
    </a>
  </b:if>
</b:includable>
      <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <b:include data='post' name='iframe_comments'/>
  <b:else/>
    <b:if cond='data:post.showThreadedComments'>
      <b:include data='post' name='threaded_comments'/>
    <b:else/>
      <b:include data='post' name='comments'/>
    </b:if>
  </b:if>
</b:includable>
      <b:includable id='comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <b:if cond='data:post.allowComments'>
      <h3>
        <b:switch var='data:blog.locale'><b:case value='id'/>
            <b:if cond='data:post.numComments == 0'>Belum ada Komentar untuk &quot;<data:blog.pageName/>&quot;</b:if> <b:if cond='data:post.numComments &gt; 0'> <data:post.numComments/> Komentar untuk &quot;<data:blog.pageName/>&quot; </b:if>
        <b:default/>
            <b:if cond='data:post.numComments == 0'>0 Response to &quot;<data:blog.pageName/>&quot;</b:if> <b:if cond='data:post.numComments == 1'> 1 Response to &quot;<data:blog.pageName/>&quot; </b:if> <b:if cond='data:post.numComments &gt; 1'> <data:post.numComments/> Responses to &quot;<data:blog.pageName/>&quot;</b:if>
        </b:switch>
      </h3>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <b:if cond='data:post.hasOlderLinks'>
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
              &#160;
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
              &#160;
          </b:if>

          <data:post.commentRangeText/>

          <b:if cond='data:post.hasNewerLinks'>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </b:if>
        </span>
      </b:if>

      <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
        <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
          <b:loop values='data:post.comments' var='comment'>
            <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
              <b:if cond='data:comment.favicon'>
                <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
              </b:if>
              <a expr:name='data:comment.anchorName'/>
              <b:if cond='data:blog.enabledCommentProfileImages'>
                <data:comment.authorAvatarImage/>
              </b:if>
              <b:if cond='data:comment.authorUrl'>
                <a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.author/></a>
              <b:else/>
                <data:comment.author/>
              </b:if>
              <data:commentPostedByMsg/>
            </dt>
            <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
              <b:if cond='data:comment.isDeleted'>
                <span class='deleted-comment'><data:comment.body/></span>
              <b:else/>
                <p>
                  <data:comment.body/>
                </p>
              </b:if>
            </dd>
            <dd class='comment-footer'>
              <span class='comment-timestamp'>
                <a expr:href='data:comment.url' title='comment permalink'>
                  <data:comment.timestamp/>
                </a>
                <b:include data='comment' name='commentDeleteIcon'/>
              </span>
            </dd>
          </b:loop>
        </dl>
      </div>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
            <data:post.oldestLinkText/>
          </a>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
            <data:post.olderLinkText/>
          </a>
          &#160;
          <data:post.commentRangeText/>
          &#160;
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
            <data:post.newerLinkText/>
          </a>
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
            <data:post.newestLinkText/>
          </a>
        </span>
      </b:if>

      <p class='comment-footer'>
        <b:if cond='data:post.embedCommentForm'>
          <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='comment-form'/>
          <b:else/>
            <data:post.noNewCommentsText/>
          </b:if>
        <b:else/>
          <b:if cond='data:post.allowComments'>
            <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
          </b:if>
        </b:if>

      </p>
    </b:if>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
       <b:if cond='data:post.showBacklinks'>
         <b:include data='post' name='backlinks'/>
       </b:if>
    </div>
    </div>
  </div>
</b:includable>
      <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
        <b:include data='feedLinks' name='feedLinksBody'/>
      </div>
    </b:if>

    <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.allowComments'>
          <b:if cond='data:post.feedLinks'>
            <b:include data='post.feedLinks' name='feedLinksBody'/>
          </b:if>
        </b:if>
      </b:loop>
    </div>
  </b:if>
</b:includable>
      <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:feedLinksMsg/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
      <b:includable id='iframe_comments' var='post'>

  <b:if cond='data:post.allowIframeComments'>
    <script expr:src='data:post.iframeCommentSrc'/>
    <div class='cmt_iframe_holder' expr:data-href='data:post.canonicalUrl' expr:data-viewtype='data:post.viewType'/>

    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
    </b:if>
  </b:if>
</b:includable>
      <b:includable id='labelsinfo' var='post'>
  <b:if cond='data:post.labels'>
  <div class='label-line'>
  <span class='label-info-th'>
  <b:loop values='data:post.labels' var='label'>
	<a expr:href='data:label.url + &quot;?&amp;max-results=8&quot;' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'/>
  </b:loop>
  </span>
  </div>
  </b:if>
</b:includable>
      <b:includable id='mobile-index-post' var='post'>
<!-- MOBILE INDEX POST HERE -->
  <div class='mobile-date-outer date-outer'>

    <div class='mobile-post-outer'>

        <div class='mobile-index-contents'>
          <b:if cond='data:post.thumbnailUrl'>
            <div class='mobile-index-thumbnail'>
              <div class='Image'>
                <img expr:src='data:post.thumbnailUrl'/>
              </div>
            </div>
			<b:else/>
            <div class='mobile-index-thumbnail'>
              <div class='Image'>
				<img expr:alt='data:post.title' expr:title='data:post.title' src='//3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/s66-c/no-image.png'/>
              </div>
            </div>
          </b:if>

      <a expr:href='data:post.url'>
        <h3 class='mobile-index-title entry-title' itemprop='name'>
          <data:post.title/>
        </h3>
	  </a>		  

          <div class='post-body'>

		    <div class='post-info'>
				<b:if cond='data:top.showAuthor'>
					<b:if cond='data:post.authorProfileUrl'>
					  <span class='author-info'>
					  <span itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
						<meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
						<a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
						  <span itemprop='name'><data:post.author/></span>
						</a>
					  </span>
					  </span>
					<b:else/>
					  <span class='author-info'>
					  <span itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
						<span itemprop='name'><data:post.author/></span>
					  </span>
					  </span>
					</b:if>
				</b:if> 
				<b:if cond='data:top.showTimestamp'>
				<b:if cond='data:post.url'>
				  <meta expr:content='data:post.canonicalUrl' itemprop='url'/>
				  <span class='time-info'>
				  / <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><span class='published updated' expr:content='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></span></a>
				  </span>
				</b:if>
				</b:if> 
				<b:if cond='data:blog.pageType != &quot;item&quot;'>
				  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
					<b:if cond='data:post.allowComments'>
					  <span class='comment-info'>
					  / <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'> <b:if cond='data:post.numComments == 0'> Add Comment </b:if> <b:if cond='data:post.numComments == 1'> 1 Comment </b:if> <b:if cond='data:post.numComments &gt; 1'> <data:post.numComments/> Comments </b:if> 
					  </a>
					  </span>
					</b:if>
				  </b:if>
				</b:if>	
			</div>

          </div>
        </div>

        <div style='clear: both;'/>

    </div>
	
  </div>
</b:includable>
      <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
      <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clear'/>
</b:includable>
      <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
          <b:if cond='data:post.thumbnailUrl'>
            <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
          </b:if>
          <meta expr:content='data:blog.blogId' itemprop='blogId'/>
          <meta expr:content='data:post.id' itemprop='postId'/>

          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            <h3 class='post-title entry-title' itemprop='name'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:elseif cond='data:post.url and data:blog.url != data:post.url'/>
                <a expr:href='data:post.url'><data:post.title/></a>
              <b:else/>
                <data:post.title/>
              </b:if>
            </h3>
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
            <data:post.body/>
            <div style='clear: both;'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <span itemprop='name'><data:post.author/></span>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <span itemprop='name'><data:post.author/></span>
                    </span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <meta expr:content='data:post.url.canonical' itemprop='url'/>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><span class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></span></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                                  and data:post.allowComments' data='post' name='comment_count_picker'/>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
      </div>
    </div>
  </div>
</b:includable>
      <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
      <b:includable id='post' var='post'>  
  <article class='post'>

	<b:switch var='data:blog.pageType'>
	<b:case value='static_page'/>
	<!-- Posting halaman statis -->
	  <div>
	    <b:if cond='data:post.title'>
          <h1 class='post-title entry-title'>
            <b:if cond='data:post.link'>
              <a expr:href='data:post.link'><data:post.title/></a>
            <b:else/>
              <b:if cond='data:post.url'>
                <b:if cond='data:blog.url != data:post.url'>
                  <a expr:href='data:post.url'><data:post.title/></a>
                <b:else/>
                  <data:post.title/>
                </b:if>
                <b:else/>
                  <data:post.title/>
              </b:if>
            </b:if>
          </h1>
		</b:if>
		<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
			<div id='body-post-it'>
			<data:post.body/>
			</div>
			<div style='clear: both;'/> 
		</div>	
	  </div>
	<script>
	if (typeof(BLOG_attachCsiOnload) != &#39;undefined&#39; &amp;&amp; BLOG_attachCsiOnload != null) { window[&#39;blogger_templates_experiment_id&#39;] = &quot;templatesV1&quot;;window[&#39;blogger_blog_id&#39;] = &#39;<data:blog.blogId/>&#39;;BLOG_attachCsiOnload(&#39;&#39;); }_WidgetManager._Init(&#39;//www.blogger.com/rearrange?blogIDx3d<data:blog.blogId/>&#39;,&#39;<data:blog.homepageUrl/>&#39;,&#39;<data:blog.blogId/>&#39;);
	_WidgetManager._RegisterWidget(&#39;_ContactFormView&#39;, new _WidgetInfo(&#39;ContactForm1&#39;, &#39;footer1&#39;, null, document.getElementById(&#39;ContactForm1&#39;), {&#39;contactFormMessageSendingMsg&#39;: &#39;Sending...&#39;, &#39;contactFormMessageSentMsg&#39;: &#39;Your message has been sent.&#39;, &#39;contactFormMessageNotSentMsg&#39;: &#39;Message could not be sent. Please try again later.&#39;, &#39;contactFormInvalidEmailMsg&#39;: &#39;A valid email address is required.&#39;, &#39;contactFormEmptyMessageMsg&#39;: &#39;Message field cannot be empty.&#39;, &#39;title&#39;: &#39;Contact Form&#39;, &#39;blogId&#39;: &#39;<data:blog.blogId/>&#39;, &#39;contactFormNameMsg&#39;: &#39;Name&#39;, &#39;contactFormEmailMsg&#39;: &#39;Email&#39;, &#39;contactFormMessageMsg&#39;: &#39;Message&#39;, &#39;contactFormSendMsg&#39;: &#39;Send&#39;, &#39;submitUrl&#39;: &#39;https://www.blogger.com/contact-form.do&#39;}, &#39;displayModeFull&#39;));
	</script> 	
	  <b:case value='item'/>
	  <!-- Posting halaman item -->
	  <div>
	  <b:if cond='data:post.firstImageUrl'>
		<meta expr:content='data:post.firstImageUrl' itemprop='image'/>
	  </b:if>
	  <a expr:name='data:post.id'/>
	    <b:if cond='data:post.title'>
          <h1 class='post-title entry-title' itemprop='name headline'>
            <b:if cond='data:post.link'>
              <a expr:href='data:post.link'><data:post.title/></a>
            <b:else/>
              <b:if cond='data:post.url'>
                <b:if cond='data:blog.url != data:post.url'>
                  <a expr:href='data:post.url'><data:post.title/></a>
                <b:else/>
                  <data:post.title/>
                </b:if>
                <b:else/>
                  <data:post.title/>
              </b:if>
            </b:if>
          </h1>
		</b:if>
		
		<div class='post-info info-3'>
			<b:include data='post' name='postauthorinfo'/> 
			<b:include data='post' name='postdateinfo'/>
			<b:include data='post' name='postcommentinfo2'/>
			<b:include data='post' name='postQuickEdit'/>
		</div>

<script type='text/javascript'>
//<![CDATA[
var relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array;function bacajuga(e){for(var l=0;l<e.feed.entry.length;l++){var t=e.feed.entry[l];relatedTitles[relatedTitlesNum]=t.title.$t;for(var r=0;r<t.link.length;r++)if("alternate"==t.link[r].rel){relatedUrls[relatedTitlesNum]=t.link[r].href,relatedTitlesNum++;break}}}function removeRelatedDuplicates(){for(var e=new Array(0),l=new Array(0),t=0;t<relatedUrls.length;t++)contains(e,relatedUrls[t])||(e.length+=1,e[e.length-1]=relatedUrls[t],l.length+=1,l[l.length-1]=relatedTitles[t]);relatedTitles=l,relatedUrls=e}function contains(e,l){for(var t=0;t<e.length;t++)if(e[t]==l)return!0;return!1}function printRelatedLabels(e){for(var l=0;l<relatedUrls.length;l++)relatedUrls[l]==e&&(relatedUrls.splice(l,1),relatedTitles.splice(l,1));var t=Math.floor((relatedTitles.length-1)*Math.random());l=0;if(widgetBacaJuga==1&&relatedTitles.length>1){for(document.write(judulbacajuga),document.write("<ul>");l<relatedTitles.length&&l<20&&l<jumlahbacajuga;)document.write('<li><a href="'+relatedUrls[t]+'">'+relatedTitles[t]+"</a></li>"),t<relatedTitles.length-1?t++:t=0,l++;document.write("</ul>")}relatedUrls.splice(0,relatedUrls.length),relatedTitles.splice(0,relatedTitles.length)}
//]]>
</script>
				
		<div id='baca-juga'>
		<b:loop values='data:post.labels' var='label'>
		<b:if cond='data:label.isLast != &quot;true&quot;'>
		</b:if>
		<script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=bacajuga&amp;max-results=5&quot;' type='text/javascript'/>
		</b:loop>
		<script type='text/javascript'>
		var judulbacajuga=&quot;<b:switch var='data:blog.locale'><b:case value='id'/><h2>Baca Juga</h2><b:default/><h2>Related</h2></b:switch>&quot;
		var jumlahbacajuga=3;
		removeRelatedDuplicates();
		printRelatedLabels(&quot;<data:post.url/>&quot;);
		</script>
		</div>

		<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
		<meta expr:content='data:post.snippet' itemprop='description'/>
		
		<div id='body-post-it'>
		<data:post.body/>
		</div>
		
		<div style='clear: both;'/>
		
		<b:include data='post' name='postauthorbox'/>	
		
		<b:include data='post' name='postsharebutton'/>
		
		<b:include data='post' name='relatedpost'/>
		
      </div>
	  </div>
	<b:default/>
	<!-- Posting halaman default (index, arsip, dll.) -->
	  <b:include data='post' name='labelsinfo'/>
	  <b:include data='post' name='postthumbnail'/>
	  <b:if cond='data:post.firstImageUrl'>
		<meta expr:content='data:post.firstImageUrl' itemprop='image'/>
	  </b:if>
	  <a expr:name='data:post.id'/>
	    <b:if cond='data:post.title'>
          <h2 class='post-title entry-title' itemprop='name headline'>
            <b:if cond='data:post.link'>
              <a expr:href='data:post.link'><data:post.title/></a>
            <b:else/>
              <b:if cond='data:post.url'>
                <b:if cond='data:blog.url != data:post.url'>
                  <a expr:href='data:post.url'><data:post.title/></a>
                <b:else/>
                  <data:post.title/>
                </b:if>
                <b:else/>
                  <data:post.title/>
              </b:if>
            </b:if>
          </h2>
		</b:if>
		
		<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='description'>
			<div class='post-snippet'>
			<b:eval expr='snippet(data:post.longSnippet, {length: 130})'/>
			</div>
		</div>
		<div class='post-info info-1'>
			<b:include data='post' name='postauthorinfo'/>
			<b:include data='post' name='postdateinfo'/>
			<b:include data='post' name='postcommentinfo'/>
			<b:include data='post' name='postQuickEdit'/>
		</div> 
	</b:switch>
	<div style='clear: both;'/> 	
  </article>
 
</b:includable>
      <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
	<span class='edit-post'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
		<em>Edit</em>
      </a>
	</span>
    </span>
  </b:if>
</b:includable>
      <b:includable id='postauthorbox' var='post'>
<b:if cond='data:post.authorAboutMe'>
<div class='author-profile' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
  <b:if cond='data:post.authorPhoto.url'>
	<img expr:src='data:post.authorPhoto.url' itemprop='image' width='90px'/>
  </b:if>
  <div>
	<a class='g-profile' href='/' itemprop='url' rel='author' title='author profile'>
	  <span itemprop='name'><data:post.author/></span>
	</a>
  </div>
  <span itemprop='description'><data:post.authorAboutMe/></span>
</div>
</b:if>
</b:includable>
      <b:includable id='postauthorinfo' var='post'>
<b:if cond='data:top.showAuthor'>
<span class='author-info'>
    <b:switch var='data:blog.locale'><b:case value='id'/>Ditulis oleh<b:default/>Written By</b:switch> <span itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
	<meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
	<b:if cond='data:post.authorProfileUrl'>
	<a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
	  <span itemprop='name'><data:post.author/></span>
	</a>
	<b:else/>
	  <span itemprop='name'><data:post.author/></span>
	</b:if>  
	</span>
</span>
</b:if>
</b:includable>
      <b:includable id='postcommentinfo' var='post'>
<b:if cond='data:post.allowComments'>
  <span class='comment-info'>
  <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'> 
  <b:switch var='data:blog.locale'><b:case value='id'/>
  <b:if cond='data:post.numComments == 0'> Tambah Komentar </b:if> <b:if cond='data:post.numComments &gt; 0'> <data:post.numComments/> Komentar </b:if>
  <b:default/>
  <b:if cond='data:post.numComments == 0'> Add Comment </b:if> <b:if cond='data:post.numComments == 1'> 1 Comment </b:if> <b:if cond='data:post.numComments &gt; 1'> <data:post.numComments/> Comments </b:if> 
  </b:switch>
  </a>
  </span>
</b:if>
</b:includable>
      <b:includable id='postcommentinfo2' var='post'>
<b:if cond='data:post.allowComments'>
  <span class='comment-info'>
  <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'> 
  <b:switch var='data:blog.locale'><b:case value='id'/>
  <b:if cond='data:post.numComments == 0'> Tambah Komentar </b:if> <b:if cond='data:post.numComments &gt; 0'> <data:post.numComments/> Komentar </b:if>
  <b:default/>
  <b:if cond='data:post.numComments == 0'> Add Comment </b:if> <b:if cond='data:post.numComments == 1'> 1 Comment </b:if> <b:if cond='data:post.numComments &gt; 1'> <data:post.numComments/> Comments </b:if> 
  </b:switch>
  </a>
  </span>
</b:if>
</b:includable>
      <b:includable id='postdateinfo' var='post'>
<b:if cond='data:post.dateHeader'>
 <span class='time-info'><span class='updated published' expr:title='data:post.timestampISO8601'>
 <meta expr:content='data:post.timestampISO8601' itemprop='datePublished'/>
  <data:post.dateHeader/>
 </span></span>
<b:else/>
<b:if cond='data:top.showTimestamp'>
 <span class='time-info'><span class='updated published' expr:title='data:post.timestampISO8601'>
 <meta expr:content='data:post.timestampISO8601' itemprop='datePublished'/>
  <data:post.timestamp/>
 </span></span>
</b:if>
</b:if>
</b:includable>
      <b:includable id='postlabelinfo' var='post'>
<b:if cond='data:post.labels'>
  <span class='label-info'>
  <b:loop values='data:post.labels' var='label'>
	<a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'/>
  </b:loop>
  </span>
</b:if>
</b:includable>
      <b:includable id='postsharebutton' var='post'>
<div id='share-container'>
<div class='label-line-c'>
<p class='share-this-pleaseeeee'><b:switch var='data:blog.locale'><b:case value='id'/>Bagikan Artikel ini<b:default/>Share this post</b:switch></p>
</div>
<div id='share'>
  <!-- facebook -->
  <a class='facebook' expr:href='&quot;http://www.facebook.com/sharer.php?u=&quot; + data:blog.url' rel='nofollow' target='_blank'><i class='fa fa-facebook'/></a>
  <!-- twitter -->
  <a class='twitter' expr:href='&quot;http://twitter.com/share?url=&quot; + data:post.url' rel='nofollow' target='_blank'><i class='fa fa-twitter'/></a>
  <!-- linkedin 
  <a class='linkedin' expr:href='&quot;http://www.linkedin.com/shareArticle?mini=true&amp;amp;url=&quot; + data:post.url + &quot;&amp;amp;title=&quot; + data:post.title + &quot;&amp;amp;summary=&quot; + data:post.snippets' rel='nofollow' target='_blank'><i class='fa fa-linkedin'></i></a> -->
  <!-- pinterest -->
  <a class='pinterest' expr:href='&quot;http://pinterest.com/pin/create/button/?url=&quot; + data:post.url + &quot;&amp;amp;media=&quot; + data:blog.postImageUrl + &quot;&amp;amp;description=&quot; + data:post.title' rel='nofollow' target='_blank'><i class='fa fa-pinterest-p'/></a> 
  <a class='whatsapp' expr:href='&quot;https://wa.me/?text=&quot; + data:post.title + &quot;%20%2D%20&quot; + data:post.url'><i aria-hidden='true' class='fa fa-whatsapp'/></a>
</div>
</div>
</b:includable>
      <b:includable id='postsubscribebox' var='post'>
<div class='berlangganan-box'>
	<form action='https://feedburner.google.com/fb/a/mailverify' method='post' onsubmit='window.open(&apos;https://feedburner.google.com/fb/a/mailverify?uri=BlogMasSugeng&apos;, &apos;popupwindow&apos;, &apos;scrollbars=yes,width=550,height=520&apos;);return true' target='popupwindow'>
	<p>Berlangganan update artikel terbaru via email:</p><p><input class='email-address' name='email' placeholder='Masukan alamat email...' type='text'/></p><input name='uri' type='hidden' value='BlogMasSugeng'/>
	<input name='loc' type='hidden' value='en_US'/>
	<p><input class='submit-email' type='submit' value='Berlangganan'/></p>
	</form>
</div>
<!-- 
...
Edit ID feedburner BlogMasSugeng di atas dengan ID feedburner milik sobat 
...
-->
</b:includable>
      <b:includable id='postthumbnail' var='post'>
  <div class='img-thumbnail'>
  <b:if cond='data:post.firstImageUrl'>
	<a expr:href='data:post.url'><img expr:alt='data:post.title' expr:src='resizeImage(data:post.firstImageUrl, 420, &quot;300:200&quot;)' expr:title='data:post.title'/>
	</a>
  <b:elseif cond='data:post.thumbnailUrl'/>
	<a expr:href='data:post.url'><img expr:alt='data:post.title' expr:src='resizeImage(data:post.thumbnailUrl, 420, &quot;300:200&quot;)' expr:title='data:post.title'/>
	</a>
  <b:else/>
	<a expr:href='data:post.url'><img expr:alt='data:post.title' expr:title='data:post.title' src='//3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/w420-h280-c/no-image.png'/>
	</a>
  </b:if>
  </div>

</b:includable>
      <b:includable id='relatedpost' var='post'>
<div class='related-post' expr:id='&quot;related-post-&quot; + data:post.id'/>
<script>
var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>, </b:if></b:loop></b:if>];
var relatedPostConfig = {
    homePage: &quot;<data:blog.homepageUrl/>&quot;,
    widgetTitle: &quot;&lt;div class=&#39;label-line-c&#39;&gt;&lt;h4&gt;<b:switch var='data:blog.locale'><b:case value='id'/>Artikel Terkait<b:default/>Related Posts</b:switch>&lt;/h4&gt;&lt;/div&gt;&quot;,
    numPosts: 8,
    titleLength: &quot;auto&quot;,
    thumbnailWidth: 250,
	thumbnailHeight: 170,
    noImage: &quot;//3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/w255-h170-c/no-image.png&quot;,
    containerId: &quot;related-post-<data:post.id/>&quot;,
    newTabLink: false,
    moreText: &quot;Read More&quot;,
    widgetStyle: 3,
    callBack: function() {}
};
</script>
</b:includable>
      <b:includable id='shareButtons' var='post'>
  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showOrkutButton'><a class='goog-inline-block share-button sb-orkut' expr:href='data:post.sharePostUrl + &quot;&amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToOrkutMsg/></span></a></b:if><b:if cond='data:top.showDummy'><div class='goog-inline-block dummy-container'><data:post.dummyTag/></div></b:if>
</b:includable>
      <b:includable id='status-message'>
  <b:if cond='data:navMessage'>
  <div class='status-msg-wrap'>
    <div class='status-msg-body'>
      <data:navMessage/>
    </div>
    <div class='status-msg-border'>
      <div class='status-msg-bg'>
        <div class='status-msg-hidden'><data:navMessage/></div>
      </div>
    </div>
  </div>
  <div style='clear: both;'/>
  </b:if>
</b:includable>
      <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <div class='pesan-komentar'><p><data:blogCommentMessage/></p></div>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc + &quot;&amp;skin=contempo&quot; + data:variantParam' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' scrolling='no' src='' style='display: none' width='100%'/>
    <b:else/>
      <div class='pesan-komentar'><p><data:blogCommentMessage/></p></div>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc + &quot;&amp;skin=contempo&quot; + data:variantParam' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' scrolling='no' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;, &#39;<data:post.communityId/>&#39;);
    </script>
  </div>
</b:includable>
      <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc'/>

  <script>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var config = <data:post.commentConfig/>;

// <![CDATA[
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
            }
          }
        }
        return entry.content.$t;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == config.authorName
              && comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/delete-comment.g?blogID='
               + config.blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          document.getElementById(domId).insertBefore(replybox.parentNode, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
      <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
      <h3>
         <b:switch var='data:blog.locale'><b:case value='id'/>
            <b:if cond='data:post.numComments == 0'>Belum ada Komentar untuk &quot;<data:blog.pageName/>&quot;</b:if> <b:if cond='data:post.numComments &gt; 0'> <data:post.numComments/> Komentar untuk &quot;<data:blog.pageName/>&quot; </b:if>
        <b:default/>
            <b:if cond='data:post.numComments == 0'>0 Response to &quot;<data:blog.pageName/>&quot;</b:if> <b:if cond='data:post.numComments == 1'> 1 Response to &quot;<data:blog.pageName/>&quot; </b:if> <b:if cond='data:post.numComments &gt; 1'> <data:post.numComments/> Responses to &quot;<data:blog.pageName/>&quot;</b:if>
        </b:switch>
      </h3>

    <div class='comments-content'>
      <b:if cond='data:post.embedCommentForm'>
        <b:include data='post' name='threaded_comment_js'/>
      </b:if>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
       <b:if cond='data:post.showBacklinks'>
         <b:include data='post' name='backlinks'/>
       </b:if>
    </div>
    </div>
  </div>
</b:includable>
    </b:widget>
  </b:section>

  <b:section class='iklan-atas' id='iklan-atas' maxwidgets='1' showaddelement='yes'>
    <b:widget id='HTML996' locked='true' title='Iklan Atas Artikel' type='HTML' version='1'>
      <b:widget-settings>
        <b:widget-setting name='content'/>
      </b:widget-settings>
      <b:includable id='main'>
	  <b:if cond='data:blog.pageType in {&quot;item&quot;}'>
	  <!-- only display title if it's non-empty -->
	  <b:if cond='data:title != &quot;&quot;'>
		<h2 class='title'><data:title/></h2>
	  </b:if>
	  <div class='widget-content'>
	    <div id='kode-iklan-atas'>
		<data:content/>
		</div>
	  </div>
	  </b:if>
	  
	  </b:includable>
    </b:widget>
  </b:section>  
  
  <b:section class='iklan-tengah1' id='iklan-tengah1' maxwidgets='1' showaddelement='yes'>
      <b:widget id='HTML997' locked='true' title='Iklan Tengah Artikel 1' type='HTML' version='1'>
        <b:widget-settings>
          <b:widget-setting name='content'/>
        </b:widget-settings>
        <b:includable id='main'>
	  <b:if cond='data:blog.pageType in {&quot;item&quot;}'>
	  <!-- only display title if it's non-empty -->
	  <b:if cond='data:title != &quot;&quot;'>
		<h2 class='title'><data:title/></h2>
	  </b:if>
	  <div class='widget-content'>
	    <div id='kode-iklan-tengah1'>
		<data:content/>
		</div>
	  </div>
	  </b:if>
	  </b:includable>
      </b:widget>
    </b:section>
  <b:section class='iklan-tengah2' id='iklan-tengah2' maxwidgets='1' showaddelement='yes'>
    <b:widget id='HTML998' locked='true' title='Iklan Tengah Artikel 2' type='HTML' version='1'>
      <b:widget-settings>
        <b:widget-setting name='content'/>
      </b:widget-settings>
      <b:includable id='main'>
	  <b:if cond='data:blog.pageType in {&quot;item&quot;}'>
	  <!-- only display title if it's non-empty -->
	  <b:if cond='data:title != &quot;&quot;'>
		<h2 class='title'><data:title/></h2>
	  </b:if>
	  <div class='widget-content'>
	    <div id='kode-iklan-tengah2'>
		<data:content/>
		</div>
	  </div>
	  </b:if>
	  </b:includable>
    </b:widget>
  </b:section>
  <b:section class='iklan-bawah' id='iklan-bawah' maxwidgets='1' showaddelement='yes'>
    <b:widget id='HTML999' locked='true' title='Iklan Bawah Artikel' type='HTML' version='1'>
      <b:widget-settings>
        <b:widget-setting name='content'/>
      </b:widget-settings>
      <b:includable id='main'>
	  <b:if cond='data:blog.pageType in {&quot;item&quot;}'>
	  <!-- only display title if it's non-empty -->
	  <b:if cond='data:title != &quot;&quot;'>
		<h2 class='title'><data:title/></h2>
	  </b:if>
	  <div class='widget-content'>
	    <div id='kode-iklan-bawah'>
		<data:content/>
		</div>
	  </div>
	  </b:if>
	  
	  </b:includable>
    </b:widget>
  </b:section>
<b:if cond='data:blog.pageType in {&quot;item&quot;}'>
<script type='text/javascript'>
function insertAfter(addition, konten) {
    var parent = konten.parentNode;
    if (parent.lastChild == konten) {
        parent.appendChild(addition);
    } else {
        parent.insertBefore(addition, konten.nextSibling);
    }
}
function insertAbove(addition, konten) {
    var parent = konten.parentNode;
	parent.insertBefore(addition, konten);
}
function insertBellow(addition) {
    var parent = konten;
	parent.appendChild(addition);
}
var iklan1 = document.getElementById(&quot;kode-iklan-tengah1&quot;);
var iklan2 = document.getElementById(&quot;kode-iklan-tengah2&quot;);
var iklanAtas = document.getElementById(&quot;kode-iklan-atas&quot;);
var iklanBawah = document.getElementById(&quot;kode-iklan-bawah&quot;);
var bacaJuga = document.getElementById(&quot;baca-juga&quot;);
var konten = document.getElementById(&quot;body-post-it&quot;);
var lokasi = konten.querySelectorAll(&quot;br,p,div &gt; br,div &gt; div &gt; br,div &gt; div &gt; div &gt; br,div &gt; p,div &gt; div &gt; p,div &gt; div &gt; div &gt; p,span &gt; br, span &gt; p&quot;);
if (lokasi.length &gt; 0) {
	insertAbove(iklanAtas,konten); 
	insertBellow(iklanBawah);
} 
if (lokasi.length &gt; lokasiIklanTengah1) {
    insertAfter(iklan1,lokasi[lokasiIklanTengah1]);
} 
else {
	iklan1.innerHTML = &quot;&quot;;
}
if (lokasi.length &gt; lokasiIklanTengah2) {
    insertAfter(iklan2,lokasi[lokasiIklanTengah2]);
} 
else {
	iklan2.innerHTML = &quot;&quot;;
}
if (lokasi.length &gt; lokasiBacaJuga) {
    insertAfter(bacaJuga,lokasi[lokasiBacaJuga]);
} 
else {
	bacaJuga.innerHTML = &quot;&quot;;
}
</script>
</b:if>
  </div>

  </div>
  <!-- post wrapper end -->

  
  <!-- sidebar wrapper start -->
  <aside id='sidebar-wrapper'>
  <div class='sidebar-container'>
  <b:section class='sidebar' id='sidebar' preferred='yes'>
    <b:widget id='AdSense1' locked='false' title='' type='AdSense'>
      <b:includable id='main'>
  <div class='widget-content'>
    <data:adCode/>
    <b:include name='quickedit'/>
  </div>
</b:includable>
    </b:widget>
    <b:widget id='Label1' locked='false' title='Labels' type='Label'>
      <b:widget-settings>
        <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
        <b:widget-setting name='display'>LIST</b:widget-setting>
        <b:widget-setting name='selectedLabelsList'/>
        <b:widget-setting name='showType'>ALL</b:widget-setting>
        <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
      </b:widget-settings>
      <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2><data:title/></h2>
  </b:if>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <b:if cond='data:blog.url == data:label.url'>
              <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
            <b:else/>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
            </b:if>
            <b:if cond='data:showFreqNumbers'>
              <span dir='ltr'>(<data:label.count/>)</span>
            </b:if>
          </li>
        </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
    </b:widget>
    <b:widget cond='data:posts any (p =&gt; p.id != data:view.postId)' id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts'>
      <b:widget-settings>
        <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
        <b:widget-setting name='showThumbnails'>true</b:widget-setting>
        <b:widget-setting name='showSnippets'>true</b:widget-setting>
        <b:widget-setting name='timeRange'>LAST_YEAR</b:widget-setting>
      </b:widget-settings>
      <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content popular-posts'>
    <ul>
      <b:loop values='data:posts' var='post'>
      <li>
        <b:if cond='!data:showThumbnails'>
          <b:if cond='!data:showSnippets'>
            <!-- (1) No snippet/thumbnail -->
            <a expr:href='data:post.href'><data:post.title/></a>
          <b:else/>
            <!-- (2) Show only snippets -->
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <div class='item-snippet'><data:post.snippet/></div>
          </b:if>
        <b:else/>
          <!-- (3) Show only thumbnails or (4) Snippets and thumbnails. -->
          <div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'>
            <b:if cond='data:post.featuredImage.isResizable or data:post.thumbnail'>
              <div class='item-thumbnail'>
                <a expr:href='data:post.href' target='_blank'>
                  <b:with value='data:post.featuredImage.isResizable                                  ? resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)                                  : data:post.thumbnail' var='image'>
                    <img alt='' border='0' expr:src='data:image'/>
                  </b:with>
                </a>
              </div>
            </b:if>
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <b:if cond='data:showSnippets'>
              <div class='item-snippet'><data:post.snippet/></div>
            </b:if>
          </div>
          <div style='clear: both;'/>
        </b:if>
      </li>
      </b:loop>
    </ul>
    <b:include name='quickedit'/>
  </div>
</b:includable>
    </b:widget>
    <b:widget id='Profile1' locked='false' title='About Me' type='Profile'>
      <b:widget-settings>
        <b:widget-setting name='showaboutme'>true</b:widget-setting>
        <b:widget-setting name='showlocation'>false</b:widget-setting>
      </b:widget-settings>
      <b:includable id='main'>
    <b:if cond='data:title != &quot;&quot;'>
      <h2><data:title/></h2>
    </b:if>
    <div class='widget-content'>
    <b:if cond='data:team'> <!-- team blog profile -->
      <ul>
        <b:loop values='data:authors' var='i'>
          <li><a class='profile-name-link g-profile' expr:href='data:i.userUrl' expr:style='&quot;background-image: url(&quot; + data:i.profileLogo + &quot;);&quot;'><data:i.display-name/></a></li>
        </b:loop>
      </ul>

    <b:else/> <!-- normal blog profile -->

      <b:if cond='data:photo.url != &quot;&quot;'>
        <a expr:href='data:userUrl'><img class='profile-img' expr:alt='data:messages.myPhoto' expr:height='data:photo.height' expr:src='data:photo.url' expr:width='data:photo.width'/></a>
      </b:if>

      <dl class='profile-datablock'>
        <dt class='profile-data'>
          <a class='profile-name-link g-profile' expr:href='data:userUrl' expr:style='&quot;background-image: url(&quot; + data:profileLogo + &quot;);&quot;' rel='author'>
            <data:displayname/>
          </a>
          <b:if cond='data:hasgoogleprofile'>
            <br/>
            <div class='g-follow' data-annotation='bubble' data-height='20' expr:data-href='data:userUrl'/>
          </b:if>
        </dt>

        <b:if cond='data:showlocation'>
          <dd class='profile-data'><data:location/></dd>
        </b:if>

        <b:if cond='data:aboutme != &quot;&quot;'><dd class='profile-textblock'><data:aboutme/></dd></b:if>
      </dl>
      <a class='profile-link' expr:href='data:userUrl' rel='author'><data:viewProfileMsg/></a>
    </b:if>

     <b:include name='quickedit'/>
    </div>
  </b:includable>
    </b:widget>
  </b:section>
  <b:section class='sidebar-sticky' id='sidebar-sticky' preferred='yes'>
    <b:widget id='HTML2' locked='false' title='' type='HTML'>
      <b:widget-settings>
        <b:widget-setting name='content'>&lt;!-- Safelinku.com Full Page Script Exclude--&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    var go_url = &#39;https://semawur.com/&#39;;
    var api = &#39;7593a14de843f829338daacdf7dd3db190cc68bf&#39;;
    var shorten_exclude = [&#39;mediafire.com&#39;, &#39;www.seputar-anime2.ga&#39;, &#39;zippyshare.com&#39;]; 
&lt;/script&gt;
&lt;script src=&#39;https://safelinku.com/js/web-script.js&#39;&gt;&lt;/script&gt;
&lt;!-- Safelinku.com Full Page Script Exclude--&gt;</b:widget-setting>
      </b:widget-settings>
      <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
    </b:widget>
  </b:section>
  </div>
  </aside>
  <!-- sidebar wrapper end -->
  
  <div class='clear'/>
  </div>
  <!-- wrapper end -->
  <div class='sticky-stop'/>
  
  <div id='footer-widget-container'>
  <b:section class='footer-widget' id='footer-widget' maxwidgets='1' showaddelement='yes'/>
  </div>
  
  <!-- footer nav menu -->
  <div id='footer-navmenu'>
  <nav id='footer-navmenu-container'>
  
<!-- menu navigasi footer start -->

 <ul>
  <li><a href='https://www.seputar-anime2.ga/p/sitemap.html'>sitemap</a></li>
  <li><a href='https://www.seputar-anime2.ga/p/disclaimer_11.html'>Disclaimer</a></li>
  <li><a href='https://www.sepurar-anime2.ga/p/about-us.html'>About Us</a></li>
  <li><a href='https://www.seputar-anime2.ga/p/contak-us.html'>Contak Us</a></li>
  <li><a href='https://www.seputar-anime2.ga/p/pivacy-policy.html'>Privacy policy</a></li>
 

</ul>
<!-- menu navigasi footer end -->

  </nav>
  </div>
  <!-- footer nav menu end -->
  
  <!-- footer wrapper start -->
  <div id='footer-container'>
  <footer id='footer-wrapper'>
		Copyright 2019 <a expr:href='data:blog.homepageUrl'><data:blog.title/></a>
  </footer>
  </div>
  <!-- footer wrapper end --> 
  
<div class='back-to-top'><a href='#' id='back-to-top' title='back to top'>
    <i class='fa fa-chevron-up'/> 
</a></div>

<script>            
$(window).scroll(function() {
    if($(this).scrollTop() &gt; 200) {
        $(&#39;#back-to-top&#39;).fadeIn();
    } else {
        $(&#39;#back-to-top&#39;).fadeOut();
    }
});
$(&#39;#back-to-top&#39;).hide().click(function() {
    $(&#39;html, body&#39;).animate({scrollTop:0}, 1000);
    return false;
});
</script>  

<b:if cond='data:blog.pageType == &quot;item&quot;'>
<script>
//<![CDATA[	
if(relatedPosts==1){		  
var randomRelatedIndex,showRelatedPost;!function(e,a,l){var g={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:3,homePage:"http://www.dte.web.id",numPosts:8,summaryLength:0,titleLength:"auto",thumbnailWidth:255,thumbnailHeight:170,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:!1,moreText:"Baca Selengkapnya",callBack:function(){}};for(var t in relatedPostConfig)g[t]="undefined"==relatedPostConfig[t]?g[t]:relatedPostConfig[t];var r=function(e){var t=a.createElement("script");t.type="text/javascript",t.src=e,l.appendChild(t)},A=function(e){var t,a,l=e.length;if(0===l)return!1;for(;--l;)t=Math.floor(Math.random()*(l+1)),a=e[l],e[l]=e[t],e[t]=a;return e},i="object"==typeof labelArray&&0<labelArray.length?"/-/"+A(labelArray)[0]:"";randomRelatedIndex=function(e){var t,a,l=e.feed.openSearch$totalResults.$t-g.numPosts,n=(t=1,a=0<l?l:1,Math.floor(Math.random()*(a-t+1))+t);r(g.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&start-index="+n+"&max-results="+g.numPosts+"&callback=showRelatedPost")},showRelatedPost=function(e){var t,a,l,n,r=document.getElementById(g.containerId),i=A(e.feed.entry),s=g.widgetStyle,o=g.widgetTitle+'<ul class="related-post-style-'+s+'">',d=g.newTabLink?' target="_blank"':"",m='<span style="display:block;clear:both;"></span>';if(r){for(var h=0;h<g.numPosts&&h!=i.length;h++){a=i[h].title.$t,l="auto"!==g.titleLength&&g.titleLength<a.length?a.substring(0,g.titleLength)+"&hellip;":a,n="media$thumbnail"in i[h]&&!1!==g.thumbnailWidth?i[h].media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+(\-c)?/,"/w"+g.thumbnailWidth+"-h"+g.thumbnailHeight+"-c"):g.noImage,"summary"in i[h]&&0<g.summaryLength&&i[h].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,g.summaryLength);for(var c=0,u=i[h].link.length;c<u;c++)t="alternate"==i[h].link[c].rel?i[h].link[c].href:"#";3==s&&(o+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+t+'"'+d+'><img alt="" class="related-post-item-thumbnail" src="'+n+'" width="'+g.thumbnailWidth+'" height="'+g.thumbnailHeight+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+a+'" href="'+t+'"'+d+">"+l+"</a></div>"+m+"</li>")}r.innerHTML=o+="</ul>"+m,g.callBack()}},r(g.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);
};
//]]>		  
</script>
</b:if>

<b:if cond='data:blog.isMobile == &quot;false&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<!-- JAVASCRIPT NAVIGASI HALAMAN BERNOMOR -->
<script>
var perPage=8;
var numPages=6;
var firstText =&#39;<b:switch var='data:blog.locale'><b:case value='id'/>Pertama<b:default/>First</b:switch>&#39;;
var lastText =&#39;<b:switch var='data:blog.locale'><b:case value='id'/>Terakhir<b:default/>Last</b:switch>&#39;;
var prevText =&#39;&#8250; <b:switch var='data:blog.locale'><b:case value='id'/>Sebelumnya<b:default/>Prev</b:switch>&#39;;
var nextText =&#39;<b:switch var='data:blog.locale'><b:case value='id'/>Selanjutnya<b:default/>Next</b:switch> &#8250;&#39;;
var urlactivepage=location.href;
var home_page=&quot;/&quot;;
</script>
<script>
//<![CDATA[
if(numberedPagination==1){
if(typeof firstText=="undefined")firstText="First";if(typeof lastText=="undefined")lastText="Last";var noPage;var currentPage;var currentPageNo;var postLabel;pagecurrentg();function looppagecurrentg(pageInfo){var html='';pageNumber=parseInt(numPages/2);if(pageNumber==numPages-pageNumber){numPages=pageNumber*2+1}pageStart=currentPageNo-pageNumber;if(pageStart<1)pageStart=1;lastPageNo=parseInt(pageInfo/perPage)+1;if(lastPageNo-1==pageInfo/perPage)lastPageNo=lastPageNo-1;pageEnd=pageStart+numPages-1;if(pageEnd>lastPageNo)pageEnd=lastPageNo;html+="<span class='showpageOf'>Page "+currentPageNo+' of '+lastPageNo+"</span>";var prevNumber=parseInt(currentPageNo)-1;if(currentPageNo>1){if(currentPage=="page"){html+='<span class="showpage firstpage"><a href="'+home_page+'">'+firstText+'</a></span>'}else{html+='<span class="displaypageNum firstpage"><a href="/search/label/'+postLabel+'?&max-results='+perPage+'">'+firstText+'</a></span>'}}if(currentPageNo>2){if(currentPageNo==3){if(currentPage=="page"){html+='<span class="showpage"><a href="'+home_page+'">'+prevText+'</a></span>'}else{html+='<span class="displaypageNum"><a href="/search/label/'+postLabel+'?&max-results='+perPage+'">'+prevText+'</a></span>'}}else{if(currentPage=="page"){html+='<span class="displaypageNum"><a href="#" onclick="redirectpage('+prevNumber+');return false">'+prevText+'</a></span>'}else{html+='<span class="displaypageNum"><a href="#" onclick="redirectlabel('+prevNumber+');return false">'+prevText+'</a></span>'}}}if(pageStart>1){if(currentPage=="page"){html+='<span class="displaypageNum"><a href="'+home_page+'">1</a></span>'}else{html+='<span class="displaypageNum"><a href="/search/label/'+postLabel+'?&max-results='+perPage+'">1</a></span>'}}if(pageStart>2){html+=' ... '}for(var jj=pageStart;jj<=pageEnd;jj++){if(currentPageNo==jj){html+='<span class="pagecurrent">'+jj+'</span>'}else if(jj==1){if(currentPage=="page"){html+='<span class="displaypageNum"><a href="'+home_page+'">1</a></span>'}else{html+='<span class="displaypageNum"><a href="/search/label/'+postLabel+'?&max-results='+perPage+'">1</a></span>'}}else{if(currentPage=="page"){html+='<span class="displaypageNum"><a href="#" onclick="redirectpage('+jj+');return false">'+jj+'</a></span>'}else{html+='<span class="displaypageNum"><a href="#" onclick="redirectlabel('+jj+');return false">'+jj+'</a></span>'}}}if(pageEnd<lastPageNo-1){html+='...'}if(pageEnd<lastPageNo){if(currentPage=="page"){html+='<span class="displaypageNum"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastPageNo+'</a></span>'}else{html+='<span class="displaypageNum"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastPageNo+'</a></span>'}}var nextnumber=parseInt(currentPageNo)+1;if(currentPageNo<(lastPageNo-1)){if(currentPage=="page"){html+='<span class="displaypageNum"><a href="#" onclick="redirectpage('+nextnumber+');return false">'+nextText+'</a></span>'}else{html+='<span class="displaypageNum"><a href="#" onclick="redirectlabel('+nextnumber+');return false">'+nextText+'</a></span>'}}if(currentPageNo<lastPageNo){if(currentPage=="page"){html+='<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastText+'</a></span>'}else{html+='<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastText+'</a></span>'}}var pageArea=document.getElementsByName("pageArea");var blogPager=document.getElementById("blog-pager");for(var p=0;p<pageArea.length;p++){pageArea[p].innerHTML=html}if(pageArea&&pageArea.length>0){html=''}if(blogPager){blogPager.innerHTML=html}}function totalcountdata(root){var feed=root.feed;var totaldata=parseInt(feed.openSearch$totalResults.$t,10);looppagecurrentg(totaldata)}function pagecurrentg(){var thisUrl=urlactivepage;if(thisUrl.indexOf("/search/label/")!=-1){if(thisUrl.indexOf("?updated-max")!=-1){postLabel=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?updated-max"))}else{postLabel=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?&max"))}}if(thisUrl.indexOf("?q=")==-1&&thisUrl.indexOf(".html")==-1){if(thisUrl.indexOf("/search/label/")==-1){currentPage="page";if(urlactivepage.indexOf("#PageNo=")!=-1){currentPageNo=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)}else{currentPageNo=1}document.write("<script src=\""+home_page+"feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata\"><\/script>")}else{currentPage="label";if(thisUrl.indexOf("&max-results=")==-1){perPage=20}if(urlactivepage.indexOf("#PageNo=")!=-1){currentPageNo=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)}else{currentPageNo=1}document.write('<script src="'+home_page+'feeds/posts/summary/-/'+postLabel+'?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')}}}function redirectpage(numberpage){jsonstart=(numberpage-1)*perPage;noPage=numberpage;var nameBody=document.getElementsByTagName('head')[0];var newInclude=document.createElement('script');newInclude.type='text/javascript';newInclude.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");nameBody.appendChild(newInclude)}function redirectlabel(numberpage){jsonstart=(numberpage-1)*perPage;noPage=numberpage;var nameBody=document.getElementsByTagName('head')[0];var newInclude=document.createElement('script');newInclude.type='text/javascript';newInclude.setAttribute("src",home_page+"feeds/posts/summary/-/"+postLabel+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");nameBody.appendChild(newInclude)}function finddatepost(root){post=root.feed.entry[0];var timestamp1=post.published.$t.substring(0,19)+post.published.$t.substring(23,29);var timestamp=encodeURIComponent(timestamp1);if(currentPage=="page"){var pAddress="/search?updated-max="+timestamp+"&max-results="+perPage+"#PageNo="+noPage}else{var pAddress="/search/label/"+postLabel+"?updated-max="+timestamp+"&max-results="+perPage+"#PageNo="+noPage}location.href=pAddress}
};
//]]>
</script>
</b:if>
</b:if>
</b:if>

<script>
//<![CDATA[
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);
// search form
$(function(){$('a[href="#searchfs"]').on("click",function(e){e.preventDefault(),$("#searchfs").addClass("open"),$('#searchfs > form > input[type="search"]').focus()}),$("#searchfs, #searchfs button.close").on("click keyup",function(e){e.target!=this&&"close"!=e.target.className&&27!=e.keyCode||$(this).removeClass("open")})});
// nav menu
!function(s){s.fn.menumaker=function(n){var e=s(this),o=s.extend({format:"dropdown",sticky:!1},n);return this.each(function(){s(this).find(".button").on("click",function(){s(this).toggleClass("menu-opened");var n=s(this).next("ul");n.hasClass("open")?n.slideToggle(150).removeClass("open"):(n.slideToggle(150).addClass("open"),"dropdown"===o.format&&n.find("ul").show())}),e.find("li ul").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){s(this).toggleClass("submenu-opened"),s(this).siblings("ul").hasClass("open")?s(this).siblings("ul").removeClass("open").slideToggle(150):s(this).siblings("ul").addClass("open").slideToggle(150)})},"multitoggle"===o.format?multiTg():e.addClass("dropdown"),!0===o.sticky&&e.css("position","fixed")})}}(jQuery),function(s){s(document).ready(function(){s("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery);
//]]>
</script> 
<script>
//<![CDATA[
jQuery(document).ready(function(){var i=jQuery(window).width();function e(){jQuery("#sidebar-sticky").stick_in_parent({parent:"#wrapper",offset_top:70})}i<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):e(),jQuery(window).resize(function(){(i=jQuery(window).width())<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):e()})});
//]]>
</script> 

<link href='https://fonts.googleapis.com/css?family=Poppins%3A400%2C700%7CRaleway%3A400%2C700&amp;ver=5.0.3' rel='stylesheet' type='text/css'/>
<link href='//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css'/>

    <b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;index&quot;}'>
	&lt;/div&gt;
	</b:if> 

<b:defaultmarkups>
	<b:defaultmarkup type='Common'>
		<b:includable id='numberedpopularposts'>
		<style>
		.PopularPosts ul li .item-thumbnail-only::before, .PopularPosts ul li .item-content::before, .PopularPosts ul li &gt; a::before {
			content: counter(num) !important;
			font-size: 30px;
			font-weight: bold;
			font-style: italic;
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			text-align: center;
		}
		.PopularPosts ul li:nth-child(10) .item-thumbnail-only::before, .PopularPosts ul li:nth-child(10) .item-content::before, .PopularPosts ul li:nth-child(10) &gt; a::before {
			left: -10px;
		}
		.PopularPosts ul li .item-thumbnail-only::after, .PopularPosts ul li .item-content::after, .PopularPosts ul li &gt; a::after {
			content: &quot;&quot;;
			display: block;
			position: absolute;
			top: 32px;
			left: 9px;
			bottom: 0;
			width: 2px;
		}
		.PopularPosts .item-title, .PopularPosts .item-thumbnail, .PopularPosts .item-snippet {
			margin-left: 28px;
		}
		.PopularPosts ul li &gt; a {
			display: block;
			padding-left: 28px;
			min-height: 45px;
		}
		</style>
		</b:includable>
		<b:includable id='thumbnailstyle'>
		<style>
		.info-1, .info-2, h2.post-title, .post-snippet {
			margin-left: 275px;
		}
		@media only screen and (max-width:1080px){
			.info-1, .info-2, h2.post-title, .post-snippet {
				margin-left: 260px;
			}
		}
		@media only screen and (max-width:800px){
			.info-1, .info-2, h2.post-title, .post-snippet {
				margin-left: 195px;
			}
		}
		@media only screen and (max-width:640px){
			.info-1, .info-2, h2.post-title, .post-snippet {
				margin-left: 190px;
			}
		}
		@media only screen and (max-width:480px) {
			.info-1, .info-2, h2.post-title, .post-snippet {
				margin-left: 0px;
			}
		}
		</style>
		</b:includable>
		<b:includable id='stickyheaderstyle'>
		<style>
		#header-container {
			position: fixed !important;
		}
		</style>
		</b:includable>
	</b:defaultmarkup>
</b:defaultmarkups>	
	
  </body>
</html>