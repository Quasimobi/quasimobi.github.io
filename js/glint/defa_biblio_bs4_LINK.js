/* ==========================================================================
 *
 * Naam: defa_biblio_bs4.js
 * Default script dat ik elk programma gebruikt wordt.
  =========================================================================== */
/* Om ervoor te zorgen dat bij wijziging gegenereerd wordt */
/* {% include a_reload.html %} */
/* ========================================================================== */
/**
 * sanitizeHTML
 * omschrijving:
 * Simpel zie http://exploringjs.com/es6/ch_template-literals.html#_text-templating-via-untagged-template-literals
 * Beter: https://github.com/cure53/DOMPurify
 */
/**
 * @name sanitizeHTML
 * @function
 * @global
 * @param  {} template_dirty
 */
function sanitizeHTML(template_dirty) {
  return template_dirty;
}
/* ========================================================================== */
/**
 * @name render_tpl_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} tpl_totaal
 * @param  {} knop_tekst Geen functie hier, maakt de aanroep gelijk aan render_tpl_02.
 * @description Voeg de template toe aan de dom.<br>
 * @description Wanneer de globale var site_testen false is, wordt de code schoon gemaakt.
 */
/* TODO: Wanneer de globale var site_testen false is, wordt de code schoon gemaakt. */
function render_tpl_01(anker_id, tpl_totaal, knop_tekst= "dummie") {
  document.getElementById(anker_id).innerHTML = sanitizeHTML(tpl_totaal);
}
/* ========================================================================== */
/**
 * @name render_tpl_02
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} tpl_totaal
 * @param  {} knop_tekst Tekst op de knop om te downloaden, defa toon_html
 * @description Toon een knop waarmee de template in een tekst bestand getoond wordt.
 */
function render_tpl_02(anker_id, tpl_totaal, knop_tekst= "toon_html") {
  let anker_id_02 = anker_id+"02";
  let anker_button = "<button id="+anker_id_02+">"+knop_tekst+"</button>";
  document.getElementById(anker_id).innerHTML = anker_button;
  toonInhoud_01(anker_id_02, tpl_totaal, "tpl_inhoud.txt");
}
/* ========================================================================== */
/**
 * @param  {} anker_id
 */
/* TODO:  de images moeten een doorschijnende ag hebben, maar zelf maken.
Ik zal ook een eigen images dir moeten voor de skeletten
zie bij starter nuxt voor een logo in de vorm van svg
 */
function render_skelet_xxll_image(anker_id) {

}
/* ========================================================================== */
/**
 * @name log_script
 * @function
 * @global
 */
function log_script() {
  document.querySelector('#log_script').textContent += Array.prototype.join.call(arguments, '') + '\n';
}
/* ========================================================================== */
/**
 * @name log_error_01
 * @function
 * @global
 * @description TODO Log de fouten naar de bestand.
 * @description voorlopig gaat het naar de console.
 */
function log_error_01(fout, error) {
   console.log(fout, error);
}
/* ========================================================================== */
/**
 * @name document_ready
 * @function
 * @global
 * @param  {} functie
 * @description Vervanging van jQuery document.ready
 */
function document_ready(functie) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    functie();
  } else {
    document.addEventListener('DOMContentLoaded', functie);
  }
}
/* ========================================================================== */
/**
 * @name meta_is_mobile_01
 * @function
 * @global
 * @description Test of apparaat mobiel is, bron Lavinia
 */
/* TODO : functie zonder jQuerymaken */
/* Framework 7 heeft een erg mooie */
/* ========================================================================== */
/*
$.isMobile = function(type){
  var reg = [];
  var any = {
      blackberry : 'BlackBerry',
      android : 'Android',
      windows : 'IEMobile',
      opera : 'Opera Mini',
      ios : 'iPhone|iPad|iPod'
  };
  type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
  if ('*' == type) reg = $.map(any, function(v){ return v; });
  else if (type in any) reg.push(any[type]);
  return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
}
*/
/* ========================================================================== */
/**
 * @name docu_class_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_class_01
 */
