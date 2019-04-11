/* ==========================================================================
 * Naam: defa_data_bs4.es6
   ========================================================================== */
/* ========================================================================== */
/**
 * @name defa_tpl_config_01
 * @constant
 * @global
 * @type {string}
 * @default
 * @description Doorgeven als een lege dummie tpl_config.
 */
const defa_tpl_config_01 = {};
/* ========================================================================== */
// MOET WEG, CODE NAKIJKEN, var in _CONFIG MOETEN NAAR CONFIGURARTIE
// SAMENGESTELDE full_path_rel_media %> ZAL LEEG ZIJN, CHECKEN EN EVENTUEEL OVERAL WIJZIGEN.
// GITHUB VARS ERBIJ ZOALS abs_url, media map, zie github-10
/**
 * @name {Object} json_configuratie
 * @description configuratie van de webapp
 * @name {String} json_configuratie.glint_site_testen
 * @param {String} json_configuratie.glint_url_abs
 * @description Moet gevuld worden bij deploy, bijv. www.bolle.nl/, MET / op einde, !!! anders dan Jekyll bs3 
 * @param {String} json_configuratie.glint_url_rel
 * @description Meestal leeg, indien gevuld , bijv. www.bolle.nl/, MET / op einde
 * @param {String} json_configuratie.glint_use_manifest
 * @description Moet er een manifest.json toegevoegd worden
 * @default false
 * @param {String} json_configuratie.glint_use_service_worker
 * @description Moet er een service-worker.js toegevoegd worden
 * @default false
 * @param {String} json_configuratie.glint_use_twitter_card
 * @description Moet er een twitter-card toegevoegd worden
 * @default false
 * @param {String} json_configuratie.glint_bs4_project
 * @description Een Bs3 of Bs4 project, schakelaar in Lodash
 * @default false
 * @param {String} json_configuratie.glint_meta_robots
 * @default "INDEX, FOLLOW"
 * @param {String} json_configuratie.glint_merk_tekst
 * @description tekst van de Brand
 * @param {String} json_configuratie.glint_merk_link
 * @description link van de Brand
 * @param {String} glint_path_klant_media:
 * @default "images/"
 * @param {String} glint_path_klant_media_post:
 * @default "images/"
 * @param {String} glint_path_tech_media:
 * @default "images/"
 * @param {String} glint_path_icons:
 * @default "icons/"
 * @param {String} glint_path_json:
 * @default "json/"
 * @param {String} json_configuratie.glint_webapp_name
 * @description You must provide at least the short_name or name property.
 * @description If both are provided, short_name is used on the user's home screen, launcher,
 * @description && or other places where space may be limited. name is used on the app install prompt.
 * @default  My App
 * @param {String} json_configuratie.glint_webapp_short_name
 * @description zie glint_webpapp_name
 * @default  My App
 * @param {String} json_configuratie.glint_webapp_description
 * @default  My App Description
 * @description XXX
 * @param {String} json_configuratie.glint_webapp_version
 * @description XXX
 * @default  "0.1"
 * @param {String} json_configuratie.glint_webapp_start_url
 * @default  "."
 * @description Your start_url should direct the user straight into your app.
 * @description Think about the what the user will want to do once they open your app, and place them there.
 * @param {String} json_configuratie.glint_webapp_display
 * @description fullscreen:	All of the available display area is used and no user agent chrome is shown.
 * @description standalone:	The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application
 * @description && launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.
 * @description minimal-ui:	The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation.
 * @description && The elements will vary by browser.
 * @description browser: The application opens in a conventional browser tab or new window, depending on the browser and platform. This is the default.
 * @default  fullscreen
 * @param {String} json_configuratie.glint_webapp_theme_color
 * @description AG-kleur van de toolbar
 * @description The theme_color sets the color of the tool bar, and in the task switcher.
 * @default #3f51b5
 * @param {String} json_configuratie.glint_webapp_bg_color
 * @description AG-kleur van de MS-tile en splash screen
 * @description The background_color property is used on the splash screen when the application is first launched  The background_color should be the same color as the load page,
 * @description && to provide a smooth transition from the splash screen to your app
 * @default #3f51b5
 * @param {String} json_configuratie.glint_twitter_card
 * @description twitter:card - The type of card to be created: summary, photo, or video
 * @default summary
 * @param {String}  json_configuratie.glint_twitter_site
 * @description twitter:site - The Twitter username used by the given site including the '@'
 * @default @user_name
 * @param {String} json_configuratie.glint_twitter_type
 * @description Let op og = open graph
 * @description The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
 * @default website
 * @param {String}  json_configuratie.glint_touch_icon_48
 * @description Include a 192x192 pixel icon and a 512x512 pixel icon.
 * @description Chrome will automatically scale the icon for the device.
 * @description If you'd prefer to scale your own icons and adjust them for pixel-perfection,
 * @description && provide icons in increments of 48dp.
 * @param {String}  json_configuratie.glint_touch_icon_72
 * @description zie glint_touch_icon_48.
 * @param {String}  json_configuratie.glint_touch_icon_96
 * @description zie glint_touch_icon_48.
 * @param {String}  json_configuratie.glint_touch_icon_144
 * @description zie glint_touch_icon_48.
 * @param {String}  json_configuratie.glint_touch_icon_192
 * @description zie glint_touch_icon_48.
 * @param {String}  json_configuratie.glint_touch_icon_512
 * @description zie glint_touch_icon_48.
 * @param {String}  json_configuratie.glint_github_upload_yes
 * @default: false
 * @desciption Staat het project locaal of gaat het ge-upload worden?
 * @description Het absolute pad naar JSON moet dan wijzigen.
 * @param {String}  json_configuratie.glint_github_url_abs
 * @default "https://quasimobi.github.io/lavinia_01_git/" 
 * @description XXX
 * @description MET / op einde
 * @param {String}  json_configuratie.glint_github_path_json
 * @default "json/"
 * @description Wanneer het project bij Amen staat, maar wanneer data van Github gelezen wordt
 * @description in welke map staat dan JSON op Github.
 * @param {String}  json_configuratie.glint_github_path_media
 * @description Wanneer het project bij Amen staat, maar wanneer images van Github opgehaald worden
 * @description in welke map staan dan de images op Github.
 * @default ""images/""
 */
