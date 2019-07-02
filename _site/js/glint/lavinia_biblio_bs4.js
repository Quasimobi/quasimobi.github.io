/* ==========================================================================
   Naam: lavinia_biblio_bs4.js
   ========================================================================== */
/* ========================================================================== */
/**
 * @name tpl_navbar_lavinia_10
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} json_configuratie
 * @param  {} snip_navbar_links
 */
/* TODO: wanneer json_configuratie.merk_tekst undefined of "" is geen brand-link generenen */
function render_navbar_lavinia_01G(tpl_config, json_configuratie, snip_navbar_links) {

  let tpl_navbar_01 = `
    <nav class="navbar navbar-expand-md <%= tpl_config.navbar_class %> navbar_lavinia_01G">
      <a class="navbar-brand" href="<%= json_configuratie.glint_url_rel %><%= json_configuratie.merk_link %>"><%= json_configuratie.merk_tekst %></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          `+snip_navbar_links+`
        </ul>
      </div>
    </nav>
`;

  let renderTemplate = template.compile(tpl_navbar_01);
  let resultRender = renderTemplate({ tpl_config, json_configuratie });
  return resultRender;
}
/* ========================================================================== */
/**
 * @name snip_navbar_lavinia_01G_links
 * @function
 * @global
 * @param  {} pagina_nummer
 * @param  {} data_snip_navbar
 */
function snip_navbar_lavinia_01G_links(pagina_nummer, data_snip_links, json_config) {

  let snip_navbar_01 = `
    {{ each links loc_items i }}
      <% if ((i+1) == pagina_nummer) { %>
        <li class="nav-item active">
      <% } else { %>
        <li class="nav-item">
      <% } %>
      <a class="nav-link" href="<%= json_config.glint_url_rel %><%= loc_items.nav_link %>"><%= loc_items.nav_tekst %></a>
      </li>
    {{ /each }}
  `;

  let renderSnip = template.compile(snip_navbar_01);
  return renderSnip({ pagina_nummer, links: data_snip_links, json_config});
}
/* ========================================================================== */
// Eventjes hier
// UPDATEN met de nieuwe news card
function snip_news_lavinia_01G_blocks(data_snip_nieuws) {
  let snip_news_01 = `
    {{ each nieuws loc_items i }}
      <div class="bs4x-col-md-4 p-3">
        <img class="img-fluid d-block w-100 mb-3" src="<%= full_path_rel_media %><%= loc_items.foto_bestand %>">
        <p class="lead text-muted mb-1"><%= loc_items.datum%></p>
        <h5 class="text-dark"><b><%= loc_items.kop%></b></h5>
        <p class="mb-3"><%= loc_items.tekst%></p>
        <a href="<%= loc_items.knop_link%>" class="btn btn-outline-primary">
          <b class="">
            <%= loc_items.knop_tekst %>
          </b>
        </a>
      </div>
    {{ /each }}
  `;

  let renderSnip = template.compile(snip_news_01);
  return renderSnip({ nieuws: data_snip_nieuws});
};
/* ========================================================================== */
/**
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} data_tpl_carousel
 * @description UPDATEN met de nieuwe news card
  */
