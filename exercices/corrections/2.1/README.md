# Correction exercice 2.1 : *NPM*

## Installation des packages présents dans le package.json

```bash
npm install && npm update
```

## Correction des commandes à taper

1. Initialisation d'un nouveau projet

```bash
npm init -y
```

2. Mise en place d'ESLINT

```bash
npm init @eslint/config@latest
```

- How would you like to use ESLINT ? réponse ***"To check syntax and find problems"***
- What type of modules does your project use ? ***"JavaScript modules (import/export)"***
- Which framework does your project use ? ***"None of these"***
- Does your project use TypeScript ? ***"No"***
- Where does your project run ? ***"Node"***
- Would you like to install them now ? ***"yes"***
- Which package manager do you want to use ? ***"npm"***
3. Installation du module concurrently pour tous les environnements

```bash
npm i concurrently
```

4. Installations des modules vitest Cypress et Typescript uniquement en environnement de développement

```bash
npm i -D vitest cypress typescript
```

---

## Bonus

```bash
# Installation de yarn de façon globale
npm i -g yarn
# Initialisation d'un nouveau projet
yarn init
# Installation des dépendances 
yarn init @eslint/config@latest
yarn add concurrently
yarn add --dev vitest cypress typescript
```