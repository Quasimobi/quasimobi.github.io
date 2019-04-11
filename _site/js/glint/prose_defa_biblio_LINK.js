/* ==========================================================================
 *
 * Naam: prose_defa_biblio.es6
 *
   ========================================================================== */
/* ========================================================================== */
/**
 * @function
 * @global
 * @param  {} tag_name
 * Voeg een tag aan de posts toe, zodat ervan een selectie kan worden gemaakt.
 */
function prose_add_tag_01(tag_name) {
  let terug = `
    - name: "tag"
      field:
        element: "text"
        element: "hidden"
        value: ${tag_name}
  `;

  return terug;
}
/* ========================================================================== */
/**
 * @function
 * @global
  * Voeg het attribuut published toe, default true en met de mogelijkheid tot wijzigen.
 */
function prose_published_01() {
  let terug = `
    - name: "published"
      field:
        element: "checkbox"
        label: "Published"
        help: "Uncheck to make this post hidden.</br>ieuwe regel<br>ik weet het niet meer"
        value: true
        on: "true"
        off: "false"
  `;

  return terug;
}
/* ========================================================================== */
/**
 * @description Kan ook gebruikt worden voor de prose_snip_carousel_athena_51G_items_61.
 */
function prose_carousel_athena_51G_01_foto_xl_bestand() {
  let terug = `
    - name: "foto_xl_bestand"
      field:
        element: "text"
        label: "${prose_athena_carousel_51.foto_xl_bestand_label}"
        help: "${prose_athena_carousel_51.foto_xl_bestand_help}"
        value: "${prose_athena_carousel_51.foto_xl_bestand_value}"
  `;
  return terug;
}
/* ========================================================================== */
/**
 * @description Kan ook gebruikt worden voor de prose_snip_carousel_athena_51G_items_61.
 */
function prose_carousel_athena_51G_01_foto_xl_alt() {
  let terug = `
    - name: "foto_xl_alt"
      field:
        element: "text"
        label: "${prose_athena_carousel_51.foto_xl_alt_label}"
        help: "${prose_athena_carousel_51.foto_xl_alt_help}"
        value: "${prose_athena_carousel_51.foto_xl_alt_value}"
  `;
  return terug;
}
/* ========================================================================== */
/**
 * @description Kan ook gebruikt worden voor de prose_snip_carousel_athena_51G_items_61.
 */
function prose_carousel_athena_51G_01_tekst() {
  let terug = `
    - name: "foto_tekst"
      field:
        element: "text"
        label: "${prose_athena_carousel_51.foto_tekst_label}"
        help: "${prose_athena_carousel_51.foto_tekst_help}"
        value: "${prose_athena_carousel_51.foto_tekst_value}"
  `;
  return terug;
}
/* ========================================================================== */
/* ====================< HELENA >============================================ */
/* ========================================================================== */
function prose_helena_bedrijf_01_adres_huisnr() {
  let terug = `
- name: "adres_huisnr"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.adres_huisnr_label}"
    help: "${prose_helena_bedrijf_01.adres_huisnr_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_adres_plaats() {
  let terug = `
- name: "adres_plaats"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.adres_plaats_label}"
    help: "${prose_helena_bedrijf_01.adres_plaats_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_adres_postcode() {
  let terug = `
- name: "adres_postcode"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.adres_postcode_label}"
    help: "${prose_helena_bedrijf_01.adres_postcode_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_adres_straat() {
  let terug = `
- name: "adres_straat"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.adres_straat_label}"
    help: "${prose_helena_bedrijf_01.adres_straat_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_adres_telefoon() {
  let terug = `
- name: "adres_telefoon"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.adres_telefoon_label}"
    help: "${prose_helena_bedrijf_01.adres_telefoon_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_email_link() {
  let terug = `
- name: "email_link"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.email_link_label}"
    help: "${prose_helena_bedrijf_01.email_link_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_email_tekst() {
  let terug = `
- name: "email_tekst"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.email_tekst_label}"
    help: "${prose_helena_bedrijf_01.email_tekst_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_facebook_naam() {
  let terug = `
