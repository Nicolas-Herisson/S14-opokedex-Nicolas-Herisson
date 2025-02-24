import Pokemon from "../models/pokemonModel.js";

await Pokemon.create({
    number: 1,
    description: "Bulbizarre est un Pokémon de type Plante et Poison. Il est le premier Pokémon du Pokédex de Kanto.",
    image: "./docs/integration/assets/img/1.webp",
    name: "Bulbizarre",
    evolution: "Herbizarre -> Florizarre",
    size: "0.7",
    weight: "6.9",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 2,
    description: "Herbizarre est l'évolution de Bulbizarre. Il est de type Plante et Poison.",
    image: "./docs/integration/assets/img/2.webp",
    name: "Herbizarre",
    evolution: "Bulbizarre -> Florizarre",
    size: "1.0",
    weight: "13.0",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 3,
    description: "Florizarre est l'évolution finale de Bulbizarre. Il est de type Plante et Poison.",
    image: "./docs/integration/assets/img/3.webp",
    name: "Florizarre",
    evolution: "Herbizarre -> Florizarre",
    size: "2.0",
    weight: "100.0",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 4,
    description: "Salamèche est un Pokémon de type Feu. Il est l'un des Pokémon de départ de Kanto.",
    image: "./docs/integration/assets/img/4.webp",
    name: "Salamèche",
    evolution: "Reptincel -> Dracaufeu",
    size: "0.6",
    weight: "8.5",
    type_id: [3],
});

await Pokemon.create({
    number: 5,
    description: "Reptincel est l'évolution de Salamèche. Il est de type Feu.",
    image: "./docs/integration/assets/img/5.webp",
    name: "Reptincel",
    evolution: "Salamèche -> Dracaufeu",
    size: "1.1",
    weight: "19.0",
    type_id: [3],
});

await Pokemon.create({
    number: 6,
    description: "Dracaufeu est l'évolution finale de Salamèche. Il est de type Feu et Vol.",
    image: "./docs/integration/assets/img/6.webp",
    name: "Dracaufeu",
    evolution: "Reptincel -> Dracaufeu",
    size: "1.7",
    weight: "90.5",
    type_id: [3, 4],
});

await Pokemon.create({
    number: 7,
    description: "Carapuce est un Pokémon de type Eau. Il est l'un des Pokémon de départ de Kanto.",
    image: "./docs/integration/assets/img/7.webp",
    name: "Carapuce",
    evolution: "Carabaffe -> Tortank",
    size: "0.5",
    weight: "9.0",
    type_id: [5],
});

await Pokemon.create({
    number: 8,
    description: "Carabaffe est l'évolution de Carapuce. Il est de type Eau.",
    image: "./docs/integration/assets/img/8.webp",
    name: "Carabaffe",
    evolution: "Carapuce -> Tortank",
    size: "1.0",
    weight: "22.5",
    type_id: [5],
});

await Pokemon.create({
    number: 9,
    description: "Tortank est l'évolution finale de Carapuce. Il est de type Eau.",
    image: "./docs/integration/assets/img/9.webp",
    name: "Tortank",
    evolution: "Carabaffe -> Tortank",
    size: "1.6",
    weight: "85.5",
    type_id: [5],
});

await Pokemon.create({
    number: 10,
    description: "Chenipan est un Pokémon de type Insecte.",
    image: "./docs/integration/assets/img/10.webp",
    name: "Chenipan",
    evolution: "Chrysacier -> Papilusion",
    size: "0.3",
    weight: "2.9",
    type_id: [6],
});

await Pokemon.create({
    number: 11,
    description: "Chrysacier est l'évolution de Chenipan. Il est de type Insecte.",
    image: "./docs/integration/assets/img/11.webp",
    name: "Chrysacier",
    evolution: "Chenipan -> Papilusion",
    size: "0.7",
    weight: "9.9",
    type_id: [6],
});

await Pokemon.create({
    number: 12,
    description: "Papilusion est l'évolution finale de Chenipan. Il est de type Insecte et Vol.",
    image: "./docs/integration/assets/img/12.webp",
    name: "Papilusion",
    evolution: "Chrysacier -> Papilusion",
    size: "1.1",
    weight: "32.0",
    type_id: [6, 4],
});

await Pokemon.create({
    number: 13,
    description: "Aspicot est un Pokémon de type Insecte et Poison.",
    image: "./docs/integration/assets/img/13.webp",
    name: "Aspicot",
    evolution: "Coconfort -> Dardargnan",
    size: "0.3",
    weight: "3.2",
    type_id: [6, 2],
});

await Pokemon.create({
    number: 14,
    description: "Coconfort est l'évolution de Aspicot. Il est de type Insecte et Poison.",
    image: "./docs/integration/assets/img/14.webp",
    name: "Coconfort",
    evolution: "Aspicot -> Dardargnan",
    size: "0.6",
    weight: "10.0",
    type_id: [6, 2],
});

await Pokemon.create({
    number: 15,
    description: "Dardargnan est l'évolution finale de Aspicot. Il est de type Insecte et Poison.",
    image: "./docs/integration/assets/img/15.webp",
    name: "Dardargnan",
    evolution: "Coconfort -> Dardargnan",
    size: "1.0",
    weight: "29.5",
    type_id: [6, 2],
});

await Pokemon.create({
    number: 16,
    description: "Roucool est un Pokémon de type Normal et Vol.",
    image: "./docs/integration/assets/img/16.webp",
    name: "Roucool",
    evolution: "Roucoups -> Roucarnage",
    size: "0.3",
    weight: "1.8",
    type_id: [1, 4],
});

await Pokemon.create({
    number: 17,
    description: "Roucoups est l'évolution de Roucool. Il est de type Normal et Vol.",
    image: "./docs/integration/assets/img/17.webp",
    name: "Roucoups",
    evolution: "Roucool -> Roucarnage",
    size: "1.1",
    weight: "30.0",
    type_id: [1, 4],
});

