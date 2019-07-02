/* ==========================================================================
 * Naam: athena_biblio_bs3.js
 * Eventueel nog meer wissen.
   ========================================================================== */
/* ========================================================================== */
/**
 * @name render_carousel_athena_01B
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} data_tpl_carousel
 * @param  {} snip_items
 * @param  {} snip_controls
 * @param  {} snip_indicators
 */
function render_carousel_athena_01B(tpl_config, data_tpl_carousel, snip_items, snip_controls = ``, snip_indicators = ``) {
  let tpl_carousel_01 = `
    <div id="<%= tpl_config.carousel_id %>" class="carousel carousel_athena_01B slide" data-ride="carousel">
    `+snip_indicators+`
    <div class='carousel-inner carousel_athena_01B_inner' role="listbox">
        `+snip_items+`
    </div>
    `+snip_controls+`
    </div>
  `;

  let renderTemplate = template.compile(tpl_carousel_01);
  let resultRender = renderTemplate({ tpl_config, data_tpl_carousel });
  return resultRender;
}
/* ========================================================================== */
/**
 * @name snip_carousel_athena_01B_referenties_items_02
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} data_tpl_carousel
 * <img class="d-block img-fluid rounded-circle mx-auto" src="<%= full_path_rel_media %><%= loc_items.foto_bestand%>" alt="<%= loc_items.foto_alt%>" width="200">
 */
function snip_carousel_athena_01B_referenties_items_02(data_tpl_referenties, loc_path_klant_media = json_configuratie.glint_path_klant_media) {
  let snip_carousel_01 = `
    {{ each referenties loc_items i }}
      <% if (i == 0) { %>
        <div class="item active slide-0<%=i+1%>">
      <% } else { %>
        <div class="item slide-0<%=i+1%>">
      <% } %>
          <div class="carousel_athena_01B_referenties_item_02">
            <img class="d-block img-fluid rounded-circle mx-auto"  width="200" src="{{ loc_path_klant_media }}{{ loc_items.foto_bestand }}" alt="{{ loc_items.foto_alt }}">
            <div class="my-3">
              {{ loc_items.tekst }}
            </div>
          </div>
        </div>
     {{/each}}
  `;

  let renderSnip = template.compile(snip_carousel_01);
  return renderSnip({ referenties: data_tpl_referenties, loc_path_klant_media });
}
/* ========================================================================== */
/**
 *   * Gebruikt bij Athena_10, Onepage_07
  *
  Carousel met normale controls op de standaard plek.</br>
  Op de carousel wordt een blok met tekst geplaatst.
*/
/* ========================================================================== */
/**
 * @param  {} tpl_config
 * @param  {} data_tpl_carousel
 * @param  {} snip_items
 * @param  {} snip_controls
 * @param  {} snip_indicators
 */
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
/**
 * @param {} tpl_config
 * @param {} json_configuratie
 * @param {} data_tpl_carousel
 * @param {} loc_path_klant_media het relatieve of absolute pad waar de media staan.
 * @description !!! carousel_athena_51B_item_?1 toevoegen lukt niet goed, niet meer oplossen bij BS3.
 * @description de carousel met de items kan op de eigen server of op Github staan.
 * @description wanneer op de eigen server kunnen de images locaal of van github opgehaald worden.
 * @description loc_path_klant_media heeft als default json_configuratie.glint_path_klant_media (dus meestal images/ )
 * @description wanneer de carousel op de server staat en de images op Github, moet loc_path_klant_media de waarde full_github_path_media krijgen (zie biblio defa_data_bs4).
 */
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
/**
 * @param  {} data_tpl_fotos
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description !!! carousel_athena_51B_item_?1 toevoegen lukt niet goed, niet meer oplossen bij BS3.
 */
