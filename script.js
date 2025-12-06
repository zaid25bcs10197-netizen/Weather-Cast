

let btn1 = document.querySelector(".search");
btn1.addEventListener("click" , async function(){
   let city = document.getElementById("city").value;
   
   let apiKey = "6248effebc2674b3f49f237d84a0c0ba";
   
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   btn1.textContent = "Loading...";
   btn1.classList.add("loading");
   btn1.disabled = true;

   let response = await fetch(url);
   let data = await response.json();
   let list = document.querySelector(".list");
   list.innerHTML="";

   let weather = data.weather[0].main;
   let temperature = data.main.temp;
   let wind = data.wind.speed;
   
   let rescard = createCard(city , temperature, weather, wind);
   btn1.textContent = "Get Weather";
   btn1.classList.remove("loading");
   btn1.disabled = false;

   list.appendChild(rescard);

   console.log(list);
    
})
const iconMap = {
 
  Clear: "icons8-sun-50.png",
  Clouds: "icons8-cloud-50.png",
  Rain: "icons8-cloud-lightning-50.png",
  Drizzle: "icons8-cloud-umbrella-50.png",
  Thunderstorm: "icons8-cloud-lightning-50.png",
  Snow: "icons8-snow-50.png",
  Mist: "icons8-mist-48.png",
  Smoke: "icons8-mist-48.png",
  Haze: "icons8-wind-50.png",
  Dust: "icons8-wind-50.png",
  Fog: "icons8-mist-48.png"


};

function createCard(city , temp , weather, windspeed ){
    let icon = iconMap[weather] || "default.png";

    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
               <img src="./assets/${icon}">

                <h2>${city}</h2>
                <h1>${temp}°C</h1>
                <h4>${weather}</h4>
                <h5>Windspeed:-${windspeed} m/s</h5>
    `;
    return card;

}