await Pokemon.create({
    number: 18,
    description: "Roucarnage est l'évolution finale de Roucool. Il est de type Normal et Vol.",
    image: "./docs/integration/assets/img/18.webp",
    name: "Roucarnage",
    evolution: "Roucoups -> Roucarnage",
    size: "1.5",
    weight: "39.5",
    type_id: [1, 4],
});

await Pokemon.create({
    number: 19,
    description: "Rattata est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/19.webp",
    name: "Rattata",
    evolution: "Rattatac",
    size: "0.3",
    weight: "3.5",
    type_id: [1],
});

await Pokemon.create({
    number: 20,
    description: "Rattatac est l'évolution de Rattata. Il est de type Normal.",
    image: "./docs/integration/assets/img/20.webp",
    name: "Rattatac",
    evolution: "Rattata -> Rattatac",
    size: "0.7",
    weight: "18.5",
    type_id: [1],
});

await Pokemon.create({
    number: 21,
    description: "Piafabec est un Pokémon de type Normal et Vol.",
    image: "./docs/integration/assets/img/21.webp",
    name: "Piafabec",
    evolution: "Rapasdepic",
    size: "0.3",
    weight: "2.0",
    type_id: [1, 4],
});

await Pokemon.create({
    number: 22,
    description: "Rapasdepic est l'évolution de Piafabec. Il est de type Normal et Vol.",
    image: "./docs/integration/assets/img/22.webp",
    name: "Rapasdepic",
    evolution: "Piafabec -> Rapasdepic",
    size: "1.2",
    weight: "38.0",
    type_id: [1, 4],
});

await Pokemon.create({
    number: 23,
    description: "Abo est un Pokémon de type Poison.",
    image: "./docs/integration/assets/img/23.webp",
    name: "Abo",
    evolution: "Arbok",
    size: "2.0",
    weight: "6.9",
    type_id: [2],
});

await Pokemon.create({
    number: 24,
    description: "Arbok est l'évolution de Abo. Il est de type Poison.",
    image: "./docs/integration/assets/img/24.webp",
    name: "Arbok",
    evolution: "Abo -> Arbok",
    size: "3.5",
    weight: "65.0",
    type_id: [2],
});

await Pokemon.create({
    number: 25,
    description: "Pikachu est un Pokémon de type Électrik.",
    image: "./docs/integration/assets/img/25.webp",
    name: "Pikachu",
    evolution: "Raichu",
    size: "0.4",
    weight: "6.0",
    type_id: [7],
});

await Pokemon.create({
    number: 26,
    description: "Raichu est l'évolution de Pikachu. Il est de type Électrik.",
    image: "./docs/integration/assets/img/26.webp",
    name: "Raichu",
    evolution: "Pikachu -> Raichu",
    size: "0.8",
    weight: "30.0",
    type_id: [7],
});

await Pokemon.create({
    number: 27,
    description: "Sabelette est un Pokémon de type Sol.",
    image: "./docs/integration/assets/img/27.webp",
    name: "Sabelette",
    evolution: "Sablaireau",
    size: "0.6",
    weight: "12.0",
    type_id: [8],
});

await Pokemon.create({
    number: 28,
    description: "Sablaireau est l'évolution de Sabelette. Il est de type Sol.",
    image: "./docs/integration/assets/img/28.webp",
    name: "Sablaireau",
    evolution: "Sabelette -> Sablaireau",
    size: "1.0",
    weight: "29.5",
    type_id: [8],
});

await Pokemon.create({
    number: 29,
    description: "Nidoran♀ est un Pokémon de type Poison.",
    image: "./docs/integration/assets/img/29.webp",
    name: "Nidoran♀",
    evolution: "Nidorina -> Nidoqueen",
    size: "0.4",
    weight: "7.0",
    type_id: [2],
});

await Pokemon.create({
    number: 30,
    description: "Nidorina est l'évolution de Nidoran♀. Il est de type Poison.",
    image: "./docs/integration/assets/img/30.webp",
    name: "Nidorina",
    evolution: "Nidoran♀ -> Nidoqueen",
    size: "0.8",
    weight: "20.0",
    type_id: [2],
});

await Pokemon.create({
    number: 31,
    description: "Nidoqueen est l'évolution finale de Nidoran♀. Il est de type Poison et Sol.",
    image: "./docs/integration/assets/img/31.webp",
    name: "Nidoqueen",
    evolution: "Nidorina -> Nidoqueen",
    size: "1.3",
    weight: "60.0",
    type_id: [2, 8],
});

await Pokemon.create({
    number: 32,
    description: "Nidoran♂ est un Pokémon de type Poison.",
    image: "./docs/integration/assets/img/32.webp",
    name: "Nidoran♂",
    evolution: "Nidorino -> Nidoking",
    size: "0.5",
    weight: "9.0",
    type_id: [2],
});

await Pokemon.create({
    number: 33,
    description: "Nidorino est l'évolution de Nidoran♂. Il est de type Poison.",
    image: "./docs/integration/assets/img/33.webp",
    name: "Nidorino",
    evolution: "Nidoran♂ -> Nidoking",
    size: "0.9",
    weight: "19.5",
    type_id: [2],
});

await Pokemon.create({
    number: 34,
    description: "Nidoking est l'évolution finale de Nidoran♂. Il est de type Poison et Sol.",
    image: "./docs/integration/assets/img/34.webp",
    name: "Nidoking",
    evolution: "Nidorino -> Nidoking",
    size: "1.4",
    weight: "62.0",
    type_id: [2, 8],
});

await Pokemon.create({
    number: 35,
    description: "Mélofée est un Pokémon de type Fée.",
    image: "./docs/integration/assets/img/35.webp",
    name: "Mélofée",
    evolution: "Mélodelfe",
    size: "0.6",
    weight: "7.5",
    type_id: [14],
});

