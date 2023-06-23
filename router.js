// router.js
const express = require('express');
const router = express.Router();
const Perceptron = require('./perceptron');

const weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const bias = -5;
const perceptron = new Perceptron(weights, bias);

const animalData = {
  CUERVO: {
    TAMAÑO: 'GRANDE',
    COLOR: 'NEGRO',
    PICO: 'GRANDE',
    HABITAT: 'BOSQUES BOREALES Y MONTAÑOSOS, ACANTILADOS COSTEROS, TUNDRA Y DESIERTO'
  },
  CANARIO: {
    TAMAÑO: 'PEQUEÑO',
    COLOR: 'AMARILLO',
    PICO: 'PEQUEÑO',
    HABITAT: 'ISLAS CANARIAS'
  },
  RATÓN: {
    TAMAÑO: 'PEQUEÑO',
    COLA: 'LARGA Y DELGADA',
    PELAJE: 'SUAVE',
    OREJAS: 'RELATIVAS A SU CUERPO'
  },
  ARDILLA: {
    TAMAÑO: 'MEDIANO',
    COLA: 'PELUDA Y ESPESA',
    PELAJE: 'DENSO',
    OREJAS: 'GRANDES'
  },
  BALLENA: {
    TAMAÑO: 'GRANDE',
    'DIENTES AFILADOS': 'NO',
    'PIEL DENTOSA': 'NO',
    'CUERPO HIDRODINAMICO': 'SI'
  },
  TIBURÓN: {
    TAMAÑO: 'PEQUEÑO',
    'DIENTES AFILADOS': 'SI',
    'PIEL DENTOSA': 'SI',
    'CUERPO HIDRODINAMICO': 'SI'
  },
  GECKO: {
    PIEL: 'PEGAJOSA',
    'OJOS EN FORMA DE CONO': 'NO',
    'CAMBIA DE COLOR': 'NO',
    'COLA PRENSIL': 'NO'
  },
  CAMALEÓN: {
    PIEL: 'NO PEGAJOSA',
    'OJOS EN FORMA DE CONO': 'SI',
    'CAMBIA DE COLOR': 'SI',
    'COLA PRENSIL': 'SI'
  }
};

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/classify', (req, res) => {
  const characteristics = req.body.characteristics.toUpperCase();

  let animal = 'Desconocido';
  let maxMatches = 0;

  for (const [animalName, animalCharacteristics] of Object.entries(animalData)) {
    let matches = 0;

    for (const [key, value] of Object.entries(animalCharacteristics)) {
      if (characteristics.includes(value)) {
        matches++;
      }
    }

    if (matches > maxMatches) {
      maxMatches = matches;
      animal = animalName;
    }
  }

  // Obtener la ruta de la imagen correspondiente al animal identificado
  const imagePath = `images/${animal.toLowerCase()}.png`;

  res.render('result', { animal, imagePath });
});

module.exports = router;