function snip_carousel_lavinia_01G_items_news_01(data_tpl_nieuws, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_items_01 = `
    {{ each nieuws loc_items i }}      
      <% if (i == 0) { %>
        <div class="item active slide-0<%=i+1%>">
      <% } else { %>
        <div class="item slide-0<%=i+1%>">
      <% } %>
        <div class="carousel_lavinia_01G_news_item_01">
          <img class="img-fluid d-block w-100 mb-3" src="<%= loc_path_klant_media %><%= loc_items.foto_bestand %>">
          <p class="lead text-muted mb-1"><%= loc_items.datum%></p>
          <h5 class="text-dark"><b><%= loc_items.kop%></b></h5>
          <p class="mb-3"><%= loc_items.tekst%></p>
          <a href="<%= loc_items.knop_link%>" class="btn btn-outline-primary">
            <b class="">
              <%= loc_items.knop_tekst %>
            </b>
          </a>
        </div>
      </div>
    {{ /each }}
  `;

  let renderSnip = template.compile(snip_items_01);
  return renderSnip({ nieuws: data_tpl_nieuws, loc_path_klant_media });
}
/* ========================================================================== */
function render_card_lavinia_01G_news_01_oud(data_card_news, loc_path_klant_media = json_configuratie.glint_path_klant_media) {
  let card_news = `
    <div class="card p-3 card_lavinia_news_01G">
      <img class="img-fluid d-block w-100 mb-3" src="<%= loc_path_klant_media %><%= data_card_news.foto_bestand %>">
      <p class="lead text-muted mb-1"><%= data_card_news.datum%></p>
      <h5 class="text-dark"><b><%= data_card_news.kop%></b></h5>
      <p class="mb-3"><%= data_card_news.tekst%></p>
      {{ if data_card_news.knop_tekst != "" }}      
        <a href="<%= data_card_news.knop_link%>" class="btn btn-outline-primary"><b class=""><%= data_card_news.knop_tekst %></b></a>
      {{/if}}        
    </div>
  `;

  let renderSnip = template.compile(card_news);
  return renderSnip({ data_card_news, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @function
 * @global
 * @param  {} data_card_news
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description afgeleid van tpl_card_helena_defa
 */
function render_card_lavinia_01G_news_01(data_tpl_card, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_card_news = `
    <div class="card card_lavinia_news_01G">
      <img src="<%= loc_path_klant_media %><%= data_tpl_card.foto_bestand %>" class="card-img-top" alt="<%= data_tpl_card.foto_alt %>">
      <div class="card-body">
        <h5 class="card-title"><%= data_tpl_card.kop %></h5>
        <h6 class="card-subtitle mb-2 text-muted"><%= data_tpl_card.sub_kop %></h6>
        <p class="card-text"><%= data_tpl_card.tekst %></p>
        <a href="<%= data_tpl_card.knop_link %>" class="card-link"><%= data_tpl_card.knop_tekst %></a>
      </div>
    </div>
  `;
  let renderSnip = template.compile(tpl_card_news);
  return renderSnip({ data_tpl_card, loc_path_klant_media });
}  
/* ========================================================================== */
/**
 * @name render_header_lavinia_01G_block
 * @function
 * @global
 * @param  {} data_block_header
 * @description Wordt ingesloten in o.a. tpl_header_lavinia_image_02.html<br>
 * @description Bevat eventueel animatie.<br>
 * @description <br>
 * @description class link_button onderdeel van header_lavinia_image_02_block.<br>
 * @description button_image_01: algemene button voor op een image.<br>
 */
// Paragraaf: Vergroot ik tot 1,3 rem.
function render_header_lavinia_01G_block(data_block_header) {
  let snip_header_02 = `
    <div class="bs4x-col-md-12 align-self-center text-center ">
      <div class="p-3 header_lavinia_01G_block">
        <h1 class="mb-3 display-4">{{ data_block_header.kop }}</h1>
        <p>{{ data_block_header.tekst }}</p>
      </div>
    </div>
  `;

  //let renderSnip = template.compile(snip_header_02);
  //return renderSnip({ data_block_header });
  let renderSnip = template.compile(snip_header_02);  
  return renderSnip({ data_block_header });
}
/* ========================================================================== */
function snip_block_bedrijf() {

  let snip_block_01 = `
    <div class="bs4x-col-lg-6 mx-auto p-3">
      <form class="p-4 bg-light" method="post" action="https://formspree.io/">
        <h4 class="mb-4 text-center">Make a reservation</h4>
        <p class="my-4">Book your table in advance. No cue, no waiting lists. Pre-order your favourite dish or suggest new recipes to our chefs. We will do all our best for complying to your requests</p>
        <div class="form-group"> <label>Name</label>
          <input class="form-control" placeholder="Type here"> </div>
        <div class="form-group"> <label>Time</label>
          <input type="time" class="form-control" placeholder="13"> </div>
        <div class="form-group"> <label>People</label>
          <input type="number" class="form-control" placeholder="2"> </div>
        <button type="submit" class="btn mt-4 btn-block p-2 btn-primary"><b>Reserve a table</b></button>
      </form>
    </div>
  `;

  let renderSnip = template.compile(snip_block_01);
  return renderSnip();
}
/* ========================================================================== */
/**
 * @name snip_section_lavinia_info_01
 * @function
 * @global
 * @param  {} data_snip_section
 * @description Wordt toegevoegd aan tpl_section_lavinia_info_01
 */
function render_section_lavinia_info_01G_block(data_snip_section) {
  let snip_info_01 = `
    <div class="row">
      <div class="section_lavinia_info_01G_block">
        <div class="bs4x-col-md-6 bg_red">
          <div class="section_lavinia_info_01_header bg_yellow">
            <h3 class="header_text"><%= data_snip_section.kop %></h3>
          </div>
          <div class="section_lavinia_info_01_article  bg_yellow">
            <p><%= data_snip_section.tekst %></p>
          </div>
        </div>
        <div class="bs4x-col-md-4 bs4x-offset-md-2 bg_red">
          <div class="section_lavinia_info_01_buttons bg_yellow">
            <a class="btn btn-lg btn-default button_info_01" href="<%= data_snip_section.knop_link %>"><%= data_snip_section.knop_tekst %></a>
          </div>
        </div>
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_info_01);
  return renderSnip({ data_snip_section });
}
/* ========================================================================== */
/**
 * @param  {} data_block_section
 */
function render_section_lavinia_info_04G_block(data_block_section) {

  let block_info_04 = `
    <div class="bs4x-col-md-12 align-self-center text-center">
      <div class="p-3 section_lavinia_info_04G_block">
        <h1 class="mb-3 display-4"><%= data_block_section.kop %></h1>
        <p>
          <%= data_block_section.tekst %>
        </p>
      </div>
    </div>
  `;

  let renderSnip = template.compile(block_info_04);
  return renderSnip({ data_block_section });
}
/* ========================================================================== */
/**
 * @name snip_section_lavinia_image_07
 * @function
 * @global
 * @param  {} data_snip_section
 */
function render_section_lavinia_image_07G_block(data_snip_section) {

  let snip_image_07 = `
    <div class="section_lavinia_image_07G_block">
      <div class="row">
        <div class="bs4x-col-md-8 bs4x-offset-md-2">
          <h3 class="snip_kop">
            <%= data_snip_section.kop %>
          </h3>
          <p class="snip_tekst">
            <%= data_snip_section.tekst %>
          </p>
        </div>
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_image_07);
  return renderSnip({ data_snip_section });
}
/* ========================================================================== */
/**
 * @name render_section_lavinia_video_02G_block
 * @function
 * @global
 * @param  {} data_snip_section
 * @description Schermbrede video.
 */
function render_section_lavinia_video_02G_block(data_block_section) {

  let snip_media_01_video = `  
    <div class="section_lavinia_video_02G_block">
    </div>
  `;
}  
/* ========================================================================== */
/**
 * @name render_block_lavinia_video_01G
 * @function
 * @global
 * @param  {} data_snip_section
 * @description Block met een video kan bijv. geplaatst worden in section media 01.
 */
function render_block_lavinia_video_01G(data_snip_section) {

  let snip_media_01_video = `
    <div class="block_lavinia_video_01G">  
      <figure class="video_lavinia_02">
        <iframe class="video_lavinia_02_iframe" src="<%= data_snip_section.video_sm_bestand %>" width="1280" height="720" frameborder="0" allowfullscreen>
        </iframe>
      </figure>
    </div<
  `;

  let renderSnip = template.compile(snip_media_01_video);
  return renderSnip({ data_snip_section });
}
/* ========================================================================== */
/**
 * @name render_block_lavinia_sound_01G
 * @function
 * @global
 * @param  {} data_snip_section
 */
/* TODO: Uitzoeken hoe het zit met een soundcloud-link en YAML afmaken. */
/* http://steelkiwi.com/blog/how-integrate-soundcloud-project-swift/ */
function render_block_lavinia_sound_01G(data_snip_section) {

  let snip_sound_01 = `
    <div class="block_lavinia_sound_01G">  
      <figure class="sound_lavinia_10">
        <iframe class="sound_lavinia_10_iframe" frameborder="0" allowfullscreen="" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F234652184&amp;amp;auto_play=false&amp;amp;hide_related=false&amp;amp;show_comments=true&amp;amp;show_user=true&amp;amp;show_reposts=false&amp;amp;visual=true"></iframe>
      </figure>
    </div>
  `;
  let renderSnip = template.compile(snip_sound_01);
  return renderSnip({ data_snip_section });
}
/* ========================================================================== */
/**
 * @name tpl_footer_lavinia_11G
 * @function
 * @global
 * @param  {} snip_footer_10
 * @param  {} snip_footer_11
 * @param  {} snip_footer_12
 * @param  {} nav_anker=""
 */
function render_footer_lavinia_11G(snip_footer_10, snip_footer_11, snip_footer_12, nav_anker = "") {
  let tpl_footer_11 = `
    <footer class="footer_lavinia_11G pt-5" <% if (nav_anker != "") { %>id="<%=nav_anker%>"<% } %>>
      <div class="container">
        <div class="row bs4x-show-XXXgrid">
          <div class="bs4x-col-md-4 p-2">
            `+snip_footer_10+`
          </div>
          <div class="bs4x-col-md-4 p-2">
            `+snip_footer_11+`
          </div>
          <div class="bs4x-col-md-4 p-2">
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
/**
 * @name block_lavinia_footer_11G_adres
 * @function
 * @global
 * @param  {} block_data_footer = json_bedrijf
 * @description I.p.v. kan een andere json worden doorgegeven worden, 
 * @description && zodat niet de gegevens uit de default json worden gebruikt.
 */
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
/**
 * @name block_lavinia_footer_11G_contact_01
 * @param  {} block_data_footer = json_bedrijf
 * @description I.p.v. kan een andere json worden doorgegeven worden, 
 * @description && zodat niet de gegevens uit de default json worden gebruikt.
 */
function block_lavinia_footer_11G_contact_01(block_data_footer = json_bedrijf) {
  
  let snip_footer_contact = `
    <div class="block_lavinia_footer_11G_contact">

      <h3 class="mb-2 block_kop">
        Contact
      </h3>
      <div class="block_body">
        <address>
          Email: <a href="mailto: <%= block_data_footer.email_link %>" target="_blank"> <%= block_data_footer.email_tekst %></a>
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
/**
 * @name block_lavinia_footer_11G_contact_02
 * @param  {} block_data_footer = json_bedrijf
 * @description Zie contact_01
 */
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
/**
 * @name block_lavinia_footer_11G_form
 * @function
 * @global
 * @param  {} json_bedrijf
 * @param  {} snip_data_footer
 */
/* TODO: Moet dit niet een include van athena worden zodat alle form includes bij athena staan? */
/* TODO: Javascript aanpassen voor deze form, controle maken zonder extras js bestanden, volgens mij heb ik deze al ergens, bij Simeoni? */
/* TODO: Alle andere forms bekijken of ze goed werken */
/* Werkt samen met block_lavinia_footer_01B_form_validate.js, zie bij docu lavinia_defa. */
function block_lavinia_footer_11G_form(json_bedrijf, snip_data_footer) {
  let snip_footer_form = `
    <div class="block_lavinia_footer_11G_form">
      <h3 class="mb-2 block_kop">
        <%= snip_data_footer.kop %>
      </h3>
      <form method="POST" action="http://formspree.io/Informatie@CentoBytes.nl" class="form-horizontal" id="contact-form">

        <div class="form-group">
          <input type="email" name="email" id="email" class="form-control input-sm input-inverse" required="" placeholder="">
        </div>

        <div class="form-group">
          <textarea name="message" id="message" rows="4" class="form-control input-sm input-inverse" placeholder=""></textarea>
        </div>
        <div class="mbr-buttons mbr-buttons--right btn-inverse">
          <button type="submit" class="mbr-buttons__btn btn btn-danger"></button>
        </div>
      </form>
    </div>
  `;

  let renderSnip = template.compile(snip_footer_form);
  return renderSnip({ json_bedrijf, snip_data_footer });
}
/* ========================================================================== */
/**
 * @name block_lavinia_footer_11G_links
 * @function
 * @global
 * @param  {} snip_data_footer
 */
function block_lavinia_footer_11G_links(snip_data_footer) {

  let snip_footer_links = `
    <div class="block_lavinia_footer_11G_links">
      <h3 class="mb-2 block_kop">
        <%= snip_data_footer.kop %>
      </h3>
      <div class="block_body">
        {{ each links loc_links i }}          
          <a class="text-gray" href=<%= loc_links.link_link%>><%=loc_links.link_tekst%></a>
        {{ /each }}
      </div>
    </div>
  `;
  let renderSnip = template.compile(snip_footer_links);
  return renderSnip({ snip_data_footer, links: snip_data_footer.links});
}
/* ========================================================================== */
/**
 * @name block_lavinia_footer_11G_logo
 * @function
 * @global
 * @param  {} snip_data_footer
 */
function block_lavinia_footer_11G_logo(snip_data_footer, json_configuratie) {
  let snip_footer_logo = `
    <div class="block_lavinia_footer_11G_logo">
      <h3 class="mb-2 block_kop">
        <%= snip_data_footer.kop %>
      </h3>
      <div>
        <img src="assets/images/">
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_footer_logo);
  return renderSnip({ snip_data_footer });
}
/* ========================================================================== */
/**
 * @name block_lavinia_footer_11G_map
 * @function
 * @global
 * @param  {} snip_data_footer
 */
function block_lavinia_footer_11G_map(snip_data_footer) {
  let snip_footer_map = `
    <div class="block_lavinia_footer_11G_map">
      <h3 class="mb-2 block_kop">
        <%= snip_data_footer.kop %>
      </h3>
      <figure>
        <div class="block_map_inner">
          <p data-coordinates="<%= snip_data_footer.map_coord %>"></p>
        </div>
      </figure>
    </div>
  `;

  let renderSnip = template.compile(snip_footer_map);
  return renderSnip({ snip_data_footer });
}
/* ========================================================================== */
/**
 * @name block_lavinia_footer_11G_openings
 * @function
 * @global
 * @param  {} snip_data_footer
 * @description Openingstijden
 */
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
function block_lavinia_footer_11G_openings_get(vakantie_tijd) {

  let terug_tekst = "";  

  if (vakantie_tijd == "true") {
    terug_tekst = json_footer_lavinia_11_openings_02;
  } else {  
    terug_tekst = json_footer_lavinia_11_openings_01;
  }

  return terug_tekst;
}
/* ========================================================================== */
/**
 * @name tpl_footer_lavinia_14G
 * @function
 * @global
 * @param  {} footer_data
 * @param  {} footer_links
 */
function render_footer_lavinia_14G(footer_data, footer_links) {
  let tpl_footer_tot_14 = `
    <footer class="footer_lavinia_14G">
      <div class="footer_lavinia_14_container container">
        <div class="footer_lavinia_14_row row">
          <div class="bs4x-col-md-12">
            <p>
              <%= footer_data.copy_tekst %>
              `+footer_links+`
           </p>
          </div>
        </div>
      </div>
    </footer>
  `;
  let renderTemplate = template.compile(tpl_footer_tot_14);
  let resultRender   = renderTemplate({ footer_data });
  return resultRender;
}
/* ========================================================================== */
/**
 * @name snip_footer_lavinia_14G
 * @function
 * @global
 * @param  {} snip_data_footer
 */
function snip_footer_lavinia_14G(snip_data_footer) {

  let snip_footer_14 = `
    <div class="snip_footer_lavinia_14G">
      <div class="footer_lavinia_14_container container">
        {{ each links loc_links i }}          
          <%if (i>0) {%>&nbsp;&nbsp;|&nbsp;&nbsp;<%}%>
          <a class="text-gray" href=<%= loc_links.link_link%>><%=loc_links.link_tekst%></a>
        {{ /each }}
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_footer_14);
  return renderSnip({ links: snip_data_footer.links});

}
/* ========================================================================== */
/* ========================================================================== */