function snip_carousel_athena_51B_items_61(data_tpl_fotos, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_carousel_01 = `
  `;

  let renderSnip = template.compile(snip_carousel_01);
  return renderSnip({ fotos: data_tpl_fotos, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @name snip_carousel_athena_51B_indicators
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} slides
 * @description Indicators, verborgen bij Mobiel
 */
function snip_carousel_athena_51B_indicators(tpl_config, slides) {

  let snip_indicators_01 = `
    <ol class="carousel-indicators carousel_athena_51B_indicators">
      {{ each slides loc_items i }}        
      <% if (i == 0) { %>
          <li data-app-prevent-settings="" data-target="#<%= tpl_config.carousel_id %>" class="active" data-slide-to="0"></li>
      <% } else { %>
          <li data-app-prevent-settings="" data-target="#<%= tpl_config.carousel_id %>" data-slide-to="<%=i%>"></li>
      <% } %>
      {{ /each }}
    </ol>
  `;

  let renderSnip = template.compile(snip_indicators_01);
  return renderSnip({ tpl_config, slides });
}
/* ========================================================================== */
/**
 * @name snip_carousel_athena_51B_controls
 * @function
 * @global
 * @param  {} tpl_config
 * @description Controls van de carousel athena.
 * @description Met $carousel-control-font-size kunnen de controls groter gemaakt worden.
 */
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
/**
 * @param  {} data_tpl_jumbotron
 * @param  {} tpl_config
 * @description Gebruikt bij Athena_01/02
 */
function render_jumbotron_athena_01B(data_tpl_jumbotron, tpl_config = defa_tpl_config_01) {

  let tpl_jumbotron_athena = `
    <div class='jumbotron_athena_01B'>
      <div class='jumbotron'>
        <h2><%= data_tpl_jumbotron.kop %></h2>
        <div class="blockquote_wrapper_01">
          <blockquote>
            <p>
              <i class='fa fa-quote-left fa-2x'></i>
              &nbsp;&nbsp;
              <%= data_tpl_jumbotron.tekst %>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_jumbotron_athena);
  return renderTemplate({ tpl_config, data_tpl_jumbotron });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_jumbo
 * @param  {} tpl_config
 * @description Standaard Jumotron Bootstrap, eventueel wat wijzigen.
 * @description Gebruikt bij quasimobi.github.io
 */
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
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media = json_configuratie.glint_path_klant_media
 * @description Scss clone van block_athena_01.
 * @description Onderaan het block staat een knop met een link.
 * GECHECKT MET INCLUDE
 */
function render_block_athena_41(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_41">
      <div class="row_content">
        <h3><%= data_tpl_block.kop %></h3>

        <% if (data_tpl_block.foto_bestand != "")  { %>
          <img src="<%= loc_path_klant_media %><%= data_tpl_block.foto_bestand%>" alt="<%= data_tpl_block.foto_alt%>">
        <% } %>

        <!-- Lijntje dient als afscheiding bij phone-scherm -->
        <hr>

        <%= data_tpl_block.tekst %>
      </div>

      <div class="row_button">
        <a class="btn btn-block button_more_01" href="<%= data_tpl_block.knop_link %>" >
          <%= data_tpl_block.knop_tekst %>&nbsp;&nbsp;
          <i class="fa fa-chevron-right fa-lg"></i>
        </a>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_block_athena);
  return renderTemplate({ data_tpl_block, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media = json_configuratie.glint_path_klant_media
 * @description Onderaan het block staat een knop met een link
 * @description Gebruikt bij Athena_10
 * GECHECKT MET INCLUDE 
 */
function render_block_athena_42B(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_42">
      <div class="row_content">

        <h3><%= data_tpl_block.kop %></h3>

        <% if (data_tpl_block.foto_bestand != "")  { %>
          <img src="<%= loc_path_klant_media %><%= data_tpl_block.foto_bestand%>" alt="<%= data_tpl_block.foto_alt%>">
        <% } %>

        <%= data_tpl_block.tekst %>
      </div>

      <div class="row_button">
        <a class="btn btn-block button_more_01" href="<%= data_tpl_block.knop_link %>" >
          <%= data_tpl_block.knop_tekst %>&nbsp;&nbsp;
          <i class="fa fa-chevron-right fa-lg"></i>
        </a>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_block_athena);
  return renderTemplate({ data_tpl_block, loc_path_klant_media });
}
/* ========================================================================== */
/* ========================================================================== */
