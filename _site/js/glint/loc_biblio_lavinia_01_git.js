/* ==========================================================================
   Naam: loc_biblio_lavinia_01_git.es6
   ========================================================================== */
/* ========================================================================== */
function tpl_carousel_athena_51B(tpl_config, data_tpl_carousel, snip_items, snip_controls = ``, snip_indicators = ``) {

  let tpl_carousel_athena = `
    <div id="<%= tpl_config.carousel_id %>" class="carousel carousel_athena_51B slide" data-ride="carousel">
      `+snip_indicators+`
        <div class='carousel-inner carousel_athena_51B_inner' role="listbox">
          `+snip_items+`
        </div>
        `+snip_controls+`
      </div>
  `;

  let renderTemplate = _.template(tpl_carousel_athena);
  return renderTemplate({ tpl_config, data_tpl_carousel });
}
/* ========================================================================== */
function snip_carousel_athena_51B_items_01(data_tpl_carousel, loc_path_klant_media = json_configuratie.glint_path_klant_media) {
  let snip_carousel_01 = `
    <%_.forEach(fotos, function (loc_items,i) {%>
      <% if (i == 0) { %>
        <div class="item active slide-0<%=i+1%>">
      <% } else { %>
        <div class="item slide-0<%=i+1%>">
      <% } %>  
          <img src="<%= loc_path_klant_media %><%= loc_items.foto_bestand%>" alt="<%= loc_items.foto_alt%>">
          <div class='container'>
            <div class='row'>
              <div class='col-sm-4'>
                <div class='carousel_athena_51B_block'>
                  <%= loc_items.tekst %>
                </div>
              </div>
            </div>
          </div>
        </div>
    <%})%>
  `;

   let renderSnip = _.template(snip_carousel_01);
   return renderSnip({ fotos: data_tpl_carousel.fotos, loc_path_klant_media });
}
/* ========================================================================== */
function snip_carousel_athena_51B_controls(snip_config) {

  let snip_controls_01 = `
    <a class="left carousel-control carousel_athena_51B_controls" href="#<%= snip_config.carousel_id %>" role="button" data-slide="prev">
      <span class="icon-prev" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control carousel_athena_51B_controls" href="#<%= snip_config.carousel_id %>" role="button" data-slide="next">
      <span class="icon-next" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  `;

  let renderSnip = _.template(snip_controls_01);
  return renderSnip({ snip_config });
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
        _posts/carousel_01:
          ${prose_add_tag_01("carousel_01")}
          ${prose_published_01()}
          ${prose_carousel_athena_51_foto_bestand()}
          ${prose_carousel_athena_51_foto_alt()}
          ${prose_carousel_athena_51_foto_tekst()}
        _posts/block_01:
          ${prose_add_tag_01("block_01")}
          ${prose_published_01()}
          ${prose_block_athena_01_kop()}
          ${prose_block_athena_01_foto_bestand()}
          ${prose_block_athena_01_foto_alt()}
          ${prose_block_athena_01_tekst()}          
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
