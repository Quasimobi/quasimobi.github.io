/* ==========================================================================
   Naam: lavinia_biblio_bs3.js
   ========================================================================== */
/* ========================================================================== */
/**
 * @name tpl_navbar_lavinia_01B
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} data_tpl_navbar
 * @param  {} snip_navbar_links
 */
/* TODO: wanneer json_configuratie.merk_tekst undefined of "" is geen brand-link generenen */
function render_navbar_lavinia_01B(tpl_config, json_configuratie, snip_navbar_links) {

  let tpl_navbar_01 = `
    <div class='navbar navbar-default <%= tpl_config.navbar_class %> navbar_lavinia_01B'>
      <div class="container">
        <div class='navbar-header'>
          <button class='navbar-toggle' data-target='.navbar-collapse' data-toggle='collapse' type='button'>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </button>
          <a class='navbar-brand' href="<%= json_configuratie.glint_url_rel %><%= json_configuratie.glint_merk_link %>"><%= json_configuratie.glint_merk_tekst %></a>
        </div>
        <div class='navbar-collapse collapse'>
          <ul class='nav navbar-nav'>
          `+snip_navbar_links+`
          </ul>
        </div>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_navbar_01);
  let resultRender = renderTemplate({ tpl_config, json_configuratie });
  return resultRender;
}
/* ========================================================================== */
/**
 * @name snip_navbar_lavinia_01B_links
 * @function
 * @global
 * @param  {} pagina_nummer
 * @param  {} data_snip_navbar
 */
function snip_navbar_lavinia_01B_links(pagina_nummer, data_snip_links, json_config) {
  
  let snip_navbar_01 = `
    {{ each links loc_items i }}
      <% if ((i+1) == pagina_nummer) { %>
        <li class='active'>
      <% } else { %>
        <li>
      <% } %>
        <a href="<%= json_config.glint_url_rel %><%= loc_items.nav_link %>"><%= loc_items.nav_tekst %></a>
      </li>
    {{/each}}

  `;

  let renderSnip = template.compile(snip_navbar_01);
  return renderSnip({ pagina_nummer, links: data_snip_links, json_config});
}
/* ========================================================================== */
/**
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} data_tpl_carousel
 * @description
 */
function snip_carousel_lavinia_10_items_news_01(tpl_config, json_configuratie, data_tpl_nieuws, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_items_01 = `
    {{ each nieuws loc_items i }}
    <% if (i == 0) { %>
        <div class="item active slide-0<%=i+1%>">
    <% } else { %>
        <div class="item slide-0<%=i+1%>">
    <% } %>
        <div class="carousel_news_item_01">
        <img class="bs4-img-fluid d-block w-100 mb-3" src="<%= full_path_rel_media %><%= loc_items.foto_bestand %>">
        <p class="lead text-muted mb-1"><%= loc_items.datum%></p>
        <h5 class="text-dark"><b><%= loc_items.kop%></b></h5>
        <p class="mb-3"><%= loc_items.tekst%></p>
        <a href="<%= loc_items.knop_link%>" class="btn btn-outline-primary">
            <b class=""><%= loc_items.knop_tekst %></b>
        </a>
        </div>
    </div>
    {{ /each }}
  `;

    let renderSnip = template.compile(snip_items_01);
    return renderSnip({ tpl_config, nieuws: data_tpl_nieuws });
  }
/* ========================================================================== */
/**
 * @name tpl_header_lavinia_image_01
 * @function
 * @global
 * @param  {string} snip_header_block - Wisselend block dat in de header geplaatst wordt.
 * @description Header met een ag-image en een block erover met tekst en knop(pen).<br>
 * @description Met parallax en eventueel animatie.<br>
 * @description Aan header_lavinia_image_01 kan eventueel een overlay worden toegevoegd<br>
 * @description Achtergrond-image: 1200 bij 715.<br>
 * @description VERVALLEN???
 */
function render_header_lavinia_image_01B(snip_header_block) {
  let tpl_header_tot_01 = `
    <header class="header_lavinia_image_01B">
      <div class="header_lavinia_image_01B_extra_01">
        <div class="header_lavinia_image_01B_overlay"></div>
        <div class="container bg_yellow">
          `+snip_header_block+`
        </div>
       </div>
    </header>
    `;

  let renderTemplate = template.compile(tpl_header_tot_01);
  let resultRender = renderTemplate();
  return resultRender;
}
/* ========================================================================== */
/**
 * Wordt ingesloten in o.a. tpl_header_lavinia_image_02.html
 * Bevat eventueel animatie.
  *
 * class link_button onderdeel van header_lavinia_image_02_block.
 * button_image_01: algemene button voor op een image.
 */
/* ========================================================================== */
/**
 * @name snip_header_lavinia_image_02B
 * @function
 * @global
 * @param  {} data_snip_header
 * @description Wordt ingesloten in o.a. tpl_header_lavinia_image_02.html<br>
 * @description Bevat eventueel animatie.<br>
 * @description <br>
 * @description class link_button onderdeel van header_lavinia_image_02_block.<br>
 * @description button_image_01: algemene button voor op een image.<br>
 * @description VERVALLEN???
 */
function snip_header_lavinia_image_02B(data_snip_header) {
  let snip_header_02 = `
    <div class="row show-grid">
      <div class="col-sm-8 col-sm-offset-2">
        <div class="snip_header_lavinia_01B_image_02">
          <div class="block_main">
            <h1 class="block_kop">
            <%= data_snip_header.kop %>
            </h1>
            <p class="block_tekst">
            <%= data_snip_header.tekst %>
            </p>
          </div>
          <div class="block_knop">
            <a class="link_button btn btn-lg button_image_01" href="<%= data_snip_header.knop_link %>"><%= data_snip_header.knop_tekst %></a>
          </div>
        </div>
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_header_02);
  return renderSnip({ data_snip_header });
}
/* ========================================================================== */
/* ========================================================================== */
