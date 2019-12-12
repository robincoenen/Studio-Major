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
const myObjectIds = [700359,700363,700356,700351,700353,700360,700352,700354,700357,700358,700355,700361,700316,700322,700317,700321,700318,700324,253530,700320,373134,700315,338480,252920,701240,701239,701244,701241,701242,701243,700245,450080,468751,228437,228440,228510,228506,228541,252452,228352,228329,228331,228336,228580,356393,466118 ]

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
