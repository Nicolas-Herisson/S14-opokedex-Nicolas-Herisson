# Pokedex

Création d'un site de Pokédex

# Technos

- HTML/CSS/JS
- Vite
- Sequelize
- PostgreSQL
- Express
- Cors
- Dotenv
- Body-parser

# Objectifs

- Utilisation des templates HTML
- Tout gérer directement via la manipulation du DOM
- Développement d'un backend API REST
- Utilisation des models/associations/migration de sequelize
- Utilisation de VITE
  

# Setup

Dans le dossier "back":

## Installer toutes les dépendances


```bash
pnpm i 
```

ou

```bash
npm i
```

## Définir les variables d'environnement

- Copier le .envExample, le renommer en .env et remplacer les valeurs par celles correspondantes.

## Setup la BDD

- Créer la BDD postgreSQL
- Utiliser la commande 

```bash
pnpm db:reset
```

ou

```bash
npm run db:reset
```

## Démarrer le backend

```bash
pnpm dev
```

ou

```bash
npm run dev
```

## Démarrer le frontend

- Dans le dossier "pokedex":

```bash
pnpm dev
```

ou

```bash
npm run dev
```