- name: "facebook_naam"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.facebook_naam_label}"
    help: "${prose_helena_bedrijf_01.facebook_naam_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_form_actie() {
  let terug = `
- name: "form_actie"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.form_actie_label}"
    help: "${prose_helena_bedrijf_01.form_actie_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ========================================================================== */
function prose_helena_post_01_datum() {
  /* TODO: wat voor element */
  let terug = `
- name: "datum"
  field:
    element: "text"
    label: "${prose_helena_post_01.datum_label}"
    help: "${prose_helena_post_01.datum_help}"
  `;
  return terug;
}
/* ========================================================================== */
/*   Implementatie als checkbox. */
function prose_helena_post_01_foto_groot() {
  let terug = `
- name: "foto_groot"
  field:
    element: checkbox
    label: "${prose_helena_post_01.foto_groot_label}"
    help: "${prose_helena_post_01.foto_groot_help}"
    value: "${prose_helena_post_01.foto_groot_value}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_post_01_foto_sm_alt() {
  let terug = `
- name: "foto_sm_alt"
  field:
    element: "text"
    label: "${prose_helena_post_01.foto_sm_alt_label}"
    help: "${prose_helena_post_01.foto_sm_alt_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_post_01_foto_sm_bestand() {
  let terug = `
- name: "foto_sm_bestand"
  field:
    element: "text"
    label: "${prose_helena_post_01.foto_sm_bestand_label}"
    help: "${prose_helena_post_01.foto_sm_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_post_01_kop() {
  let terug = `
- name: "kop"
  field:
    element: "text"
    label: "${prose_helena_post_01.kop_label}"
    help: "${prose_helena_post_01.kop_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_post_01_layout() {
  let terug = `
- name: "layout"
  field:
    element: "text"
    label: "${prose_helena_post_01.layout_label}"
    help: "${prose_helena_post_01.layout_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_post_01_pdf_bestand() {
  let terug = `
- name: "pdf_bestand"
  field:
    element: "text"
    label: "${prose_helena_post_01.pdf_bestand_label}"
    help: "${prose_helena_post_01.pdf_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_post_01_permalink() {
  let terug = `
- name: "datum"
  field:
    element: "text"
    label: "${prose_helena_post_01.permalink_label}"
    help: "${prose_helena_post_01.permalink_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ========================================================================== */
function prose_helena_blockquote_01_tekst() {
  let terug = `
- name: "tekst"
  field:
    element: "text"
    label: "${prose_helena_blockquote_01.tekst_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_blockquote_01_bron_persoon() {
  let terug = `
- name: "bron_persoon"
  field:
    element: "text"
    label: "${prose_helena_blockquote_01.bron_persoon_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_blockquote_01_bron_titel() {
  let terug = `
- name: "bron_titel"
  field:
    element: "text"
    label: "${prose_helena_blockquote_01.bron_titel_label}"
  `;
  return terug;
}
/* ========================================================================== */
/* ========================================================================== */

