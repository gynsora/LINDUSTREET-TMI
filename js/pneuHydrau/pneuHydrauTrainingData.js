// base de données lié au cours de pneumatique
const pneuHydrauTrainingData = [
    {
        "courseSlug":"la-pression",
        "courseType":"training",
        "courseDate":"11/11/21",
        "courseTitle":"La pression",
        "domain": "pneumatique",
        "index":"pneumaHydraulique.html",
        "videoSrc":"https://www.youtube.com/embed/Ne25BZnZ4UA",
        "videoTitle":"vidéo youtube sur la pression",
        "courseContent":[
            [
                "LA PRESSION",
                [   
                    "L'unité de pression est le N/m2 ou pascal (Pa).", 
                    "Un pascal représente donc une force de 1 Newton appliquée sur une surface de 1 m². Pression(pascal) = Force(Newton) / surface(m²)",
                    
                    "Ceci permet de démultiplier les forces en fonction des surfaces en pression. (vérins hydrauliques, multiplicateurs de pressions...)",
                    "La pression absolue (Pabs) est la pression mesurée en référence à une pression nulle (vide absolu).",
                    "La pression manométrique (Pressure Gauge en englais) donne la différence entre la pression d'un fluide et la pression atmosphérique(Patm).",
                    "pour convertir une valeur de pression manométrique (PG) en pression absolue (Pabs) , il suffit d'ajouter la pression atmosphérique",
                    "Pabs = PG + Patm",
                    "Pour convertir une pression absolue en pression manométrique, on soustrait la pression atmosphérique",
                    "PG = Pabs- Patm"
                ]
            ]
        ]       
    },
    {
        "courseSlug":"la-loi-de-gay-lussac",
        "courseType":"training",
        "courseDate":"12/11/21",
        "courseTitle":"La loi de gay-lussac",
        "domain": "pneumatique",
        "index":"pneumaHydraulique.html",
        "videoSrc":"https://www.youtube.com/embed/TzSwb37AB6A",
        "videoTitle":"vidéo youtube sur la loi de gay-lussac",
        "courseContent":[
            [
                "LA LOI DE GAY LUSSAC: (rapport pression / température) ",
                [   
                    "La loi de Gay-Lussac permet de calculer le gain ou la perte de pression d’un gaz contenu dans un volume déterminé en fonction de la température. ",
                    "Elle s'explique plus classiquement de cette manière : « à volume constant, la pression absolue P exercée par une quantité fixée de gaz est proportionnelle à sa température absolue T ».",
                    "Cette loi définie en 1802 par Louis Joseph Gay-Lussac s'écrit sous la forme :",
                    "P1 / T1 = P2 / T2, ",
                    "Où P et T correspondent respectivement à la pression (en pascal, Pa) et à la température (en kelvin, K) à un état 1 et 2."
                
                ]
            ]
        ]       
    },
    {
        "courseSlug":"la-loi-de-boyle-mariotte",
        "courseType":"training",
        "courseDate":"12/11/21",
        "courseTitle":"La loi de boyle mariotte",
        "domain": "pneumatique",
        "index":"pneumaHydraulique.html",
        "videoSrc":"https://www.youtube.com/embed/_GeAqHdczgg",
        "videoTitle":"vidéo youtube sur la loi de boyle mariotte",
        "courseContent":[
            [
                "LOI DE BOYLE-MARIOTTE: (rapport pression / volume)  ",
                [   
                    "La loi de Boyle-Mariotte concerne le comportement de la pression et du volume d'un gaz réel à température constante.",
                    "Elle est la plus précise lorsque la pression est basse. Elle stipule que le produit du volume V d'un gaz par sa pression P à une température fixée est une constante, ce qui peut s'exprimer pour deux volumes de gaz sous des pressions différentes, à la même température, par l'équation suivante :", 
                    "P1 * V1 = P2 * V2",
                    "On considère qu' une seringue d’1 litre d’air et reliée à un manomètre qui indique 1 bar(correspondant à la pression atmosphérique).",
                    "Si on diminue de moitié le volume occupé par l’air, on constate que le manomètre indique 2 bar .SI on divise le volume occupé par l’air par 4. La pression monte à  4 bar."
            
                ]
            ]
        ]       
    },
    {
        "courseSlug":"la-loi-de-charles",
        "courseType":"training",
        "courseDate":"12/11/21",
        "courseTitle":"La loi de charles",
        "domain": "pneumatique",
        "index":"pneumaHydraulique.html",
        "videoSrc":"https://www.youtube.com/embed/VUpL8yuc-CA",
        "videoTitle":"vidéo youtube sur la loi de charles",
        "courseContent":[
            [
                "LOI DE CHARLES: (rapport volume / température) ",
                [   
                    "La loi de Charles décrit la relation entre le volume et la température d'un gaz. Elle stipule que, à pression constante, le volume occupé par une certaine quantité de gaz est directement proportionnel à sa température absolue.",
                    "V1 / T1 = V2 / T2",
                    "Le volume d'un gaz augmente lorsque sa température en degrés augmente."
                ]
            ]
        ]       
    },
    {
        "courseSlug":"les-symboles-pneumatiques",
        "courseType":"training",
        "courseDate":"12/11/21",
        "courseTitle":"Les symboles pneumatiques (en vidéo)",
        "domain": "pneumatique",
        "index":"pneumaHydraulique.html",
        "videoSrc":"https://www.youtube.com/embed/tgAgTjX59iM",
        "videoTitle":"vidéo youtube sur les symboles pneumatiques",
        "courseContent":[
            [
                "LES SYMBOLES PNEUMATIQUES: ",
                [   
                    "Voir la vidéo"
                ]
            ]
        ]       
    },
    {
        "courseSlug":"les-distributeurs",
        "courseType":"training",
        "courseDate":"12/11/21",
        "courseTitle":"Les distributeurs pneumatiques, hydrauliques ",
        "domain": "pneumatique",
        "index":"pneumaHydraulique.html",
        "videoSrc":"https://www.youtube.com/embed/nc725ZMg_E0",
        "videoTitle":"vidéo youtube sur les distributeurs pneumatique et hydrauliques",
        "courseContent":[
            [
                "LES DISTRIBUTEURS PNEUMATIQUES ET HYDRAULIQUES: ",
                [   
                    "Voir la vidéo"
                ]
            ]
        ]       
    },
    {
        "courseSlug":"les-bases-de-l'hydraulique-et-pneumatique",
        "courseType":"training",
        "courseDate":"08/12/21",
        "courseTitle":"Les bases de l'hydraulique et pneumatique",
        "domain": "hydraulique",
        "index":"pneumaHydraulique.html",
        "videoSrc":"https://www.youtube.com/embed/oIy35XosLJY",
        "videoTitle":"vidéo youtube des bases hydraulique et pneumatique",
        "courseContent":[
            [
                "LES BASES DE L'HYDRAULIQUE & DE LA PNEUMATIQUE",
                [   
                    "Voir la vidéo"
                ]
            ]
        ]       
    },
    {
        "courseSlug":"comment-lire-un-schema-hydraulique",
        "courseType":"training",
        "courseDate":"08/12/21",
        "courseTitle":"Comment lire un schèma hydraulique",
        "domain": "hydraulique",
        "index":"pneumaHydraulique.html",
        "videoSrc":"https://www.youtube.com/embed/_wR5c1nYnNk",
        "videoTitle":"vidéo youtube des grandeurs électriques",
        "courseContent":[
            [
                "COMMENT LIRE UN SCHEMA HYDRAULIQUE",
                [   
                    "Voir la vidéo"
                ]
            ]
        ]       
    }
     
     
             
]