await Pokemon.create({
    number: 36,
    description: "Mélodelfe est l'évolution de Mélofée. Il est de type Fée.",
    image: "./docs/integration/assets/img/36.webp",
    name: "Mélodelfe",
    evolution: "Mélofée -> Mélodelfe",
    size: "1.3",
    weight: "40.0",
    type_id: [14],
});

await Pokemon.create({
    number: 37,
    description: "Goupix est un Pokémon de type Feu.",
    image: "./docs/integration/assets/img/37.webp",
    name: "Goupix",
    evolution: "Feunard",
    size: "0.6",
    weight: "9.9",
    type_id: [3],
});

await Pokemon.create({
    number: 38,
    description: "Feunard est l'évolution de Goupix. Il est de type Feu.",
    image: "./docs/integration/assets/img/38.webp",
    name: "Feunard",
    evolution: "Goupix -> Feunard",
    size: "1.1",
    weight: "19.9",
    type_id: [3],
});

await Pokemon.create({
    number: 39,
    description: "Rondoudou est un Pokémon de type Normal et Fée.",
    image: "./docs/integration/assets/img/39.webp",
    name: "Rondoudou",
    evolution: "Grodoudou",
    size: "0.5",
    weight: "5.5",
    type_id: [1, 14],
});

await Pokemon.create({
    number: 40,
    description: "Grodoudou est l'évolution de Rondoudou. Il est de type Normal et Fée.",
    image: "./docs/integration/assets/img/40.webp",
    name: "Grodoudou",
    evolution: "Rondoudou -> Grodoudou",
    size: "1.0",
    weight: "12.0",
    type_id: [1, 14],
});

await Pokemon.create({
    number: 41,
    description: "Nosferapti est un Pokémon de type Poison et Vol.",
    image: "./docs/integration/assets/img/41.webp",
    name: "Nosferapti",
    evolution: "Nosferalto",
    size: "0.8",
    weight: "7.5",
    type_id: [2, 4],
});

await Pokemon.create({
    number: 42,
    description: "Nosferalto est l'évolution de Nosferapti. Il est de type Poison et Vol.",
    image: "./docs/integration/assets/img/42.webp",
    name: "Nosferalto",
    evolution: "Nosferapti -> Nosferalto",
    size: "1.6",
    weight: "55.0",
    type_id: [2, 4],
});

await Pokemon.create({
    number: 43,
    description: "Mystherbe est un Pokémon de type Plante et Poison.",
    image: "./docs/integration/assets/img/43.webp",
    name: "Mystherbe",
    evolution: "Ortide -> Rafflesia",
    size: "0.5",
    weight: "5.4",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 44,
    description: "Ortide est l'évolution de Mystherbe. Il est de type Plante et Poison.",
    image: "./docs/integration/assets/img/44.webp",
    name: "Ortide",
    evolution: "Mystherbe -> Rafflesia",
    size: "0.8",
    weight: "8.6",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 45,
    description: "Rafflesia est l'évolution finale de Mystherbe. Il est de type Plante et Poison.",
    image: "./docs/integration/assets/img/45.webp",
    name: "Rafflesia",
    evolution: "Ortide -> Rafflesia",
    size: "1.2",
    weight: "18.6",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 46,
    description: "Paras est un Pokémon de type Insecte et Plante.",
    image: "./docs/integration/assets/img/46.webp",
    name: "Paras",
    evolution: "Parasect",
    size: "0.3",
    weight: "5.4",
    type_id: [6, 1],
});

await Pokemon.create({
    number: 47,
    description: "Parasect est l'évolution de Paras. Il est de type Insecte et Plante.",
    image: "./docs/integration/assets/img/47.webp",
    name: "Parasect",
    evolution: "Paras -> Parasect",
    size: "1.0",
    weight: "29.5",
    type_id: [6, 1],
});

await Pokemon.create({
    number: 48,
    description: "Mimitoss est un Pokémon de type Insecte et Poison.",
    image: "./docs/integration/assets/img/48.webp",
    name: "Mimitoss",
    evolution: "Aéromite",
    size: "1.0",
    weight: "30.0",
    type_id: [6, 2],
});

await Pokemon.create({
    number: 49,
    description: "Aéromite est l'évolution de Mimitoss. Il est de type Insecte et Poison.",
    image: "./docs/integration/assets/img/49.webp",
    name: "Aéromite",
    evolution: "Mimitoss -> Aéromite",
    size: "1.5",
    weight: "12.5",
    type_id: [6, 2],
});

await Pokemon.create({
    number: 50,
    description: "Taupiqueur est un Pokémon de type Sol.",
    image: "./docs/integration/assets/img/50.webp",
    name: "Taupiqueur",
    evolution: "Triopikeur",
    size: "0.2",
    weight: "0.8",
    type_id: [8],
});

await Pokemon.create({
    number: 51,
    description: "Triopikeur est l'évolution de Taupiqueur. Il est de type Sol.",
    image: "./docs/integration/assets/img/51.webp",
    name: "Triopikeur",
    evolution: "Taupiqueur -> Triopikeur",
    size: "0.7",
    weight: "33.3",
    type_id: [8],
});

await Pokemon.create({
    number: 52,
    description: "Miaouss est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/52.webp",
    name: "Miaouss",
    evolution: "Persian",
    size: "0.4",
    weight: "4.2",
    type_id: [1],
});

await Pokemon.create({
    number: 53,
    description: "Persian est l'évolution de Miaouss. Il est de type Normal.",
    image: "./docs/integration/assets/img/53.webp",
    name: "Persian",
    evolution: "Miaouss -> Persian",
    size: "1.0",
    weight: "32.0",
    type_id: [1],
});

await Pokemon.create({
    number: 54,
    description: "Psykokwak est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/54.webp",
    name: "Psykokwak",
    evolution: "Akwakwak",
    size: "0.8",
    weight: "19.6",
    type_id: [5],
});