function docu_class_01(anker_id, docu_class_01) {
  let tpl_docu_string = `
    <pre>
    <div class="docu_class_01">
      <h3>Class</h3>
      Naam:         <%= docu_class_01.naam %>
      Omschrijving: <%= docu_class_01.omschrijving_01 %>
                    <%= docu_class_01.omschrijving_02 %>
                    <%= docu_class_01.omschrijving_03 %>
                    <%= docu_class_01.omschrijving_04 %>
                    <%= docu_class_01.omschrijving_05 %>
    </div>
    </pre>
  `;

  let templDocuString = _.template(tpl_docu_string);
  let compDocuString = templDocuString({ docu_class_01});

  document.getElementById(anker_id).innerHTML = compDocuString;
}
/* ========================================================================== */
/**
 * @name docu_basis_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_kode_01
 * @description soort: template, wrapper, snippets, script of block.
 */
function docu_basis_01(docu_kode_01) {

  let tpl_docu_string = ``;
  tpl_docu_string = tpl_docu_string+`Naam:         ${ docu_kode_01.naam }<br>`;

  if (docu_kode_01.gegevens != undefined) {
    tpl_docu_string = tpl_docu_string+`Gegevens:     ${ docu_kode_01.gegevens }<br>`;
  }

  if (docu_kode_01.wrapper != undefined) {
    tpl_docu_string = tpl_docu_string+`Wrapper:      ${ docu_kode_01.wrapper }<br>`;
  }
  
  if (docu_kode_01.klasse != undefined) {
    tpl_docu_string = tpl_docu_string+`Klasse:       ${ docu_kode_01.klasse }<br>`;
  }

  if (docu_kode_01.omschrijving != undefined) {
    tpl_docu_string = tpl_docu_string+`Omschrijving_vervallen: ${ docu_kode_01.omschrijving }<br>`;
  }

  tpl_docu_string = tpl_docu_string+`Omschrijving: ${ docu_kode_01.omschrijving_01 }<br>`;

  if (docu_kode_01.omschrijving_02 != undefined) {
    tpl_docu_string = tpl_docu_string+`              ${ docu_kode_01.omschrijving_02 }<br>`;
  }

  if (docu_kode_01.omschrijving_03 != undefined) {
    tpl_docu_string = tpl_docu_string+`              ${ docu_kode_01.omschrijving_03 }<br>`;
  }

  if (docu_kode_01.omschrijving_04 != undefined) {
    tpl_docu_string = tpl_docu_string+`              ${ docu_kode_01.omschrijving_04 }<br>`;
  }

  if (docu_kode_01.omschrijving_05 != undefined) {
    tpl_docu_string = tpl_docu_string+`              ${ docu_kode_01.omschrijving_05 }<br>`;
  }  

  return tpl_docu_string;
}
/* ========================================================================== */
function docu_template_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<pre><div class="docu_template_01">`;
  tpl_docu_string = tpl_docu_string+`<h1>Template</h1>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;

  tpl_docu_string = tpl_docu_string+`</div></pre>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}  
/* ========================================================================== */
/**
 * @name docu_wrapper_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_kode_01
 * @description <pre class="docu_wrapper_01" id="${anker_id}"></pre>
 */
function docu_wrapper_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<pre><div class="docu_wrapper_01">`;
  tpl_docu_string = tpl_docu_string+`<h3>Wrapper</h3>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;  

  tpl_docu_string = tpl_docu_string+`</div></pre>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
/**
 * @name docu_snippet_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_kode_01
 */
