#!/bin/sh
# Alle SCSS-en samen als 1 groot blok.
echo = START BLOK GLINT ========================================================
server_naar="../css" 

sass b52.glint_blok.scss:$server_naar/glint_blok.css
echo = EINDE BLOK ==============================================================


