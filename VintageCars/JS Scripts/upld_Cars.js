
//Download
const https = require('https');
const download = require('image-downloader')

 var search ='sexy-car'
https.get('https://api.unsplash.com/photos/random/?client_id=ef4f166c7e655cef77a3e1dd7782a7c3ab29c943ed60eb08dac64d76f8667c08&query='+ search +'&w=1080&h=1080', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
 
  resp.on('end', () => {
    photoUrl = JSON.parse(data).urls.custom;
    console.log(photoUrl);
    // Download to a directory and save with the original filename
const options = {
  url: photoUrl,
  dest: 'C:/Users/Hassan/Desktop/instagrambot/VintageCars/unsplash_Vintage_Car_dwnld/image.jpg' // Save to /path/to/dest/image.jpg
}
 
download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  }).catch((err) => {
    throw err
  })
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});


// Upload
var Client = require('instagram-private-api').V1;
var device = new Client.Device('succulenthell');
var storage = new Client.CookieFileStorage(__dirname + '/cookies/carVintagePage.json');

var username = 'carvintagepage';
var pass = 'Qwertyu12'

var Approved_Hashtags = ['#Beautiful ', '#Vintage ', '#Car ', '#Carstagram ', '#OnlyAutomobiles ',
						 '#OldStyle ' , '#Classic ', '#OldCars ', '#OldAutos ', '#ClassicCars ', 
						 '#CarPorn ', '#VintageCar ', '#Stunning ', '#Amazing '];

var caption = getCaption(Approved_Hashtags);

var pathOrStream = 'C:/Users/Hassan/Desktop/instagrambot/VintageCars/unsplash_Vintage_Car_dwnld/image.jpg';

Client.Session.create(device, storage, username, pass)
.then(function(session){
  return [Client.Upload.photo(session, pathOrStream), session]
})
.spread(function(upload, session) {
  return Client.Media.configurePhoto(session, upload.params.uploadId, caption)
})
.then(function(medium) {
  console.log(medium)
})

//////////////////////function////////////////////////////////

function getCaption(arr) {
	n = Math.floor(Math.random() * 7) + 3  
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }

    var caption = '';
	for(var tag of result)
		caption+= tag;

    return caption;
}