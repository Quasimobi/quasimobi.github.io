"use strict";

/* ==========================================================================
   Naam: loc_biblio_quasimobi_es5.js
   ========================================================================== */

/* ========================================================================== */
function render_template_01(anker_id, tpl_totaal) {
  var sanitize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tpl_klaar = tpl_totaal;

  if (sanitize) {
    tpl_klaar = DOMPurify.sanitize(tpl_totaal);
  }

  document.getElementById(anker_id).innerHTML = tpl_klaar;
}

function get_github_url_01() {
  if (json_configuratie.glint_github_upload_yes) {
    return json_configuratie.glint_github_url_abs + json_configuratie.glint_path_json;
  } else {
    return full_path_abs_json;
  }
}
/* ========================================================================== */


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
/* ========================================================================== */


function log_error_01(fout, error) {
  var log_fout = fout + "---" + error;
  console.log(log_fout);
}
/* ========================================================================== */


function toonInhoud_01(anker_id, inhoud, bestandnaam) {
  var textFile = null,
      makeTextFile = function makeTextFile(text) {
    var data = new Blob([text], {
      type: 'text/plain'
    }); // If we are replacing a previously generated file we need to
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
    document.body.appendChild(link); // wait for the link to be added to the document

    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
  }, false);
}
/* ========================================================================== */


function render_jumbotron_athena_20B(data_tpl_jumbo) {
  var tpl_config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defa_tpl_config_01;
  var tpl_jumbotron_01 = "\n    <div class=\"jumbotron jumbotron_helena_20B\">\n      <h1><%= data_tpl_jumbo.kop %></h1>\n        <%= data_tpl_jumbo.tekst %>\n        <% if (data_tpl_jumbo.knop_link != \"\") { %>\n          <p>\n            <a class=\"btn btn-primary btn-lg\" href=\"<%= data_tpl_jumbo.knop_link %>\" role=\"button\"><%= data_tpl_jumbo.knop_tekst %></a>\n          </p>\n        <% } %>        \n    </div>\n  ";
  var renderTemplate = template.compile(tpl_jumbotron_01);
  return renderTemplate({
    tpl_config: tpl_config,
    data_tpl_jumbo: data_tpl_jumbo
  });
}
/* ========================================================================== */


function snip_carousel_athena_51B_items_01(data_tpl_fotos) {
  var loc_path_klant_media = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : json_configuratie.glint_path_klant_media;
  var snip_carousel_01 = "\n    {{ each fotos loc_items i }}\n      <% if (i == 0) { %>\n        <div class=\"item active slide-0<%=i+1%>\">\n      <% } else { %>\n        <div class=\"item slide-0<%=i+1%>\">\n      <% } %>  \n          <img src=\"<%= loc_path_klant_media %><%= loc_items.foto_bestand%>\" alt=\"<%= loc_items.foto_alt%>\">\n          <div class='container'>\n            <div class='row'>\n              <div class='col-sm-4'>\n                <div class='carousel_athena_block'>\n                  <%= loc_items.foto_tekst %>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    {{ /each }}\n  ";
  var renderSnip = template.compile(snip_carousel_01);
  return renderSnip({
    fotos: data_tpl_fotos,
    loc_path_klant_media: loc_path_klant_media
  });
}
/* ========================================================================== */


function snip_carousel_athena_51B_controls(tpl_config) {
  var snip_controls_01 = "\n    <a class=\"left carousel-control carousel_athena_51B_controls\" href=\"#<%= tpl_config.carousel_id %>\" role=\"button\" data-slide=\"prev\">\n      <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control carousel_athena_51B_controls\" href=\"#<%= tpl_config.carousel_id %>\" role=\"button\" data-slide=\"next\">\n      <span class=\"icon-next\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  ";
  var renderSnip = template.compile(snip_controls_01);
  return renderSnip({
    tpl_config: tpl_config
  });
}
/* ========================================================================== */


function render_carousel_athena_51B(tpl_config, data_tpl_carousel, snip_items) {
  var snip_controls = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var snip_indicators = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var tpl_carousel_athena = "\n    <div id=\"<%= tpl_config.carousel_id %>\" class=\"carousel carousel_athena_51B slide\" data-ride=\"carousel\">\n      " + snip_indicators + "\n        <div class='carousel-inner carousel_athena_51B_inner' role=\"listbox\">\n          " + snip_items + "\n        </div>\n        " + snip_controls + "\n      </div>\n  ";
  var renderTemplate = template.compile(tpl_carousel_athena);
  return renderTemplate({
    tpl_config: tpl_config,
    data_tpl_carousel: data_tpl_carousel
  });
}
/* ========================================================================== */


function render_blocken_athena_02G(data_tpl_blocken) {
  var loc_path_klant_media = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : json_configuratie.glint_path_klant_media;
  var data_length = data_tpl_blocken.length;
  var tpl_blocken_02 = "\n    {{ each blocken loc_items i }}\n      <% if ((i%3) == 0) { %>\n        <div class=\"row\">\n      <% } %>\n      <div class=\"col-blocks-31\">             \n        <div class=\"block_athena_02G pt-2 pr-3 pb-2 pl-3 mb-3\">\n          <div class=\"row_content\">\n            <% if (loc_items.foto_bestand != \"\")  { %>\n              <img src=\"<%= loc_path_klant_media %><%= loc_items.foto_bestand%>\" alt=\"<%= loc_items.foto_alt%>\">\n            <% } %>\n\n            <h3><%= loc_items.kop %></h3>\n\n            <%= loc_items.tekst %>\n          </div>\n        </div>\n      </div>\n      <% if ((((i+1)%3) == 0) || ((i+1) == data_length)){ %>\n        </div>\n      <% } %>      \n    {{ /each }}\n  ";
  var renderSnip = template.compile(tpl_blocken_02);
  return renderSnip({
    blocken: data_tpl_blocken,
    loc_path_klant_media: loc_path_klant_media,
    data_length: data_length
  });
}
/* ========================================================================== */


