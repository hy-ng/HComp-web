// Created by iWeb 2.0.4 local-build-20120628

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('About_the_Workshop_files/Creme_sidebar_frame_01.png'),IWCreateImage('About_the_Workshop_files/Creme_sidebar_frame_02.png'),IWCreateImage('About_the_Workshop_files/Creme_sidebar_frame_03.png'),IWCreateImage('About_the_Workshop_files/Creme_sidebar_frame_06.png'),IWCreateImage('About_the_Workshop_files/Creme_sidebar_frame_09.png'),IWCreateImage('About_the_Workshop_files/Creme_sidebar_frame_08.png'),IWCreateImage('About_the_Workshop_files/Creme_sidebar_frame_07.png'),IWCreateImage('About_the_Workshop_files/Creme_sidebar_frame_04.png')],null,2,1.000000,0.000000,0.000000,0.000000,0.000000,10.000000,16.000000,10.000000,20.000000,523.000000,173.000000,523.000000,173.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('About_the_Workshop_files/About_the_WorkshopMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