await Pokemon.create({
    number: 55,
    description: "Akwakwak est l'évolution de Psykokwak. Il est de type Eau.",
    image: "./docs/integration/assets/img/55.webp",
    name: "Akwakwak",
    evolution: "Psykokwak -> Akwakwak",
    size: "1.7",
    weight: "76.6",
    type_id: [5],
});

await Pokemon.create({
    number: 56,
    description: "Férosinge est un Pokémon de type Combat.",
    image: "./docs/integration/assets/img/56.webp",
    name: "Férosinge",
    evolution: "Colossinge",
    size: "0.5",
    weight: "28.0",
    type_id: [9],
});

await Pokemon.create({
    number: 57,
    description: "Colossinge est l'évolution de Férosinge. Il est de type Combat.",
    image: "./docs/integration/assets/img/57.webp",
    name: "Colossinge",
    evolution: "Férosinge -> Colossinge",
    size: "1.0",
    weight: "32.0",
    type_id: [9],
});

await Pokemon.create({
    number: 58,
    description: "Caninos est un Pokémon de type Feu.",
    image: "./docs/integration/assets/img/58.webp",
    name: "Caninos",
    evolution: "Arcanin",
    size: "0.7",
    weight: "19.0",
    type_id: [3],
});

await Pokemon.create({
    number: 59,
    description: "Arcanin est l'évolution de Caninos. Il est de type Feu.",
    image: "./docs/integration/assets/img/59.webp",
    name: "Arcanin",
    evolution: "Caninos -> Arcanin",
    size: "1.9",
    weight: "155.0",
    type_id: [3],
});

await Pokemon.create({
    number: 60,
    description: "Ptitard est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/60.webp",
    name: "Ptitard",
    evolution: "Têtarte -> Tartard",
    size: "0.6",
    weight: "12.4",
    type_id: [5],
});

await Pokemon.create({
    number: 61,
    description: "Têtarte est l'évolution de Ptitard. Il est de type Eau.",
    image: "./docs/integration/assets/img/61.webp",
    name: "Têtarte",
    evolution: "Ptitard -> Tartard",
    size: "1.0",
    weight: "20.0",
    type_id: [5],
});

await Pokemon.create({
    number: 62,
    description: "Tartard est l'évolution finale de Ptitard. Il est de type Eau et Combat.",
    image: "./docs/integration/assets/img/62.webp",
    name: "Tartard",
    evolution: "Têtarte -> Tartard",
    size: "1.3",
    weight: "54.0",
    type_id: [5, 9],
});

await Pokemon.create({
    number: 63,
    description: "Abra est un Pokémon de type Psy.",
    image: "./docs/integration/assets/img/63.webp",
    name: "Abra",
    evolution: "Kadabra -> Alakazam",
    size: "0.9",
    weight: "19.5",
    type_id: [10],
});

await Pokemon.create({
    number: 64,
    description: "Kadabra est l'évolution de Abra. Il est de type Psy.",
    image: "./docs/integration/assets/img/64.webp",
    name: "Kadabra",
    evolution: "Abra -> Alakazam",
    size: "1.3",
    weight: "56.5",
    type_id: [10],
});

await Pokemon.create({
    number: 65,
    description: "Alakazam est l'évolution finale de Abra. Il est de type Psy.",
    image: "./docs/integration/assets/img/65.webp",
    name: "Alakazam",
    evolution: "Kadabra -> Alakazam",
    size: "1.5",
    weight: "48.0",
    type_id: [10],
});

await Pokemon.create({
    number: 66,
    description: "Machoc est un Pokémon de type Combat.",
    image: "./docs/integration/assets/img/66.webp",
    name: "Machoc",
    evolution: "Machopeur -> Mackogneur",
    size: "0.8",
    weight: "19.5",
    type_id: [9],
});

await Pokemon.create({
    number: 67,
    description: "Machopeur est l'évolution de Machoc. Il est de type Combat.",
    image: "./docs/integration/assets/img/67.webp",
    name: "Machopeur",
    evolution: "Machoc -> Mackogneur",
    size: "1.5",
    weight: "70.5",
    type_id: [9],
});

await Pokemon.create({
    number: 68,
    description: "Mackogneur est l'évolution finale de Machoc. Il est de type Combat.",
    image: "./docs/integration/assets/img/68.webp",
    name: "Mackogneur",
    evolution: "Machopeur -> Mackogneur",
    size: "1.6",
    weight: "130.0",
    type_id: [9],
});

await Pokemon.create({
    number: 69,
    description: "Chétiflor est un Pokémon de type Plante et Poison.",
    image: "./docs/integration/assets/img/69.webp",
    name: "Chétiflor",
    evolution: "Boustiflor -> Empiflor",
    size: "0.7",
    weight: "4.0",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 70,
    description: "Boustiflor est l'évolution de Chétiflor. Il est de type Plante et Poison.",
    image: "./docs/integration/assets/img/70.webp",
    name: "Boustiflor",
    evolution: "Chétiflor -> Empiflor",
    size: "1.0",
    weight: "6.4",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 71,
    description: "Empiflor est l'évolution finale de Chétiflor. Il est de type Plante et Poison.",
    image: "./docs/integration/assets/img/71.webp",
    name: "Empiflor",
    evolution: "Boustiflor -> Empiflor",
    size: "1.7",
    weight: "15.5",
    type_id: [1, 2],
});

await Pokemon.create({
    number: 72,
    description: "Tentacool est un Pokémon de type Eau et Poison.",
    image: "./docs/integration/assets/img/72.webp",
    name: "Tentacool",
    evolution: "Tentacruel",
    size: "0.9",
    weight: "45.5",
    type_id: [5, 2],
});

await Pokemon.create({
    number: 73,
    description: "Tentacruel est l'évolution de Tentacool. Il est de type Eau et Poison.",
    image: "./docs/integration/assets/img/73.webp",
    name: "Tentacruel",
    evolution: "Tentacool -> Tentacruel",
    size: "1.6",
    weight: "55.0",
    type_id: [5, 2],
});

