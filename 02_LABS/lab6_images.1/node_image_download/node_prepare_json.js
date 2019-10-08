/*
 * Note that this function uses *synchronous* JavaScript
 * There is a 2-second (2000 milliseconds) timer after which the JSON will be downloaded
 * so if the API calls are not finished by then, the JSON will only have the ones that did finish.
 * You can increase the timer if you need to.
 */

// load a default library that lets us read/write to the file system
var fs = require('fs')
// load a default library that lets us make HTTP requests (like calls to an API)
var request = require('request')

// endpoint URL
const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'

// object Ids I want to download
const myObjectIds = [203681, 203679, 203668, 205158, 204618, 204483, 191528, 202697, 202376, 191994, 191955, 209219, 199355, 198935, 198697, 198013, 191813, 438126, 344026, 739788, 735951, 739080, 717845, 723469, 631137, 700324, 388342, 669408, 659694, 408049, 428556, 428506, 428493, 428429, 359773, 336988, 384927, 340429, 401206, 380983, 395561, 345876, 351506, 351505, 355646, 355640, 355501, 355500, 355506, 355505, 347614, 362058, 359463, 360137, 358177, 355813, 355817, 357276, 386917, 386915, 386961, 386960, 386574, 335496, 367295, 383306, 334973, 339154, 363341, 337366, 390568, 343926, 345619,343673, 73134, 62842, 54172, 54969, 57101, 62833, 62831, 62826, 62825, 62821, 8164, 8159, 20532, 2094, 5203, 8163, 640570, 315, 13365, 14696, 2102, 4928, 8167, 8148, 8150, 8165, 8162, 8156, 5202, 3499, 8154, 7419, 7422, 9613, 316, 9208, 8161, 8155, 8146, 9615, 2091, 13416, 1454, 7418, 34, 8145, 2098, 8149, 2096, 7417, 14079, 4792, 8158, 8157, 8147, 8152, 8151, 4751, 8166, 7421, 317, 7420 ]

// set up empty Array for us to save results to
const myArray = []

function fetchUrl(objectId){
    request(url + '/' + objectId, function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      let obj = JSON.parse(body);

      console.log(obj.primaryImage);
      let index = myArray.length;
      myArray[index] = {};
      myArray[index]["objectID"] = obj.objectID;
      myArray[index]["title"] = obj.title;
      myArray[index]["date"] = obj.objectBeginDate;
      myArray[index]["primaryImage"] = obj.primaryImage;
      myArray[index]["filename"] = obj.primaryImage.split('/').pop();
    });
}

// call the function for each element in the myObjectIds array
myObjectIds.forEach(objectId => {
    fetchUrl(objectId)
})

// the function inside the setTimeout saves myResults to a JSON
// it will automatically run after 2000 ms
setTimeout(() => {
    fs.writeFileSync('./data.json', JSON.stringify(myArray), 'utf8')
}, 18000)
