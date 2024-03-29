<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>&lt;!--<head>--&gt;&lt;head&gt;
<meta charset='utf-8'/>
<meta content='IE=edge' http-equiv='X-UA-Compatible'/>
<meta content='width=device-width,minimum-scale=1,initial-scale=1' name='viewport'/>
<b:if cond='data:view.isHomepage'>
<title><data:blog.title/></title>
<b:elseif cond='data:view.isPost or data:view.isPage or data:view.search.label'/>
<title><data:blog.pageName/> | <data:blog.title/></title>
<b:elseif cond='data:view.search.query'/>
<title><data:view.search.resultsMessage/> | <data:blog.title/></title>
<b:elseif cond='data:view.search and !data:view.search.label and !data:view.search.query'/>
<title><data:blog.title/></title>
<b:elseif cond='data:view.isArchive'/>
<title><data:view.archive.rangeMessage/> | <data:blog.title/></title>
<b:elseif cond='data:view.isError'/>
<title>404 | <data:blog.title/></title>
</b:if>

<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' rel='stylesheet'/>
<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css' rel='stylesheet'/>

<b:skin version='1.0.0'><![CDATA[
/**
* Description: Kodein Simple Framework Blogger.
* Version: 1.0.0
* Last update: 2017/12/14
* Author: Irfaan / programmer.irfaan@gmail.com
*/

/* ==========================================================================
VARIABLE DEV
============================================================================= 
<Variable name="keycolor" description="Main Color" type="color" default="#FFFFFF" value="#FFFFFF"/>

<Group description="Body" selector="body">
<Variable name="body.background.color" description="body.background.color" type="color" default="#FFFFFF" value="#FFFFFF"/>
</Group>
<Variable name="body.background" description="body.background" type="background" color="$(body.background.color)" default="$(color) none no-repeat fixed center center" value="$(color) none no-repeat fixed center center"/>	

<Group description="text.color" selector="body">
<Variable name="body.text.color" description="body.text.color" type="color" default="#000" value="#000000"/>
</Group>

<Group description="link.color" selector="body">
<Variable name="link.color" description="link.color" type="color" default="#4285f4" value="#4285f4"/>
<Variable name="link.color.hover" description="link.color.hover" type="color" default="#111" value="#111111"/>
<Variable name="link.color.visited" description="link.color.visited" type="color" default="#6d1dec" value="#6d1dec"/>
</Group>

<Group description="primary.color" selector="primary.color">
<Variable name="primary.color.text" description="primary.color.text" type="color" default="#FFFFFF" value="#FFFFFF"/>
<Variable name="primary.color" description="primary.color" type="color" default="#03a9f4" value="#03a9f4"/>
<Variable name="second.color" description="second.color" type="color" default="#0e99d8" value="#0e99d8"/>
</Group>
========================================================================== */

/* ==========================================================================
BLOGGER #LAYOUT
========================================================================== */
body#layout #fix{
display:none;
}
body#layout .section{overflow:hidden !important}
body#layout #HTML3{width:29%;float:left;margin:0}
body#layout #Blog1{width:40%;float:left;margin: 0 7.5px;}
body#layout #HTML4{width:29%;float:left;margin:0}
body#layout #HTML3 .widget-content,body#layout #HTML4 .widget-content{height: 16em;}

/* ==========================================================================
BLOGGER CSS
========================================================================== */	
.widget li{padding:0}
.widget ul{padding:0;margin:0;line-height:normal}
.widget-content li{list-style-type:none}
.separator a {margin:initial!important;}
.separator a img{margin: 1em;}
.separator:nth-child(1) a img{margin:initial;margin-bottom:1em}	
.Navbar {display:none}	

/* ==========================================================================
CSS RESET
========================================================================== */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}

