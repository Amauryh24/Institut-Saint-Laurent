class Question {
  constructor(question, answer, choice, img) {
    this.question = question;
    this.choice = choice;
    this.answer = answer;
    this.img = img;
  }
  //   isCorrectAnswer(choice) {
  //     return this.answer === choice;
  //   }
}
let questions = [
  new Question(
    "Pourquoi est-on passé de PATA à SATA ?",
    "Pour améliorer le taux de transfert qui était limité par le phénomène du bus skewing",
    [
      "Pour éviter les problèmes de température",
      "Pour améliorer le taux de transfert qui était limité par le phénomène du bus skewing",
      "Pour améliorer le signal",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Quelle est le rôle du Shift left bus 8 ?",
    "Il permet de doubler le résultat",
    [
      "Il vérifie si le résultat est vrai ou faux",
      "Il permet d'ajouter +1 au résultat",
      "Il permet de doubler le résultat",
      "Toutes les réponses sont fausses",
      "Toutes les réponses sont justes",
    ]
  ),
  new Question(
    "Qu'est ce que la virtualisation ?",
    "Toutes les réponses sont justes",
    [
      "c'est quand le hardware devient sofware",
      "C'est l'os qui simule un processeur pour exécuter un code java",
      "Cela permet de simuler des serveurs sur une seule machine et ainsi gagner du temps et de l'argent au détriment de la perfomance",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Que représente l'étape n°3 dans ce schéma ?",
    "Les instructions du programme à exécuter se trouvent en mémoire vive (RAM)",
    [
      "Les instructions du programme à exécuter se trouvent en mémoire vive (RAM)",
      "Le système d’exploitation charge le programme en mémoire",
      "Le processeur reçoit l’ordre du système d’exploitation d’exécuter la première instruction. Le gestionnaire de mémoire (dans le chipset de la carte mère) ramène l’instruction sur le processeur",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ],
    "./sources/Q4.png"
  ),
  // new Question(
  //   "Que fait l’instruction dans le microprocesseur ? (voir image)",
  //   "",
  //   [
  //     "Les instructions du programme à exécuter se trouvent en mémoire vive (RAM)",
  //     "Le système d’exploitation charge le programme en mémoire",
  //     "Le processeur reçoit l’ordre du système d’exploitation d’exécuter la première instruction. Le gestionnaire de mémoire (dans le chipset de la carte mère) ramène l’instruction sur le processeur",
  //     "Toutes les réponses sont justes",
  //     "Toutes les réponses sont fausses",
  //   ]
  // ),

  new Question(
    "Parmis les exemples quel est le comparatif hardward/software ?",
    "Toutes les réponses sont justes",
    [
      "Processeur Intel / Windows",
      "Tablette / Android",
      "Iphone / iOS",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Quel pièce du pc est représenté sur ce schéma ?",
    "RAM",
    [
      "RAM",
      "ROM",
      "Processeur",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ],
    "./sources/Q7.png"
  ),
  new Question(
    "Quel est le rôle d’un transistor ?",
    "Le transistor laissera ou non passer le courant du collecteur vers l’émetteur.",
    [
      "Le transistor laissera ou non passer un bit du collecteur vers l’émetteur.",
      "Le transistor laissera ou non passer le courant du collecteur vers l’émetteur.",
      "Le transistor laissera ou non passer les bits du collecteur vers l’émetteur.",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Que représente ce nombre binaire 1110111 en octal - decimal - héxadécimal ?",
    "167 - 119 - 77",
    [
      "167 - 119 - 88",
      "167 - 119 - 77",
      "167 - 219 - 88",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu'est-ce que la norme ASCII ?",
    "Toutes les réponses sont justes",
    [
      "Norme informatique de codage pour 128 caractères codés en binaire de 00000000 à 11111111",
      "Norme informatique de codage pour 128 caractères codés sur 2³ bits",
      "Norme informatique de codage pour 128 caractères codés sur 1 octet",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu'est-ce que la norme UNICODE ?",
    "Norme internationale approuvée pour le codage de texte dont chaque caractère est codé sur 2 octets",
    [
      "Norme internationale approuvée pour le codage de texte dont chaque caractère est codé sur 2 octets",
      "Norme internationale approuvée pour le codage de texte dont chaque caractère est codé sur 4 octets",
      "Norme internationale approuvée pour le codage de texte dont chaque caractère est codé sur 8 octets",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu'est-ce que la norme UTF8 ?",
    "Standard inventé dans le but de limiter l’utilisation de la bande passante d’Internet, chaque caractère est codé sur une suite de un à quatre octets",
    [
      "Standard inventé dans le but de limiter l’utilisation de la bande passante d’Internet, chaque caractère est codé sur une suite de un à quatre octets",
      "Standard inventé dans le but de limiter l’utilisation de la bande passante d’Internet, chaque caractère est codé sur 4 octets",
      "Standard inventé dans le but de limiter l’utilisation de la bande passante d’Internet, chaque caractère est codé sur 2 octets",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu'est-ce qu'un mainframe ?",
    "Le mainframe est un ordinateur central qui peut traiter un grand nombre de connexions en même temps et en temps réel",
    [
      "Le mainframe est plus puissant qu'un supercalculateur, il effectue des calculs mathématiques volumineux et complexes.",
      "Le mainframe est un ordinateur central qui peut traiter un grand nombre de connexions en même temps et en temps réel",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu'est-ce qu'un supercalculateur ?",
    "Le supercalculateur est plus puissant qu'un mainframe, il effectue des calculs mathématiques volumineux et complexes.",
    [
      "Le supercalculateur est plus puissant qu'un mainframe, il effectue des calculs mathématiques volumineux et complexes.",
      "le supercalculateur est un ordinateur central qui peut traiter un grand nombre de connexions en même temps et en temps réel",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Donner une description correcte d'un pipeline d'instruction:",
    "Un chemin d'exécution d'une instruction dans un microprocesseur",
    [
      "Buffer interne au chipset master",
      "Un chemin d'exécution d'une instruction dans un microprocesseur",
      "Une UAL",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu'est ce que l'hyperthraiding ?",
    "Permet de simuler deux processeurs avec un seul coeur et donc d'exécuter plus de tâches en parallèle",
    [
      "Permet d'augmenter la cadence du processeur",
      "Permet d'améliorer l'exécution d'une tâche de 70%",
      "Permet de simuler deux processeurs avec un seul coeur et donc d'exécuter plus de tâches en parallèle",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu'est ce que la technologie Intel Turbo Boost ?",
    "Permet au processeur de fonctionner à sa vitesse d'horloge de base lors de la gestion de charges de travail légères, puis de passer à une vitesse d'horloge plus élevée pour les charges de travail lourdes",
    [
      "Permet au processeur de fonctionner à sa vitesse d'horloge de base lors de la gestion de charges de travail légères, puis de passer à une vitesse d'horloge plus élevée pour les charges de travail lourdes",
      "Permet de simuler un deuxième coeur pour exécuter des tâches plus rapide",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "De quoi se compose un bus système ?",
    "Bus d'adresse, bus de contrôle, bus de données",
    [
      "Bus d'entré, bus de sortie, bus de vérification",
      "Bus d'adresse, bus de contrôle, bus de données",
      "Bus interne, bus externe, bus intermédiaire",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Le cache de niveau 1 (L1):",
    "a une vitesse plus importante qu'un cache L2",
    [
      "a une vitesse plus importante qu'un cache L2",
      "a une taille plus importante qu’un cache L2",
      "a une taille plus importante qu’un cache L3",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Le cache de niveau 2 (L2):",
    "Toutes les réponses sont fausses",
    [
      "est 2 fois plus important (en taille) qu’un cache L1",
      "a une taille moin importante qu’un cache L1",
      "a une taille plus importante qu’un cache L3",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Le cache de niveau 3 (L3):",
    "se situe sur la partie externe du processeur",
    [
      "se situe sur la puce du processeur",
      "se situe sur la partie interne du processeur",
      "se situe sur la partie externe du processeur",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu'est ce que la mémoire cache ?",
    "Toutes les réponses sont justes",
    [
      "une mémoire qui enregistre temporairement des données provenant d'une source, afin de diminuer le temps d'un accès ultérieur d'un matériel informatique à ces données.",
      "une mémoire qui enregistre temporairement des programmes provenant d'une source, afin de diminuer le temps d'un accès ultérieur d'un matériel informatique à ces données.",
      "une mémoire qui enregistre temporairement des informations provenant d'une source, afin de diminuer le temps d'un accès ultérieur d'un matériel informatique à ces données.",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question("Qu'est ce que la mémoire primaire ?", "RAM", [
    "RAM",
    "Disque dur",
    "Toutes les réponses sont justes",
    "Toutes les réponses sont fausses",
  ]),
  new Question(
    "Pourquoi doit-on rafraichir le cache",
    "Toutes les réponses sont justes",
    [
      "Pour la protection des données",
      "Meilleur conservation de la batterie",
      "Pour faciliter le fonctionnement des applications",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Pourquoi doit-on rafraichir la mémoire vide dynamic (DRAM)",
    "Elles sont composées de condensateurs qui se déchargent et doivent être rafraichie pour maintenir la charge électrique",
    [
      "Elles sont composées de condensateurs qui se déchargent et doivent être rafraichie pour maintenir la charge électrique",
      "Pour libérer de l'espace dans la mémoire",
      "Pour mettre à jour la cadence de la mémoire vive",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Quel est le rôle de la pagination",
    "Toutes les réponses sont justes",
    [
      "Donner l'illusion à l'utilisateur qu'il dispose d'une mémoire de la même taille que celle de l'espace mémoire adressable",
      "Diviser la mémoire virtuelle de chaque programme/processus en « pages » de 4KB et on fera de même pour la mémoire ram réelle.",
      "Permet de découper la mémoire vive en zone ou table et change la correspondance entre mémoire virtuelle et mémoire physique",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Quelle technologie est utilisée pour graver sur un DVD ?",
    "Le laser rouge avec une longueur d'onde de 635 nanomètres",
    [
      "Le laser rouge avec une longueur d'onde de 635 nanomètres",
      "Le laser infrarouge avec une longueur d'onde de 780 nanomètres",
      "Le laser bleu avec une longueur d'onde de 650 nanomètres",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Quelle technologie est utilisée pour graver sur les disques durs ?",
    "Technologie magnétique, puis électronique",
    [
      "Technologie électronique, puis magnétique",
      "Technologie magnétique, puis électronique",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Qu’est ce que EFM, à quoi ça sert ?",
    "Eight-to-Fourteen Modulation, système d'encodage pour éviter d'avoir 10 bits consécutifs à 0",
    [
      "Electronic Fiction Manuscript, un script qui créer une table des matières",
      "Eight-to-Fourteen Modulation, système d'encodage pour éviter d'avoir 10 bits consécutifs à 0",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Lors de l'impression laser, à quoi sert le fuser ?",
    "Faire fondre l'encre dans le papier",
    [
      "Faire sécher l'encre",
      "Aplatir la feuille pour éviter les bulles",
      "Faire fondre l'encre dans le papier",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ],
    "./sources/Q30.png"
  ),
  new Question(
    "Lors de l'impression laser, à quoi sert le toner ?",
    "C'est un réservoir de microbille chargées d'encre qui vont se coller sur le tambour, le toner étant chargé potivement vient se coller sur les charges négatives du tambour",
    [
      "Cela permet de récupérer le surplus d'encre si celui si ne s'est pas bien collé au tambour",
      "C'est un réservoir de microbille chargées d'encre qui vont se coller sur le tambour, le toner étant chargé potivement vient se coller sur les charges négatives du tambour",
      "C'est de l'encre qui vont se coller sur la feuille",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ],
    "./sources/Q30.png"
  ),
  new Question(
    "En quoi consiste la technologie thermique (bubble jet) dans les impressions à jet d'encre",
    "Elle repose sur le principe qu'un fluide chauffé produit des bulles. les imprimantes sont composés de nombreuses buses jusqu'à 256, chauffées entre 300° et 400° plusieurs fois par seconde",
    [
      "Elle repose sur le principe qu'un fluide chauffé produit des bulles. les imprimantes sont composés de nombreuses buses jusqu'à 256, chauffées entre 300° et 400° plusieurs fois par seconde",
      "Elle repose sur le principe qu'un fluide chauffé produit des bulles. les imprimantes sont composés de 4 buses chauffées entre 300° et 400° plusieurs fois par seconde",
      "Elle repose sur le principe qu'un fluide chauffé produit des bulles. les imprimantes sont composés d 'une buses chauffées entre 300° et 400° plusieurs fois par seconde",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "En quoi consiste la technologie Piézo-éléctrique dans les impressions à jet d'encre",
    "Elle repose sur la transformation de l'energie électrique en vibration et éjecte la goutte d'encre",
    [
      "Elle repose sur la puissance électrique généré et éjecte de l'encre. Plus la puissance est elevée, plus les gouttes d'encre seront grosses",
      "Elle repose sur la vitesse de l'energie électrique généré et éjecte de l'encre",
      "Elle repose sur la transformation de l'energie électrique en vibration et éjecte la goutte d'encre",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Quel technologie est utilisé pour les écran tactile ?",
    "Toutes les réponses sont justes",
    [
      "Optique",
      "Electrique",
      "Ultrason",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "En quoi consiste la technologie électrique pour les écran tactile ?",
    "Lorsque l'utilisateur touche l'écran, il met en contact les 2 surfaces conductrices, un courant 'monte' dans la couche de surface. Le courant ainsi engendré, peut être mesuré aux 4 côtés, et les coordonnées peuvent être calculées.",
    [
      "Lorsque l'utilisateur touche l'écran, il interrompt le faisceau électrique. Les récepteurs privés de lumière infrarouge détectent le point d'impact et transmettent les coordonnées X et Y au contrôleur.",
      "Lorsque l'utilisateur touche l'écran, il met en contact les 2 surfaces conductrices, un courant 'monte' dans la couche de surface. Le courant ainsi engendré, peut être mesuré aux 4 côtés, et les coordonnées peuvent être calculées.",
      "Lorsque l'utilisateur touche l'écran, il vient perturber ce signal. Cette perturbation de l'ultrason est détectable par les transducteurs(éléments électriques qui génèrent des ondes sonores) de réception.",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Donnez la description exacte d'un chipset : ",
    "Toutes les réponses sont justes",
    [
      "Ensemble de circuits intégrés dans une puce dans la carte mère",
      "Rond point d'informations entre le CPU et les périphériques",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Donner la  différence entre la cache interne dans un CPU et les registres de l'UAL:",
    "Toutes les réponses sont justes",
    [
      "Les registres internes sont des mémoires tampons de l'UAL utilisées en cours du traitement d'une instruction ou d'une donnée",
      "Les mémoires caches  accélèrent le traitement et rapprochent les programmes a traiter",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question("Overclocking est une technique de :", "D'accélération", [
    "D'accélération",
    "Synchronisation",
    "De partage",
    "Toutes les réponses sont justes",
    "Toutes les réponses sont fausses",
  ]),
  new Question(
    "Quelle mémoire permet l’opération de lecture et d’écriture simultanées ?",
    "RAM",
    [
      "ROM",
      "RAM",
      "EEPROM",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question("Quel composant informatique est le plus rapide ?", "Registre", [
    "RAM",
    "Cache",
    "Registre",
    "Toutes les réponses sont justes",
    "Toutes les réponses sont fausses",
  ]),
  new Question(
    "Si la quantité d'électrons contenus dans le condensateur représente une tension > V/2, quel sera la valeur stockée ?",
    "1",
    [
      "0",
      "1",
      "256",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Que représente le schéma ci-dessus ?",
    "Lecture d'un 1",
    ["Lecture d'un 1", "Lecture d'un 0", "Ecriture d'un 1", "Ecriture d'un 0"],
    "./sources/Q43.png"
  ),
  new Question(
    "Que représente le schéma ci-dessus ?",
    "Ecriture d'un 1",
    ["Lecture d'un 0", "Lecture d'un 1", "Ecriture d'un 0", "Ecriture d'un 1"],
    "./sources/Q44.png"
  ),
  new Question(
    "Quel est le rôle de ECC",
    "Permet d'éviter les pertes de données dues à une détérioration du support grâce à l'algorithme de Reed Salomon",
    [
      "Système d'encodage pour éviter d'avoir 10 bits consécutifs à 0 et permet à la tête de lecture de lire les données",
      "Permet d'éviter les pertes de données dues à une détérioration du support grâce à l'algorithme de Reed Salomon",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),
  new Question(
    "Ou est ce qu’on trouve de la SRAM (Static Random Access Memory)",
    "Toutes les réponses sont justes",
    [
      "Cache L1",
      "Cache L2",
      "Les registres",
      "Toutes les réponses sont justes",
      "Toutes les réponses sont fausses",
    ]
  ),

  //Structure des ordinateurs - questions examen 2021
  new Question(
    "Pourquoi la mémoire RAM doit-elle être rafraichie:",
    "Les condensateur sont trop petits pour garder la charge",
    [
      "Pour éviter les problèmes de surchauffe",
      "Parce qu'elle est organisée en bancs",
      "Les condensateur sont trop petits pour garder la charge",
      "A cause du temps de précharge",
    ]
  ),
  new Question(
    "Un DVD+R utilise les pré-pits pour le positionnement de l'écriture:",

    "Faux",
    ["Vrai", "Faux"]
  ),
  new Question(
    "Le processeur I7 possède une séparation de cache données/instructions:",
    "Au niveau 1",
    ["Au niveau 1", "Au niveau 2", "Au niveau 1 et 2", "Au niveau 3 (commun)"]
  ),
  new Question(
    "Que vaut la valeur de 00001111 en décimal, octal, hexadécimal ?",
    "15, 017, 0F",
    ["16, 020, 20", "16, 020, 10", "15, 017, 10", "15, 017, 0F"]
  ),
  new Question("La taille utile d'un secteur disque est:", "512B", [
    "512b",
    "512B",
    "4096b",
    "4MB",
    "4KB",
  ]),
  new Question(
    "Le passage d'architectures parallèles vers des architectures séries est dû à la diaphonie:",
    "Vrai",
    ["Vrai", "Faux"]
  ),
  new Question(
    "La machine virtuelle Java est",
    "Un générateur de langage machine",
    [
      "Un substitut au processseur physique",
      "Un langage de programmation",
      "Un programme portable sur différents systèmes d'exploitation",
      "Un générateur de langage machine",
    ]
  ),
  new Question(
    "Un processeur (coeur) possédant plusieurs unités d'exécution de calcul (UAL) est dit:",
    "Superscalaire",
    ["Hyperthreading", "SIMD", "A pipelining", "Superscalaire"]
  ),
  new Question(
    "Un cluster est un regroupement système de plusieurs secteur hardwares résultant d'un formatage de haut niveau.",
    "Vrai"[("Vrai", "Faux")]
  ),
  new Question(
    "Quel est le type de rafraichissement mémoire représenté sur le schéma ?",
    "Interleaving et mode page",
    [
      "Interleaving",
      "Ras seulement",
      "Interleaving et mode page",
      "Nibble et interleaving",
    ],
    "./sources/03.png"
  ),
  new Question(
    "Quel sera la situation après l'exécution de la microinstruction ci-dessus",
    "A vaudra 5, B vaudra 10 et MPC vaudra 1",
    [
      "A vaudra 5, B vaudra 10 et MPC vaudra 1",
      "A vaudra 4, MPC vaudra 1, la valeur de 4 sera stockée à l'adresse 0 de la RAM",
      "Aucune réponse n'est correcte",
      "A et B vaudront 10 et MPC vaudra 1",
      "A vaudra 10",
      "A vaudra 10 et MPC vaudra 1",
    ],
    "./sources/02.png"
  ),
  new Question("Que vaut la valeur 11111111 en décimal:", "255", [
    "127",
    "255",
    "256",
    "FF",
  ]),

  // Créer quizz à choix multiple
  // Sélectionner la ou les affirmation(s) valide(s):
  // - Un processeur est est un interpreteur de langage machine et un exécuteur de microcode (juste)
  // - le microprogramme est le code du processeur (juste)
  // - Les programmes Java sont portables (juste)
  // - un compilateur n'est pas un processeur virtuel (juste)
  // - Le langage machine équivaut à l'assembleur (juste)
  new Question("Chercher l'erreur:", "Un SSD utilise un stockage magnétique", [
    "La mémoire flash utilisent des transistors",
    "Un disque dur  utilise un stockage magnétique",
    "RAId assurent prefomance  (R/W) et sécurité  de sécurité sur disques",
    "Un SSD utilise un stockage magnétique",
    "PCI express est une pile  logitielle  pour réaliser une communication de type réseau",
  ]),
  new Question(
    "Le schéma RAM suivant représente:",
    "A gauche la lecturre d'un 0, à droite la lecture d'un 1",
    [
      "A gauche la lecturre d'un 0, à droite la lecture d'un 1",
      "A gauche la lecture d'un 1, à droite la lecture d'un 0",
      "A gauche la écriture d'un 1, à droite la écriture d'un 0",
      "A gauche la écriture d'un 0, à droite la écriture d'un 1",
    ],
    "./sources/01.png"
  ),
  new Question(
    "S.M.A.R.T est:",
    "Un logiciel intégré au contrôleur de disque dur",
    [
      "Propre au système RAID",
      "Un logiciel intégré au système d'exploitation",
      "Un logiciel intégré au contrôleur de disque dur",
      "Optimise la rapidité des disques SSD",
    ]
  ),
  new Question(
    "L'impression laser utilise pour l'écriture des données:",
    "L'électricité statique",
    [
      "Un système piezzo-électrique",
      "Un système piezzo-électrostatique",
      "Un système purement thermique (c'est pour cela que les pages sont chaudes à la sortie)",
      "L'électricité statique",
      "Un système bubble-jet",
    ]
  ),
  new Question(
    "Un processeur qui veut exécuter une instruction ne se trouvant pas en cache provoque un défaut de page.",
    "Faux",
    ["Vrai", "Faux"]
  ),
  new Question(
    "Les différent codages utilisés en informatique tels que EFM, EFM+, RLL, 8/10 assurent:",
    "Le fait qu'il n'y ait pas trop de 1 ou 0 consécutifs",
    [
      "Le fait qu'il n'y ait pas trop de 1 ou 0 consécutifs et l'intégrité des données",
      "La compression et l'intégrité de données",
      "Le fait qu'il n'y ait pas trop de 1 ou 0 consécutifs",
      "Le fait qu'il n'y ait pas trop de 1 ou 0 consécutifs et la compression de données",
    ]
  ),
  new Question(
    "La gestion de la table de pages d'un programme est réalisée par:",
    "Par le système d'exploitation",
    [
      "Par le système d'exploitation",
      "Le contrôleur de cache",
      "Le contrôleur RAM",
      "Le programme lui même",
    ]
  ),
];
