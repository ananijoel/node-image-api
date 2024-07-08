const express = require('express'); // Récupération du paquet express

const app = express(); // Création d'une instance de l'application express, le petit serveur web sur lequel l'API REST va fonctionner
const port = 3000; // Définition du port sur lequel on va démarrer l'API REST

app.get('/', (req, res) => res.send('hello node-image-api')); // Point de terminaison

app.listen(port, () => console.log(`Notre première application Node est démarrée sur : http://localhost:${port}`)); // Démarrage de l'API REST sur le port 3000 et affichage d'un message de confirmation dans le terminal grâce à listen
