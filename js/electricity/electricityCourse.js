//if(window.fetch){
   let idCourse = getParameter("id");
   //intégration du titre
   courseShowTitle(electricityTrainingData[idCourse],"titleCourseElectricity");
    //intégration de la vidéo
   courseVideo(electricityTrainingData[idCourse],"fullCourseElectricity");
    //intégration du contenu du cours
   fullCourseContentShow(electricityTrainingData[idCourse],"fullCourseElectricity");
//}
