/* ==========================================================================
 *
 * Naam: prose_defa_biblio.js
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
    - name: "tags"
      field:
        element: "hidden"
        value: "${tag_name}"
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
        help: "Haal de vink dit vakje weg wanneer deze post nog niet meedoet."
        value: true
        on: "true"
        off: "false"
  `;

  return terug;
}
/* ========================================================================== */
/**
 * @description Voor een container-brede carousel, bijv. carousel_athena_51
  */
function prose_carousel_athena_51_foto_bestand() {
  let terug = `
    - name: "foto_bestand"
      field:
        element: "text"
        label: "${prose_defa_01.foto_bestand_label}"
        value: "${prose_defa_01.foto_bestand_value}"
        help:  "${prose_defa_01.foto_lg_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
/**
 * @description Kan ook gebruikt worden voor de prose_snip_carousel_athena_51G_items_61.
 */
function prose_carousel_athena_51_foto_alt() {
  let terug = `
    - name: "foto_alt"
      field:
        element: "text"
        label: "${prose_defa_01.foto_alt_label}"
        value: "${prose_defa_01.foto_alt_value}"
        help: "${prose_defa_01.foto_alt_help}"
  `;
  return terug;
}
/* ========================================================================== */
/**
 * @description Kan ook gebruikt worden voor de prose_snip_carousel_athena_51G_items_61.
 */
function prose_carousel_athena_51_foto_tekst() {
  let terug = `
    - name: "foto_tekst"
      field:
        element: "text"
        label: "${prose_defa_01.foto_tekst_label}"
        help:  "${prose_defa_01.foto_tekst_help}"
        value: "${prose_defa_01.foto_tekst_value}"
  `;
  return terug;
}
/* ========================================================================== */
/* ====================< HELENA >============================================ */
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
function prose_card_helena_01_kop_body() {
  let terug = `
  - name: "kop_body"
    field:
      element: "text"
      label: "${prose_card_helena_01.kop_body_label}"
      value: "${prose_card_helena_01.kop_body_value}"
      help: "${prose_card_helena_01.kop_body_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_card_helena_01_foto_sm_bestand() {
  let terug = `
  - name: "foto_sm_bestand"
    field:
      element: "text"
      label: "${prose_card_helena_01.foto_sm_bestand_label}"
      value: "${prose_card_helena_01.foto_sm_bestand_value}"
      help: "${prose_card_helena_01.foto_sm_bestand_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_card_helena_01_foto_sm_alt() {
  let terug = `
  - name: "foto_sm_alt"
    field:
      element: "text"
      label: "${prose_card_helena_01.foto_sm_alt_label}"
      value: "${prose_card_helena_01.foto_sm_alt_value}"
      help: "${prose_card_helena_01.foto_sm_alt_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_card_helena_01_foto_lg_bestand() {
  let terug = `
  - name: "foto_lg_bestand"
    field:
      element: "text"
      label: "${prose_card_helena_01.foto_lg_bestand_label}"
      value: "${prose_card_helena_01.foto_lg_bestand_value}"
      help: "${prose_card_helena_01.foto_lg_bestand_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_card_helena_01_foto_lg_alt() {
  let terug = `
  - name: "foto_lg_alt"
    field:
      element: "text"
      label: "${prose_card_helena_01.foto_lg_alt_label}"
      value: "${prose_card_helena_01.foto_lg_alt_value}"
      help: "${prose_card_helena_01.foto_lg_alt_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_card_helena_01_foto_lg_tekst() {
  let terug = `
  - name: "foto_lg_tekst"
    field:
      element: "text"
      label: "${prose_card_helena_01.foto_lg_tekst_label}"
      value: "${prose_card_helena_01.foto_lg_tekst_value}"
      help: "${prose_card_helena_01.foto_lg_tekst_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_card_helena_01_kop_header() {
  let terug = `
  - name: "kop_header"
    field:
      element: "text"
      label: "${prose_card_helena_01.kop_header_label}"
      value: "${prose_card_helena_01.kop_header_value}"
      help: "${prose_card_helena_01.kop_header_help}"
    `;
    return terug;
  }
/* ========================================================================== */
function prose_card_helena_01_kop_footer() {
  let terug = `
  - name: "kop_footer"
  field:
  label: "${prose_card_helena_01.kop_footer_label}"
  value: "${prose_card_helena_01.kop_footer_value}"
  help: "${prose_card_helena_01.kop_footer_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ====================< ATHENA >============================================ */
/* ========================================================================== */
function prose_block_athena_01_kop() {
  let terug = `
    - name: "kop"
      field:
        element: "text"
        label: "${prose_defa_01.kop_label}"
        value: "${prose_defa_01.kop_value}"
        help:  "${prose_defa_01.kop_help}"        
  `;
  return terug;
}
/* ========================================================================== */
function prose_block_athena_01_foto_bestand() {
  let terug = `
    - name: "foto_bestand"
      field:
        element: "text"
        label: "${prose_defa_01.foto_bestand_label}"
        value: "${prose_defa_01.foto_bestand_value}"
        help: "${prose_defa_01.foto_md_bestand_help}"
 `;
  return terug;
}
/* ========================================================================== */
function prose_block_athena_01_foto_alt() {
  let terug = `
    - name: "foto_alt"
      field:
        element: "text"
        label: "${prose_defa_01.foto_alt_label}"
        value: "${prose_defa_01.foto_alt_value}"
        help: "${prose_defa_01.foto_alt_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_block_athena_01_tekst() {
  let terug = `
    - name: "tekst"
      field:
        element: "text"
        label: "${prose_block_athena_01.tekst_label}"
        help: "${prose_block_athena_01.tekst_help}"
        value: "${prose_block_athena_01.tekst_value}"
  `;
  return terug;
}
/* ========================================================================== */
/* ====================< LAVINIA >=========================================== */
/* ========================================================================== */
function prose_block_lavinia_openingstijd_01() {
  let terug = `  
    - name: "vakantie_tijd"
      field:
        element: "checkbox"
        label: "Vakantie Openingstijden?"
        help: "Vink dit vakje aan wanneer de openingstijden van de vakantie gelden"
        value: false
        on: "true"
        off: "false"
  `;
  return terug;
  }    
/* ========================================================================== */
/* ====================< SALINA >============================================ */
/* ========================================================================== */
function prose_modal_salina_01_foto_lg_bestand() {
  let terug = `
- name: "foto_lg_bestand"
  field:
    element: "text"
    label: "${prose_modal_salina_01.foto_lg_bestand_label}"
    value: "${prose_modal_salina_01.foto_lg_bestand_value}"
    help: "${prose_modal_salina_01.foto_lg_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_modal_salina_01_foto_lg_tekst() {
  let terug = `
- name: "foto_tekst"
  field:
    element: "text"
    label: "${prose_modal_salina_01.foto_tekst_label}"
    help: "${prose_modal_salina_01.foto_tekst_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_modal_salina_01_foto_portrait() {
  let terug = `
- name: "foto_portrait"
  field:
    element: checkbox
    label: "${prose_modal_salina_01.foto_portrait_label}"
    value: "${prose_modal_salina_01.foto_portrait_value}"
    help: "${prose_modal_salina_01.foto_portrait_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_modal_salina_01_foto_sm_alt() {
  let terug = `
- name: "foto_sm_alt"
  field:
    element: "text"
    label: "${prose_modal_salina_01.foto_sm_alt_label}"
    value: "${prose_modal_salina_01.foto_sm_alt_value}"
    help: "${prose_modal_salina_01.foto_sm_alt_help}"
  `;
  return terug;
}
/* ========================================================================== */
function prose_modal_salina_01_foto_sm_bestand() {
  let terug = `
- name: "foto_sm_bestand"
  field:
    element: "text"
    label: "${prose_modal_salina_01.foto_sm_bestand_label}"
    value: "${prose_modal_salina_01.foto_sm_bestand_value}"
    help: "${prose_modal_salina_01.foto_sm_bestand_help}"
  `;
  return terug;
}
/* ========================================================================== */
/* ====================< JULIE >============================================= */
/* ========================================================================== */

/* ========================================================================== */
/* ========================================================================== */