/* ========================================================================== */
function prose_helena_navbar_01_drop_link() {
  let terug = `
- name: "drop_link"
  field:
    element: "text"
    label: "${prose_helena_navbar_01.drop_link_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_navbar_01_drop_tekst() {
  let terug = `
- name: "drop_tekst"
  field:
    element: "text"
    label: "${prose_helena_navbar_01.drop_tekst_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_navbar_01_merk_link() {
  let terug = `
- name: "merk_link"
  field:
    element: "text"
    label: "${prose_helena_navbar_01.merk_link_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_navbar_01_merk_tekst() {
  let terug = `
- name: "merk_tekst"
  field:
    element: "text"
    label: "${prose_helena_navbar_01.merk_tekst_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_navbar_01_nav_link() {
  let terug = `
- name: "nav_link"
  field:
    element: "text"
    label: "${prose_helena_navbar_01.nav_link_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_navbar_01_nav_tekst() {
  let terug = `
- name: "nav_tekst"
  field:
    element: "text"
    label: "${prose_helena_navbar_01.nav_tekst_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_card_01_kop_body() {
  let terug = `
  - name: "kop_body"
    field:
      element: "text"
      label: "${prose_helena_card_01.kop_body_label}"
      value: "${prose_helena_card_01.kop_body_value}"
      help: "${prose_helena_card_01.kop_body_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_helena_card_01_foto_sm_bestand() {
  let terug = `
  - name: "foto_sm_bestand"
    field:
      element: "text"
      label: "${prose_helena_card_01.foto_sm_bestand_label}"
      value: "${prose_helena_card_01.foto_sm_bestand_value}"
      help: "${prose_helena_card_01.foto_sm_bestand_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_helena_card_01_foto_sm_alt() {
  let terug = `
  - name: "foto_sm_alt"
    field:
      element: "text"
      label: "${prose_helena_card_01.foto_sm_alt_label}"
      value: "${prose_helena_card_01.foto_sm_alt_value}"
      help: "${prose_helena_card_01.foto_sm_alt_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_helena_card_01_foto_lg_bestand() {
  let terug = `
  - name: "foto_lg_bestand"
    field:
      element: "text"
      label: "${prose_helena_card_01.foto_lg_bestand_label}"
      value: "${prose_helena_card_01.foto_lg_bestand_value}"
      help: "${prose_helena_card_01.foto_lg_bestand_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_helena_card_01_foto_lg_alt() {
  let terug = `
  - name: "foto_lg_alt"
    field:
      element: "text"
      label: "${prose_helena_card_01.foto_lg_alt_label}"
      value: "${prose_helena_card_01.foto_lg_alt_value}"
      help: "${prose_helena_card_01.foto_lg_alt_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_helena_card_01_foto_lg_tekst() {
  let terug = `
  - name: "foto_lg_tekst"
    field:
      element: "text"
      label: "${prose_helena_card_01.foto_lg_tekst_label}"
      value: "${prose_helena_card_01.foto_lg_tekst_value}"
      help: "${prose_helena_card_01.foto_lg_tekst_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_helena_card_01_kop_header() {
  let terug = `
  - name: "kop_header"
    field:
      element: "text"
      label: "${prose_helena_card_01.kop_header_label}"
      value: "${prose_helena_card_01.kop_header_value}"
      help: "${prose_helena_card_01.kop_header_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_helena_card_01_kop_footer() {
  let terug = `
  - name: "kop_footer"
  field:
  label: "${prose_helena_card_01.kop_footer_label}"
  value: "${prose_helena_card_01.kop_footer_value}"
  help: "${prose_helena_card_01.kop_footer_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ========================================================================== */
function prose_helena_bedrijf_01_meta_description() {
  let terug = `
- name: "meta_description_01"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.meta_description_01_label}"
    help: "${prose_helena_bedrijf_01.meta_description_01_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_meta_keywords() {
  let terug = `
- name: "meta_keywords_01"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.meta_keywords_01_label}"
    help: "${prose_helena_bedrijf_01.meta_keywords_01_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_tawk_sleutel() {
  let terug = `
- name: "tawk_sleutel"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.tawk_sleutel_label}"
    help: "${prose_helena_bedrijf_01.tawk_sleutel_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_twitter_naam() {
  let terug = `
- name: "twitter_naam"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.twitter_naam_label}"
    help: "${prose_helena_bedrijf_01.twitter_naam_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_helena_bedrijf_01_wordpress_naam() {
  let terug = `
- name: "wordpress_naam"
  field:
    element: "text"
    label: "${prose_helena_bedrijf_01.wordpress_naam_label}"
    help: "${prose_helena_bedrijf_01.wordpress_naam_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ====================< ATHENA >============================================ */
/* ========================================================================== */
/* ========================================================================== */
function prose_athena_jumbotron_01_knop_link() {
  let terug = `
