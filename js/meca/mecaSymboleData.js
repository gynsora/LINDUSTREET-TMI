// base de données lié aux symboles en mécaniques
const mecaGlossaryData = [
    
    {
        "ordinaryImageSrc":"roulement.jpg",
        "ordinaryImageSrcAlt":"Image d'un roulement ",
        "symboleImageSrc":"roulement.jpg",
        "symboleImageSrcAlt":"Image du symbole d'un roulement",
        "symboleTitle":"Roulement",
        "symboleDescription": "En mécanique, un roulement est un dispositif destiné à guider un assemblage en rotation, c'est-à-dire à permettre à une pièce de tourner par rapport à une autre selon un axe de rotation défini. Le roulement est donc un palier. Par rapport aux paliers lisses, le roulement permet d'avoir une très faible résistance au pivotement tout en supportant des efforts importants. Nous pouvons en trouver dans les machines à café, les skateboards, les trottinettes, les voitures…"
    },
    {
        "ordinaryImageSrc":"clavette.jpeg",
        "ordinaryImageSrcAlt":"Image clavette ",
        "symboleImageSrc":"clavette.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'une clavette",
        "symboleTitle":"Clavette",
        "symboleDescription": "En mécanique, une clavette (étymologiquement, une petite clé) est une pièce qui a pour fonction de lier en rotation deux pièces (liaison de moyeux). En complément, elle peut être dimensionnée pour se rompre par cisaillement lorsque le couple transmis est trop important."
    },
    {
        "ordinaryImageSrc":"clips.jpeg",
        "ordinaryImageSrcAlt":"Image clips ",
        "symboleImageSrc":"clips.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'un clips",
        "symboleTitle":"Clips",
        "symboleDescription": "Les clips permettent le maintien de pièces autour ou à l'intérieur d'un axe possédant généralement une gorge. C'est un maintien mécanique par élasticité du matériau. "
    },
    {
        "ordinaryImageSrc":"chaine.jpeg",
        "ordinaryImageSrcAlt":"Image chaine ",
        "symboleImageSrc":"chaine.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'une chaine méancique",
        "symboleTitle":"Chaîne mécanique",
        "symboleDescription": "En construction mécanique, une chaîne est un ensemble de maillons reliés directement ou par l'intermédiaire d'axes. Une chaîne peut être bouclée ou laissée libre à ses extrémités."
    },
    {
        "ordinaryImageSrc":"epaulement.jpeg",
        "ordinaryImageSrcAlt":"Image epaulement ",
        "symboleImageSrc":"epaulement.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'un épaulement",
        "symboleTitle":"Épaulement (mécanique)",
        "symboleDescription": "L'épaulement marche sur une surface, servant de surface d'appui, en général pour assurer une mise en position."
    },
    {
        "ordinaryImageSrc":"pignon.jpeg",
        "ordinaryImageSrcAlt":"Image d'un pignon ",
        "symboleImageSrc":"pignon.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'un pignon",
        "symboleTitle":"Pignon",
        "symboleDescription": "En mécanique générale, il désigne un disque d'acier crénelé, c'est-à-dire comportant des dents généralement à sa périphérie. On retrouve les pignons dans deux grandes solutions de transmission mécanique : les engrenages et les transmissions à chaîne."
    },
    {
        "ordinaryImageSrc":"engrenage.jpeg",
        "ordinaryImageSrcAlt":"Image d'un engrenage ",
        "symboleImageSrc":"engrenage.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'un engrenage",
        "symboleTitle":"Engrenage",
        "symboleDescription": "Un engrenage est un système mécanique composé de deux roues dentées ou plus engrenées servant :<br>soit à la transmission du mouvement de rotation entre elles<br>soit à la propulsion d'un fluide (on parle alors de pompe à engrenages).<br>Dans le cas de la transmission de mouvement, les deux roues dentées sont en contact l’une avec l’autre et transmettent de la puissance par obstacle. Un engrenage est composé d’un pignon, c’est ainsi que l’on nomme la seule roue ou la roue la plus petite, et d’une roue, d’une crémaillère, d’une couronne ou d'une vis. Quand plus de deux roues dentées sont présentes, on parle de train d’engrenages."
    },
    {
        "ordinaryImageSrc":"reducteur.jpeg",
        "ordinaryImageSrcAlt":"Image d'un reducteur ",
        "symboleImageSrc":"reducteur.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'un reducteur",
        "symboleTitle":"Réducteur",
        "symboleDescription": "Un réducteur mécanique a pour but de modifier le rapport de vitesse ou/et le couple entre l’axe d’entrée et l’axe de sortie d’un mécanisme."
    },
    {
        "ordinaryImageSrc":"limiteurDeCouple.jpeg",
        "ordinaryImageSrcAlt":"Image d'un limiteur de couple ",
        "symboleImageSrc":"limiteurDeCouple.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'un limiteur de couple",
        "symboleTitle":"Limiteur de couple",
        "symboleDescription": "Limiteur de couple Mécanisme utilisé pour entraîner en rotation un arbre de sortie tant que le couple à transmettre n'excède pas une valeur d'étalonnage. Quand le couple est supérieur à cette valeur d'étalonnage, la transmission du mouvement est rompue."
    },
    {
        "ordinaryImageSrc":"renvoiDangle.jpeg",
        "ordinaryImageSrcAlt":"Image d'un renvoi d’angle ",
        "symboleImageSrc":"renvoiDangle.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'un renvoi d’angle",
        "symboleTitle":"Renvoi d’angle",
        "symboleDescription": "Le dispositif du renvoi d'angle est simple : il permet de changer le sens d'une rotation entre deux éléments d'une même machine."
    },
    {
        "ordinaryImageSrc":"came.gif",
        "ordinaryImageSrcAlt":"Image d'un Came (escargot) ",
        "symboleImageSrc":"came.gif",
        "symboleImageSrcAlt":"Image du symbole d'un Came (escargot)",
        "symboleTitle":"Came (escargot)",
        "symboleDescription": "Une came est une face mécanique permettant de piloter le déplacement d'une pièce. Il s'agit d'une pièce roulant (ou glissant) sur une autre pièce ; c'est donc une déclinaison du plan incliné (machine simple). ... Le profil de la came constitue le programme, la mémoire de mouvement enregistré."
    },
    {
        "ordinaryImageSrc":"poulie.jpeg",
        "ordinaryImageSrcAlt":"Image d'une poulie crantée ",
        "symboleImageSrc":"poulie.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'une poulie crantée",
        "symboleTitle":"Poulie crantée",
        "symboleDescription": "Une poulie est une machine simple, c'est-à-dire un dispositif de mécanique élémentaire. Elle est constituée d'une pièce en forme de roue servant à la transmission du mouvement ."
    },
    {
        "ordinaryImageSrc":"courroie.jpeg",
        "ordinaryImageSrcAlt":"Image d'une courroie crantée ",
        "symboleImageSrc":"courroie.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'une courroie crantée",
        "symboleTitle":"Courroie crantée",
        "symboleDescription": "La courroie de distribution, courroie dentée ou courroie synchronique, est un élément mécanique essentiel d'un moteur à combustion interne. Elle permet notamment de synchroniser la rotation du vilebrequin et de l'arbre à cames."
    },
    {
        "ordinaryImageSrc":"goupilleCisaillement.jpeg",
        "ordinaryImageSrcAlt":"Image d'une goupille anti-rotation ",
        "symboleImageSrc":"goupilleCisaillement.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'une goupille anti-rotation ",
        "symboleTitle":"Goupille anti-rotation (cisaillement) ",
        "symboleDescription": "La goupille est une tige de métal insérée dans l'axe d'un moyeu transmettant un mouvement rotation juste après une jonction avec un axe secondaire. Elle permet de fermer la connexion comme un boulon mais son diamètre est choisi afin de pouvoir céder lorsque la tension sur le joint est trop forte. "
    },
    {
        "ordinaryImageSrc":"moyeu.jpeg",
        "ordinaryImageSrcAlt":"Image d'un moyeu ",
        "symboleImageSrc":"moyeu.jpeg",
        "symboleImageSrcAlt":"Image du symbole d'un moyeu",
        "symboleTitle":"Moyeu ",
        "symboleDescription": "Le moyeu est la partie centrale d'une pièce technique tournante discoïdale : roue, poulie, engrenage, volant. ... Un moyeu peut donc être moteur, mais l'expression plus couramment employée est « roue-motrice » ou « essieu moteur » (quand on parle des deux roues opposées du même train : aligné de même axe)."
    }
]