function docu_snippet_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<pre><div class="docu_snippet_01">`;
  tpl_docu_string = tpl_docu_string+`<h3>Snippet</h33>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;  

  tpl_docu_string = tpl_docu_string+`</div></pre>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
/**
 * @name docu_block_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_block_01
 */
function docu_block_01(anker_id, docu_block_01) {
  let tpl_docu_string = `
    <pre>
    <div class="docu_block_01">
      <h3>Block</h3>
      Naam: <%= docu_block_01.naam %>
      Klasse: <%= docu_block_01.klasse %>
      Omschrijving: <%= docu_block_01.omschrijving %>
    </div>
    </pre>
  `;

  let templDocuString = _.template(tpl_docu_string);
  let compDocuString = templDocuString({ docu_block_01});

  document.getElementById(anker_id).innerHTML = compDocuString;
}
/* ========================================================================== */
/**
 * @name docu_script_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_script_01
 */
function docu_script_01(anker_id, docu_script_01) {
  let tpl_docu_string = `
    <pre>
    <div class="docu_script_01">
      <h3>Script</h3>
      Naam:         <%= docu_script_01.naam %>
      Omschrijving: <%= docu_script_01.omschrijving %>
    </div>
    </pre>
  `;

  let templDocuString = _.template(tpl_docu_string);
  let compDocuString = templDocuString({ docu_script_01});

  document.getElementById(anker_id).innerHTML = compDocuString;
}
/* ========================================================================== */
/**
 * @name toonInhoud_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} inhoud
 * @param  {} bestandnaam - default toon.txt
 * @example netjes maken
*<button id="id_toon_01">toon.txt</button>
* <script>
*  toonInhoud_01("id_toon_01", data_snip_33.kop);
* </script>
 */
function toonInhoud_01(anker_id, inhoud, bestandnaam = "toon.txt") {
  var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };

  var create = document.getElementById(anker_id);

  create.addEventListener('click', function () {
    var link = document.createElement('a');
    link.setAttribute('download', bestandnaam);
    link.href = makeTextFile(inhoud);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
		});

  }, false);
}
/* ========================================================================== */
/**
 * @name toon_configuratie
 * @function
 * @global
 * @param  {} json_configuratie
 */
function toon_configuratie(json_configuratie) {

  let tpl_config_01 = `
    loc_site_testen:               ${ json_configuratie.glint_site_testen }
    loc_url_abs:                   ${ json_configuratie.glint_url_abs }
    loc_url_rel:                   ${ json_configuratie.glint_url_rel }
    loc_use_manifest:              ${ json_configuratie.glint_use_manifest }
    loc_use_service_worker:        ${ json_configuratie.glint_use_service_worker }
    loc_use_twitter_card:          ${ json_configuratie.glint_use_twitter_card }
    loc_meta_robots:               ${ json_configuratie.glint_meta_robots }
    loc_merk_tekst:                ${ json_configuratie.glint_merk_tekst }
    loc_merk_link:                 ${ json_configuratie.glint_merk_link }
    loc_path_bedrijf_media:        ${ json_configuratie.glint_path_klant_media }
    loc_path_bedrijf_media_post:   ${ json_configuratie.glint_path_klant_media_post }
    loc_path_icons:                ${ json_configuratie.glint_path_icons }
    loc_path_json:                 ${ json_configuratie.glint_path_json }
    loc_webapp_name:               ${ json_configuratie.glint_webapp_name }
    loc_webapp_short_name:         ${ json_configuratie.glint_webapp_short_name }
    loc_webapp_description:        ${ json_configuratie.glint_webapp_description }
    loc_webapp_version:            ${ json_configuratie.glint_webapp_version }
    loc_webapp_start_url:          ${ json_configuratie.glint_webapp_start_url }
    loc_webapp_display:            ${ json_configuratie.glint_webapp_display }
    loc_webapp_theme_color:        ${ json_configuratie.glint_webapp_theme_color }
    loc_webapp_bg_color:           ${ json_configuratie.glint_webapp_bg_color }
    loc_twitter_card:              ${ json_configuratie.glint_twitter_card }
    loc_twitter_site:              ${ json_configuratie.glint_twitter_site }
    loc_twitter_type:              ${ json_configuratie.glint_twitter_type }
    loc_touch_icon_48:             ${ json_configuratie.glint_touch_icon_48 }
    loc_touch_icon_72:             ${ json_configuratie.glint_touch_icon_72 }
    loc_touch_icon_96:             ${ json_configuratie.glint_touch_icon_96 }
    loc_touch_icon_144:            ${ json_configuratie.glint_touch_icon_144 }
    loc_touch_icon_192:            ${ json_configuratie.glint_touch_icon_192 }
    loc_touch_icon_512:            ${ json_configuratie.glint_touch_icon_512 }
    loc_github_url_abs:            ${ json_configuratie.glint_github_url_abs }
    loc_github_root:               ${ json_configuratie.glint_github_root }
    loc_github_path_media:         ${ json_configuratie.glint_github_path_media }
  `;

  return tpl_config_01;
}
/* ========================================================================== */
/**
 * @name toon_bedrijf
 * @function
 * @global
 * @param  {} json_bedrijf
 */
/* TODO: tawk is veranderd zie glint_03 */
function toon_bedrijf(json_bedrijf) {

  let tpl_bedrijf_01 = `
    website_title:           ${ json_bedrijf.website_title }
    company_name:            ${ json_bedrijf.company_name }
    base_description:        ${ json_bedrijf.meta_description }
    meta_keywords:           ${ json_bedrijf.meta_keywords }
    jaar_copyright:          ${ json_bedrijf.jaar_copyright }
    adres_straat:            ${ json_bedrijf.adres_straat }
    adres_huisnr:            ${ json_bedrijf.adres_huisnr }
    adres_postcode:          ${ json_bedrijf.adres_postcode }
    adres_plaats:            ${ json_bedrijf.adres_plaats }
    adres_telefoon:          ${ json_bedrijf.adres_telefoon }
    website_link:            ${ json_bedrijf.website_link }
    email_tekst:             ${ json_bedrijf.email_tekst }
    email_link:              ${ json_bedrijf.email_link }
    form_actie:              ${ json_bedrijf.form_actie }
    wordpress_link:          ${ json_bedrijf.wordpress_link }
    twitter_naam:            ${ json_bedrijf.twitter_naam }
    facebook_naam:           ${ json_bedrijf.facebook_naam }
    tawk_sleutel:            ${ json_bedrijf.tawk_sleutel }
  `;

  return tpl_bedrijf_01;
}
/* ======================================================================= */
/**
 * @name generate_manifest_01
 * @function
 * @global
 * @description Manifest volgens: polymer versie 3.0
 * @description Controle kan met Tools van Chromium
 * @description https://pwa-starter-kit.polymer-project.org
  */
function generate_manifest_01(json_configuratie) {

  let tpl_manifest_01 = `
    {
      "name":              "${ json_configuratie.glint_webapp_name }",
      "short_name":        "${ json_configuratie.glint_webapp_short_name }",
      "description":       "${ json_configuratie.glint_webapp_description }",
      "start_url":         "${ json_configuratie.glint_webapp_start_url }",
      "display":           "${ json_configuratie.glint_webapp_display }",
      "theme_color":       "${ json_configuratie.glint_webapp_theme_color }",
      "background_color":  "${ json_configuratie.glint_webapp_bg_color }",
      "icons": [
        {
          "src": "${ full_path_rel_icons }${ json_configuratie.glint_touch_icon_192 }",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "${ full_path_rel_icons }${ json_configuratie.glint_touch_icon_512 }",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    }
  `;

  return tpl_manifest_01;
}
/* ======================================================================= */
/**
 * @name generate_manifest_02
 * @function
 * @global
 * @description Uitgebreide versie van een Manifest.
 * @description https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
 * @description https://developer.mozilla.org/en-US/docs/Web/Manifest
 */
function generate_manifest_02(json_configuratie) {

  let tpl_manifest_02 = `
    {
      "name":              "${ json_configuratie.glint_webapp_name }",
      "short_name":        "${ json_configuratie.glint_webapp_short_name }",
      "description":       "${ json_configuratie.glint_webapp_description }",
      "start_url":         "${ json_configuratie.glint_webapp_start_url }",
      "display":           "${ json_configuratie.glint_webapp_display }",
      "theme_color":       "${ json_configuratie.glint_webapp_theme_color }",
      "background_color":  "${ json_configuratie.glint_webapp_bg_color }",
      "icons": [{
          "src": "${ full_path_rel_icons }${ json_configuratie.glint_touch_icon_48 }",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "${ full_path_rel_icons }${ json_configuratie.glint_touch_icon_72 }",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "${ full_path_rel_icons }${ json_configuratie.glint_touch_icon_96 }",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "${ full_path_rel_icons }${ json_configuratie.glint_touch_icon_144 }",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "${ full_path_rel_icons }${ json_configuratie.glint_touch_icon_192 }",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "${ full_path_rel_icons }${ json_configuratie.glint_touch_icon_512 }",
          "sizes": "512x512",
          "type": "image/png"
        }]
    }`;

  return tpl_manifest_02;
}
/* ======================================================================= */
/**
 * @name generate_404_01
 * @function
 * @global
 * @param  {} json_configuratie
 */
function generate_404_01(json_configuratie) {

  let tpl_generate_404 = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Pagina niet gevonden&nbsp;:(</title>
            <style>
                ::-moz-selection {
                    background: #b3d4fc;
                    text-shadow: none;
                }

                ::selection {
                    background: #b3d4fc;
                    text-shadow: none;
                }

                html {
                    padding: 30px 10px;
                    font-size: 20px;
                    line-height: 1.4;
                    color: #737373;
                    background: #f0f0f0;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }

                html,
                input {
                    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                }

                body {
                    max-width: 700px;
                    _width: 700px;
                    padding: 30px 20px 50px;
                    border: 1px solid #b3b3b3;
                    border-radius: 4px;
                    margin: 0 auto;
                    box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;
                    background: #fcfcfc;
                }

                h1 {
                    margin: 0 10px;
                    font-size: 50px;
                    text-align: center;
                }

                h1 span {
                    color: #bbb;
                }

                h3 {
                    margin: 1.5em 0 0.5em;
                }

                p {
                    margin: 1em 0;
                }

                ul {
                    padding: 0 0 0 40px;
                    margin: 1em 0;
                }

                .container {
                    max-width: 580px;
                    _width: 580px;
                    margin: 0 auto;
                }

                input::-moz-focus-inner {
                    padding: 0;
                    border: 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Niet gevonden&nbsp;<span>:(</span></h1>
                <p>Sorry, maar de pagina die u probeert te bekijken, bestaat niet.</p>
                <p>Het lijkt erop dat dit het resultaat is van:</p>
                <ul>
                    <li>een onjuist adres</li>
                    <li>of een verouderde verwijzing</li>
                </ul>
              <h3>Ga s.v.p. terug naar de <a href="${ json_configuratie.glint_url_abs }/index.html" target="_blank">startpagina</a></h3>
            </div>
        </body>
    </html>
  `;

  return tpl_generate_404;

}
/* ======================================================================= */
/**
 * @name get_github_json_01
 * @function
 * @global
 * @param  {} url
 * @param  {} callback
 * @description Haal een JSON-bestand op van GitHub.
 * @description zie https://paulsalaets.com/posts/json-api-with-github-pages
 */
/* TODO: 3. het ophalen kan moderner
   https://github.com/axios/axios, kan ook via CDN
 */
function get_github_json_01(url, callback) {
  var req = new XMLHttpRequest();

  req.addEventListener('load', onLoad);
  req.addEventListener('error', onFail);
  req.addEventListener('abort', onFail);

  req.open('GET', url);
  req.send();

  function onLoad(event) {
    if (req.status >= 400) {
      onFail(event);
    } else {
      var json = JSON.parse(this.responseText);
      callback(null, json);
    }
  }

  function onFail(event) {
    callback(new Error('...'));
  }
}
/* ======================================================================= */
/**
 * @name get_github_json_01
 * @function
 * @global
 * @param  {} url
 * @param  {} callback
 * @description Afhankelijk van de schakelaar glint_github_upload_yes 
 * @description && wordt de abs url van het locale project of de abs url van Github gegeven.<br><br>
 * @description Deze schakelaar true maken wanneer het project ge-upload wordt naar Github.
 */
function get_github_url_01() {
  if (json_configuratie.glint_github_upload_yes) {
    return json_configuratie.glint_github_url_abs+json_configuratie.glint_path_json; 
  } else {
    return full_path_abs_json;
  }
}  
/* ======================================================================= */
/**
 * @description haal van een string het laatste teken eraf, bijv. "images/" wordt "images".
 * @description wordt o.a. gebruikt bij de locale generate_prose_01
 * @param  {string } volle_naam
 * @return  {string} korte_naam
 */
function delete_last_char(volle_naam) {
  let lengte = volle_naam.length;
  let korte_naam = volle_naam.substr(0, (lengte-1));
  return korte_naam;
}
/* ========================================================================== */
/* ========================================================================== */
