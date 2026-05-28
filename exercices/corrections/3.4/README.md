# Correction exercice 3.4 : serveur web avec du *HTML*

## Warning

La solution présenté ici avec [server.mjs](./src/js/server.mjs) a été volontairement complexifiée à titre pédagogique pour montrer l'utilisation de *promify* et *pipeline* qui permet de synchronisé au moins 2 flux, un de lecture (lecture fichier *HTML*) et un d'écriture (réponse du serveur). Le code peut être amélioré avec une factorisation pour éliminer les répétitions.
L'autre approche du [bonus](./src/js/bonus.mjs) est plus simple et optimale par rapport aux volumes des données échangées ici (très petit fichier html de l'ordre de quelque ko) convient parfaitement ici.

## Lancement de la correction

```js
# sans le bonus
npm run dev
# avec le bonus
npm run bonus
# sans et avec le bonus
npm run dev:all
```

## Commandes à effectuer pour répondre aux questions de l'exercice

1. Initialisation
```js
npm init -y
```

2. ESLINT
```js
npm init @eslint/config@latest
```

3. Mise en place d'un certificat SSL autosigné depuis un terminal
  - Option 1 avec OpenSSL
  ```bash
  mkdir config
  openssl genrsa -out config/private.pem 2048
  # Répondez aux questions de la commande suivante ou laissez tout par défaut, ici pour les besoins d'exercice et en dev, la véracité des infos nous importe peu, par contre en production, il faudra récupérer le vrai certificat associé au nom de domaine du site en production
  openssl req -new -key config/private.pem -out config/certificate.csr
  openssl x509 -req -days 30 -in config/certificate.csr -signkey config/private.pem -out config/certificate.crt
  ```
- Ou option 2 avec le site ***devglan.com***
  1. Créez un dossier config à la racine du projet
  2. Utilisez ce site pour générer les certificats [https://www.devglan.com/online-tools/generate-self-signed-cert](https://www.devglan.com/online-tools/generate-self-signed-cert)
    - Saisissez ***localhost*** dans le nom de domaine
    - Pour le reste vous pouvez laisser les infos par défaut
  3. Créez un fichier private.pem dans le dossier ***config/*** */, copiez le contenu ***"private key"*** généré par le site dans ce fichier.
  4. Créez un fichier certificate.crt toujours dans le dossier ***config/***, copiez le contenu ***"x.509 cert"***