/* ==========================================================================
HTML 5
========================================================================== */
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;display:block;}*{margin:0;padding:0;}html{display:block;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{background:transparent;}table{border-collapse:collapse;border-spacing:0;}*,*:before, *:after {-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}ins{background:#fff;}

/* ==========================================================================
FORM CSS
========================================================================== */
input[type="text"],input[type="password"],input[type="email"],input[type="url"],input[type="date"],input[type="month"],input[type="time"],input[type="datetime"],input[type="datetime-local"],input[type="week"],input[type="number"],input[type="search"],input[type="tel"],select{background:#fff;border:1px solid rgba(0,0,0,0.12);border-radius:4px;color:rgba(0,0,0,0.8);display:inline-block;padding:4px;vertical-align:middle}
input[type="color"]{background:#fff;border:1px solid rgba(0,0,0,0.12);border-radius:4px;display:inline-block;vertical-align:middle}
input:not([type]){-webkit-appearance:none;background-clip:padding-box;border:1px solid rgba(0,0,0,0.12);border-radius:4px;display:inline-block;padding:8px;text-align:left}
input[type="text"]:focus,input[type="password"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="date"]:focus,input[type="month"]:focus,input[type="time"]:focus,input[type="datetime"]:focus,input[type="datetime-local"]:focus,input[type="week"]:focus,input[type="number"]:focus,input[type="search"]:focus,input[type="tel"]:focus,input[type="color"]:focus,select:focus,textarea:focus{border-color:#2196f3}
input:not([type]):focus{border-color:#2196f3}
input[type="file"]:focus,input[type="radio"]:focus,input[type="checkbox"]:focus{outline:1px thin rgba(0,0,0,0.12)}
input[type="text"][disabled],input[type="password"][disabled],input[type="email"][disabled],input[type="url"][disabled],input[type="date"][disabled],input[type="month"][disabled],input[type="time"][disabled],input[type="datetime"][disabled],input[type="datetime-local"][disabled],input[type="week"][disabled],input[type="number"][disabled],input[type="search"][disabled],input[type="tel"][disabled],input[type="color"][disabled],select[disabled],textarea[disabled]{background-color:rgba(0,0,0,0.12);color:rgba(0,0,0,0.54);cursor:not-allowed}
input:not([type])[disabled]{background-color:rgba(0,0,0,0.12);color:rgba(0,0,0,0.54);cursor:not-allowed}
input[readonly],select[readonly],textarea[readonly]{border-color:rgba(0,0,0,0.12);color:rgba(0,0,0,0.54)}
input:focus:invalid,textarea:focus:invalid,select:focus:invalid{border-color:#ea1c0d;color:#f44336}
input[type="file"]:focus:invalid:focus,input[type="radio"]:focus:invalid:focus,input[type="checkbox"]:focus:invalid:focus{outline-color:#f44336}
select{-webkit-appearance:menulist-button;border:1px solid rgba(0,0,0,0.12);vertical-align:sub}
select[multiple]{height:auto}
label{line-height:2}
fieldset{border:0;margin:0;padding:8px 0}
legend{border-bottom:1px solid rgba(0,0,0,0.12);color:rgba(0,0,0,0.8);display:block;margin-bottom:8px;padding:8px 0;width:100%}
textarea{background:#fff;border:1px solid rgba(0,0,0,0.12);border-radius:4px;display:block;margin-bottom:8px;max-width:100%;padding:8px;vertical-align:middle}
input[type=submit],input[type=reset],button{background:#2196f3;border:1px solid rgba(0,0,0,0.12);border-radius:4px;color:#fff;cursor:pointer;display:inline-block;margin:0;padding:8px 16px;text-align:center;vertical-align:middle;white-space:nowrap}
input[type=submit]::-moz-focus-inner,input[type=reset]::-moz-focus-inner,button::-moz-focus-inner{padding:0}
input[type=submit]:hover,input[type=reset]:hover,button:hover{background:#0c7cd5;border-color:1px solid rgba(0,0,0,0.54)}
input[type=submit]:active,input[type=reset]:active,button:active{background:#0c7cd5;border-color:1px solid rgba(0,0,0,0.54);box-shadow:inset 0 0 4px 0 rgba(0,0,0,0.2);outline-offset:-2px}
input[type=submit]:focus,input[type=reset]:focus,button:focus{background:#0c7cd5;border-color:1px solid rgba(0,0,0,0.54);box-shadow:inset 0 0 4px 0 rgba(0,0,0,0.2);outline:0}
input[type=submit]:disabled,button:disabled{background:rgba(0,0,0,0.12);color:rgba(0,0,0,0.38);cursor:not-allowed}

/* ==========================================================================
ROOT ELEMENT
========================================================================== */
body {
font-family: Trebuchet, Trebuchet MS, Arial, sans-serif;
font-weight: 400;
line-height: 1.625;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
color: $(body.text.color);
background: $(body.background);
}

/* ==========================================================================
HEADING
========================================================================== */
h1,h2,h3,h4,h5{display:block;font-weight:700}
h1{font-size:150%}
h2{font-size:140%}
h3{font-size:130%}
h4{font-size:120%}
h5{font-size:110%}	

/* ==========================================================================
LINK
========================================================================== */
a:link {
color:$(link.color);
text-decoration: none;
margin: 0;
-webkit-transition: ease-in-out .2s;
-moz-transition: ease-in-out .2s;
-ms-transition: ease-in-out .2s;
-o-transition: ease-in-out .2s;
transition: ease-in-out .2s
}
a:visited {
color:$(link.color.visited);
}
a:hover {
color:$(link.color.hover);
}	

/* ==========================================================================
TABLE
========================================================================== */
table{width:100%}
table th{color:#4285f4;border:1px solid rgba(0,0,0,0.12);text-align:left;vertical-align:top;font-size:18px}
table td{border:1px solid rgba(0,0,0,0.12);text-align:left;vertical-align:top}
table caption{border:none;font-style:italic}
th{font-weight:700}
td,th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left;border:1px solid rgba(0,0,0,0.12)}
table.striped tr:nth-child(even) >td{background-color:#f2f2f2}
table.dark tr,table.dark th{background-color:#212529;color:#fff}
table.dark.striped tr:nth-child(even) > td,table.dark.striped tr > th{background-color:rgba(255,255,255,.05)}
table.tr-caption-container{width:auto}
table.tr-caption-container td{padding:8px;background:#fff!important}
table.tr-caption-container td a{margin:0!important}


/* ==========================================================================
POST LIST
========================================================================== */
ol li{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:40px;list-style-type:decimal}
ul{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:40px;list-style-type:square}
.post-body ol li{margin:.5em 0 .5em 2em;list-style-type:decimal}
.post-body ul{margin:.5em 0 .5em 2em;list-style-type:square}


/* ==========================================================================
PRE CODE
========================================================================== */	
code,pre{font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:16px;color:rgba(0,0,0,.8)}
pre{background:#efefef;margin:16px 0;white-space:pre-wrap;margin:10px 0;padding:10px 15px;border:1px solid #ddd}
code{line-height:inherit;word-break:break-all;word-wrap:break-word}
blockquote{border-left:2px solid #2196f3;font-family:Georgia,Times,"Times New Roman",serif;margin:16px 0;padding-left:16px}

/* ==========================================================================
PARAGRAPH CSS
========================================================================== */	
hr{border-top:1px solid rgba(0,0,0,0.12);display:block;margin-bottom:16px;width:100%}
p{margin:0;margin-bottom:16px}
small{color:rgba(0,0,0,0.54);vertical-align:bottom}
figcaption{font-family:Georgia,Times,"Times New Roman",serif}
u{text-decoration:underline}
s{text-decoration:line-through}
sup{font-size:14px;vertical-align:super}
sub{font-size:14px;vertical-align:sub}
mark{background:#ffeb3b}
hr{border-top:1px solid rgba(0,0,0,0.12);display:block;margin-bottom:16px;width:100%}
img{height:auto;max-width:100%;vertical-align:baseline}
.post-body {word-wrap: break-word;}

/* ==========================================================================
CUSTOM CSS
========================================================================== */	
.hidden{visibility:hidden;height:0;overflow:hidden;display:none}
.clear{clear:both}
.shadow{-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}
.margin-0{margin:0}
.padding-0{padding:0}
.primary-color{
background:$(primary.color) !important;
background-color:$(primary.color) !important;
}
.primary-color-border{
border-color:$(primary.color) !important;
}
.primary-color-text{
color:$(primary.color.text) !important;
}

]]></b:skin>

<style type='text/css'>
<b:if cond='data:view.isHomepage'>
body{
background: url(https://4.bp.blogspot.com/-Ndtxy9IlA7w/WlmQu_JzBZI/AAAAAAAAAe0/ZrMyPz1Wig0d7WGxDsDfEloMNf9xm1pbQCLcBGAs/s1600/bgz.jpg) no-repeat fixed center top #ffffff;
background-size:100% 100%;
}
#wrapper{max-width:960px;min-width:320px;margin:0 auto;position:relative}h1{font-weight:bold;font-size:48px;letter-spacing:2px;text-align:center;text-transform:uppercase;text-shadow:0 1px 1px rgba(0,0,0,0.25);color:#fff;margin-top:20px}#desc{color:#fff;text-shadow:0 1px 1px rgba(0,0,0,0.25);margin:0 5px 20px 5px;text-align:center;font-size:16px}#text-header{background-color:#f3f3f3;border-bottom:1px solid #e7e7e7;font-size:11px;font-weight:bold;line-height:50px;text-align:center;text-transform:uppercase;position:relative}#text-footer{background-color:#f3f3f3;border-top:1px solid #e7e7e7}.shadow{background:url(&quot;/images/unminify/form-shadow.png&quot;) no-repeat scroll center top rgba(0,0,0,0);bottom:-6px;height:6px;left:0;position:absolute;width:100%;z-index:2}#text-field{overflow:hidden}#text-field .CodeMirror{height:360px;font-size:12px}.text-field-error .CodeMirror{background-color:#fffee6!important;transition:background .3s ease 0s}#form{background-color:#fff;box-shadow:0 0 5px #777}#footer{color:#fff;text-align:center;margin:30px 0 15px 0;font-size:13px}#footer a{color:#fff;text-decoration:underline}.line{background-color:#e9e9e9;width:100%;height:1px;margin-top:15px}#buttons{width:300px;height:54px;margin:0 auto;padding:10px 0}#start-button,#clear-button{margin:0 10px;float:left;height:34px}.action-button{background-color:#282828;border:medium none;color:#fff;cursor:pointer;font-weight:600;font-size:13px;outline:medium none;text-transform:uppercase;text-align:center;transition:background .3s ease .1s;width:129px;line-height:34px}.action-button:hover{background-color:#00aeef}#main-form{padding:20px 5px}#progress-bar .ui-progressbar-value{margin:0!important}.block{position:relative}.x-pretty-alert{padding-top:20px!important;text-align:center}.pretty-policy p{margin:10px 0}#start-button-progress{width:129px;height:34px;background-color:#00aeef;padding:12px}#start-button-progress img{display:block;width:43px;height:11px;margin:0 auto}#like-it{font-size:20px;font-weight:bold;letter-spacing:1px;text-align:center;color:#414141}#share{width:300px;margin:10px auto 0 auto;text-align:center}#share .pop{margin:0 5px}.share-bw{background:url(https://2.bp.blogspot.com/-5oCCVdNckLo/Wlj_uqiQeYI/AAAAAAAAAeU/gJ28DCQ2PfcZIrassdn-V6bhSHSPOPm_gCLcBGAs/s1600/social-icons.png) no-repeat scroll left top transparent;display:inline-block;width:49px;height:49px;line-height:0;margin:0}.share-bw-facebook{background-position:-1px -1px}.share-bw-facebook:hover{background-position:-1px -51px}.share-bw-twitter{background-position:-50px -1px}.share-bw-twitter:hover{background-position:-50px -51px}.share-bw-googleplus{background-position:-99px -1px}.share-bw-googleplus:hover{background-position:-99px -51px}.share-bw-stumbleupon{background-position:-148px -1px}.share-bw-stumbleupon:hover{background-position:-148px -51px}.share-bw-reddit{background-position:-197px -1px}.share-bw-reddit:hover{background-position:-197px -51px}.share-bw-vkontakte{background-position:-246px -1px}.share-bw-vkontakte:hover{background-position:-246px -51px}@media only screen and (max-width:560px){#logo img{width:100%;height:auto}}#navbottom{margin:20px 0;text-align:center;font-size:1.2em;font-weight:bold}#navbottom a{color:#333}
#HTML1, #HTML2 {
text-align: center;
}
#HTML1 .content, #HTML2 .content {
margin: 15px auto 20px auto;
display: inline-block;
}
</b:if>
<b:if cond='data:view.isSingleItem'>
.navbar-default{border:none;border-radius:0}
.navbar-default .navbar-nav&gt;li&gt;a{color:#fff!important;opacity:.8}
.navbar-default .navbar-nav&gt;li&gt;a:hover,h1.navbar-brand a:hover,h1.navbar-brand:hover,p.navbar-brand a:hover,p.navbar-brand:hover{opacity:1;background-color:#428bca!important;text-decoration:none}
.navbar-default .navbar-toggle{border-color:#1f66a3!important;background-color:#428bca}
.navbar-default .navbar-toggle .icon-bar{background-color:#fff!important}
.navbar-default .navbar-toggle:hover .icon-bar{background-color:#888!important}
.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#1f66a3!important}
#b-section-Navbar .widget{margin:7.5px -15px}
@media (min-width:768px){#b-section-Navbar .widget{margin:0}}
#timer{margin:auto;width:80px}
.pietimer{position:relative;font-size:200px;width:1em;height:1em}
.pietimer &gt; .percent{position:absolute;top:18px;left:5px;width:3.33em;font-size:18px;text-align:center;display:none}
.pietimer &gt; .slice{position:absolute;width:1em;height:1em;clip:rect(0px,1em,1em,0.5em)}
.pietimer &gt; .slice.gt50{clip:rect(auto,auto,auto,auto)}
.pietimer &gt; .slice &gt; .pie{border:0.1em solid #c0c0c0;position:absolute;width:0.8em;/* 1 - (2 * border width) */height:0.8em;/* 1 - (2 * border width) */clip:rect(0em,0.5em,1em,0em);-moz-border-radius:0.5em;-webkit-border-radius:0.5em;border-radius:0.5em}
.pietimer &gt; .slice &gt; .pie.fill{-moz-transform:rotate(180deg)!important;-webkit-transform:rotate(180deg)!important;-o-transform:rotate(180deg)!important;transform:rotate(180deg)!important}
.pietimer.fill &gt; .percent{display:none}
.pietimer.fill &gt; .slice &gt; .pie{border:transparent;background-color:#c0c0c0;width:1em;height:1em}
#sidebarleft,#sidebarright {text-align:center}
/* ==========================================================================
ADBLOCK
========================================================================== */
.adb{position:fixed;width:100%;height:100%;left:0;top:0;bottom:0;background:rgba(51,51,51,0.7);z-index:10000;text-align:center;color:#fff;}
.adbs{margin:0 auto;width:auto;position:fixed;z-index:99999;left:50%;top:50%;transform:translate(-50%, -50%);padding:20px 30px 30px;background:rgba(51,51,51,0.5);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;}
</b:if>
<b:if cond='data:view.isError'>
#header, #outer-wrapper, #post-wrapper, #sidebar-wrapper, #content-wrapper, #aside-wrapper, #footer-wrapper, #nav-menu, #wrapper, .header-wrapper, .backtotop.tutor, .backtotop{display:none;}
body,html{overflow:hidden;margin:0;padding:0;width:100%;min-height:100vh;}
body{background:#292b2c;color:#fff;}
.error-page-box{margin:8% auto 0 auto;max-width:768px;min-width:200px;line-height:normal;font-size:16px;backface-visibility:hidden;transition:all .3s;}
.error-page-box .error-body hr{background:transparent;display:block;border:none;border-bottom:4px solid rgba(255,255,255,.3)}
.error-page-box .error-body{padding:20px;font-size:110%;color:#fff;border-radius:5px 5px 0 0}
.error-page-box .error-body h2{text-align: center;font-size: 40px;text-transform: uppercase;}
.error-page-box .error-body p{display:block;margin:10px 0}
.error-page-box .error-body ul li{margin:0 0 8px 20px;list-style:initial;list-style-type:square}
.error-page-box .error-body ul li a{color:#fff;text-decoration:underline}
.error-page-box .error-body ul li a:hover{color:#aaa;text-decoration:none}
.error-page-box .error-footer{display:block;margin:auto;font-weight:normal;max-width:768px;min-width:200px;padding:0 20px;text-align:center;}
.error-page-box .error-footer a,.error-page-box .error-footer a:hover{color:#fff}
@media screen and (max-width:1024px) {.error-page-box{margin:4% auto 0 auto;}.error-page-box .error-body h2{font-size:40px;}}
@media screen and (max-width:640px) {.error-page-box .error-body h2{font-size:1.6rem;}}
</b:if>
</style>

&lt;!--</head>--&gt;&lt;/head&gt;
<body itemscope='itemscope' itemtype='http://schema.org/WebPage'>
<meta content='fullKeyboardControl' itemprop='accessibilityControl'/>
<meta content='fullMouseControl' itemprop='accessibilityControl'/>

<b:if cond='data:view.isError'>
<div class='error-page-box'>
<div class='error-body'>
<h2>The page could not be found</h2>
<hr/>
<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
<p>Please try the following :</p>
<ul>
<li>If you type the page address in the <strong>Address Bar</strong>, make sure that it is spelled correctly.</li>
<li>Click <strong>
<a expr:href='data:blog.homepageUrl' expr:title='data:messages.home'>
here
</a>
</strong> to return to our main page.</li>
<li>If you were linked to this page, contact the administrator and make them aware of this issue.</li>
</ul>
</div>
<div class='error-footer'>
&#169; 2017
<a expr:href='data:blog.homepageUrl' expr:title='data:blog.title'>
<span expr:title='data:blog.title' itemprop='name'><data:blog.title/></span>
</a> - <data:messages.poweredByBlogger/>.
</div>
</div>
<b:else/>

<b:if cond='data:view.isHomepage'>
<div class='container' style='margin-top:5%'>
<div class='col-md-12 text-center'>
<b:section id='Judul Di Homepage' maxwidgets='1' showaddelement='no'>
<b:widget id='Header1' locked='true' title='Link Demmy (Header)' type='Header' version='2' visible='true'>
<b:widget-settings>
<b:widget-setting name='displayUrl'/>
<b:widget-setting name='displayHeight'>0</b:widget-setting>
<b:widget-setting name='sectionWidth'>-1</b:widget-setting>
<b:widget-setting name='useImage'>false</b:widget-setting>
<b:widget-setting name='shrinkToFit'>false</b:widget-setting>
<b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
<b:widget-setting name='displayWidth'>0</b:widget-setting>
</b:widget-settings>
<b:includable id='main' var='this'>
<header itemprop='mainEntity' itemscope='itemscope' itemtype='http://schema.org/WPHeader'>
<h1>
<span itemprop='name'><data:title/></span>
</h1>
<div id='desc'>
<span itemprop='description'><data:description/></span>	
</div>
</header>
</b:includable>
<b:includable id='behindImageStyle'/>
<b:includable id='description'/>
<b:includable id='image'/>
<b:includable id='title'/>
</b:widget>
</b:section>
</div>
<div class='col-md-8 col-md-offset-2'>			
<b:section id='Iklan Homepage Atas' maxwidgets='1' showaddelement='no'>
<b:widget id='HTML1' locked='true' title='Iklan Atas' type='HTML' version='2' visible='false'>
<b:widget-settings>
<b:widget-setting name='content'></b:widget-setting>
</b:widget-settings>
<b:includable id='main'>
<div class='content'>
<data:content/>
</div>
</b:includable>
</b:widget>
</b:section>
<div class='panel panel-primary primary-color-border'>
<div class='panel-heading primary-color'>
<div class='panel-title text-center'>
<h2>
<i class='fa fa-shield'>
</i>
<strong>Generate Link</strong>
</h2>
</div>
</div>
<div class='panel-body'>
<div class='form-group'>
<div class='input-group'>
<span class='input-group-addon'>
<i class='fa fa-link'>
</i>
</span>
<input class='form-control' id='generateurl' placeholder='http://example.com' type='url'/>
<span class='input-group-btn'>
<button class='btn btn-primary primary-color primary-color-border' id='btngenerate' type='button'>
<i class='fa fa-shield'>
</i>
<strong>Submit</strong>
</button>
</span>
</div>
</div>
<div class='hidden text-center' id='generateloading'><i class='fa fa-spinner fa-spin'/></div>
<div class='hidden' id='generatelink'>
<div class='form-group has-success'>
<div class='input-group'>
<span class='input-group-addon'>
<strong>Result:</strong>
<i aria-hidden='true' class='fa fa-check'>
</i>
</span>
<input class='form-control' id='resulturl' onclick='this.focus();this.select()' readonly='readonly' type='text'/>
</div>
<br/>
<div class='text-center'>
<button class='copytoclipboard btn-sm btn btn-success' data-clipboard-action='copy' data-clipboard-target='#resulturl' id='copytoclipboard'><span class='fa fa-floppy-o'/> Copy URL</button>
</div>
</div>
</div>
</div>
</div>
<b:section id='Iklan Homepage Bawah' maxwidgets='1' showaddelement='no'>
<b:widget id='HTML2' locked='true' title='Iklan Bawah' type='HTML' version='2' visible='false'>
<b:widget-settings>
<b:widget-setting name='content'></b:widget-setting>
</b:widget-settings>
<b:includable id='main'>
<div class='content'>
<data:content/>
</div>
</b:includable>
</b:widget>
</b:section>
</div>
</div>

<b:section id='Menu di Homepage' maxwidgets='1' showaddelement='no'>
<b:widget id='PageList2' locked='true' title='Pages' type='PageList' version='2' visible='false'>
<b:widget-settings>
<b:widget-setting name='pageListJson'>{}</b:widget-setting>
<b:widget-setting name='homeTitle'>Home</b:widget-setting>
</b:widget-settings>
<b:includable id='main'>
<div id='navbottom'>
|
<b:loop values='data:links' var='link'>
<a expr:href='data:link.href' expr:title='data:link.title'>
<data:link.title/>
</a>
|									
</b:loop>
</div>
</b:includable>
<b:includable id='content'/>
<b:includable id='overflowButton'/>
<b:includable id='overflowablePageList'/>
<b:includable id='pageLink'/>
<b:includable id='pageList'/>
</b:widget>
</b:section>

<div id='like-it'>Like it? Share it!</div>
<div class='share' id='share'>
<a class='pop share-bw share-bw-twitter' expr:href='&quot;https://twitter.com/intent/tweet?text=&quot; + data:blog.title + &quot;&amp;url=&quot; + data:blog.url ' style='display: inline-block;' title='Share this item on twitter'/>
<a class='pop share-bw share-bw-facebook' expr:href='&quot;http://www.facebook.com/sharer.php?u=&quot; + data:blog.url' style='display: inline-block;' title='Share this item on facebook'/>
<a class='pop share-bw share-bw-googleplus' expr:href='&quot;https://plus.google.com/share?url=&quot; + data:blog.url' style='display: inline-block;' title='Share this item on googleplus'/>
<div style='clear: both;'/>
</div>


<footer id='footer' itemprop='mainEntity' itemscope='itemscope' itemtype='http://schema.org/WPFooter'>
Copyright &#169; 2018
<a expr:href='data:blog.homepageUrl' expr:title='data:blog.title' itemprop='copyrightHolder' itemscope='itemscope' itemtype='http://schema.org/Person'>
<span expr:title='data:blog.title' itemprop='name'><data:blog.title/></span>
</a>
<div>PoworedBy <i><a href="https://rafswhackyworld.blogspot.com" style="text-decoration:none">Bloger</a></i></div>
</footer>

</b:if>

<b:if cond='data:view.isSingleItem or data:view.isLayoutMode'>
<nav class='navbar navbar-default primary-color'>
<div class='col-md-6 col-md-offset-3'>
<!-- Brand and toggle get grouped for better mobile display -->
<div class='navbar-header'>
<button aria-expanded='false' class='navbar-toggle collapsed primary-color-text' data-target='#bs-example-navbar-collapse-1' data-toggle='collapse' type='button'>
<span class='sr-only'>Toggle navigation</span>
<span class='icon-bar'/>
<span class='icon-bar'/>
<span class='icon-bar'/>
</button>
<header itemscope='itemscope' itemtype='https://schema.org/WPHeader'>
<h1 itemprop='headline'>
<a class='navbar-brand primary-color-text' expr:href='data:blog.homepageUrl' itemprop='url'><span itemprop='name'><data:blog.title/></span></a>
</h1>
</header>
</div>

<!-- Collect the nav links, forms, and other content for toggling -->
<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
<b:section id='Menu di Postingan' maxwidgets='1' showaddelement='no'>
<b:widget id='PageList1' locked='true' title='Pages' type='PageList' version='2' visible='true'>
<b:widget-settings>
<b:widget-setting name='pageListJson'>{}</b:widget-setting>
<b:widget-setting name='homeTitle'>Home</b:widget-setting>
</b:widget-settings>
<b:includable id='main'>
<b:class name='nav navbar-nav navbar-right'/>
<b:loop values='data:links' var='link'>
<li>
<a class='primary-color-text' expr:href='data:link.href' expr:title='data:link.title'>
<data:link.title/>
</a>
</li>
</b:loop>
<li>
<a class='primary-color-text' data-target='#howtoskip' data-toggle='modal' href='#howtoskip'>
How to Skip
</a>
</li>
</b:includable>
<b:includable id='content'/>
<b:includable id='overflowButton'/>
<b:includable id='overflowablePageList'/>
<b:includable id='pageLink'/>
<b:includable id='pageList'/>
</b:widget>
</b:section>
</div><!-- /.navbar-collapse -->
</div><!-- /.container-fluid -->
</nav>


<div class='container'>
<div class='row'>
<b:section id='Isi Postingan Beserta Iklan Kiri dan Kanan' maxwidgets='1' showaddelement='no'>
<b:widget id='HTML3' locked='true' title='Iklan Kiri' type='HTML' version='2' visible='true'>
<b:widget-settings>
<b:widget-setting name='content'/>
</b:widget-settings>
<b:includable id='main'>
<b:class name='col-md-2 col-sm-2 hidden-xs'/>
<div id='sidebarleft'>
<div class='sidebar__inner'>
<data:content/>
</div>
</div>
</b:includable>
</b:widget>
<b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2' visible='true'>
<b:widget-settings>
<b:widget-setting name='showDateHeader'>false</b:widget-setting>
<b:widget-setting name='style.textcolor'>#4285f4</b:widget-setting>
<b:widget-setting name='showShareButtons'>true</b:widget-setting>
<b:widget-setting name='showCommentLink'>true</b:widget-setting>
<b:widget-setting name='style.urlcolor'>#6d1dec</b:widget-setting>
<b:widget-setting name='showAuthor'>true</b:widget-setting>
<b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
<b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
<b:widget-setting name='style.bgcolor'>#000000</b:widget-setting>
<b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
<b:widget-setting name='style.layout'>1x1</b:widget-setting>
<b:widget-setting name='showLabels'>true</b:widget-setting>
<b:widget-setting name='showLocation'>true</b:widget-setting>
<b:widget-setting name='showTimestamp'>true</b:widget-setting>
<b:widget-setting name='postsPerAd'>1</b:widget-setting>
<b:widget-setting name='showBacklinks'>true</b:widget-setting>
<b:widget-setting name='style.bordercolor'>#000000</b:widget-setting>
<b:widget-setting name='showInlineAds'>false</b:widget-setting>
<b:widget-setting name='showReactions'>true</b:widget-setting>
</b:widget-settings>
<b:includable id='main' var='this'>
<b:class name='col-md-8 col-sm-8 col-xs-12'/>
<b:loop values='data:posts' var='post'>				
<b:include name='article.loop'/>
</b:loop>
</b:includable>
<b:includable id='aboutPostAuthor'/>
<b:includable id='addComments'/>
<b:includable id='article.loop'>
<b:if cond='data:view.isMultipleItems'>
<article itemscope='itemscope' itemtype='https://schema.org/BlogPosting'>
<b:include name='article.loop.index'/>
</article>
<b:else/>
<main aria-label='Main content' itemscope='itemscope' itemtype='https://schema.org/Blog'>
<article itemprop='blogPost' itemscope='itemscope' itemtype='https://schema.org/BlogPosting'>
<b:include name='article.loop.post'/>
</article>
</main>
</b:if>
</b:includable>
<b:includable id='article.loop.index'>
</b:includable>
<b:includable id='article.loop.post'>
<div class='panel panel-default'>
<div class='panel-heading text-center'>
<h2><data:post.title/></h2>
</div>
<div class='panel-body'>
<div class='post-body' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
<data:post.body/>
</div>
</div>
</div>
</b:includable>
<b:includable id='commentAuthorAvatar'/>
<b:includable id='commentDeleteIcon'/>
<b:includable id='commentForm'/>
<b:includable id='commentFormIframeSrc'/>
<b:includable id='commentItem'/>
<b:includable id='commentList'/>
<b:includable id='commentPicker'/>
<b:includable id='comments'/>
<b:includable id='commentsTitle'/>
<b:includable id='feedLinks'/>
<b:includable id='feedLinksBody'/>
<b:includable id='homePageLink'/>
<b:includable id='iframeComments'/>
<b:includable id='inlineAd'/>
<b:includable id='nextPageLink'/>
<b:includable id='post'/>
<b:includable id='postBody'/>
<b:includable id='postBodySnippet'/>
<b:includable id='postCommentsAndAd'/>
<b:includable id='postCommentsLink'/>
<b:includable id='postFooter'/>
<b:includable id='postFooterAuthorProfile'/>
<b:includable id='postHeader'/>
<b:includable id='postJumpLink'/>
<b:includable id='postMeta'/>
<b:includable id='postPagination'/>
<b:includable id='postTitle'/>
<b:includable id='previousPageLink'/>
<b:includable id='status-message'/>
<b:includable id='threadedCommentForm'/>
<b:includable id='threadedCommentJs'/>
<b:includable id='threadedComments'/>
</b:widget>
<b:widget id='HTML4' locked='true' title='Iklan Kanan' type='HTML' version='2' visible='false'>
<b:widget-settings>
<b:widget-setting name='content'/>
</b:widget-settings>
<b:includable id='main'>
<b:class name='col-md-2 col-sm-2 hidden-xs'/>
<div id='sidebarright'>
<div class='sidebar__inner'>
<data:content/>
</div>
</div>
</b:includable>
</b:widget>
</b:section>
</div>
</div>

<div class='col-md-12' style='padding: 20px 0; background: #fbfbfb; '>
<b:section id='fix'/>
<div class='text-center'><data:messages.poweredByBlogger/></div>
</div>

<div class='modal fade' id='howtoskip' role='dialog'>
<div class='modal-dialog'>
<div class='modal-content'>
<div class='modal-header'>
<button class='close' data-dismiss='modal' type='button'>&#215;</button>
<h4 class='modal-title'>How to Skip</h4>
</div>
<div class='modal-body'>

<ul>
<li>Wait Timer loading to 100%</li>
<li>Click Button Get Link</li>
<li>Click Button Go to Link</li>
<li>Finish</li>
</ul>	

</div>
</div>
</div>
</div>
</b:if> 

<div class='adb hidden' id='adb'>
<div class='adbs' id='adbs'/>
</div> 

<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'/>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'/>
<script src='https://cdn.statically.io/gh/dedi96/keneono/278f27ef/jquerysafeplatinum.pietimer.js' type='text/javascript'/>
<script src='https://cdn.staticaly.com/gh/irfaanprogrammer/safeplatinum/master/sticky-sidebar.min.js' type='text/javascript'/>
<script src='https://min.gitcdn.link/repo/zenorocha/clipboard.js/master/dist/clipboard.min.js' type='text/javascript'/>

<script type='text/javascript'>
<b:if cond='data:view.isHomepage'>
//<![CDATA[
$(document).ready(function(){

$("#btngenerate").on("click",function(){
var generateurl = $("#generateurl").val(),
generatelink = $("#generatelink"),		
generateloading = $("#generateloading"),		
resulturl = $('#resulturl');			

if (generateurl == "") {
$("#generateurl").focus();
return false;
}

$("#copytoclipboard").html("<span class='fa fa-floppy-o'></span> Copy URL");
generateloading.removeClass('hidden');
generatelink.addClass('hidden');
$.ajax({
url : '/feeds/posts/summary?alt=json-in-script',
type: 'get',
dataType: 'jsonp',
success: function(data) {
var link = '',
content = data.feed.entry,
links =new Array();	
if (content !== undefined) {
for (var i = 0; i < content.length; i++) {
for (var j = 0; j < content[i].link.length; j++) {
if (content[i].link[j].rel == "alternate") {
link = content[i].link[j].href;
break;
}
}
links[i] = link;
var randindex = Math.random() * links.length; 
randindex = parseInt(randindex);
}
resultgenerate = links[randindex] + "#?o=" + aesCrypto.encrypt(convertstr(generateurl),convertstr('root'));
generateloading.addClass('hidden');
generatelink.removeClass('hidden');
resulturl.val(resultgenerate);
}else {
resulturl.val('No result!');
}
},
error: function() {
resulturl.val('Error loading feed!');
}
});
});

var clipboard = new ClipboardJS('.copytoclipboard');
clipboard.on('success', function(e) {
$("#copytoclipboard").html("<span class='fa fa-check'></span> Link Copied to Clipboard");
});	

})
//]]>
</b:if>
<b:if cond='data:view.isPost'>
//<![CDATA[

$(document).ready(function(){

$.urlParam = function(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
if (results==null){
return null;
}
else{
return decodeURI(results[1]) || 0;
}
}		

var getlink = $("#getlink"),
gotolink = $("#gotolink"),
timer = $('#timer');

if ($.urlParam('o') != null){
timer.pietimer({
timerSeconds: 5,
color: '#03a9f4',
fill: false,
showPercentage: true,
callback: function() {
getlink.prop('disabled',false);						
getlink.removeClass('hidden');
timer.addClass('hidden');
}
});				
}

function gotolinkcountdown(){
var countDown = 3;
gotolink.removeClass('hidden');
var x = setInterval(function() {

var distance = countDown -= 1;

gotolink.html('<span class="glyphicon glyphicon-time"></span> Plase Wait...');

if (distance < 0) {
clearInterval(x);
gotolink.prop('disabled',false);
gotolink.html('<span class="glyphicon glyphicon-ok-sign"></span> Go to Link');
}
}, 1000);
}				

var request = false;
getlink.click(function() {
if (request == false) {
gotolinkcountdown();
request = true;		
}
$('html, body').animate({
scrollTop: eval(gotolink.offset().top - 10)
}, 100);
});	

gotolink.on("click",function(){
var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')),convertstr('root'));
window.location.href=realurl;
});					

fuckAdBlock.on(true, function() {
$("#adbs").html("Adblock Detected");
$("#adb").removeClass('hidden');
}).on(false, function() {
});

})
//]]>
</b:if>
//<![CDATA[
function convertstr(str) {return str.replace(/^\s+/, '').replace(/\s+$/, ''); } 
var CryptoJS=CryptoJS||function(t,e){var r={},n=r.lib={},i=n.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var r=new t;return e&&r.mixIn(e),r.hasOwnProperty("init")||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=n.WordArray=i.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=r!=e?r:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;i>o;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=s<<24-(n+o)%4*8}else if(r.length>65535)for(var o=0;i>o;o+=4)e[n+o>>>2]=r[o>>>2];else e.push.apply(e,r);return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;e>n;n+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),s=r.enc={},a=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new o.init(r,e/2)}},c=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new o.init(r,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,i=r.sigBytes,s=this.blockSize,a=4*s,c=i/a;c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var f=c*s,u=t.min(4*f,i);if(f){for(var h=0;f>h;h+=s)this._doProcessBlock(n,h);var p=n.splice(0,f);r.sigBytes-=u}return new o.init(p,u)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(n.Hasher=u.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new h.HMAC.init(t,r).finalize(e)}}}),r.algo={});return r}(Math);!function(){{var t=CryptoJS,e=t.lib,r=e.WordArray,n=t.enc;n.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;r>o;o+=3)for(var s=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,f=s<<16|a<<8|c,u=0;4>u&&r>o+.75*u;u++)i.push(n.charAt(f>>>6*(3-u)&63));var h=n.charAt(64);if(h)for(;i.length%4;)i.push(h);return i.join("")},parse:function(t){var e=t.length,n=this._map,i=n.charAt(64);if(i){var o=t.indexOf(i);-1!=o&&(e=o)}for(var s=[],a=0,c=0;e>c;c++)if(c%4){var f=n.indexOf(t.charAt(c-1))<<c%4*2,u=n.indexOf(t.charAt(c))>>>6-c%4*2;s[a>>>2]|=(f|u)<<24-a%4*8,a++}return r.create(s,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}}(),function(t){function e(t,e,r,n,i,o,s){var a=t+(e&r|~e&n)+i+s;return(a<<o|a>>>32-o)+e}function r(t,e,r,n,i,o,s){var a=t+(e&n|r&~n)+i+s;return(a<<o|a>>>32-o)+e}function n(t,e,r,n,i,o,s){var a=t+(e^r^n)+i+s;return(a<<o|a>>>32-o)+e}function i(t,e,r,n,i,o,s){var a=t+(r^(e|~n))+i+s;return(a<<o|a>>>32-o)+e}var o=CryptoJS,s=o.lib,a=s.WordArray,c=s.Hasher,f=o.algo,u=[];!function(){for(var e=0;64>e;e++)u[e]=4294967296*t.abs(t.sin(e+1))|0}();var h=f.MD5=c.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,o){for(var s=0;16>s;s++){var a=o+s,c=t[a];t[a]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var f=this._hash.words,h=t[o+0],p=t[o+1],l=t[o+2],d=t[o+3],v=t[o+4],y=t[o+5],g=t[o+6],_=t[o+7],m=t[o+8],S=t[o+9],B=t[o+10],x=t[o+11],k=t[o+12],C=t[o+13],z=t[o+14],w=t[o+15],E=f[0],D=f[1],M=f[2],b=f[3];E=e(E,D,M,b,h,7,u[0]),b=e(b,E,D,M,p,12,u[1]),M=e(M,b,E,D,l,17,u[2]),D=e(D,M,b,E,d,22,u[3]),E=e(E,D,M,b,v,7,u[4]),b=e(b,E,D,M,y,12,u[5]),M=e(M,b,E,D,g,17,u[6]),D=e(D,M,b,E,_,22,u[7]),E=e(E,D,M,b,m,7,u[8]),b=e(b,E,D,M,S,12,u[9]),M=e(M,b,E,D,B,17,u[10]),D=e(D,M,b,E,x,22,u[11]),E=e(E,D,M,b,k,7,u[12]),b=e(b,E,D,M,C,12,u[13]),M=e(M,b,E,D,z,17,u[14]),D=e(D,M,b,E,w,22,u[15]),E=r(E,D,M,b,p,5,u[16]),b=r(b,E,D,M,g,9,u[17]),M=r(M,b,E,D,x,14,u[18]),D=r(D,M,b,E,h,20,u[19]),E=r(E,D,M,b,y,5,u[20]),b=r(b,E,D,M,B,9,u[21]),M=r(M,b,E,D,w,14,u[22]),D=r(D,M,b,E,v,20,u[23]),E=r(E,D,M,b,S,5,u[24]),b=r(b,E,D,M,z,9,u[25]),M=r(M,b,E,D,d,14,u[26]),D=r(D,M,b,E,m,20,u[27]),E=r(E,D,M,b,C,5,u[28]),b=r(b,E,D,M,l,9,u[29]),M=r(M,b,E,D,_,14,u[30]),D=r(D,M,b,E,k,20,u[31]),E=n(E,D,M,b,y,4,u[32]),b=n(b,E,D,M,m,11,u[33]),M=n(M,b,E,D,x,16,u[34]),D=n(D,M,b,E,z,23,u[35]),E=n(E,D,M,b,p,4,u[36]),b=n(b,E,D,M,v,11,u[37]),M=n(M,b,E,D,_,16,u[38]),D=n(D,M,b,E,B,23,u[39]),E=n(E,D,M,b,C,4,u[40]),b=n(b,E,D,M,h,11,u[41]),M=n(M,b,E,D,d,16,u[42]),D=n(D,M,b,E,g,23,u[43]),E=n(E,D,M,b,S,4,u[44]),b=n(b,E,D,M,k,11,u[45]),M=n(M,b,E,D,w,16,u[46]),D=n(D,M,b,E,l,23,u[47]),E=i(E,D,M,b,h,6,u[48]),b=i(b,E,D,M,_,10,u[49]),M=i(M,b,E,D,z,15,u[50]),D=i(D,M,b,E,y,21,u[51]),E=i(E,D,M,b,k,6,u[52]),b=i(b,E,D,M,d,10,u[53]),M=i(M,b,E,D,B,15,u[54]),D=i(D,M,b,E,p,21,u[55]),E=i(E,D,M,b,m,6,u[56]),b=i(b,E,D,M,w,10,u[57]),M=i(M,b,E,D,g,15,u[58]),D=i(D,M,b,E,C,21,u[59]),E=i(E,D,M,b,v,6,u[60]),b=i(b,E,D,M,x,10,u[61]),M=i(M,b,E,D,l,15,u[62]),D=i(D,M,b,E,S,21,u[63]),f[0]=f[0]+E|0,f[1]=f[1]+D|0,f[2]=f[2]+M|0,f[3]=f[3]+b|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(n/4294967296),s=n;r[(i+64>>>9<<4)+15]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[(i+64>>>9<<4)+14]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,f=0;4>f;f++){var u=c[f];c[f]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return a},clone:function(){var t=c.clone.call(this);return t._hash=this._hash.clone(),t}});o.MD5=c._createHelper(h),o.HmacMD5=c._createHmacHelper(h)}(Math),function(){var t=CryptoJS,e=t.lib,r=e.Base,n=e.WordArray,i=t.algo,o=i.MD5,s=i.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=r.hasher.create(),o=n.create(),s=o.words,a=r.keySize,c=r.iterations;s.length<a;){f&&i.update(f);var f=i.update(t).finalize(e);i.reset();for(var u=1;c>u;u++)f=i.finalize(f),i.reset();o.concat(f)}return o.sigBytes=4*a,o}});t.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,n=r.Base,i=r.WordArray,o=r.BufferedBlockAlgorithm,s=e.enc,a=(s.Utf8,s.Base64),c=e.algo,f=c.EvpKDF,u=r.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?x:m}return function(e){return{encrypt:function(r,n,i){return t(n).encrypt(e,r,n,i)},decrypt:function(r,n,i){return t(n).decrypt(e,r,n,i)}}}}()}),h=(r.StreamCipher=u.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),e.mode={}),p=r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),l=h.CBC=function(){function e(e,r,n){var i=this._iv;if(i){var o=i;this._iv=t}else var o=this._prevBlock;for(var s=0;n>s;s++)e[r+s]^=o[s]}var r=p.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize;e.call(this,t,r,i),n.encryptBlock(t,r),this._prevBlock=t.slice(r,r+i)}}),r.Decryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize,o=t.slice(r,r+i);n.decryptBlock(t,r),e.call(this,t,r,i),this._prevBlock=o}}),r}(),d=e.pad={},v=d.Pkcs7={pad:function(t,e){for(var r=4*e,n=r-t.sigBytes%r,o=n<<24|n<<16|n<<8|n,s=[],a=0;n>a;a+=4)s.push(o);var c=i.create(s,n);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},y=(r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:l,padding:v}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,r=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=r.createEncryptor;else{var n=r.createDecryptor;this._minBufferSize=1}this._mode=n.call(r,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{var e=this._process(!0);t.unpad(e)}return e},blockSize:4}),r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),g=e.format={},_=g.OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;if(r)var n=i.create([1398893684,1701076831]).concat(r).concat(e);else var n=e;return n.toString(a)},parse:function(t){var e=a.parse(t),r=e.words;if(1398893684==r[0]&&1701076831==r[1]){var n=i.create(r.slice(2,4));r.splice(0,4),e.sigBytes-=16}return y.create({ciphertext:e,salt:n})}},m=r.SerializableCipher=n.extend({cfg:n.extend({format:_}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=t.createEncryptor(r,n),o=i.finalize(e),s=i.cfg;return y.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=t.createDecryptor(r,n).finalize(e.ciphertext);return i},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),S=e.kdf={},B=S.OpenSSL={execute:function(t,e,r,n){n||(n=i.random(8));var o=f.create({keySize:e+r}).compute(t,n),s=i.create(o.words.slice(e),4*r);return o.sigBytes=4*e,y.create({key:o,iv:s,salt:n})}},x=r.PasswordBasedCipher=m.extend({cfg:m.cfg.extend({kdf:B}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=n.kdf.execute(r,t.keySize,t.ivSize);n.iv=i.iv;var o=m.encrypt.call(this,t,e,i.key,n);return o.mixIn(i),o},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=n.kdf.execute(r,t.keySize,t.ivSize,e.salt);n.iv=i.iv;var o=m.decrypt.call(this,t,e,i.key,n);return o}})}(),function(){var t=CryptoJS,e=t.lib,r=e.BlockCipher,n=t.algo,i=[],o=[],s=[],a=[],c=[],f=[],u=[],h=[],p=[],l=[];!function(){for(var t=[],e=0;256>e;e++)t[e]=128>e?e<<1:e<<1^283;for(var r=0,n=0,e=0;256>e;e++){var d=n^n<<1^n<<2^n<<3^n<<4;d=d>>>8^255&d^99,i[r]=d,o[d]=r;var v=t[r],y=t[v],g=t[y],_=257*t[d]^16843008*d;s[r]=_<<24|_>>>8,a[r]=_<<16|_>>>16,c[r]=_<<8|_>>>24,f[r]=_;var _=16843009*g^65537*y^257*v^16843008*r;u[d]=_<<24|_>>>8,h[d]=_<<16|_>>>16,p[d]=_<<8|_>>>24,l[d]=_,r?(r=v^t[t[t[g^v]]],n^=t[t[n]]):r=n=1}}();var d=[0,1,2,4,8,16,32,64,128,27,54],v=n.AES=r.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes/4,n=this._nRounds=r+6,o=4*(n+1),s=this._keySchedule=[],a=0;o>a;a++)if(r>a)s[a]=e[a];else{var c=s[a-1];a%r?r>6&&a%r==4&&(c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c]):(c=c<<8|c>>>24,c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c],c^=d[a/r|0]<<24),s[a]=s[a-r]^c}for(var f=this._invKeySchedule=[],v=0;o>v;v++){var a=o-v;if(v%4)var c=s[a];else var c=s[a-4];f[v]=4>v||4>=a?c:u[i[c>>>24]]^h[i[c>>>16&255]]^p[i[c>>>8&255]]^l[i[255&c]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,a,c,f,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,u,h,p,l,o);var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,i,o,s,a){for(var c=this._nRounds,f=t[e]^r[0],u=t[e+1]^r[1],h=t[e+2]^r[2],p=t[e+3]^r[3],l=4,d=1;c>d;d++){var v=n[f>>>24]^i[u>>>16&255]^o[h>>>8&255]^s[255&p]^r[l++],y=n[u>>>24]^i[h>>>16&255]^o[p>>>8&255]^s[255&f]^r[l++],g=n[h>>>24]^i[p>>>16&255]^o[f>>>8&255]^s[255&u]^r[l++],_=n[p>>>24]^i[f>>>16&255]^o[u>>>8&255]^s[255&h]^r[l++];f=v,u=y,h=g,p=_}var v=(a[f>>>24]<<24|a[u>>>16&255]<<16|a[h>>>8&255]<<8|a[255&p])^r[l++],y=(a[u>>>24]<<24|a[h>>>16&255]<<16|a[p>>>8&255]<<8|a[255&f])^r[l++],g=(a[h>>>24]<<24|a[p>>>16&255]<<16|a[f>>>8&255]<<8|a[255&u])^r[l++],_=(a[p>>>24]<<24|a[f>>>16&255]<<16|a[u>>>8&255]<<8|a[255&h])^r[l++];t[e]=v,t[e+1]=y,t[e+2]=g,t[e+3]=_},keySize:8});t.AES=r._createHelper(v)}();var aesCrypto={};!function(t){"use strict";t.formatter={prefix:"",stringify:function(t){var r=this.prefix;return r+=t.salt.toString(),r+=t.ciphertext.toString()},parse:function(t){var r=CryptoJS.lib.CipherParams.create({}),e=this.prefix.length;return 0!==t.indexOf(this.prefix)?r:(r.ciphertext=CryptoJS.enc.Hex.parse(t.substring(16+e)),r.salt=CryptoJS.enc.Hex.parse(t.substring(e,16+e)),r)}},t.encrypt=function(r,e){try{return CryptoJS.AES.encrypt(r,e,{format:t.formatter}).toString()}catch(n){return""}},t.decrypt=function(r,e){try{var n=CryptoJS.AES.decrypt(r,e,{format:t.formatter});return n.toString(CryptoJS.enc.Utf8)}catch(i){return""}}}(aesCrypto);
/* ==========================================================================
ADBLOCK PLUGIN
========================================================================== */
!function(t){var e=function(e){this._options={checkOnLoad:!1,resetOnEnd:!1,loopCheckTime:50,loopMaxNumber:5,baitClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",baitStyle:"width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",debug:!1},this._var={version:"3.2.1",bait:null,checking:!1,loop:null,loopNumber:0,event:{detected:[],notDetected:[]}},void 0!==e&&this.setOption(e);var i=this,o=function(){setTimeout(function(){i._options.checkOnLoad===!0&&(i._options.debug===!0&&i._log("onload->eventCallback","A check loading is launched"),null===i._var.bait&&i._creatBait(),setTimeout(function(){i.check()},1))},1)};void 0!==t.addEventListener?t.addEventListener("load",o,!1):t.attachEvent("onload",o)};e.prototype._options=null,e.prototype._var=null,e.prototype._bait=null,e.prototype._log=function(t,e){console.log("[FuckAdBlock]["+t+"] "+e)},e.prototype.setOption=function(t,e){if(void 0!==e){var i=t;t={},t[i]=e}for(var o in t)this._options[o]=t[o],this._options.debug===!0&&this._log("setOption",'The option "'+o+'" he was assigned to "'+t[o]+'"');return this},e.prototype._creatBait=function(){var e=document.createElement("div");e.setAttribute("class",this._options.baitClass),e.setAttribute("style",this._options.baitStyle),this._var.bait=t.document.body.appendChild(e),this._var.bait.offsetParent,this._var.bait.offsetHeight,this._var.bait.offsetLeft,this._var.bait.offsetTop,this._var.bait.offsetWidth,this._var.bait.clientHeight,this._var.bait.clientWidth,this._options.debug===!0&&this._log("_creatBait","Bait has been created")},e.prototype._destroyBait=function(){t.document.body.removeChild(this._var.bait),this._var.bait=null,this._options.debug===!0&&this._log("_destroyBait","Bait has been removed")},e.prototype.check=function(t){if(void 0===t&&(t=!0),this._options.debug===!0&&this._log("check","An audit was requested "+(t===!0?"with a":"without")+" loop"),this._var.checking===!0)return this._options.debug===!0&&this._log("check","A check was canceled because there is already an ongoing"),!1;this._var.checking=!0,null===this._var.bait&&this._creatBait();var e=this;return this._var.loopNumber=0,t===!0&&(this._var.loop=setInterval(function(){e._checkBait(t)},this._options.loopCheckTime)),setTimeout(function(){e._checkBait(t)},1),this._options.debug===!0&&this._log("check","A check is in progress ..."),!0},e.prototype._checkBait=function(e){var i=!1;if(null===this._var.bait&&this._creatBait(),(null!==t.document.body.getAttribute("abp")||null===this._var.bait.offsetParent||0==this._var.bait.offsetHeight||0==this._var.bait.offsetLeft||0==this._var.bait.offsetTop||0==this._var.bait.offsetWidth||0==this._var.bait.clientHeight||0==this._var.bait.clientWidth)&&(i=!0),void 0!==t.getComputedStyle){var o=t.getComputedStyle(this._var.bait,null);!o||"none"!=o.getPropertyValue("display")&&"hidden"!=o.getPropertyValue("visibility")||(i=!0)}this._options.debug===!0&&this._log("_checkBait","A check ("+(this._var.loopNumber+1)+"/"+this._options.loopMaxNumber+" ~"+(1+this._var.loopNumber*this._options.loopCheckTime)+"ms) was conducted and detection is "+(i===!0?"positive":"negative")),e===!0&&(this._var.loopNumber++,this._var.loopNumber>=this._options.loopMaxNumber&&this._stopLoop()),i===!0?(this._stopLoop(),this._destroyBait(),this.emitEvent(!0),e===!0&&(this._var.checking=!1)):(null===this._var.loop||e===!1)&&(this._destroyBait(),this.emitEvent(!1),e===!0&&(this._var.checking=!1))},e.prototype._stopLoop=function(t){clearInterval(this._var.loop),this._var.loop=null,this._var.loopNumber=0,this._options.debug===!0&&this._log("_stopLoop","A loop has been stopped")},e.prototype.emitEvent=function(t){this._options.debug===!0&&this._log("emitEvent","An event with a "+(t===!0?"positive":"negative")+" detection was called");var e=this._var.event[t===!0?"detected":"notDetected"];for(var i in e)this._options.debug===!0&&this._log("emitEvent","Call function "+(parseInt(i)+1)+"/"+e.length),e.hasOwnProperty(i)&&e[i]();return this._options.resetOnEnd===!0&&this.clearEvent(),this},e.prototype.clearEvent=function(){this._var.event.detected=[],this._var.event.notDetected=[],this._options.debug===!0&&this._log("clearEvent","The event list has been cleared")},e.prototype.on=function(t,e){return this._var.event[t===!0?"detected":"notDetected"].push(e),this._options.debug===!0&&this._log("on",'A type of event "'+(t===!0?"detected":"notDetected")+'" was added'),this},e.prototype.onDetected=function(t){return this.on(!0,t)},e.prototype.onNotDetected=function(t){return this.on(!1,t)},t.FuckAdBlock=e,void 0===t.fuckAdBlock&&(t.fuckAdBlock=new e({checkOnLoad:!0,resetOnEnd:!0}))}(window);
//]]>
</script>

</b:if>		

</body>
</html>