- name: "knop_link"
  field:
    element: "text"
    label: "${prose_athena_jumbotron_01.knop_link_label}"
    value: "${prose_athena_jumbotron_01.knop_link_value}"
    help: "${prose_athena_jumbotron_01.knop_link_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_athena_jumbotron_01_knop_tekst() {
  let terug = `
- name: "knop_tekst"
  field:
    element: "text"
    label: "${prose_athena_jumbotron_01.knop_tekst_label}"
    value: "${prose_athena_jumbotron_01.knop_tekst_value}"
    help: "${prose_athena_jumbotron_01.knop_tekst_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_athena_jumbotron_01_kop() {
  let terug = `
- name: "knop"
  field:
    element: "text"
    label: "${prose_athena_jumbotron_01.kop_label}"
    value: "${prose_athena_jumbotron_01.kop_value}"
    help: "${prose_athena_jumbotron_01.kop_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ========================================================================== */
function prose_athena_block_01_kop() {
  let terug = `
    - name: "kop"
      field:
        element: "text"
        label: "${prose_athena_block_01.kop_label}"
        help: "${prose_athena_block_01.kop_help}"
        value: "${prose_athena_block_01.kop_value}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_athena_block_01_foto_md_bestand() {
  let terug = `
    - name: "foto_md_bestand"
      field:
        element: "text"
        label: "${prose_athena_block_01.foto_md_bestand_label}"
        value: "${prose_athena_block_01.foto_md_bestand_value}"
        help: "${prose_athena_block_01.foto_md_bestand_help}"
 `;
  return terug;
}
/* ========================================================================== */
function prose_athena_block_01_foto_md_alt() {
  let terug = `
    - name: "foto_md_alt"
      field:
        element: "text"
        label: "${prose_athena_block_01.foto_md_alt_label}"
        help: "${prose_athena_block_01.foto_md_alt_help}"
        value: "${prose_athena_block_01.foto_md_alt_value}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_athena_maps_01_latitude() {
  let terug = `
- name: "latitude"
  field:
    element: "numeric"
    label: "${prose_athena_maps_01.latitude_label}"
    help: "${prose_athena_maps_01.latitude_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_athena_maps_01_longitude() {
  let terug = `
- name: "longitude"
  field:
    element: "numeric"
    label:   "${prose_athena_maps_01.longitude_label}"
    help: "${prose_athena_maps_01.longitude_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_athena_maps_01_zoom() {
  let terug = `
- name: "zoom"
  field:
    element: "numeric"
    label: "${prose_athena_maps_01.zoom_label}"
    help: "${prose_athena_maps_01.zoom_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_athena_maps_01_tekst() {
  let terug = `
- name: "tekst"
  field:
    element: "text"
    label:   "${prose_athena_maps_01.tekst_label}"
    help: "${prose_athena_maps_01.tekst_help}"
  `;
  return terug;
}


/* ========================================================================== */
/* ====================< LAVINIA >=========================================== */
/* ========================================================================== */
function prose_lavinia_header_01_kop() {
  let terug = `
      - name: kop
        field:
          element: text
          label: "${prose_lavinia_header_01.kop_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_lavinia_section_01_kop() {
  let terug = `
      - name: kop
        field:
          element: text
          label: "${prose_lavinia_section_01.kop_label}"
  `;
  return terug;
}

