function fetchGET(url) {
 	fetch(url, {  method: 'POST',
                mode: 'no-cors',
                headers: new Headers(
                   {"Content-Type": "application/json",
                    "Accept":"application/json"}
                )
             }
           )
 		.then(function(response) {
      console.log(response);
 			if (response.headers.get("content-type").indexOf("application/json") !== -1) {
 				return response.json();
 			} else {
 				throw new TypeError(
 					'Response from "' + url + '" has unexpected "content-type"'
 				);
 			}
 		})
 		.then(function(data) {
      console.log(data);
 			console.log('JSON from "' + url + '" parsed successfully!');
 		})
 		.catch(function(error) {
 		// 	console.error(error.message);
    console.log(error);
 		});
 }

function doTheFetchThing(){
  fetchGET("https://api.linkedin.com/v1/people/~?format=json");
}
