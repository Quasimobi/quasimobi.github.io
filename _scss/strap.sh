#!/bin/sh
server_naar="../css"
echo =START BOOTSTRAP 3 ========================================================

#Bootstrap CSS speciaal voor het project.
sass  --sourcemap=none b52.glint_strap.scss:$server_naar/glint_strap.css
echo =EINDE=====================================================================
