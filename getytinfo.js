import { metadata } from 'youtube-metadata-from-url';
const url = 'https://youtu.be/8mJyNs5U-Xo';
 
metadata(url).then(function(json) {
    console.log(json);
}, function(err){
    console.log(err);
});