function block_lavinia_footer_11G_openings(snip_data_footer) {
  var snip_footer_openings = "\n    <div class=\"block_lavinia_footer_11G_openings\">\n      <h3 class=\"mb-2 block_kop\">\n        <%= snip_data_footer.kop %>\n      </h3>\n      <div class=\"block_body\">\n        <p>\n          {{each openings loc_items i}}            \n            <%= loc_items.opening_tekst%><br>\n          {{/each}}\n        </p>\n      </div>\n    </div>\n    ";
  var renderSnip = template.compile(snip_footer_openings);
  return renderSnip({
    snip_data_footer: snip_data_footer,
    openings: snip_data_footer.openings
  });
}
/* ========================================================================== */


function loc_block_lavinia_footer_11G_openings_get(vakantie_tijd) {
  var terug_tekst = "";

  if (vakantie_tijd == "true") {
    terug_tekst = loc_json_footer_lavinia_11_openings_02;
  } else {
    terug_tekst = loc_json_footer_lavinia_11_openings_01;
  }

  return terug_tekst;
}
/* ========================================================================== */


function block_lavinia_footer_11G_adres() {
  var block_data_footer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : json_bedrijf;
  var snip_footer_adres = "\n    <div class=\"block_lavinia_footer_11G_adres\">\n      <h3 class=\"mb-2 block_kop\">\n        Adres\n      </h3>\n      <div class=\"block_body\">\n        <address>\n          <%= block_data_footer.adres_straat %>&nbsp;&nbsp;<%= block_data_footer.adres_huisnr %>\n          <br>\n          <%= block_data_footer.adres_postcode %>&nbsp;&nbsp;<%= block_data_footer.adres_plaats %>\n        </address>\n      </div>\n    </div>\n  ";
  var renderSnip = template.compile(snip_footer_adres);
  return renderSnip({
    block_data_footer: block_data_footer
  });
}
/* ========================================================================== */


function block_lavinia_footer_11G_contact_02() {
  var block_data_footer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : json_bedrijf;
  var snip_footer_contact = "\n    <div class=\"block_lavinia_footer_11G_contact\">\n\n      <h3 class=\"mb-2 block_kop\">\n        Contact\n      </h3>\n      <div class=\"block_body\">\n        <address>\n          Website: <a href=\"<%= block_data_footer.website_link%>\" target=\"_blank\"> <%= block_data_footer.company_name %></a>\n          <br>\n          Telefoon: <%= block_data_footer.adres_telefoon %>\n        </address>\n      </div>\n    </div>\n  ";
  var renderSnip = template.compile(snip_footer_contact);
  return renderSnip({
    block_data_footer: block_data_footer
  });
}
/* ========================================================================== */


function render_footer_lavinia_11G(snip_footer_10, snip_footer_11, snip_footer_12) {
  var nav_anker = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var tpl_footer_11 = "\n    <footer class=\"footer_lavinia_11G pt-5\" <% if (nav_anker != \"\") { %>id=\"<%=nav_anker%>\"<% } %>>\n      <div class=\"container\">\n        <div class=\"row bs4x-shxxow-grid\">\n          <div class=\"bs4x-col-md-4 p-3\">\n            " + snip_footer_10 + "\n          </div>\n          <div class=\"bs4x-col-md-4 p-3\">\n            " + snip_footer_11 + "\n          </div>\n          <div class=\"bs4x-col-md-4 p-3\">\n            " + snip_footer_12 + "\n          </div>\n        </div>\n      </div>\n    </footer>\n  ";
  var renderTemplate = template.compile(tpl_footer_11);
  var resultRender = renderTemplate({
    nav_anker: nav_anker
  });
  return resultRender;
}
/* ========================================================================== */


function generate_prose_01(json_configuratie) {
  /* Haal laatste char eraf, maak van bijv. "images/" : "images" */
  var short_path_klant_media = delete_last_char(json_configuratie.glint_path_klant_media);
  var tpl_gen_prose = "\n    prose:\n      rooturl: '_posts'\n      siteurl: '".concat(json_configuratie.glint_github_url_abs, "'\n      media: '").concat(short_path_klant_media, "'\n      metadata:\n        _posts/carousels_01:\n          ").concat(prose_add_tag_01("carousel_01"), "\n          ").concat(prose_published_01(), "\n          ").concat(prose_carousel_athena_51_foto_bestand(), "\n          ").concat(prose_carousel_athena_51_foto_alt(), "\n          ").concat(prose_carousel_athena_51_foto_tekst(), "\n        _posts/blocken_01:\n          ").concat(prose_add_tag_01("block_01"), "\n          ").concat(prose_published_01(), "\n          ").concat(prose_block_athena_01_kop(), "\n          ").concat(prose_block_athena_01_foto_bestand(), "\n          ").concat(prose_block_athena_01_foto_alt(), "\n        _posts/openingstijd:\n          ").concat(prose_add_tag_01("openingstijd"), "\n          ").concat(prose_block_lavinia_openingstijd_01(), "          \n  ");
  return tpl_gen_prose;
}
/* ======================================================================= */


function generate_serviceworker_01(json_configuratie) {
  var tpl_serviceworker_01 = "\n    leeg\n  }";
  return tpl_serviceworker_01;
}
/* ========================================================================== */

/* ========================================================================== */