await Pokemon.create({
    number: 74,
    description: "Racaillou est un Pokémon de type Roche et Sol.",
    image: "./docs/integration/assets/img/74.webp",
    name: "Racaillou",
    evolution: "Gravalanch -> Grolem",
    size: "0.4",
    weight: "20.0",
    type_id: [11, 8],
});

await Pokemon.create({
    number: 75,
    description: "Gravalanch est l'évolution de Racaillou. Il est de type Roche et Sol.",
    image: "./docs/integration/assets/img/75.webp",
    name: "Gravalanch",
    evolution: "Racaillou -> Grolem",
    size: "1.0",
    weight: "105.0",
    type_id: [11, 8],
});

await Pokemon.create({
    number: 76,
    description: "Grolem est l'évolution finale de Racaillou. Il est de type Roche et Sol.",
    image: "./docs/integration/assets/img/76.webp",
    name: "Grolem",
    evolution: "Gravalanch -> Grolem",
    size: "1.4",
    weight: "300.0",
    type_id: [11, 8],
});

await Pokemon.create({
    number: 77,
    description: "Ponyta est un Pokémon de type Feu.",
    image: "./docs/integration/assets/img/77.webp",
    name: "Ponyta",
    evolution: "Galopa",
    size: "1.0",
    weight: "30.0",
    type_id: [3],
});

await Pokemon.create({
    number: 78,
    description: "Galopa est l'évolution de Ponyta. Il est de type Feu.",
    image: "./docs/integration/assets/img/78.webp",
    name: "Galopa",
    evolution: "Ponyta -> Galopa",
    size: "1.7",
    weight: "95.0",
    type_id: [3],
});

await Pokemon.create({
    number: 79,
    description: "Ramoloss est un Pokémon de type Eau et Psy.",
    image: "./docs/integration/assets/img/79.webp",
    name: "Ramoloss",
    evolution: "Flagadoss",
    size: "1.2",
    weight: "36.0",
    type_id: [5, 10],
});

await Pokemon.create({
    number: 80,
    description: "Flagadoss est l'évolution de Ramoloss. Il est de type Eau et Psy.",
    image: "./docs/integration/assets/img/80.webp",
    name: "Flagadoss",
    evolution: "Ramoloss -> Flagadoss",
    size: "1.6",
    weight: "78.5",
    type_id: [5, 10],
});

await Pokemon.create({
    number: 81,
    description: "Magnéti est un Pokémon de type Électrik et Acier.",
    image: "./docs/integration/assets/img/81.webp",
    name: "Magnéti",
    evolution: "Magnéton",
    size: "0.3",
    weight: "6.0",
    type_id: [7, 12],
});

await Pokemon.create({
    number: 82,
    description: "Magnéton est l'évolution de Magnéti. Il est de type Électrik et Acier.",
    image: "./docs/integration/assets/img/82.webp",
    name: "Magnéton",
    evolution: "Magnéti -> Magnéton",
    size: "1.0",
    weight: "60.0",
    type_id: [7, 12],
});

await Pokemon.create({
    number: 83,
    description: "Canarticho est un Pokémon de type Normal et Vol.",
    image: "./docs/integration/assets/img/83.webp",
    name: "Canarticho",
    evolution: "",
    size: "0.8",
    weight: "15.0",
    type_id: [1, 4],
});

await Pokemon.create({
    number: 84,
    description: "Doduo est un Pokémon de type Normal et Vol.",
    image: "./docs/integration/assets/img/84.webp",
    name: "Doduo",
    evolution: "Dodrio",
    size: "1.4",
    weight: "39.2",
    type_id: [1, 4],
});

await Pokemon.create({
    number: 85,
    description: "Dodrio est l'évolution de Doduo. Il est de type Normal et Vol.",
    image: "./docs/integration/assets/img/85.webp",
    name: "Dodrio",
    evolution: "Doduo -> Dodrio",
    size: "1.8",
    weight: "85.2",
    type_id: [1, 4],
});

await Pokemon.create({
    number: 86,
    description: "Otaria est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/86.webp",
    name: "Otaria",
    evolution: "Lamantine",
    size: "1.1",
    weight: "90.0",
    type_id: [5],
});

await Pokemon.create({
    number: 87,
    description: "Lamantine est l'évolution de Otaria. Il est de type Eau et Glace.",
    image: "./docs/integration/assets/img/87.webp",
    name: "Lamantine",
    evolution: "Otaria -> Lamantine",
    size: "1.7",
    weight: "120.0",
    type_id: [5, 13],
});

await Pokemon.create({
    number: 88,
    description: "Tadmorv est un Pokémon de type Poison.",
    image: "./docs/integration/assets/img/88.webp",
    name: "Tadmorv",
    evolution: "Grotadmorv",
    size: "0.9",
    weight: "30.0",
    type_id: [2],
});

await Pokemon.create({
    number: 89,
    description: "Grotadmorv est l'évolution de Tadmorv. Il est de type Poison.",
    image: "./docs/integration/assets/img/89.webp",
    name: "Grotadmorv",
    evolution: "Tadmorv -> Grotadmorv",
    size: "1.2",
    weight: "30.0",
    type_id: [2],
});

await Pokemon.create({
    number: 90,
    description: "Kokiyas est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/90.webp",
    name: "Kokiyas",
    evolution: "Crustabri",
    size: "0.3",
    weight: "4.0",
    type_id: [5],
});

await Pokemon.create({
    number: 91,
    description: "Crustabri est l'évolution de Kokiyas. Il est de type Eau et Glace.",
    image: "./docs/integration/assets/img/91.webp",
    name: "Crustabri",
    evolution: "Kokiyas -> Crustabri",
    size: "1.5",
    weight: "132.5",
    type_id: [5, 13],
});

