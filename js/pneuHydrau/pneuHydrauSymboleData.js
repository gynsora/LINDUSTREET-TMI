// base de données lié aux symboles en pneumatiques et hydrauliques
const pneuHydrauGlossaryData = [
    
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un silencieux ",
        "symboleImageSrc":"silencieux.png",
        "symboleImageSrcAlt":"Image du symbole d'un silencieux",
        "symboleTitle":"Silencieux",
        "symboleDescription": "Les silencieux sont chargés d'atténuer les bruits d'échappement de l'air comprimé. Ils peuvent être constitués soit de chicanes, soit de filtre de mousse."
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un lubrificateur ",
        "symboleImageSrc":"lubrificateur.png",
        "symboleImageSrcAlt":"Image du symbole d'un lubrificateur",
        "symboleTitle":"Lubrificateur",
        "symboleDescription": "Un lubrificateur a pour rôle d'incorporer à l'air un brouillard d'huile afin de lubrifier les parties mobiles des composants pneumatiques. ... La différence de pression entre la cuve et le dôme permet la remontée de l'huile par un tube, en passant par une valve anti-retour."
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un déshydrateur d’air ",
        "symboleImageSrc":"deshydrateurAir.png",
        "symboleImageSrcAlt":"Image du symbole d'un déshydrateur d’air",
        "symboleTitle":"Déshydrateur d’air",
        "symboleDescription": "Un déshydrateur d'air comprimé est un équipement technique qui est utilisé pour réduire le taux d'humidité absolue de l'air comprimé en réduisant la teneur en vapeur d'eau. Ceci permet d'éviter les problèmes liés à l'eau condensée ou à la corrosion dans un réseau d'air comprimé. "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'une purge manuelle ",
        "symboleImageSrc":"purgeManuelle.png",
        "symboleImageSrcAlt":"Image du symbole d'une purge manuelle",
        "symboleTitle":"Purge manuelle",
        "symboleDescription": "Permet de purger les éléments indésirable de façon manuelle (trace d’eau ,etc..) "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'une purge automatique",
        "symboleImageSrc":"purgeAuto.png",
        "symboleImageSrcAlt":"Image du symbole d'une purge automatique",
        "symboleTitle":"Purge automatique",
        "symboleDescription": "Permet de purger les éléments indésirable de façon automatique (trace d’eau ,etc..) "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un filtre à air",
        "symboleImageSrc":"filtre.png",
        "symboleImageSrcAlt":"Image du symbole d'un filtre à air",
        "symboleTitle":"Filtre à air",
        "symboleDescription": "Il épure l'air en provenance du compresseur pénètre dans le filtre au travers du déflecteur à ailettes qui lui imprime un mouvement tourbillonnaire. Les particules solides et liquides sont projetées, par, centrifugation, contre la paroi de la cuve et tombent dans le fond. "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un filtre de purge manuelle",
        "symboleImageSrc":"filtrePurgeManuelle.png",
        "symboleImageSrcAlt":"Image du symbole d'un filtre de purge manuelle",
        "symboleTitle":"Filtre de purge manuelle",
        "symboleDescription": "Un filtre qui purge manuelle les élément indésirable du système pneumatique "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un filtre de purge automatique",
        "symboleImageSrc":"filtrePurgeAuto.png",
        "symboleImageSrcAlt":"Image du symbole d'un filtre de purge automatique",
        "symboleTitle":"Filtre de purge automatique",
        "symboleDescription": "Un filtre qui purge automatique les élément indésirable du système pneumatique "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un clapet anti-retour",
        "symboleImageSrc":"clapetAntiRetour.png",
        "symboleImageSrcAlt":"Image du symbole d'un clapet anti-retour",
        "symboleTitle":"Clapet anti-retour",
        "symboleDescription": "Un clapet antiretour est un dispositif installé sur une tuyauterie permettant de contrôler le sens de circulation d'un fluide quelconque. ... Le fluide (liquide, gaz, air comprimé, etc.) peut donc circuler dans un certain sens, mais son flux est bloqué si ce sens s'inverse. "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'une vanne pneumatique",
        "symboleImageSrc":"vanne.png",
        "symboleImageSrcAlt":"Image du symbole d'une vanne pneumatique",
        "symboleTitle":"Vanne pneumatique",
        "symboleDescription": "Une vanne pneumatique est un robinet à commande motorisé dont le mécanisme de fermeture et d'ouverture est actionné par un servomoteur à gaz comprimé (habituellement de l'air). "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un réducteur de débit non réglable",
        "symboleImageSrc":"reducteurDebitNonRegulable.png",
        "symboleImageSrcAlt":"Image du symbole d'un réducteur de débit non réglable",
        "symboleTitle":"Réducteur de Débit non-réglable",
        "symboleDescription": "Le Réducteur de Débit réglable  (ou limiteur de vitesse) est un composant pneumatique permettant de réguler (régler) la vitesse d'entrée ou de sortie de la tige d'un vérin pneumatique en agissant sur le débit de l'air sortant du vérin.comme sont nom l’indique il est réglable et permet le réglage du débit. "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un réducteur de débit réglable",
        "symboleImageSrc":"reducteurDebitRegulable.png",
        "symboleImageSrcAlt":"Image du symbole d'un réducteur de débit réglable",
        "symboleTitle":"Réducteur de Débit réglable",
        "symboleDescription": "Le Réducteur de Débit réglable  (ou limiteur de vitesse) est un composant pneumatique permettant de réguler (régler) la vitesse d'entrée ou de sortie de la tige d'un vérin pneumatique en agissant sur le débit de l'air sortant du vérin.comme sont nom l’indique il est réglable et permet le réglage du débit. "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un distributeur 2/2 pneumatique monostable",
        "symboleImageSrc":"2-2PneumaMonostable.png",
        "symboleImageSrcAlt":"Image du symbole d'un distributeur 2/2 pneumatique monostable",
        "symboleTitle":"Distributeur 2/2 pneumatique monostable",
        "symboleDescription": "Les distributeurs pneumatiques sont des éléments de la chaîne d'énergie. Ils distribuent de l'air comprimé aux actionneurs pneumatiques (vérins, générateurs de vide, moteurs à palettes...) à partir d'un signal de commande (pilotage). Les distributeurs à clapets sont réservés aux petits distributeurs à faible débit. Dans le cas présent il est composé de 2 tiroirs eux-même composé de 2 sorties, contrôlé pneumatiquement.  "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un distributeur 5/2 electro-pneumatique bistable",
        "symboleImageSrc":"5-2ElectriqueBistable.png",
        "symboleImageSrcAlt":"Image du symbole d'un distributeur 5/2 electro-pneumatique bistable",
        "symboleTitle":"Distributeur 5/2 bistable électrique",
        "symboleDescription": "Distributeur composé de 2 tiroirs eux-même composé de 5 sorties contrôlé électriquement.  "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un distributeur 5/2 pneumatique bistable",
        "symboleImageSrc":"5-2PneumaBistable.png",
        "symboleImageSrcAlt":"Image du symbole d'un distributeur 5/2 pneumatique bistable",
        "symboleTitle":"Distributeur 5/2 bistable pneumatique",
        "symboleDescription": "Distributeur composé de 2 tiroirs eux-même composé de 5 sorties contrôlé pneumatiquement.  "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un compresseur d'air",
        "symboleImageSrc":"compresseur.png",
        "symboleImageSrcAlt":"Image du symbole d'un compresseur d'air",
        "symboleTitle":"Compresseur d'air",
        "symboleDescription": "Un compresseur d'air est l'inverse d'un diffuseur, Il consiste en une pompe à air apte à prélever de l'air ambiant pour le mettre sous pression. Les compresseurs d'air peuvent être utilisés pour le transport d'air à forte pression mais en faible quantité.  "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image de l'arrivée d'air pneumatique",
        "symboleImageSrc":"sourcePneumatique.png",
        "symboleImageSrcAlt":"Image du symbole de l'arrivée d'air pneumatique",
        "symboleTitle":"Source pneumatique",
        "symboleDescription": "Symbole représentant l’arrivé d’air du système "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un échangeur air-huile",
        "symboleImageSrc":"echangeurPressionAirHuile.png",
        "symboleImageSrcAlt":"Image du symbole d'un échangeur air-huile",
        "symboleTitle":"Échangeur air-huile",
        "symboleDescription": "L'échangeur air-huile est équipé d'un échangeur et d'un distributeur intégrés d'une manière compacte. Il convertit la pression pneumatique en pression hydraulique. Cette pression hydraulique est utilisée pour faire fonctionner l'actionneur, résolvant ainsi le problème relatif à la compression d'air. "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un vérin",
        "symboleImageSrc":"verinDoubleEffet.png",
        "symboleImageSrcAlt":"Image du symbole d'un vérin",
        "symboleTitle":"Vérin",
        "symboleDescription": "Un vérin pneumatique ou hydraulique sert à créer un mouvement mécanique, et consiste en un tube cylindrique (le cylindre) dans lequel une pièce mobile, appelée le piston, sépare le volume du cylindre en deux chambres isolées l'une de l'autre. Un ou plusieurs orifices permettent d'introduire ou d'évacuer un fluide dans l'une ou l'autre des chambres et ainsi déplacer le piston. "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un vérin simple effet à ressort",
        "symboleImageSrc":"verinSimpleEffetResort.png",
        "symboleImageSrcAlt":"Image du symbole d'un vérin simple effet à ressort",
        "symboleTitle":"Vérin simple effet à ressort",
        "symboleDescription": "Un vérin avec une seule entrée d’air pour faire sortir la tige et un ressort pour la rentrée."
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un vérin double effet ",
        "symboleImageSrc":"verinDoubleEffet.png",
        "symboleImageSrcAlt":"Image du symbole d'un vérin double effet",
        "symboleTitle":"Vérin double effet ",
        "symboleDescription": "Un vérin avec 2 entrées d’air pour faire entrer et sortir la tige du vérin. "
    },
    {
        "ordinaryImageSrc":"wallJaune.png",
        "ordinaryImageSrcAlt":"Image d'un vérin double effet avec amortisseur",
        "symboleImageSrc":"verinDoubleEffetAmortisseur.png",
        "symboleImageSrcAlt":"Image du symbole d'un vérin double effet avec amortisseur",
        "symboleTitle":"Vérin double effet avec amortisseur",
        "symboleDescription": "Un vérin avec 2 entrées d’air pour faire entrer et sortir la tige du vérin, l’amortisseur permet de ralentir la tige en fin de course.."
    }
    
]



