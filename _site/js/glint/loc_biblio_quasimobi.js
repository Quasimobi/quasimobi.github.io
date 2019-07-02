/* ==========================================================================
   Naam: loc_biblio_quasimobi.js
   ========================================================================== */
/* ========================================================================== */
function render_template_01(anker_id, tpl_totaal, sanitize = false) {

  let tpl_klaar = tpl_totaal;

  if (sanitize) {
    tpl_klaar = DOMPurify.sanitize(tpl_totaal);    
  }
  document.getElementById(anker_id).innerHTML = tpl_klaar;
}
function get_github_url_01() {
  if (json_configuratie.glint_github_upload_yes) {
    return json_configuratie.glint_github_url_abs+json_configuratie.glint_path_json; 
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
  let log_fout = fout+"---"+error;
  console.log(log_fout);
}
/* ========================================================================== */
function toonInhoud_01(anker_id, inhoud, bestandnaam) {
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
function render_jumbotron_athena_20B(data_tpl_jumbo, tpl_config = defa_tpl_config_01) {

  let tpl_jumbotron_01 = `
    <div class="jumbotron jumbotron_helena_20B">
      <h1><%= data_tpl_jumbo.kop %></h1>
        <%= data_tpl_jumbo.tekst %>
        <% if (data_tpl_jumbo.knop_link != "") { %>
          <p>
            <a class="btn btn-primary btn-lg" href="<%= data_tpl_jumbo.knop_link %>" role="button"><%= data_tpl_jumbo.knop_tekst %></a>
          </p>
        <% } %>        
    </div>
  `;

  let renderTemplate = template.compile(tpl_jumbotron_01);
  return renderTemplate({ tpl_config, data_tpl_jumbo });
}
/* ========================================================================== */
function snip_carousel_athena_51B_items_01(data_tpl_fotos, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_carousel_01 = `
    {{ each fotos loc_items i }}
      <% if (i == 0) { %>
        <div class="item active slide-0<%=i+1%>">
      <% } else { %>
        <div class="item slide-0<%=i+1%>">
      <% } %>  
          <img src="<%= loc_path_klant_media %><%= loc_items.foto_bestand%>" alt="<%= loc_items.foto_alt%>">
          <div class='container'>
            <div class='row'>
              <div class='col-sm-4'>
                <div class='carousel_athena_block'>
                  <%= loc_items.foto_tekst %>
                </div>
              </div>
            </div>
          </div>
        </div>
    {{ /each }}
  `;

   let renderSnip = template.compile(snip_carousel_01);
   return renderSnip({ fotos: data_tpl_fotos, loc_path_klant_media });
}
/* ========================================================================== */
function snip_carousel_athena_51B_controls(tpl_config) {

  let snip_controls_01 = `
    <a class="left carousel-control carousel_athena_51B_controls" href="#<%= tpl_config.carousel_id %>" role="button" data-slide="prev">
      <span class="icon-prev" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control carousel_athena_51B_controls" href="#<%= tpl_config.carousel_id %>" role="button" data-slide="next">
      <span class="icon-next" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  `;

  let renderSnip = template.compile(snip_controls_01);
  return renderSnip({ tpl_config });
}
/* ========================================================================== */
function render_carousel_athena_51B(tpl_config, data_tpl_carousel, snip_items, snip_controls = ``, snip_indicators = ``) {

  let tpl_carousel_athena = `
    <div id="<%= tpl_config.carousel_id %>" class="carousel carousel_athena_51B slide" data-ride="carousel">
      `+snip_indicators+`
        <div class='carousel-inner carousel_athena_51B_inner' role="listbox">
          `+snip_items+`
        </div>
        `+snip_controls+`
      </div>
  `;

  let renderTemplate = template.compile(tpl_carousel_athena);
  return renderTemplate({ tpl_config, data_tpl_carousel });
}
/* ========================================================================== */
function render_blocken_athena_02G(data_tpl_blocken, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  const data_length = data_tpl_blocken.length;

  let tpl_blocken_02 = `
    {{ each blocken loc_items i }}
      <% if ((i%3) == 0) { %>
        <div class="row">
      <% } %>
      <div class="col-blocks-31">             
        <div class="block_athena_02G pt-2 pr-3 pb-2 pl-3 mb-3">
          <div class="row_content">
            <% if (loc_items.foto_bestand != "")  { %>
              <img src="<%= loc_path_klant_media %><%= loc_items.foto_bestand%>" alt="<%= loc_items.foto_alt%>">
            <% } %>

            <h3><%= loc_items.kop %></h3>

            <%= loc_items.tekst %>
          </div>
        </div>
      </div>
      <% if ((((i+1)%3) == 0) || ((i+1) == data_length)){ %>
        </div>
      <% } %>      
    {{ /each }}
  `;

   let renderSnip = template.compile(tpl_blocken_02);
   return renderSnip({ blocken: data_tpl_blocken, loc_path_klant_media, data_length });
}  
/* ========================================================================== */
function block_lavinia_footer_11G_openings(snip_data_footer) {

  let snip_footer_openings = `
    <div class="block_lavinia_footer_11G_openings">
      <h3 class="mb-2 block_kop">
        <%= snip_data_footer.kop %>
      </h3>
      <div class="block_body">
        <p>
          {{each openings loc_items i}}            
            <%= loc_items.opening_tekst%><br>
          {{/each}}
        </p>
      </div>
    </div>
    `;

  let renderSnip = template.compile(snip_footer_openings);
  return renderSnip({snip_data_footer, openings: snip_data_footer.openings});
}
/* ========================================================================== */  
function loc_block_lavinia_footer_11G_openings_get(vakantie_tijd) {

  let terug_tekst = "";  

  if (vakantie_tijd == "true") {
    terug_tekst = loc_json_footer_lavinia_11_openings_02;
  } else {  
    terug_tekst = loc_json_footer_lavinia_11_openings_01;
  }

  return terug_tekst;
}
/* ========================================================================== */
function block_lavinia_footer_11G_adres(block_data_footer = json_bedrijf) {
  let snip_footer_adres = `
    <div class="block_lavinia_footer_11G_adres">
      <h3 class="mb-2 block_kop">
        Adres
      </h3>
      <div class="block_body">
        <address>
          <%= block_data_footer.adres_straat %>&nbsp;&nbsp;<%= block_data_footer.adres_huisnr %>
          <br>
          <%= block_data_footer.adres_postcode %>&nbsp;&nbsp;<%= block_data_footer.adres_plaats %>
        </address>
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_footer_adres);
  return renderSnip({ block_data_footer });
}
/* ========================================================================== */
function block_lavinia_footer_11G_contact_02(block_data_footer = json_bedrijf) {
  
  let snip_footer_contact = `
    <div class="block_lavinia_footer_11G_contact">

      <h3 class="mb-2 block_kop">
        Contact
      </h3>
      <div class="block_body">
        <address>
          Website: <a href="<%= block_data_footer.website_link%>" target="_blank"> <%= block_data_footer.company_name %></a>
          <br>
          Telefoon: <%= block_data_footer.adres_telefoon %>
        </address>
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_footer_contact);
  return renderSnip({ block_data_footer });
}
/* ========================================================================== */
function render_footer_lavinia_11G(snip_footer_10, snip_footer_11, snip_footer_12, nav_anker = "") {
  let tpl_footer_11 = `
    <footer class="footer_lavinia_11G pt-5" <% if (nav_anker != "") { %>id="<%=nav_anker%>"<% } %>>
      <div class="container">
        <div class="row bs4x-shxxow-grid">
          <div class="bs4x-col-md-4 p-3">
            `+snip_footer_10+`
          </div>
          <div class="bs4x-col-md-4 p-3">
            `+snip_footer_11+`
          </div>
          <div class="bs4x-col-md-4 p-3">
            `+snip_footer_12+`
          </div>
        </div>
      </div>
    </footer>
  `;

  let renderTemplate = template.compile(tpl_footer_11);
  let resultRender = renderTemplate({nav_anker});
  return resultRender;
}
/* ========================================================================== */
function generate_prose_01(json_configuratie) {

  /* Haal laatste char eraf, maak van bijv. "images/" : "images" */
  let short_path_klant_media = delete_last_char(json_configuratie.glint_path_klant_media);

  let tpl_gen_prose = `
    prose:
      rooturl: '_posts'
      siteurl: '${json_configuratie.glint_github_url_abs}'
      media: '${short_path_klant_media}'
      metadata:
        _posts/carousels_01:
          ${prose_add_tag_01("carousel_01")}
          ${prose_published_01()}
          ${prose_carousel_athena_51_foto_bestand()}
          ${prose_carousel_athena_51_foto_alt()}
          ${prose_carousel_athena_51_foto_tekst()}
        _posts/blocken_01:
          ${prose_add_tag_01("block_01")}
          ${prose_published_01()}
          ${prose_block_athena_01_kop()}
          ${prose_block_athena_01_foto_bestand()}
          ${prose_block_athena_01_foto_alt()}
        _posts/openingstijd:
          ${prose_add_tag_01("openingstijd")}
          ${prose_block_lavinia_openingstijd_01()}          
  `;

  return tpl_gen_prose;
}
/* ======================================================================= */
function generate_serviceworker_01(json_configuratie) {
  
  let tpl_serviceworker_01 = `
    leeg
  }`;

  return tpl_serviceworker_01;
}
/* ========================================================================== */
/* ========================================================================== */
