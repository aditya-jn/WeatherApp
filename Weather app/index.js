    const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        const temperature = document.querySelector(".temp");
        const place = document.querySelector(".city");
        const humid = document.querySelector(".humidity") ;
        const wi = document.querySelector(".wind");
        



        async function checkWeather(city) {
            const apiKey = "bf585c3ad631d5048008886ecd6a882d";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const data = await fetch(`${apiUrl}`).then(response => response.json());
            const weathericon = document.querySelector(".weather-icon");

    

            place.innerHTML = `${data.name}`;
            temperature.innerHTML = `${Math.round(data.main['temp'])}°C`;
            humid.innerHTML = `${data.main.humidity}%`;
            wi.innerHTML = `${data.wind.speed} km/hr`;

            if(data.weather[0].main == "Clouds")
               weathericon.src = "./weather-app-img/images/clouds.png";
            else if(data.weather[0].main == "Clear")
               weathericon.src = "./weather-app-img/images/clear.png";
            else if(data.weather[0].main == "Drizzel")
               weathericon.src = "./weather-app-img/images/drizzel.png";
            else if(data.weather[0].main == "Mist")
               weathericon.src = "./weather-app-img/images/mist.png";
            else if(data.weather[0].main == "Rain")
               weathericon.src = "./weather-app-img/images/rain.png";
            else if(data.weather[0].main == "Snow")
               weathericon.src = "./weather-app-img/images/snow.png";
            
               document.querySelector(".weather").style.display = "block";
        }          

        

        searchBtn.addEventListener("click" , ()=> {
            checkWeather(searchBox.value);
        });

        
