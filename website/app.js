// Personal API Key for OpenWeatherMap API
/* Global Variables */

const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=eda647e59ce510ca324ce6591fa4e948&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
console.log(newDate);
// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
// Inside that callback function call your async GET request with the parameters:
// base url
// user entered zip code (see input in html with id zip)
// personal API key

const generateButton = document
  .getElementById("generate")
  .addEventListener("click", performAction);

function performAction(e) {
  const zipCode = document.getElementById("zip").value;
  const userFeelings = document.getElementById("feelings").value;
  getTempByZipCode(baseURL, zipCode, apiKey).then(function (data) {
    // final code for creating a POST route to save the data to our app would look like this:
    postData("/add", {
      temp: data.main.temp,
      feeling: userFeelings,
      date: newDate,
    });

    updateUI();
  });
}
// GET route
const getTempByZipCode = async (baseURL, zipCode, apiKey) => {
  const res = await fetch(baseURL + zipCode + apiKey);
  try {
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// Client side POST route:

const postData = async (url = "", data = {}) => {
  // console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Client Side GET route: There should be an asynchronous function
// to fetch the data from the app endpoint.
// Function to GET Project Data:

const updateUI = async () => {
  const request = await fetch("/all", { method: "GET" });
  try {
    const allData = await request.json();
    // console.log(allData, "hello");
    let tempElement = document.getElementById("temp");
    tempElement.innerHTML =
      "TODAY'S TEMPERATURE IS: " + Math.round(allData.temp) + "  degrees";
    let feelingElement = document.getElementById("content");
    feelingElement.innerHTML = "I AM FEELING:  " + allData.content;
    // document.getElementById("date").innerHTML = allData.date;
    let dateElement = document.getElementById("date");
    dateElement.innerHTML = "DATE: " + allData.date;

    return allData;
  } catch (error) {
    console.log("error", error);
  }
};
