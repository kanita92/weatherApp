// Personal API Key for OpenWeatherMap API
/* Global Variables */

const baseURL= 'http://api.openweathermap.org/data/2.5/forecast?zip=&appid=eda647e59ce510ca324ce6591fa4e948';
const apiKey = 'eda647e59ce510ca324ce6591fa4e948&units=imperial';

const generateButton = document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const zipCode = document.getElementById('zip').value ;
    getWeatherByZipCode(baseURL,zipCode,apiKey)

}

//requesting for weather info from openweather map
const getWeatherByZipCode = async(baseURL,zipCode,apiKey)=>{


    const res = await fetch(baseURL+zipCode+key)

    try{
    
        const data = await res.json();
        console.log(data)

    }   catch(error){
        console.log("error",error);
    }

    return 
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(d);


// Client side POST route:

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/addMostRecentData',{})

// Client Side GET route: There should be an asynchronous function 
// to fetch the data from the app endpoint.
// Function to GET Project Data:

const retrieveData = async () =>{
 const request = await fetch('/all');
 try {
 // Transform into JSON
 const allData = await request.json()
 console.log(allData)
 // Write updated data to DOM elements
 document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
 document.getElementById('content').innerHTML = allData.feel;
 document.getElementById("date").innerHTML =allData.date;
 }
 catch(error) {
   console.log("error", error);
//    appropriately handle the error
 }
}







