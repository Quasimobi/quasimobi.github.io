#!/bin/sh
server_naar="../css" 

echo = START WISSEN FILES DEVELOPMENT  =========================================
rm -f ../css/glint_boot.css
rm -f ../css/glint_blok.css
rm -f ../css/glint_detail.css
rm -f ../css/glint_boot.css.map
rm -f ../css/glint_blok.css.map
rm -f ../css/glint_detail.css.map
echo = EINDE WISSEN FILES DEVELOPMENT  =========================================

echo = START COMPRESS PRODUCTION ===============================================
sass --sourcemap=none --style compressed b52.glint_deploy.scss:$server_naar/glint_deploy.css
echo = EINDE COMPRESS PRODUCTION ===============================================
