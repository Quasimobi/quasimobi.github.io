/* ==========================================================================
 * Naam: athena_biblio_bs4.js
   ========================================================================== */
/* ========================================================================== */
/*
* Desktop: Block met eventueel een foto links en tekst rechts ervan.
*          Titel staat boven de foto.
*          In Athena_01 gebruikt met 6-cols.
* Phone:   Foto staat boven de tekst.
*          Tussen foto en tekst een lijntje.
*           Titel staat boven de foto.
*
* Geen image in block met: image_src: null
*/
/* ========================================================================== */
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function render_block_athena_01G(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_01G pt-2 pr-3 pb-2 pl-3 mb-3">
      <div class="row_content">
        <h3><%= data_tpl_block.kop %></h3>

        <% if (data_tpl_block.foto_bestand != "")  { %>
          <img src="<%= loc_path_klant_media %><%= data_tpl_block.foto_bestand%>" alt="<%= data_tpl_block.foto_alt%>">
        <% } %>

        <!-- Lijntje dient als afscheiding bij phone-scherm -->
        <hr>

        <%= data_tpl_block.tekst %>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_block_athena);
  return renderTemplate({ data_tpl_block, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description Block met eventueel een foto eronder de kop en dan verder een tekst.
 * @description De kop hoort niet bij de tekst, zodat ik opmaak kan toevoegen aan de kop.
 * @description Let op: Een kopie hiervan staat bij render_blocken_athena_01G.
 */
function render_block_athena_02G(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_02G pt-2 pr-3 pb-2 pl-3 mb-3">
      <div class="row_content">

        <% if (data_tpl_block.foto_bestand != "")  { %>
          <img src="<%= loc_path_klant_media %><%= data_tpl_block.foto_bestand%>" alt="<%= data_tpl_block.foto_alt%>">
        <% } %>

        <h3><%= data_tpl_block.kop %></h3>

        <%= data_tpl_block.tekst %>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_block_athena);
  return renderTemplate({ data_tpl_block, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_blocken
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description Json wordt doorlopen en blocken worden gemaakt.
 * @description Boven elk drietal blocken moet een row geplaatst worden.
 * @description De row wordt afgesloten met een </div> nadat 3 blocks geplaatst zijn of wanneer het het laatste block is.
 * @description !!! Kode ten dele gekopieerd van render_block_athena_02G.
 */
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
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description Onderaan het block staat een knop met een link
 */
function render_block_athena_41G(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_41G pt-2 pr-3 pb-2 pl-3 mb-3">
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
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description Onderaan het block staat een knop met een link
 * @description Gebruikt bij Athena_10
 * GECHECKT MET INCLUDE 
 */
function render_block_athena_42G(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_42G pt-2 pr-3 pb-2 pl-3 mb-3">
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
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function render_block_athena_51G(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_51G pt-2 pr-3 pb-2 pl-3 mb-3">

      <h3><%= data_tpl_block.kop %></h3>

      <% if (data_tpl_block.foto_bestand != "")  { %>
        <img src="<%= loc_path_klant_media %><%= data_tpl_block.foto_bestand%>" alt="<%= data_tpl_block.foto_alt%>">
      <% } %>

      <%= data_tpl_block.tekst %>

    </div>
  `;

  let renderTemplate = template.compile(tpl_block_athena);
  return renderTemplate({ data_tpl_block, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function render_block_athena_52G(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_52G pt-2 pr-3 pb-2 pl-3 mb-3">

      <h3><%= data_tpl_block.kop %></h3>

      <%= data_tpl_block.tekst %>

    </div>
  `;

  let renderTemplate = template.compile(tpl_block_athena);
  return renderTemplate({ data_tpl_block, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description Gebruikt bij Athena_10
 */
function render_block_athena_61G(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_61G pt-2 pr-3 pb-2 pl-3">

      <h3><%= data_tpl_block.kop %></h3>

      <%= data_tpl_block.tekst %>

    </div>
  `;

  let renderTemplate = template.compile(tpl_block_athena);
  return renderTemplate({ data_tpl_block, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_block
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description Toont de naam van het bedrijf, adres en telefoon.
 */
function block_athena_contact_01G(data_tpl_block, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_block_athena = `
    <div class="block_athena_contact_01G">
      <div class="row">
        <div class="bs4x-col-sm-10 bs4x-offset-sm-1 bs4x-col-md-3 bs4x-offset-md-0">
          {{ loc_company_name }}
        </div>
        <div class="bs4x-col-sm-10 bs4x-offset-sm-1 bs4x-col-md-3 bs4x-offset-md-0">
          {{ loc_adres_straat }}&nbsp;&nbsp;{{ loc_adres_huisnr }},
        </div>
        <div class="bs4x-col-sm-10 bs4x-offset-sm-1 bs4x-col-md-3 bs4x-offset-md-0">
          {{ loc_adres_postcode }}&nbsp;&nbsp;{{ loc_adres_plaats }}.
        </div>
        <div class="bs4x-col-sm-10 bs4x-offset-sm-1 bs4x-col-md-3 bs4x-offset-md-0">
          <div class="regel_tekst hidden-xs hidden-sm">
            Telefoon: {{ loc_adres_telefoon }}
          </div>
          <div class="regel_tekst hidden-md hidden-lg">
            Telefoon: <a href="tel:{{loc_adres_telefoon}}" target="_top" >{{loc_adres_telefoon}}</a>
          </div>
        </div>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_block_athena);
  return renderTemplate({ data_tpl_block, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_card
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function render_card_athena_referentie_01G(data_tpl_card, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_card_athena = `
    <div class="card_athena_referentie_01G">
      <img src="<%= loc_path_klant_media %><%= data_tpl_card.foto_bestand%>" alt="<%= data_tpl_card.foto_alt%>">
      <h4><%= data_tpl_card.naam %></h4>
      <p class="text-muted"><%= data_tpl_card.positie %></p>
      <div class="row_content">
        <%= data_tpl_card.tekst %>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_card_athena);
  return renderTemplate({ data_tpl_card, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_card
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function render_card_athena_referentie_02G(data_tpl_card, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_card_athena = `
    <div class="card_athena_referentie_02G">
      <img src="<%= loc_path_klant_media %><%= data_tpl_card.foto_bestand%>" alt="<%= data_tpl_card.foto_alt%>">
      <div class="my-3">
        <%= data_tpl_card.tekst%>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_card_athena);
  return renderTemplate({ data_tpl_card, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @name sterren
 * @function
 * @global
 * @param  {} aantal
 * @description maakt een aantal sterren.
 * @description loopt stuk op onderstaande regels, geen idee.
 * @description <i class="fa fa-star d-inline"></i>
 * @description  <i class="fa fa-star mx-1 d-inline">
 * @description   </i><i class="fa fa-star d-inline"></i>
 * @description   <i class="fa fa-star mx-1 d-inline"></i>
 * @description   <i class="fa fa-star-o d-inline"></i>
 */
function sterren(aantal) {
  let tpl_sterren_01 = `

   `;

   let renderTpl = template.compile(tpl_sterren_01);
   return renderSnip({ aantal });
}
/* ========================================================================== */
/**
 * let op het enkel- en meervoud.
 * code gekopieerd uit block_s_01.html
 */
/**
 * @param  {} data_tpl_card
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function render_card_athena_werknemer_01G(data_tpl_card, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_card_athena = `
    <div class="card_athena_werknemer_01G">
      <img src="<%= loc_path_klant_media %><%= data_tpl_card.foto_bestand%>" alt="<%= data_tpl_card.foto_alt%>">
      <h4><%= data_tpl_card.naam %></h4>
      <p class="text-muted"><%= data_tpl_card.positie %></p>
      <div class="row_content">
        <%= data_tpl_card.tekst %>
      </div>
      <div class="row row_social">
        <ul class="list-inline social-buttons">
          {% for network in include.param.social %}
            <li><a href="{{ network.url }}"><i class="fa fa-{{ network.title }} fa-lg"></i></a>
          {% endfor %}
        </ul>
    </div>
  </div>
  `;

  let renderTemplate = template.compile(tpl_card_athena);
  return renderTemplate({ data_tpl_card, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} tpl_config
 * @param  {} data_tpl_carousel
 * @param  {} snip_items
 * @param  {} snip_controls=``
 * @param  {} snip_indicators=``
 * @description Carousel voor referenties_02, proberen voor ook referenties_02 en werknemer te gebruiken 
 */
function render_carousel_athena_01G(tpl_config, data_tpl_carousel, snip_items, snip_controls = ``, snip_indicators = ``) {

  let tpl_carousel_athena = `
    <div id="<%= tpl_config.carousel_id %>" class="carousel slide carousel_athena_01G" data-ride="carousel" >
      `+snip_indicators+`
      <div class="carousel-inner carousel_athena_01G_inner">
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
 * @param  {} data_tpl_carousel
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function snip_carousel_athena_01G_referenties_items_01(data_tpl_referenties, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_carousel_01 = `
    {{ each referenties loc_items i }}      
      <% if (i == 0) { %>
        <div class="carousel-item active">
      <% } else { %>
        <div class="carousel-item">
      <% } %>
        <div class="carousel_athena_01G_referenties_item_01">
          <img src="<%= loc_path_klant_media %><%= loc_items.foto_bestand %>" alt="<%= loc_items.foto_alt%>" data-holder-rendered="true" width="200">
          <h4><%= loc_items.naam %></h4>
          <p class="text-muted"><%= loc_items.positie %></p>
          <div class="row_content">
            <%= loc_items.tekst %>
          </div>
        </div>
      </div>
    {{ /each }}
  `;

  let renderSnip = template.compile(snip_carousel_01);
  return renderSnip({ referenties: data_tpl_referenties, loc_path_klant_media });
}
/* ========================================================================== */
/*
<img class="d-block img-fluid rounded-circle mx-auto" src="<%= full_path_rel_media %><%= loc_items.foto_bestand%>" data-holder-rendered="true" width="200">
(i+1) == pagina_nummer
*/
/* ========================================================================== */
/*
 * @param  {} data_tpl_carousel
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function snip_carousel_athena_01G_referenties_items_02(data_tpl_referenties, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_carousel_01 = `
    {{ each referenties loc_items i }}      
      <% if (i == 0) { %>
        <div class="carousel-item active">
      <% } else { %>
        <div class="carousel-item">
      <% } %>
        <div class="carousel_athena_01G_referenties_item_02">
          <img class="d-block img-fluid rounded-circle mx-auto" src="<%= loc_path_klant_media %><%= loc_items.foto_bestand%>" alt="<%= loc_items.foto_alt%>" data-holder-rendered="true" width="200">
            <div class="my-3">
              <%= loc_items.tekst%>
            </div>
          </div>
        </div>
    {{ /each }}
  `;

  let renderSnip = template.compile(snip_carousel_01);
  return renderSnip({ referenties: data_tpl_referenties, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_carousel
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 */
function snip_carousel_athena_01G_werknemers_items_01(data_tpl_werknemers, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_carousel_01 = `
    {{ each werknemers loc_items i }}
      <% if (i == 0) { %>
        <div class="carousel-item active">
      <% } else { %>
        <div class="carousel-item">
      <% } %>
      <div class="carousel_athena_01G_werknemers_item_01">
          <img src="<%= loc_path_klant_media %><%= loc_items.foto_bestand%>" alt="<%= loc_items.foto_alt%>" data-holder-rendered="true" width="200">
          <h4><%= loc_items.naam %></h4>
          <p class="text-muted"><%= loc_items.positie %></p>
          <div class="row_content">
            <%= loc_items.tekst %>
          </div>
          <% if (loc_items.sociaal != null) { %>
            <div class="row row_social">
              {{ each loc_items.sociaal loc_sociaal i }}                
                <ul class="list-inline social-buttons">
                  <li><a href="<%= loc_sociaal.sociaal_link %>"><i class="fa fa-<%= loc_sociaal.sociaal_naam %>fa-lg"></i></a>
                </ul>
              {{ /each }}
            </div>
          <% } %>
        </div>
      </div>
    {{ /each }}
  `;

  let renderSnip = template.compile(snip_carousel_01);
  return renderSnip({ werknemers: data_tpl_werknemers, loc_path_klant_media });
}
/* ========================================================================== */
/**
 *   * Gebruikt bij Athena_10, Onepage_07
  *
  gebruikt: athena_10
  include: xxie_carousel_athena_51.html param=site.data.carousel.athena_101
  data: xxxxxvcvvc
  klassen: carousel_51, carousel_inner_51, carousel_control_51, carousel_block_02
Carousel met normale controls op de standaard plek.</br>
Op de carousel wordt een blok met tekst geplaatst.
Indicators kunnen toegevoegd worden met   indicators true
Control van BootStrap 4 voor BS 3.3.5, wat aangepast.
Geen glyphicons meer nodig.
Met de var $xxie_14_carousel_41_control_width zet ik de controls meer naar de kanten toe.
Met een BS var kunnen de controls groter gemaakt worden.
*/
/* ========================================================================== */
/**
 * @param  {} tpl_config
 * @param  {} data_tpl_carousel
 * @param  {} snip_items
 * @param  {} snip_controls=``
 * @param  {} snip_indicators=``
 * @description (versie 4, gecheckt)
 */
function render_carousel_athena_51G(tpl_config, data_tpl_carousel, snip_items, snip_controls = ``, snip_indicators = ``) {

  let tpl_carousel_athena = `
    <div id="<%= tpl_config.carousel_id %>" class="carousel slide carousel_athena_51G" data-ride="carousel">
      `+snip_indicators+`
      <div class="carousel-inner carousel_athena_51G_inner">
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
 * @name snip_carousel_athena_51G_indicators
 * @function
 * @global
 * @param  {} tpl_config
 * @param  {} slides
 * @description Indicators, verborgen bij Mobiel
 * @description (versie 4, gecheckt)
 */
/* TODO: verborgen bij Mobiel */
/* TODO: moet niet met data foto's werken, maar met de lenght van data_tpl_carousel */
function snip_carousel_athena_51G_indicators(tpl_config, slides) {

  let snip_indicators_01 = `
    <ol class="carousel-indicators carousel_athena_51G_indicators">
      {{ each slides loc_items i }}        
        <% if (i == 0) { %>
          <li data-target="#<%= tpl_config.carousel_id %>" data-slide-to="0" class="active"></li>
        <% } else { %>
          <li data-target="#<%= tpl_config.carousel_id %>" data-slide-to="<%=i%>"></li>
        <% } %>
      {{ /each }}
    </ol>
  `;

  let renderSnip = template.compile(snip_indicators_01);
  return renderSnip({ tpl_config, slides });  
}

/* ========================================================================== */
/**
 * @name snip_carousel_athena_51G_controls
 * @function
 * @global
 * @param  {} tpl_config
 * @description Controls van de carousel athena.
 * @description (versie 4, gecheckt)
 */
function snip_carousel_athena_51G_controls(tpl_config) {

  let snip_controls_01 = `
    <a class="carousel-control-prev carousel_athena_51G_controls" href="#<%= tpl_config.carousel_id %>" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next carousel_athena_51G_controls" href="#<%= tpl_config.carousel_id %>" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  `;

  let renderSnip = template.compile(snip_controls_01);
  return renderSnip({ tpl_config });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_carousel
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description de carousel met de items kan op de eigen server of op Github staan.
 * @description wanneer op de eigen server kunnen de images locaal of van github opgehaald worden.
 * @description loc_path_klant_media heeft als default json_configuratie.glint_path_klant_media (dus meestal images/ )
 * @description wanneer de carousel op de server staat en de images op Github, moet loc_path_klant_media de waarde full_github_path_media krijgen (zie biblio defa_data_bs4).
 */
function snip_carousel_athena_51G_items_01(data_tpl_fotos, loc_path_klant_media = json_configuratie.glint_path_klant_media) {
  let snip_carousel_01 = `
    {{ each fotos loc_items i }}      
      <% if (i == 0) { %>
        <div class="carousel-item active">
      <% } else { %>
        <div class="carousel-item">
      <% } %>
        <div class="carousel_athena_51G_item_01">
          <img class="d-block w-100" src="<%= loc_path_klant_media %><%= loc_items.foto_bestand%>" alt="<%= loc_items.foto_alt%>">
          <div class="container">
            <div class="row">
              <div class="bs4x-col-md-4">
                <div class="carousel_athena_51G_block">
                  <%= loc_items.foto_tekst %>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {{ /each }}
  `;

  let renderSnip = template.compile(snip_carousel_01);
  return renderSnip({ loc_path_klant_media, fotos: data_tpl_fotos });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_carousel
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description Oude snip_carousel_athena_61G_items_loc
 */
function snip_carousel_athena_51G_items_61(data_tpl_fotos, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let snip_carousel_01 = `
    {{ each fotos loc_items i }}      
      <% if (i == 0) { %>
        <div class="carousel-item active">
      <% } else { %>
        <div class="carousel-item">
      <% } %>
        <div class="carousel_athena_51G_item_61">
          <img class="d-block w-100" src="<%= loc_path_klant_media %><%= loc_items.foto_bestand%>" alt="<%= loc_items.foto_alt%>">
        </div>
      </div>
    {{ /each }}
  `;

  let renderSnip = template.compile(snip_carousel_01);
  return renderSnip({ loc_path_klant_media, fotos: data_tpl_fotos });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_footer
 * @param  {} tpl_config
 */
function render_footer_athena_01G(data_tpl_footer, tpl_config = defa_tpl_config_01) {
  let tpl_footer_athena = `
    <footer class="footer_athena_01G">
      <div class="row">
        <div class="bs4x-col-md-8 bs4x-offset-md-2 text-center">
          <a class="btn btn-lg button_content_01" href="{{ include.param.social_mail_link }}" target="_blank">
            <i class="fa fa-copyright fa-3x pull-left"></i>
            <div class="mut_but_padding_01 pull-right">
              {{ include.param.regel }}
            </div>
          </a>
        </div>
      </div>
    </footer>
  `;

  let renderTemplate = template.compile(tpl_footer_athena);
  return renderTemplate({ tpl_config, data_tpl_footer });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_footer
 * @param  {} tpl_config
 */
function render_footer_athena_02G(data_tpl_footer, tpl_config = defa_tpl_config_01) {
  let tpl_footer_athena = `
    <footer class="footer_athena_02G">
      <div class="row">
        <div class="bs4x-col-md-6 bs4x-offset-md-3 text-center">
          <a class="btn btn-lg button_content_02" href="{{ include.param.social_mail_link }}" target="_blank">
            <i class="fa fa-copyright fa-3x pull-left"></i>
            <div class="mut_but_padding_01 pull-right">
              {{ include.param.regel }}
            </div>
          </a>
        </div>
      </div>
    </footer>
  `;

  let renderTemplate = template.compile(tpl_footer_athena);
  return renderTemplate({ tpl_config, data_tpl_footer });
}
/* ========================================================================== */
/**
 * @param  {} website_link
 * @param  {} jaar_copyright
 * @param  {} company_name
 * @param  {} tpl_config=defa_tpl_config_01
 * @description Een losstaand vlak met daarin een grote knop met copyright icon en de bedrijfsnaam als een link.
 */
function render_footer_athena_05G(website_link, jaar_copyright, company_name, tpl_config = defa_tpl_config_01) {

  let tpl_footer_athena = `
    <footer class="footer_athena_05G">
      <div class="row">
        <div class="bs4x-offset-lg-3 bs4x-col-lg-6 text-center">
          <a class="btn btn-lg button_footer_athena_05" href="<%= website_link %>" target="_blank">
            <i class="fa fa-copyright pull-left"></i>
            <div class="mut_but_padding_01 pull-right">
            <%= jaar_copyright %>&nbsp;&nbsp;<%= company_name %>
            </div>
          </a>
        </div>
      </div>
    </footer>
  `;

  let renderTemplate = template.compile(tpl_footer_athena);
  return renderTemplate({ website_link, jaar_copyright, company_name, tpl_config });
}
/* ========================================================================== */
/**
 * Blok met links de bedrijfsnaam en rechts ervan de de bedrijfsgegevens.
 * Achtergrond en border well-kleuren.
 *   Hier worden de custom gegevens gebruikt.
 */
/**
 * @param  {} json_bedrijf
 * @param  {} tpl_config=defa_tpl_config_01
 */
function render_footer_athena_10G(json_bedrijf, tpl_config = defa_tpl_config_01) {

  let tpl_footer_athena = `
    <footer class="footer_athena_10G">
      <div class="row show-grxxid">
        <div class="bs4x-col-sm-12">
          <div class="bs4x-col-sm-12 bs4x-col-md-4">
            <h3>
            <%= json_bedrijf.company_name %>
            </h3>
          </div>
          <div class="bs4x-col-sm-12 bs4x-col-md-4">
            <address>
              <strong>Adres</strong><br>
                <%= json_bedrijf.adres_straat %>
                <%= json_bedrijf.adres_huisnr %>,<br>
                <%= json_bedrijf.adres_postcode %>
                <%= json_bedrijf.adres_plaats %>
            </address>
          </div>
          <div class="bs4x-col-sm-12 bs4x-col-md-4">
            <address>
              <strong>Telefoon en mail</strong><br>
              Telefoon:&nbsp;<%= json_bedrijf.adres_telefoon %><br>
              Email:&nbsp; <%=  json_bedrijf.email_tekst %>
            </address>
          </div>
        </div>
      </div>
    </footer>
  `;

  let renderTemplate = template.compile(tpl_footer_athena);
  return renderTemplate({ json_bedrijf, tpl_config });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_footer
 * @param  {} tpl_config
 * @description Icons zijn in 2e contentKleuren.
 */
function render_footer_athena_onepage_07G(data_tpl_footer, tpl_config = defa_tpl_config_01) {

  let tpl_footer_athena = `
    <footer class="footer_athena_onepage_07G">
      <div class="container">
        <div class="row">
          {% for network in include.param.social %}
            {% if forloop.index == 1 %}
            <div class="bs4x-col-sm-3 bs4x-col-md-1 bs4x-offset-md-4 text-center">
            {% else %}
            <div class="bs4x-col-sm-3 bs4x-col-md-1 text-center">
            {% endif %}
              <div class="xxie_button_attention_a52">
                <a href="{{ network.url }}" target="blank">
                  <i class="fa fa-{{ network.title }}"></i>
                </a>
              </div>
            </div>
          {% endfor %}
        </div>
        <div class="row">
          <div class="bs4x-col-sm-12 bs4x-col-lg-4 bs4x-offset-lg-4 text-center">
            <hr class="lijntje_footer">
            <p>
              {{ include.param.regel }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;

  let renderTemplate = template.compile(tpl_footer_athena);
  return renderTemplate({ tpl_config, data_tpl_footer });
}
/* ========================================================================== */
/**
* include: header_athena_tekst_01.html
* Vervangen door header_athena_tekst_01B.html
* Wanneer ik hem niet gebruik, mag deze weg

  omschrijving: "
Dit is een mooie voor de google.maps<i class="fa fa-map-marker"></i>
  titel: Header met een grote tekst erin, eerste content kleuren.
  block:
  klasse: header_athena_tekst_01
  omschrijving:
    - regel: Header met een tekst en eventuele icons sociale media.
    - regel: De tekst wordt opgehaald uit de json data.xxie_content.
*/
/**
 * @param  {} data_tpl_tekst
 * @param  {} tpl_config
 */
function render_header_athena_tekst_01G(bedrijfsnaam, data_tpl_tekst, tpl_config = defa_tpl_config_01) {

  let tpl_header_athena = `
    <header class="header_athena_tekst_01G">
      <div class="row">
        <div class="bs4x-col-md-8 bs4x-col-sm-12 text-center">
          <h1>Candy Business</h1>
        </div>
        <div class="bs4x-col-md-1 bs4x-col-sm-4 text-center">
          <div class="button_attention_51G">
            <a href="#section_adres" title="AdresGegevens">
              <i class="fa fa fa-home"></i>
            </a>
          </div>
        </div>
        <div class="bs4x-col-md-1 bs4x-col-sm-4 text-center">
          <div class="button_attention_51G">
            <a href="#" target="blanck" title="">
              <i class="fa fa-envelope"></i>
            </a>
          </div>
        </div>
        <div class="bs4x-col-md-1 bs4x-col-sm-4 text-center">
          <div class="button_attention_51G">
            <a href="#" target="blanck">
              <i class="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  `;

  let renderTemplate = template.compile(tpl_header_athena);
  return renderTemplate({ bedrijfsnaam, data_tpl_tekst, tpl_config });
}
/* ========================================================================== */
/**
* include: header_athena_image_01.html
  omschrijving: "
  titel: Header met daarin een logo. Vergelijk Simeoni.
  block:
  klasse: header_athena_image_01
  omschrijving:
    - regel: Zie include xxie_header_athena_image_01
    - regel: Puntjes op de i zetten wanneer ik hem gebruik.
*/
/**
 * @param  {} data_tpl_image
 * @param  {} json_configuratie
 * @param  {} tpl_config
 */
function render_header_athena_image_01G(data_tpl_image, json_configuratie, tpl_config = defa_tpl_config_01) {
  let tpl_header_athena = `
    <header class="header_athena_image_01G">
      <img src="<%= full_path_rel_media %><%= data_tpl_image.foto_bestand%>" alt="<%= data_tpl_image.foto_alt%>">
    </header>
  `;

  let renderTemplate = template.compile(tpl_header_athena);
  return renderTemplate({ tpl_config, data_tpl_image });
}
/* ========================================================================== */
/**
* include: header_athena_image_02.html
omschrijving: "
Bij Feeling responsive is de header 1600 bij 503, deze wordt uitgerekt tot 1907 bij 600.
Wanneer de header 2400 breed is moet de hoogte 755 worden.
Vergeet niet te checken voor kleinere display"s.
/////////
  titel: Header met daarin een logo met daarover een doorzichtig block.
  block:
  klasse: .header_athena_image_02
  omschrijving:
    - regel: Zie include xxie_header_athena_image_02
    - regel: Puntjes op de i zetten wanneer ik hem gebruik.
*/
/**
 * @param  {} data_tpl_image
 * @param  {} json_configuratie
 * @param  {} tpl_config
 */
function render_header_athena_image_02G(data_tpl_image, json_configuratie, tpl_config = defa_tpl_config_01) {

  let tpl_header_athena = `
    <header class="header_athena_image_02G">
      <img src="<%= full_path_rel_media %><%= data_tpl_image.foto_bestand %>" alt="<%= data_tpl_image.foto_alt %>">
      <div class="container">
        <div class="row">
          <div class="bs4x-col-md-4">
            <div class="imagenail_02_block_01">
              <h2><%= data_tpl_image.kop %></h2>
              <hr class="imagenail_02_block_01_lijntje">
              <%= data_tpl_image.tekst %>
              <hr class="imagenail_02_block_01_lijntje">
            </div>
          </div>
        </div>
      </div>
    </header>
  `;

  let renderTemplate = template.compile(tpl_header_athena);
  return renderTemplate({ tpl_config, data_tpl_image });
}
/* ========================================================================== */
/**
* include: header_athena_callout_01.html
* Gebruikt bij Athena_10

De icons krijgen de link-kleuren van Bootstrap
TODO nummer moet in een link: https://nuxtjs.org/faq/ios-phone-numbers

TODO Testen het telefoonnummer op mobiel of het werkt.
TODO UIteindelijk mkoeten er juiste links komen voor de icons.
////////
  titel: Header met daarin een logo met daarover een doorzichtig block.
  block: header_athena_callout_01.html
  klasse: .header_athena_callout_01
*/
/**
 * @param  {} data_tpl_header
 * @param  {} tpl_config
 */
function render_header_athena_callout_01G(data_tpl_header, tpl_config = defa_tpl_config_01) {
  let tpl_header_athena = `
    <header class="header_athena_callout_01G">
      <div class="row shoxxw-grid">
        <div class="bs4x-col-sm-10">
          <div class="bs4x-col-sm-12 bs4x-col-md-3">
            <div class="linker_kolom">
              <p>
                Direct contact?&nbsp;
                <a href="mailto: {{ loc_email_link_bedrijf }}" target="_blanck">Email ons</a>&nbsp;
              </p>
            </div>
          </div>
          <div class="bs4x-col-sm-12 bs4x-col-md-9">
            <div class="linker_kolom">
              <p class= "hidden-xs hidden-sm">
                of Bel:&nbsp;
                {{ loc_adres_telefoon_bedrijf }}
              </p>
              <p class= "hidden-md hidden-lg">
                of Bel:&nbsp;
                <a href="tel: {{ loc_adres_telefoon_bedrijf}}" target="_top" >{{ loc_adres_telefoon_bedrijf }}</a>
              </p>
            </div>
          </div>
        </div>
        <div class="bs4x-col-sm-2">
          <div class="rechter_kolom">
            <div class="bs4x-col-sm-12 bs4x-col-md-6">
              <a href="#" target="blanck" title="">
                <i class="fa fa-facebook fa-2x"></i>
              </a>
            </div>
            <div class="bs4x-col-sm-12 bs4x-col-md-6">
              <a href="#" target="blanck">
                <i class="fa fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;

  let renderTemplate = template.compile(tpl_header_athena);
  return renderTemplate({ tpl_config, data_tpl_header });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_image
 * @param  {} loc_path_klant_media=json_configuratie.glint_path_klant_media
 * @description Wordt gebruikt bij een regel met een foto met daarnaast een tekstblock.
 * @description Gebruikt bij onepage_07 en kan gebruikt worden bij Athena_01 en Athena_10
 * @description Oude naam: image_athena_10* 
 */
function render_block_athena_image_01G(data_tpl_image, loc_path_klant_media = json_configuratie.glint_path_klant_media) {

  let tpl_image_athena = `
    <div class="block_athena_image_01G">
      <img class="img-fluid d-block" src="<%= loc_path_klant_media %><%= data_tpl_image.foto_bestand%>" alt="<%= data_tpl_image.foto_alt%>">
    </div>
  `;

  let renderTemplate = template.compile(tpl_image_athena);
  return renderTemplate({ data_tpl_image, loc_path_klant_media });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_jumbotron
 * @param  {} tpl_config
 * @description Een Jumbotron met daarin een Blockquote met een Icon.
 * @description Gebruikt bij Athena 01 en 10
 * @description Oude tpl_jumbotron_athena_01G
 */
function render_jumbotron_athena_01G(data_tpl_jumbotron, tpl_config = defa_tpl_config_01) {

  let tpl_jumbotron_athena = `
    <div class="jumbotron jumbotron_athena_01G">
      <h2><%= data_tpl_jumbotron.kop %></h2>
      <div class="blockquote_01G">
        <blockquote>
          <p>
            <i class="fa fa-quote-left fa-2x"></i>
            &nbsp;&nbsp;
            <%= data_tpl_jumbotron.tekst %>
          </p>
        </blockquote>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_jumbotron_athena);
  return renderTemplate({ tpl_config, data_tpl_jumbotron });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_jumbotron
 * @param  {} tpl_config
 * @description Een Jumbotron met daarin een Blockquote volgens Bootstrap.
 */
function render_jumbotron_athena_11G(data_tpl_jumbotron, tpl_config = defa_tpl_config_01) {

  let tpl_jumbotron_athena = `
    <div class="jumbotron jumbotron_athena_11G">
      <h2><%= data_tpl_jumbotron.kop %></h2>
      <div class="blockquote_11G">
        <blockquote>
          <p>
            <%= data_tpl_jumbotron.tekst %>
          </p>
        </blockquote>
      </div>
    </div>
  `;

  let renderTemplate = template.compile(tpl_jumbotron_athena);
  return renderTemplate({ tpl_config, data_tpl_jumbotron });
}
/* ========================================================================== */
/**
 * @param  {} data_tpl_jumbotron
 * @param  {} tpl_config
 * @description Default Jumbotron volgens de voorbeelden van Bootstrap.
 * @description Was eerst een onderdeel van Helena.
 */
function render_jumbotron_athena_20G(data_tpl_jumbotron, tpl_config = defa_tpl_config_01) {

  let tpl_jumbotron_athena = `
    <div class="jumbotron jumbotron_athena_20G">
      <h1><%= data_tpl_jumbotron.kop %></h1>
        <%= data_tpl_jumbotron.tekst %>
      <p>
        <a class="btn btn-primary btn-lg" href="<%= data_tpl_jumbotron.knop_link %>" role="button"><%= data_tpl_jumbotron.knop_tekst %></a>
      </p>
    </div>  
  `;

  let renderTemplate = template.compile(tpl_jumbotron_athena);
  return renderTemplate({ tpl_config, data_tpl_jumbotron });  
}  
/* ========================================================================== */
/* ========================================================================== */