const json_configuratie = {"glint_site_testen":false,"glint_url_abs":"http://127.0.0.1:4857/","glint_url_rel":"","glint_path_klant_media":"images/","glint_path_tech_media":"images/","glint_path_icons":"icons/","glint_path_json":"json/","glint_path_css":"css/","glint_path_js_glint":"js/glint/","glint_path_js_vendor":"js/vendor/","glint_github_upload_yes":true,"glint_github_url_abs":"https://Quasimobi.github.io/","glint_github_path_json":"json/","glint_github_path_media":"images/"};
/* ========================================================================== */
/**
 * @name json_bedrijf
 * @constant
 * @global
 * @type {string}
 * @default
 * @description gegevens van het bedrijf van de klant
 */
const json_bedrijf = {"website_title":"Glint.mobi","company_name":"Candy Business","meta_description":"Glint professionele websites vallen op zodat je belangen centraal komen te staan.","meta_keywords":"bouwblokken, kunstenaars, fotografen, sneller gemaakt, jekyll, sass, goedkoper, ubuntu, jquery, gimp","jaar_copyright":"2019","adres_straat":"Candystreet","adres_huisnr":"2161","adres_postcode":"3056 AP","adres_plaats":"Rotterdam","adres_telefoon":"+31107142497","website_link":"http://www.centobytes.nl","email_tekst":"Informatie@CentoBytes.nl","email_link":"Informatie@CentoBytes.nl","form_actie":"http://formspree.io/Informatie@CentoBytes.nl","twitter_naam":"Bauke_Mobi"};
/* ========================================================================== */
/**
 * @name json_centobytes
 * @constant
 * @global
 * @type {string}
 * @default
 * @description mijn gegevens
 */
const json_centobytes = {"company_name":"Centobytes Informatisering","meta_keywords":"schitterend, schitteren, www.centobytes.nl, www.glint.mobi, Bauke_Mobi"};
/* ========================================================================== */
/**
 * @name full_path_rel_media
 * @constant
 * @global
 * @type {string}
 * @default
 * @description Het volle relatieve path naar de media van de webapp.
 */
var full_path_rel_media = json_configuratie.glint_url_rel+json_configuratie.glint_path_klant_media;
/* ========================================================================== */
/**
 * @name full_path_abs_media
 * @constant
 * @global
 * @type {string}
 * @default
 * @description Het volle absolute path naar de media van de webapp.
 */
var full_path_abs_media = json_configuratie.glint_url_abs+json_configuratie.glint_path_klant_media;
/* ========================================================================== */
/**
 * @name full_path_rel_icons
 * @constant
 * @global
 * @type {string}
 * @default
 * @description Het volle relatieve path naar de icons van de webapp.
 */
 var full_path_rel_icons = json_configuratie.glint_url_rel+json_configuratie.glint_path_icons;
/* ========================================================================== */
/**
 * @name full_path_rel_json
 * @constant
 * @global
 * @type {string}
 * @default
 * @description Het volle relatieve path naar de json van de webapp.
 */
var full_path_rel_json = json_configuratie.glint_url_rel+json_configuratie.glint_path_json 
/* ========================================================================== */
/**
 * @name full_path_abs_json
 * @constant
 * @global
 * @type {string}
 * @default
 * @description Het volle absolute path naar de json van de webapp.
 */
var full_path_abs_json = json_configuratie.glint_url_abs+json_configuratie.glint_path_json 
/* ========================================================================== */
/**
 * @name full_github_path_json
 * @constant
 * @global
 * @type {string}
 * @default
 * @description Het volle, absolute, GITHUB, path naar de map waar de json staat.
 * @description Met een streepje op het einde.
 */
var full_github_path_json = json_configuratie.glint_github_url_abs+json_configuratie.glint_github_path_json
/* ========================================================================== */
/**
 * @name full_github_path_media
 * @constant
 * @global
 * @type {string}
 * @default
 * @description Het volle, absolute, GITHUB, path naar de map waar de media van de webapp. staat
 */
var full_github_path_media = json_configuratie.glint_github_url_abs+json_configuratie.glint_github_path_media;
/* ========================================================================== */
/* ========================================================================== */
