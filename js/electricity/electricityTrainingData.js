// base de données lié au cours d'électricité
const electricityTrainingData = [
    {
        "courseSlug":"les-grandeurs-electriques",
        "courseType":"training",
        "courseDate":"08/02/22",
        "courseTitle":"Les grandeurs électriques",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/2nyb9AQ5MiY",
        "videoTitle":"vidéo youtube des grandeurs électriques",
        "courseContent":[
            [
                "TENSION",
                [   "La tension noté U ou E, est la force imposé pour faire circuler les électrons (pente dans un fleuve)",
                    "L'unité de la tension est le volt V ",
                    "U = R * I",
                    "En courant alternatif, la tension évolue de façon sinusoïdale, elle est caractérisé par une tension efficace (Ueff) cette tension s'affiche sur les voltmètre, la tension efficace et légèrement plus faible que la tension maximale"
                ]
            ],
            [
                "INTENSITÉ",
                [   "L'intensité noté I, est le débit du courant électrique (volume d'eau traverser dans un fleuve)",
                    "L'unité de l'intensité du courant est l'ampère A",
                    "I = P / U ",
                    "En courant alternatif, l'intensité  évolue de façon sinusoïdale, elle est caractérisé par l'intensité efficace (Ieff) cette intensité s'affiche sur les ampèremètres."
                ]
            ],
            [
                "RÉSISTANCE",
                [   "La résistance noté R, est la capacité d'un matériau à réduire l'intensité (comme si le fleuve passait par un filtre)",
                    "L'unité de la résistance est le ohm",
                    "R = U / I ",
                    "En courant alternatif, l'intensité  évolue de façon sinusoïdale, elle est caractérisé par l'intensité efficace (Ieff) cette intensité s'affiche sur les ampèremètres.",
                    "En courant alternatif la résistance R est nommé impédance Z l'impédance est le calcul de l'ensemble des matériaux provoquant des résistances dans le système electrique.",
                    "L'impédance Z = la résistance R + l'inductance L + la capacité C",
                    "L'inductance est noté L, représente une bobine dans un système électrique à courant alternatif. Cette bobine crée un champ magnétique, comme le courant varie de façon sinusoïdale , lorsque le courant passe du positif au négatif le champ magnétique crée une résistance qui retarde le courant électrique. ",
                    "L'unité de l'inductance est le Henry",
                    "La capacité noté C, représente un condensateur dans un système électrique à courant alternatif. La capacité concentre les électrons sur l'une 2 bornes ce qui crée une avance du courant électrique, lorsque celui-ci est en alternatif",
                    "L'unité de la capacité  le Farade "
                ]
            ],
            [
                "PUISSANCE",
                [   "La puissance noté P, représente la puissance électrique d'un matériel",
                    "L'unité de la puissance est le watt W",
                    "P = U * I",
                    "P = U² /R ",
                    "P = R * I² ",
                    "En courant alternatif, la puissance est appelée puissance apparente et elle est noté S",
                    "En courant alternatif , si le circuit n'est composé que de résistance alors S = Ueff * Ieff",
                    "En courant alternatif , si le circuit est composé de matériaux inductif(objet créant de l'inductance L),ou de matériaux capacitif (objet créant de la capacité C)," ,
                    "S = Ueff * Ieff * cosϕ (dans un circuit alternatif monophasé)",
                    "S = Ueff * Ieff * cosϕ * √3 (dans un circuit alternatif tri-phasé) "
                ]
            ],
            [
                "AUTRES",
                [   "La fréquence noté F, représente le nombre d'oscillations (sinusoïdale) en 1 seconde",
                    "L'unité de la fréquence est le Hertz H",
                    "F = 1 / t",
                    "Le facteur de puissance en courant alternatif noté cosϕ, représente le déphasage puissance par rapport au courant",
                    "(ajouter l'unité de cosϕ )" ,
                    "cosϕ = R / Z"
                    
                ]
            ]
        ]       
    },
    {
        "courseSlug":"la-loi-d-ohm",
        "courseType":"training",
        "courseDate":"16/09/21",
        "courseTitle":" La loi d'ohm",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/uDP-eph3Vzc",
        "videoTitle":"vidéo youtube sur la loi d'ohm",
        "courseContent":[
            [
                "PRINCIPE DE LA LOI D'OHM ",
                [   
                    "Voir la vidéo"
                ]
            ]
        ]     
    },
    {
        "courseSlug":"les-disjoncteurs-magnéto-thermiques",
        "courseType":"training",
        "courseDate":"09/09/21",
        "courseTitle":" Les disjoncteurs magnéto-thermiques",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/kh3LoF28f8U",
        "videoTitle":"vidéo youtube sur les disjoncteurs magnéto-thermiques",
        "courseContent":[
            [
                "DÉFINITION DU DISJONCTEUR",
                [   
                    "Le disjoncteur est un interrupteur électrique  à commande automatique,il est conçu pour laisser circuler le courant et protéger le circuit contre les surcharges (thermique), les court-circuits (magnétique), ou d'une fuite à la terre (différentiel).",
                    "Pour faire simple, c’est un interrupteur qui coupe le courant tout seul dès lors qu’il détecte une anomalie.",
                    "Tous les circuits électriques et tous les appareils sont reliés obligatoirement à un disjoncteur par soucis de sécurité."
                ]
            ],
            [
                "LE DISJONCTEUR MAGNÉTIQUE",
                [  
                    "Un court-circuit se produit quand deux conducteurs de polarité différente se touchent, générant ainsi une surintensité excessive lorsque cela arrive une bobine détecte la surintensité et crée un champ magnétique qui ouvre les contacts du disjoncteur."
                ]
            ],
            [
                "LE DISJONCTEUR THERMIQUE",
                [  
                    "Une surcharge survient lorsque le circuit dépasse l'intensité déterminée par le disjoncteur, lorsque cela arrive le dispositif thermique du disjoncteur se déforme à cause de la chaleur produite par la surchauffe et provoque l'ouverture du circuit.(thermique)"
                ]
            ]
        ]        
    },
    {
        "courseSlug":"les-disjoncteurs-differentiel",
        "courseType":"training",
        "courseDate":"09/09/21",
        "courseTitle":" Les disjoncteurs différentiels",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/SsLRyBaStyk",
        "videoTitle":"vidéo youtube sur les disjoncteurs différentiels",
        "courseContent":[
            [
                "DÉFINITION DU DISJONCTEUR",
                [   
                    "Le disjoncteur est un interrupteur électrique  à commande automatique,il est conçu pour laisser circuler le courant et protéger le circuit contre les surcharges (thermique), les court-circuits (magnétique) , ou d'une fuite à la terre (différentiel).",
                    "Pour faire simple, c’est un interrupteur qui coupe le courant tout seul dès lors qu’il détecte une anomalie.",
                    "Tous les circuits électriques et tous les appareils sont reliés obligatoirement à un disjoncteur par soucis de sécurité."
                ]
            ],
            [
                "LE DISJONCTEUR DIFFÉRENTIEL",
                [  
                    "le disjoncteur peut détecter la différence d'intensité entre la phase et le neutre,La différence d'intensité du courant à laquelle réagit un disjoncteur est appelée la « sensibilité différentielle du disjoncteur » elle est obligatoirement de 30 mA sur les circuits terminaux domestiques selon la norme électrique française.",
                    "le disjoncteur différentiel fait passer chaque phase et neutre du circuit dans une bobine, lorsque l'intensité est normale les champ magnétique des bobines s'annule, mais lorsque la différence d'intensité entre phase et neutre dépasse la limite du disjoncteur cela crée un champ magnétique qui ouvre les circuit  il voit cela comme étant une fuite à la terre.(différentielle)",
                    "Un interrupteur différentiel s’appuie sur deux caractéristiques essentielles : le seuil de déclenchement du différentiel, qui peut être de 15 , 30 ou 45 milliampères, et le calibre d’ampérage, qui indique l’intensité maximale que peut supporter l’interrupteur (par exemple 25 A ou 40 A)"
                ]
            ]
        ]        
    },
    {
        "courseSlug":"les-contacteurs",
        "courseType":"training",
        "courseDate":"10/09/21",
        "courseTitle":" Les contacteurs",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/MuQHYYZUX7c",
        "videoTitle":"vidéo youtube sur les contacteurs",
        "courseContent":[
            [
                "FONCTION GÉNÉRALE DU CONTACTEUR",
                [   
                    "La fonction du contacteur est d'établir ou d'interrompre l'alimentation d'un actionneur (moteur, résistances de chauffage ...) ",
                    "Il appartient à la famille des préactionneurs c'est à dire que c'est un appareil qui reçoit un signal de la partie commande et qui permet l'alimentation d'un actionneur (partie puissance).",
                    "Le contacteur possède un fort pouvoir de coupure contrairement au relais"
                ]
            ],
            [
                "FONCTIONNEMENT",
                [  
                    "Le contacteur électromagnétique est un appareil mécanique de connexion commandé par un électroaimant ; Il fonctionne en tout ou rien (au repos ou actionné).",
                    "Lorsque la bobine de l'électroaimant est alimentée le contacteur se ferme",
                    "Dès que la bobine est mise hors tension, le circuit magnétique se démagnétise et le contacteur s'ouvre"
                ]
            ],
            [
                "L’UTILISATION",
                [  
                    "Par conception un contacteur permet, d'interrompre des courants monophasés ou polyphasés importants.",
                    "Il est conçu pour souffler les arcs électriques qui se produisent sur des charges inductives et d’absorber des pointes de forts courants sur des charges capacitive ou des démarrages moteurs, contrairement aux relais."
                ]
            ],
            [
                "EN COURANT ALTERNATIF",
                [  
                    "Le circuit magnétique est feuilleté afin de réduire les courants de Foucault * qui prennent naissance dans toute masse métallique soumise à un flux alternatif.",
                    "Courants de Foucault * : courants qui réduisent le flux utile et échauffent sans nécessité lecircuit magnétique."]
            ]
        ]        
    },
    {
        "courseSlug":"les-relais",
        "courseType":"training",
        "courseDate":"10/09/21",
        "courseTitle":" Les relais",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/xq0uhretnaU",
        "videoTitle":"vidéo youtube sur les relais",
        "courseContent":[
            [
                "FONCTION GÉNÉRALE DU RELAIS",
                [   
                    "Un relais électromécanique est un organe électrique permettant de commuter des circuits électriques à partir d'un ordre émis par la partie commande.",
                    "Ainsi, un relais permet l'ouverture et la fermeture d'un circuit électrique à partir d'une information logique."
                ]
            ],
            [
                "DESCRIPTION",
                [  
                    "Un relais est composé principalement d'un électroaimant qui, lorsqu'il est alimenté, soumet une force d’attraction magnétique à une pièce mobile ‘’palette’’ qui agit mécaniquement sur le système de commutation électrique : les contacts.",
                    "Le système de commutation peut être composé d'un ou plusieurs contacts simple effet appelés contacts normalement ouverts (NO) ou normalement fermés (NF), d'un ou plusieurs inverseurs.",
                "Dans les systèmes mettant en œuvre de plus fortes puissances , les relais ne sont plus adaptés. Le pouvoir de coupure d’un relais est faible"
                ]
            ],
            [
                "POUR RAPPEL",
                [  
                    "Le pouvoir de coupure d’un élément électromécanique représente sa capacité à ouvrir avec certitude un circuit en fonction d’un courant et d’une tensions donné en un temps déterminé et ceux-ci sans dommage pour son intégrité."
                ]
            ]
        ]        
    },
    {
        "courseSlug":"les-moteurs-triphasés",
        "courseType":"training",
        "courseDate":"15/09/21",
        "courseTitle":" Les moteurs triphasés",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/MkLrG3O5JWg",
        "videoTitle":"vidéo youtube sur les moteurs triphasé",
        "courseContent":[
            [
                "FONCTIONNEMENT DU MOTEUR TRIPHASÉS",
                [   
                    "Voir la vidéo"
                ]
            ]
        ]        
    },
    {
        "courseSlug":"le-demarrage-etoile-triangle",
        "courseType":"training",
        "courseDate":"15/09/21",
        "courseTitle":" Le démarrage étoile-triangle",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/LX9KomXWYCs",
        "videoTitle":"vidéo youtube sur du démarrage étoile-triangle",
        "courseContent":[
            [
                "FONCTIONNEMENT DÉMARRAGE ÉTOILE-TRIANGLE",
                [   
                    "Voir la vidéo"
                ]
            ]
        ]        
    },
    {
        "courseSlug":"le-servomoteur",
        "courseType":"training",
        "courseDate":"16/09/21",
        "courseTitle":" Le servomoteur",
        "domain": "électricité",
        "index":"electricite.html",
        "videoSrc":"https://www.youtube.com/embed/fb8ZSe8fVIQ",
        "videoTitle":"vidéo youtube sur le servomoteur",
        "courseContent":[
            [
                "FONCTIONNEMENT DU SERVOMOTEUR",
                [   
                    "Voir la vidéo"
                ]
            ]
        ]        
    }
     
           
    
]