/* ========================================================================== */
function prose_lavinia_carousel_10_foto_bestand() {

  let terug = `
      - name: "foto_bestand"
        field:
          element: "text"
          label: "${prose_lavinia_carousel_10.foto_bestand_label}"
          value: "${prose_lavinia_carousel_10.foto_bestand_value}"
          help: "${prose_lavinia_carousel_10.foto_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_lavinia_carousel_10_foto_alt() {

  let terug = `
      - name: "foto_alt"
        field:
          element: "text"
          label:       "${prose_lavinia_carousel_10.foto_alt_label}"
          value:       "${prose_lavinia_carousel_10.foto_alt_value}"
          help: "${prose_lavinia_carousel_10.foto_alt_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_lavinia_carousel_10_tekst_01() {

  let terug = `
      - name: "tekst_01"
        field:
          element: "text"
          label:       "${prose_lavinia_carousel_10.tekst_01_label}"
          value:       "${prose_lavinia_carousel_10.tekst_01_value}"
          help: "${prose_lavinia_carousel_10.tekst_01_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ========================================================================== */
function prose_lavinia_footer_01_footer_logo() {
  let terug = `
      - name: footer_logo
        field:
          element: text
          label: "${prose_lavinia_footer_01.footer_logo_label}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_lavinia_footer_01_links_lijst() {
  let terug = `
      - name: footer_logo
        field:
          element: text
          label: "${prose_lavinia_footer_01.links_lijst_label}"
          value: "${prose_lavinia_footer_01.links_lijst_value}"
          help: "${prose_lavinia_footer_01.links_lijst_help}"
  `;
  return terug;
}
/* ========================================================================== */
/*
*/
function prose_lavinia_test_01() {
  let terug = `

  `;
  alert(terug);
}
/* ========================================================================== */
/* ====================< SALINA >============================================ */
/* ========================================================================== */
function prose_salina_modal_01_foto_lg_bestand() {
  let terug = `
- name: "foto_lg_bestand"
  field:
    element: "text"
    label: "${prose_salina_modal_01.foto_lg_bestand_label}"
    value: "${prose_salina_modal_01.foto_lg_bestand_value}"
    help: "${prose_salina_modal_01.foto_lg_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_modal_01_foto_lg_tekst() {
  let terug = `
- name: "foto_tekst"
  field:
    element: "text"
    label: "${prose_salina_modal_01.foto_tekst_label}"
    help: "${prose_salina_modal_01.foto_tekst_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_modal_01_foto_portrait() {
  let terug = `
- name: "foto_portrait"
  field:
    element: checkbox
    label: "${prose_salina_modal_01.foto_portrait_label}"
    value: "${prose_salina_modal_01.foto_portrait_value}"
    help: "${prose_salina_modal_01.foto_portrait_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_modal_01_foto_sm_alt() {
  let terug = `
- name: "foto_sm_alt"
  field:
    element: "text"
    label: "${prose_salina_modal_01.foto_sm_alt_label}"
    value: "${prose_salina_modal_01.foto_sm_alt_value}"
    help: "${prose_salina_modal_01.foto_sm_alt_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_modal_01_foto_sm_bestand() {
  let terug = `
- name: "foto_sm_bestand"
  field:
    element: "text"
    label: "${prose_salina_modal_01.foto_sm_bestand_label}"
    value: "${prose_salina_modal_01.foto_sm_bestand_value}"
    help: "${prose_salina_modal_01.foto_sm_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ========================================================================== */
/* ========================================================================== */
function prose_salina_gallery_01_etiket() {
  let terug = `
- name: "etiket"
  field:
    element: "text"
    label: "${prose_salina_gallery_01.etiket_label}"
    help: "${prose_salina_gallery_01.etiket_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_gallery_01_foto_lg_alt() {
  let terug = `
- name: "foto_lg_alt"
  field:
    element: "text"
    label: "${prose_salina_gallery_01.foto_lg_alt_label}"
    help: "${prose_salina_gallery_01.foto_lg_alt_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_gallery_01_foto_lg_bestand() {
  let terug = `
- name: "foto_lg_bestand"
  field:
    element: "text"
    label: "${prose_salina_gallery_01.foto_lg_bestand_label}"
    help: "${prose_salina_gallery_01.foto_lg_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_gallery_01_foto_sm_alt() {
  let terug = `
- name: "foto_sm_alt"
  field:
    element: "text"
    label: "${prose_salina_gallery_01.foto_sm_alt_label}"
    help: "${prose_salina_gallery_01.foto_sm_alt_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_gallery_01_foto_sm_bestand() {
  let terug = `
- name: "foto_sm_bestand"
  field:
    element: "text"
    label: "${prose_salina_gallery_01.foto_sm_bestand_label}"
    help: "${prose_salina_gallery_01.foto_sm_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_salina_gallery_01_layout() {
  let terug = `
- name: "layout"
  field:
    element: "text"
    label: "${prose_salina_gallery_01.layout_label}"
    help: "${prose_salina_gallery_01.layout_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ====================< JULIE >============================================= */
/* ========================================================================== */

/* ========================================================================== */
/* ========================================================================== */
