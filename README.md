# Système de Gestion de Tâches avec GraphQL

## 📌 Objectif
Ce projet a pour but de démontrer comment configurer et utiliser **GraphQL** avec **Node.js** et **Express** pour créer une API de gestion de tâches. Il met en œuvre des requêtes et des mutations pour ajouter, modifier et supprimer des tâches.

## 🛠 Technologies Utilisées
- **Node.js**
- **Express**
- **GraphQL**
- **Apollo Server**
- **GraphQL Tools**

## 📂 Structure du Projet
```
 tp-graphql/
 |-- node_modules/
 |-- taskSchema.gql    # Schéma GraphQL
 |-- taskSchema.js     # Chargement du schéma
 |-- taskResolver.js   # Résolveurs GraphQL
 |-- index.js         # Configuration du serveur Express et Apollo
 |-- package.json     # Dépendances du projet
 |-- README.md        # Documentation du projet
```

## 🚀 Installation et Exécution
1. **Cloner le projet** :
   ```bash
   git clone https://github.com/votre-repo/tp-graphql.git
   cd tp-graphql
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrer le serveur** :
   ```bash
   node index.js
   ```

4. **Accéder à l'interface GraphQL** :
   Ouvrez votre navigateur et accédez à :
   ```
   http://localhost:5000/graphql
   ```