await Pokemon.create({
    number: 92,
    description: "Fantominus est un Pokémon de type Spectre et Poison.",
    image: "./docs/integration/assets/img/92.webp",
    name: "Fantominus",
    evolution: "Spectrum -> Ectoplasma",
    size: "1.3",
    weight: "0.1",
    type_id: [15, 2],
});

await Pokemon.create({
    number: 93,
    description: "Spectrum est l'évolution de Fantominus. Il est de type Spectre et Poison.",
    image: "./docs/integration/assets/img/93.webp",
    name: "Spectrum",
    evolution: "Fantominus -> Ectoplasma",
    size: "1.6",
    weight: "0.1",
    type_id: [15, 2],
});

await Pokemon.create({
    number: 94,
    description: "Ectoplasma est l'évolution finale de Fantominus. Il est de type Spectre et Poison.",
    image: "./docs/integration/assets/img/94.webp",
    name: "Ectoplasma",
    evolution: "Spectrum -> Ectoplasma",
    size: "1.5",
    weight: "40.5",
    type_id: [15, 2],
});

await Pokemon.create({
    number: 95,
    description: "Onix est un Pokémon de type Roche et Sol.",
    image: "./docs/integration/assets/img/95.webp",
    name: "Onix",
    evolution: "Steelix",
    size: "8.8",
    weight: "210.0",
    type_id: [11, 8],
});

await Pokemon.create({
    number: 96,
    description: "Soporifik est un Pokémon de type Psy.",
    image: "./docs/integration/assets/img/96.webp",
    name: "Soporifik",
    evolution: "Hypnomade",
    size: "1.0",
    weight: "32.4",
    type_id: [10],
});

await Pokemon.create({
    number: 97,
    description: "Hypnomade est l'évolution de Soporifik. Il est de type Psy.",
    image: "./docs/integration/assets/img/97.webp",
    name: "Hypnomade",
    evolution: "Soporifik -> Hypnomade",
    size: "1.6",
    weight: "75.6",
    type_id: [10],
});

await Pokemon.create({
    number: 98,
    description: "Krabby est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/98.webp",
    name: "Krabby",
    evolution: "Krabboss",
    size: "0.4",
    weight: "6.5",
    type_id: [5],
});

await Pokemon.create({
    number: 99,
    description: "Krabboss est l'évolution de Krabby. Il est de type Eau.",
    image: "./docs/integration/assets/img/99.webp",
    name: "Krabboss",
    evolution: "Krabby -> Krabboss",
    size: "1.3",
    weight: "60.0",
    type_id: [5],
});

await Pokemon.create({
    number: 100,
    description: "Voltorbe est un Pokémon de type Électrik.",
    image: "./docs/integration/assets/img/100.webp",
    name: "Voltorbe",
    evolution: "Électrode",
    size: "0.5",
    weight: "10.4",
    type_id: [7],
});

await Pokemon.create({
    number: 101,
    description: "Électrode est l'évolution de Voltorbe. Il est de type Électrik.",
    image: "./docs/integration/assets/img/101.webp",
    name: "Électrode",
    evolution: "Voltorbe -> Électrode",
    size: "1.2",
    weight: "66.6",
    type_id: [7],
});

await Pokemon.create({
    number: 102,
    description: "Noeunoeuf est un Pokémon de type Plante et Psy.",
    image: "./docs/integration/assets/img/102.webp",
    name: "Noeunoeuf",
    evolution: "Noadkoko",
    size: "0.4",
    weight: "2.5",
    type_id: [1, 10],
});

await Pokemon.create({
    number: 103,
    description: "Noadkoko est l'évolution de Noeunoeuf. Il est de type Plante et Psy.",
    image: "./docs/integration/assets/img/103.webp",
    name: "Noadkoko",
    evolution: "Noeunoeuf -> Noadkoko",
    size: "2.0",
    weight: "120.0",
    type_id: [1, 10],
});

await Pokemon.create({
    number: 104,
    description: "Osselait est un Pokémon de type Sol.",
    image: "./docs/integration/assets/img/104.webp",
    name: "Osselait",
    evolution: "Ossatueur",
    size: "0.4",
    weight: "6.5",
    type_id: [8],
});

await Pokemon.create({
    number: 105,
    description: "Ossatueur est l'évolution de Osselait. Il est de type Sol.",
    image: "./docs/integration/assets/img/105.webp",
    name: "Ossatueur",
    evolution: "Osselait -> Ossatueur",
    size: "1.0",
    weight: "45.0",
    type_id: [8],
});

await Pokemon.create({
    number: 106,
    description: "Kicklee est un Pokémon de type Combat.",
    image: "./docs/integration/assets/img/106.webp",
    name: "Kicklee",
    evolution: "",
    size: "1.5",
    weight: "49.8",
    type_id: [9],
});

await Pokemon.create({
    number: 107,
    description: "Tygnon est un Pokémon de type Combat.",
    image: "./docs/integration/assets/img/107.webp",
    name: "Tygnon",
    evolution: "",
    size: "1.4",
    weight: "50.2",
    type_id: [9],
});

await Pokemon.create({
    number: 108,
    description: "Excelangue est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/108.webp",
    name: "Excelangue",
    evolution: "",
    size: "1.2",
    weight: "65.5",
    type_id: [1],
});

await Pokemon.create({
    number: 109,
    description: "Smogo est un Pokémon de type Poison.",
    image: "./docs/integration/assets/img/109.webp",
    name: "Smogo",
    evolution: "Smogogo",
    size: "0.6",
    weight: "9.5",
    type_id: [2],
});

await Pokemon.create({
    number: 110,
    description: "Smogogo est l'évolution de Smogo. Il est de type Poison.",
    image: "./docs/integration/assets/img/110.webp",
    name: "Smogogo",
    evolution: "Smogo -> Smogogo",
    size: "1.2",
    weight: "9.5",
    type_id: [2],
});

