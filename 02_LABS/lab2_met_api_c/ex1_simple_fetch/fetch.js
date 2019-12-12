// var fs = require('fs');

const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&search?q=moon';
//const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/tags';
const objectBaseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

fetchMuseumData(searchUrl);

///let metData;
let myArray = [];

// fetch a query
function fetchMuseumData(url) {
  window
    .fetch(url)
    .then(data => data.json())
    .then(data => {
      // console.log('fetchMuseumData', data);
      fetchObjects(data);
    });
}

// from the response, fetch objects
function fetchObjects(data){

// .slice(1001,1021)

  let objectIDs = data.objectIDs.slice(1,5000);
  console.log("fetching: " + objectIDs.length + " objects");
  objectIDs.forEach(function(n) {
    // console.log(objectBaseUrl + n);
    let objUrl = objectBaseUrl + n;
    window
      .fetch(objUrl)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        addObject(data);
      });
  });
}

// create your own array using just the data you need
function addObject(objectData){
    var currentID = objectData.objectID;
    var currentTitle = objectData.title;
    var currentBeginDate = objectData.objectBeginDate;
    var currentGeneralDate = objectData.objectDate;
    var currentCulture = objectData.culture;
    var currentCountry = objectData.country;
    var currentNationality = objectData.artistNationality;
    var currentMedium = objectData.medium;
    var currentClass = objectData.classification;
    var currentTags = objectData.tags;
    var primaryImage = objectData.primaryImage;
    var primaryImageSmall = objectData.primaryImageSmall;


    var index = myArray.length;
    myArray[index] = {};
    myArray[index]["ID"] = currentID;
    myArray[index]["Title"] = currentTitle;
    myArray[index]["Beginning Date"] = currentBeginDate;
    myArray[index]["General Date"] = currentGeneralDate;
    myArray[index]["Culture"] = currentCulture;
    myArray[index]["Country"] = currentCountry;
    myArray[index]["Artist nationality"] = currentCountry;
    myArray[index]["Medium"] = currentMedium;
    myArray[index]["Classification"] = currentClass;
    myArray[index]["Tags"] = currentTags;
    myArray[index]["primary image"] = primaryImage;
    myArray[index]["Thumbnail"] = primaryImageSmall;



    // myArray.push({
    //   title: objectData.title,
    //   date: objectData.objectBeginDate,
    //   image: objectData.primaryImage
    // })

    console.log('object at index', index, myArray[index]);
    

  
}



  
  
  
  
  
  
  
  

// // All objects from the Islamic Art Departments
// const departmentsUrl =
//   "https://collectionapi.metmuseum.org/public/collection/v1/departments";

// fetchDepartmentsData(departmentsUrl);

// function fetchDepartmentsData(url) {
//   window
//     .fetch(url)
//     .then(data => data.json())
//     .then(data => {
//       console.log("fetchDepartmentsData", data);
//       const departments = data.departments;
//       const IslamicArtDepartment = departments.find(
//         d => d.displayName === "Islamic Art"
//       );
//       const IslamicArtDepartmentId = IslamicArtDepartment.departmentId;

//       // we should see IslamicArtDepartmentId is 14
//       fetchObjectsByDepartment(IslamicArtDepartmentId);
//     });
// }

// function fetchObjectsByDepartment(departmentId) {
//   const objectsUrl =
//     "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=" +
//     departmentId;

//   fetchMuseumData(objectsUrl);
// }

// let metData;
// let myArray = [];

// // fetch a query
// function fetchMuseumData(url) {
//   window
//     .fetch(url)
//     .then(data => data.json())
//     .then(data => {
//       console.log("fetchMuseumData", data);
//       fetchObjects(data);
//     });
// }

// // from the response, fetch objects
// function fetchObjects(data) {
//   // .slice(0, 10) gets a new array with just the first 10 elements
//   // because fetching 10000 objects at once can be a strain on the browser
//   let objectIDs = data.objectIDs.slice(0, 10);
//   console.log("fetching: " + objectIDs.length + " objects");
//   objectIDs.forEach(function(n) {
//     // console.log(objectBaseUrl + n);
//     let objUrl = objectBaseUrl + n;
//     window
//       .fetch(objUrl)
//       .then(data => data.json())
//       .then(data => {
//         // console.log(data);
//         addObject(data);
//       });
//   });
// }

// // create your own array using just the data you need
// function addObject(objectData) {
//   var currentID = objectData.objectID;
//   var currentTitle = objectData.title;
//   var currentDate = objectData.objectBeginDate;
//   var imgUrl = objectData.primaryImage;
//   var index = myArray.length;
//   myArray[index] = {};
//   myArray[index]["title"] = currentTitle;
//   myArray[index]["date"] = currentDate;
//   myArray[index]["image"] = imgUrl;

//   /*
//     myArray.push({
//       title: objectData.title,
//       date: objectData.objectBeginDate,
//       image: objectData.primaryImage
//     })
//     */
//   console.log("object at index", index, myArray[index]);
// }