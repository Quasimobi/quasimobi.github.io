/* ==========================================================================
   Naam: loc_biblio_quasimobi_git.js
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
/* ========================================================================== */