await Pokemon.create({
    number: 111,
    description: "Rhinocorne est un Pokémon de type Sol et Roche.",
    image: "./docs/integration/assets/img/111.webp",
    name: "Rhinocorne",
    evolution: "Rhinoféros",
    size: "1.0",
    weight: "115.0",
    type_id: [8, 11],
});

await Pokemon.create({
    number: 112,
    description: "Rhinoféros est l'évolution de Rhinocorne. Il est de type Sol et Roche.",
    image: "./docs/integration/assets/img/112.webp",
    name: "Rhinoféros",
    evolution: "Rhinocorne -> Rhinoféros",
    size: "1.9",
    weight: "120.0",
    type_id: [8, 11],
});

await Pokemon.create({
    number: 113,
    description: "Leveinard est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/113.webp",
    name: "Leveinard",
    evolution: "",
    size: "1.1",
    weight: "34.6",
    type_id: [1],
});

await Pokemon.create({
    number: 114,
    description: "Saquedeneu est un Pokémon de type Plante.",
    image: "./docs/integration/assets/img/114.webp",
    name: "Saquedeneu",
    evolution: "",
    size: "1.0",
    weight: "35.0",
    type_id: [1],
});

await Pokemon.create({
    number: 115,
    description: "Kangourex est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/115.webp",
    name: "Kangourex",
    evolution: "",
    size: "2.2",
    weight: "80.0",
    type_id: [1],
});

await Pokemon.create({
    number: 116,
    description: "Hypotrempe est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/116.webp",
    name: "Hypotrempe",
    evolution: "Hypocéan",
    size: "0.4",
    weight: "8.0",
    type_id: [5],
});

await Pokemon.create({
    number: 117,
    description: "Hypocéan est l'évolution de Hypotrempe. Il est de type Eau.",
    image: "./docs/integration/assets/img/117.webp",
    name: "Hypocéan",
    evolution: "Hypotrempe -> Hypocéan",
    size: "1.2",
    weight: "25.0",
    type_id: [5],
});

await Pokemon.create({
    number: 118,
    description: "Poissirène est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/118.webp",
    name: "Poissirène",
    evolution: "Poissoroy",
    size: "0.6",
    weight: "15.0",
    type_id: [5],
});

await Pokemon.create({
    number: 119,
    description: "Poissoroy est l'évolution de Poissirène. Il est de type Eau.",
    image: "./docs/integration/assets/img/119.webp",
    name: "Poissoroy",
    evolution: "Poissirène -> Poissoroy",
    size: "1.3",
    weight: "39.0",
    type_id: [5],
});

await Pokemon.create({
    number: 120,
    description: "Stari est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/120.webp",
    name: "Stari",
    evolution: "Staross",
    size: "0.8",
    weight: "34.5",
    type_id: [5],
});

await Pokemon.create({
    number: 121,
    description: "Staross est l'évolution de Stari. Il est de type Eau et Psy.",
    image: "./docs/integration/assets/img/121.webp",
    name: "Staross",
    evolution: "Stari -> Staross",
    size: "1.1",
    weight: "80.0",
    type_id: [5, 10],
});

await Pokemon.create({
    number: 122,
    description: "M. Mime est un Pokémon de type Psy et Fée.",
    image: "./docs/integration/assets/img/122.webp",
    name: "M. Mime",
    evolution: "",
    size: "1.3",
    weight: "54.5",
    type_id: [10, 14],
});

await Pokemon.create({
    number: 123,
    description: "Insécateur est un Pokémon de type Insecte et Vol.",
    image: "./docs/integration/assets/img/123.webp",
    name: "Insécateur",
    evolution: "",
    size: "1.5",
    weight: "56.0",
    type_id: [6, 4],
});

await Pokemon.create({
    number: 124,
    description: "Lippoutou est un Pokémon de type Glace et Psy.",
    image: "./docs/integration/assets/img/124.webp",
    name: "Lippoutou",
    evolution: "",
    size: "1.4",
    weight: "40.6",
    type_id: [13, 10],
});

await Pokemon.create({
    number: 125,
    description: "Élektek est un Pokémon de type Électrik.",
    image: "./docs/integration/assets/img/125.webp",
    name: "Élektek",
    evolution: "",
    size: "1.1",
    weight: "30.0",
    type_id: [7],
});

await Pokemon.create({
    number: 126,
    description: "Magmar est un Pokémon de type Feu.",
    image: "./docs/integration/assets/img/126.webp",
    name: "Magmar",
    evolution: "",
    size: "1.3",
    weight: "44.5",
    type_id: [3],
});

await Pokemon.create({
    number: 127,
    description: "Scarabrute est un Pokémon de type Insecte.",
    image: "./docs/integration/assets/img/127.webp",
    name: "Scarabrute",
    evolution: "",
    size: "1.5",
    weight: "55.0",
    type_id: [6],
});

await Pokemon.create({
    number: 128,
    description: "Tauros est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/128.webp",
    name: "Tauros",
    evolution: "",
    size: "1.4",
    weight: "88.4",
    type_id: [1],
});

await Pokemon.create({
    number: 129,
    description: "Magicarpe est un Pokémon de type Eau.",
    image: "./docs/integration/assets/img/129.webp",
    name: "Magicarpe",
    evolution: "Léviator",
    size: "0.9",
    weight: "10.0",
    type_id: [5],
});

await Pokemon.create({
    number: 130,
    description: "Léviator est l'évolution de Magicarpe. Il est de type Eau et Vol.",
    image: "./docs/integration/assets/img/130.webp",
    name: "Léviator",
    evolution: "Magicarpe -> Léviator",
    size: "6.5",
    weight: "235.0",
    type_id: [5, 4],
});

await Pokemon.create({
    number: 131,
    description: "Lokhlass est un Pokémon de type Eau et Glace.",
    image: "./docs/integration/assets/img/131.webp",
    name: "Lokhlass",
    evolution: "",
    size: "2.5",
    weight: "220.0",
    type_id: [5, 13],
});

