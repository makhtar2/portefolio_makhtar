#!/bin/bash

echo "--- Optimisation du Wi-Fi Broadcom pour Mac/Ubuntu ---"

# 1. Désactiver la gestion de l'énergie (Power Management)
echo "Désactivation du Power Management..."
sudo mkdir -p /etc/NetworkManager/conf.d/
echo -e "[connection]\nwifi.powersave = 2" | sudo tee /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf

# 2. Blacklist des drivers conflictuels
echo "Blacklist des drivers conflictuels (b43, bcma, ssb)..."
sudo tee /etc/modprobe.d/blacklist-broadcom-mac.conf << BLCK
blacklist b43
blacklist bcma
blacklist ssb
blacklist brcmsmac
BLCK

# 3. Configuration spécifique pour le driver 'wl' (optionnel mais recommandé)
echo "Optimisation des paramètres du driver..."
sudo tee /etc/modprobe.d/wl.conf << WL
options wl one_tuple_per_addr=1
WL

# 4. Redémarrage des services
echo "Application des changements..."
sudo systemctl daemon-reload
sudo systemctl restart NetworkManager

echo "--- Terminé ! Redémarre ton Mac pour un effet complet ---"
