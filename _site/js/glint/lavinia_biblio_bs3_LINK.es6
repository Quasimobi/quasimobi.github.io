/* ==========================================================================
   Naam: lavinia_biblio_bs3.es6
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
function tpl_navbar_lavinia_01B(tpl_config, data_tpl_navbar, snip_navbar_links) {

  let tpl_navbar_01 = `
    <div class='navbar navbar-default navbar_lavinia_01B <%= tpl_config.navbar_class %>'>
      <div class="container">
        <div class='navbar-header'>
          <button class='navbar-toggle' data-target='.navbar-collapse' data-toggle='collapse' type='button'>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </button>
          <a class='navbar-brand' href="<%= json_configuratie.glint_url_rel %><%= json_configuratie.merk_link %>"><%= json_configuratie.merk_tekst %></a>
        </div>
        <div class='navbar-collapse collapse'>
          <ul class='nav navbar-nav'>
          `+snip_navbar_links+`
          </ul>
        </div>
      </div>
    </div>
  `;

  let renderTemplate = _.template(tpl_navbar_01);
  let resultRender = renderTemplate({ tpl_config, data_tpl_navbar });
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
function snip_navbar_lavinia_01B_links(pagina_nummer, data_snip_navbar) {

  let snip_navbar_01 = `
    <%_.forEach(links, function (loc_links,i) {%>
      <% if ((i+1) == pagina_nummer) { %>
        <li class='active'>
      <% } else { %>
        <li>
      <% } %>
        <a href='<%= json_configuratie.glint_url_rel %><%= loc_links.nav_link %>'><%= loc_links.nav_tekst %></a>
      </li>
    <%})%>

  `;

  let renderSnip = _.template(snip_navbar_01);
  return renderSnip({ pagina_nummer, links: data_snip_navbar.links});
}
/* ========================================================================== */
/**
 * @function
 * @global
 * @param  {} data_card_news
 * @description VERVALLEN???
 */
function tpl_card_lavinia_01B_news_01(data_card_news) {
  let card_news = `
    <div class="p-3 block_lavinia_news_01">
      <img class="bs4-img-fluid d-block w-100 mb-3" src="<%= full_path_rel_media %><%= data_card_news.foto_bestand %>">
      <p class="lead text-muted mb-1"><%= data_card_news.datum%></p>
      <h5 class="text-dark"><b><%= data_card_news.kop%></b></h5>
      <p class="mb-3"><%= data_card_news.tekst%></p>
      <a href="<%= data_card_news.knop_link%>" class="btn btn-outline-primary"><b class=""><%= data_card_news.knop_tekst %></b></a>
    </div>
  `;

  let renderSnip = _.template(card_news);
  return renderSnip({ data_card_news});
}
/* ========================================================================== */
// Eventjes hier
function snip_news_lavinia_01_blocks(data_snip_news) {
  let snip_news_01 = `
    {% raw %}
    <%_.forEach(nieuws, function (loc_news,i) {%>
    <div class="bs4-col-md-4 p-3">
        <img class="bs4-img-fluid d-block w-100 mb-3" src="<%= full_path_rel_media %><%= loc_news.foto_bestand %>">
        <p class="lead text-muted mb-1"><%= loc_news.datum%></p>
        <h5 class="text-dark"><b><%= loc_news.kop%></b></h5>
        <p class="mb-3"><%= loc_news.tekst%></p>
        <a href="<%= loc_news.knop_link%>" class="btn btn-outline-primary"><b class=""><%= loc_news.knop_tekst %></b></a>
    </div>
    <%})%>
    {% endraw %}
  `;

  let renderSnip = _.template(snip_news_01);
  return renderSnip({ nieuws: data_snip_news.nieuws});
};
/* ========================================================================== */
/**
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} data_tpl_carousel
 * @description
 */
function snip_carousel_lavinia_10_items_news_01(tpl_config, json_configuratie, data_tpl_carousel, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_items_01 = `
    <%_.forEach(nieuws, function (loc_items,i) {%>
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
    <%})%>
  `;

    let renderSnip = _.template(snip_items_01);
    return renderSnip({ tpl_config, nieuws: data_tpl_carousel.nieuws });
  }
/* ========================================================================== */
/**
 * @function
 * @global
 * @param  {} data_block_news
 * @description VERVALLEN???
 */
function tpl_block_lavinia_news_01(data_block_news) {
    let block_news = `
        <div class="p-3 block_lavinia_news_01">
        <img class="bs4-img-fluid d-block w-100 mb-3" src="<%= full_path_rel_media %><%= data_block_news.foto_bestand %>">
        <p class="lead text-muted mb-1"><%= data_block_news.datum%></p>
        <h5 class="text-dark"><b><%= data_block_news.kop%></b></h5>
        <p class="mb-3"><%= data_block_news.tekst%></p>
        <a href="<%= data_block_news.knop_link%>" class="btn btn-outline-primary"><b class=""><%= data_block_news.knop_tekst %></b></a>
        </div>
    `;

  let renderSnip = _.template(block_news);
  return renderSnip({ data_block_news});
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
function tpl_header_lavinia_image_01B(snip_header_block) {
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

  let renderTemplate = _.template(tpl_header_tot_01);
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

  let renderSnip = _.template(snip_header_02);
  return renderSnip({ data_snip_header });
}
/* ========================================================================== */
/* ========================================================================== */