// base de données lié au formule d'électricité
const elecFormulaData = [
    {
        "title":"puissance",
        "background-image":"wallJaune.png",
        "formula-list":["P=RI²","P=UI","P=U²/R","S=UIcosϕ(mono phasé)","S=UIcosϕ√3(tri phasé) "]
    },
    {
        "title":"intensité",
        "background-image":"wallJaune.png",
        "formula-list":["I=P/U","I=√(P/R)","I=U/R"]
    },
    {
        "title":"tension",
        "background-image":"wallJaune.png",
        "formula-list":["U=P/I","U=√(PR)","U=RI","U=ZI"]
    },
    {
        "title":"résistance",
        "background-image":"wallJaune.png",
        "formula-list":["R=U²/P","R=U/I","R=P/I²"]
    },
    {
        "title":"autre",
        "background-image":"wallJaune.png",
        "formula-list":["F=1/t","W=FIcosϕ","w=RpiF","cosϕ=R/Z","Û/Ueff=√2(mono phasé)","Û/Ueff=√3(mono phasé)"] 
    },
    {
        "title":"impédance",
        "background-image":"wallJaune.png",
        "formula-list":["Z=UI","Z=Lw","Z=√(R²+Lw²)","Z=1/Cw","Z=√(R²-1/Cw²)","Z=√(R²+(Lw-1/Cw)²)"]
    },
    {
        "title":"calcul thauvin/norton",
        "background-image":"wallJaune.png",
        "formula-list":[
            "Rx=R1+R2 résistance en série",
            "Rx=1/(1/R1+1/R2) résistance en parrallèle",
            "Cx=1/(1/C1+1/C2) capacité en série",
            "Cx=C1+C2 capacité en parrallèle",
            "Lx=L1+L2 inductance en série",
            "Lx=1/(1/L1+1/L2) inductance en parrallèle"
        ] 

    }
];


