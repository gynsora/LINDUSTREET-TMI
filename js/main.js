
/*affichage des cours dans l'index (élec,méca,hydrau,pneu,automate,depannage) */
function indexCourseShow(coursesData,idName,baseLink,domainCSS){
    let divCourse = document.getElementById(idName);
    coursesData.forEach(course => {
        let index = coursesData.indexOf(course) ;
        let newLink = baseLink+'?id='+index;
        divCourse.innerHTML += indexCourseDesign(course,newLink,domainCSS);
    })
}
/* design pour les cours dans les index de domaine */
function indexCourseDesign(course,linkHref,domainCSS){
    let result = "";
    result += `
    <div class="courseContainer">
        <a href=${linkHref} title=${course["courseSlug"]}>
            <div class="courseLinkContainer ${domainCSS} ">
                <div class="dateCourse text-center">${course["courseDate"]}</div>
                <div class="row">
                <div class="col-12 col-md-9 col-lg-10 courseTitle">
                    ${course["courseTitle"]}
                    <div class="courseType">Domaine du cours :  ${course["domain"]}</div>
                </div>
                <div class="col-md-3 col-lg-2 listCourseLogo"><i class="bi bi-skip-end-circle-fill"></i></div>
                </div>
            </div>
        </a>
    </div>`;

    return result;
} 

/* fonction pour recuperer les parametre d'URL */
function getParameter( parameterName ){
    let parameters = new URLSearchParams ( window.location.search );
    if (!window.location.search) {
      throw new Error(`Erreur HTTP ! cours inexistant`);
      /*faire une redirection vers l'accueil*/
    }
    return parameters.get(parameterName);
}


/*design d'un cours entier dans la page de cours (élec,méca,hydrau,pneu,automate,depannage) 
design de la baniere de titre d'un cours*/
function courseShowTitle(courseData,idNameTitle){
    let titleData = courseData["courseTitle"];
    let divTitleOfTheCourse = document.getElementById(idNameTitle);
    divTitleOfTheCourse.innerHTML = titleData ;
}

/*fonction permettant de montrer la vidéo d'un cours dans la page de cours */
function courseVideo(courseData,idNameFullCourse){
  let divFullCourse = document.getElementById(idNameFullCourse);
    divFullCourse.innerHTML += fullCourseVideoShow(courseData) ;
}

/*fonction sur le design de la div pour la video des cours */
function fullCourseVideoShow(courseData){
    let result = "";
    result += `<div  class="ratio ratio-16x9 mb-4">
        <iframe src=${courseData["videoSrc"]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>`;
    return result;
}   

/*fonction permettant de montrer le contenu d'un cours (description) */
function fullCourseContentShow(courseData,idNameFullCourse){
  let result ="";
  for(let i= 0 ; i<courseData["courseContent"].length;i++ ){
      result+=`<div class="sectionCourse">${courseData["courseContent"][i][0]}</div>
      `;
      result +=`<table class="courseDescription">`;
      for(let j=0 ; j< courseData["courseContent"][i][1].length;j++){
        result +=`<tr>
                    
                    <th class="descriptionText"> <div class="circleBase circle1"></div> ${courseData["courseContent"][i][1][j]}</th>
                  </tr>`;
      }
      result +=`</table>`;
  }
  result += `<div class="endCourse">
                <a href="${courseData["index"]} ">J'ai fini ce cours et je retourne à l'index ${courseData["domain"]}</a>
            </div>`;
  let divFullCourse = document.getElementById(idNameFullCourse);
  divFullCourse.innerHTML += result ;
}


/*fonction permettant d'afficher les symboles et les définitions  */
function glossaryShow(glossaryData,idGlossaryContainer,imgFolder,symboleDomainCss){
  console.log(glossaryData);
  let i = 0 ;
  let result = "";
  for(let i = 0 ;i< glossaryData.length ; i++){ 
    result += `
        <div class="symboleContainer mt-5 mb-2 ${symboleDomainCss}" >
            <div class="row justify-content-center">
                <div class="col-10 col-lg-4 symboleContainerImage">
                    <img src="img/${imgFolder}/imageOrdinaire/${glossaryData[i]["ordinaryImageSrc"]}" alt="${glossaryData[i]["ordinaryImageSrcAlt"]}">
                </div>
                <div class="col-12 col-lg-8">
                    <div class="symboleContainerInfo">
                        <div class="row justify-content-center">
                            <div class="col-8 col-md-6 col-lg-4 symboleImage">
                                <img src="img/${imgFolder}/symbole/${glossaryData[i]["symboleImageSrc"]}" alt="${glossaryData[i]["symboleImageSrcAlt"]}">
                            </div>
                        </div>
                        <div class="symboleTitle">${glossaryData[i]["symboleTitle"]}</div> 
                        <p class="symboleDescription">
                            ${glossaryData[i]["symboleDescription"]}
                        </p>
                        
                    </div>
                </div>    
            </div>
        </div>`;
    }
  let divGlossary = document.getElementById(idGlossaryContainer);
  divGlossary.innerHTML += result ;
  console.log('resu')


}