function fetchGET(url) {
 	fetch(url)
 		.then(function(response) {
 			if (
 				response.headers.get("content-type").indexOf("application/json") !== -1
 			) {
 				return response.json();
 			} else {
 				throw new TypeError(
 					'Response from "' + url + '" has unexpected "content-type"'
 				);
 			}
 		})
 		.then(function(data) {
 			console.log('JSON from "' + url + '" parsed successfully!');
 			console.log(data);
 		})
 		.catch(function(error) {
 			console.error(error.message);
 		});
 }

 fetchGET(" ");