await Pokemon.create({
    number: 132,
    description: "Métamorph est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/132.webp",
    name: "Métamorph",
    evolution: "",
    size: "0.3",
    weight: "4.0",
    type_id: [1],
});

await Pokemon.create({
    number: 133,
    description: "Évoli est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/133.webp",
    name: "Évoli",
    evolution: "Aquali -> Voltali -> Pyroli",
    size: "0.3",
    weight: "6.5",
    type_id: [1],
});

await Pokemon.create({
    number: 134,
    description: "Aquali est l'évolution de Évoli. Il est de type Eau.",
    image: "./docs/integration/assets/img/134.webp",
    name: "Aquali",
    evolution: "Évoli -> Aquali",
    size: "1.0",
    weight: "29.0",
    type_id: [5],
});

await Pokemon.create({
    number: 135,
    description: "Voltali est l'évolution de Évoli. Il est de type Électrik.",
    image: "./docs/integration/assets/img/135.webp",
    name: "Voltali",
    evolution: "Évoli -> Voltali",
    size: "0.8",
    weight: "24.5",
    type_id: [7],
});

await Pokemon.create({
    number: 136,
    description: "Pyroli est l'évolution de Évoli. Il est de type Feu.",
    image: "./docs/integration/assets/img/136.webp",
    name: "Pyroli",
    evolution: "Évoli -> Pyroli",
    size: "0.9",
    weight: "25.0",
    type_id: [3],
});

await Pokemon.create({
    number: 137,
    description: "Porygon est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/137.webp",
    name: "Porygon",
    evolution: "",
    size: "0.8",
    weight: "36.5",
    type_id: [1],
});

await Pokemon.create({
    number: 138,
    description: "Amonita est un Pokémon de type Roche et Eau.",
    image: "./docs/integration/assets/img/138.webp",
    name: "Amonita",
    evolution: "Amonistar",
    size: "0.4",
    weight: "35.0",
    type_id: [11, 5],
});

await Pokemon.create({
    number: 139,
    description: "Amonistar est l'évolution de Amonita. Il est de type Roche et Eau.",
    image: "./docs/integration/assets/img/139.webp",
    name: "Amonistar",
    evolution: "Amonita -> Amonistar",
    size: "1.0",
    weight: "45.5",
    type_id: [11, 5],
});

await Pokemon.create({
    number: 140,
    description: "Kabuto est un Pokémon de type Roche et Eau.",
    image: "./docs/integration/assets/img/140.webp",
    name: "Kabuto",
    evolution: "Kabutops",
    size: "0.5",
    weight: "11.5",
    type_id: [11, 5],
});

await Pokemon.create({
    number: 141,
    description: "Kabutops est l'évolution de Kabuto. Il est de type Roche et Eau.",
    image: "./docs/integration/assets/img/141.webp",
    name: "Kabutops",
    evolution: "Kabuto -> Kabutops",
    size: "1.3",
    weight: "40.5",
    type_id: [11, 5],
});

await Pokemon.create({
    number: 142,
    description: "Ptéra est un Pokémon de type Roche et Vol.",
    image: "./docs/integration/assets/img/142.webp",
    name: "Ptéra",
    evolution: "",
    size: "1.8",
    weight: "59.0",
    type_id: [11, 4],
});

await Pokemon.create({
    number: 143,
    description: "Ronflex est un Pokémon de type Normal.",
    image: "./docs/integration/assets/img/143.webp",
    name: "Ronflex",
    evolution: "",
    size: "2.1",
    weight: "460.0",
    type_id: [1],
});

await Pokemon.create({
    number: 144,
    description: "Artikodin est un Pokémon de type Glace et Vol.",
    image: "./docs/integration/assets/img/144.webp",
    name: "Artikodin",
    evolution: "",
    size: "1.7",
    weight: "55.4",
    type_id: [13, 4],
});

await Pokemon.create({
    number: 145,
    description: "Électhor est un Pokémon de type Électrik et Vol.",
    image: "./docs/integration/assets/img/145.webp",
    name: "Électhor",
    evolution: "",
    size: "1.6",
    weight: "52.6",
    type_id: [7, 4],
});

await Pokemon.create({
    number: 146,
    description: "Sulfura est un Pokémon de type Feu et Vol.",
    image: "./docs/integration/assets/img/146.webp",
    name: "Sulfura",
    evolution: "",
    size: "2.0",
    weight: "60.0",
    type_id: [3, 4],
});

await Pokemon.create({
    number: 147,
    description: "Minidraco est un Pokémon de type Dragon.",
    image: "./docs/integration/assets/img/147.webp",
    name: "Minidraco",
    evolution: "Draco -> Dracolosse",
    size: "1.8",
    weight: "3.3",
    type_id: [16],
});

await Pokemon.create({
    number: 148,
    description: "Draco est l'évolution de Minidraco. Il est de type Dragon.",
    image: "./docs/integration/assets/img/148.webp",
    name: "Draco",
    evolution: "Minidraco -> Dracolosse",
    size: "4.0",
    weight: "16.5",
    type_id: [16],
});

await Pokemon.create({
    number: 149,
    description: "Dracolosse est l'évolution finale de Minidraco. Il est de type Dragon et Vol.",
    image: "./docs/integration/assets/img/149.webp",
    name: "Dracolosse",
    evolution: "Draco -> Dracolosse",
    size: "2.2",
    weight: "216.0",
    type_id: [16, 4],
});

await Pokemon.create({
    number: 150,
    description: "Mewtwo est un Pokémon de type Psy.",
    image: "./docs/integration/assets/img/150.webp",
    name: "Mewtwo",
    evolution: "",
    size: "2.0",
    weight: "122.0",
    type_id: [10],
});

await Pokemon.create({
    number: 151,
    description: "Mew est un Pokémon de type Psy.",
    image: "./docs/integration/assets/img/151.webp",
    name: "Mew",
    evolution: "",
    size: "0.4",
    weight: "4.0",
    type_id: [10],
});