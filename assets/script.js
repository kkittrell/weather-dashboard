var apiKey = '84cf894a7e4f7788f5202071b862063a';
var forecast= document.getElementById("forecast");
var search = document.getElementById("search");
var searchCity = document.getElementById("search-city");
search.addEventListener("click", (event)=> {
    console.log(searchCity.value); fetch("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid=" + apiKey)

})
fetch("https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=0&lon=0&appid=" + apiKey)

.then(res => res.json())
.then(data => {
    console.log(data)
    for(i = 0; i < data.list.length; i += 8){
        console.log(data.list[i])
        var forecastDay = document.createElement("div")
        forecastDay.innerHTML = `
        <p>${data.list[i].main.temp}</p>
        `
forecast.append(forecastDay)
console.log(forecast)

}
})
