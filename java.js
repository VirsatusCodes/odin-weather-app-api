
let weatherLocation;


(function buttonApply() {
    const button = document.getElementById('input-location');
    const inputArea = document.getElementById('location-input');

    button.addEventListener('click', () => {
        if (inputArea.value) {
            weatherLocation = inputArea.value;
            getWeatherInfo();

        } else console.log('input a location!');
    });
})();

async function getWeatherInfo() {
    const textOutput = document.getElementById('weather-info');
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&units=imperial&APPID=d24b077e6c1742ff58872e0136f6ff54`);
    const img = document.querySelector('img');

    response.json()
    .then(function(response) {
        textOutput.textContent = `Whew! ${response.name}'s Weather sure is something!
                                    its a whopping ${response.main.temp} degrees 
                                    farenheit there! oof`;
        console.log(response);
        console.log(response.name);
        console.log(response.main);
        console.log(response.main.temp);
        if (response.main.temp < 100) console.log('real hot')
    })
    .then(async function (response) {
        let hotOrCold;
        if (response.main.temp > 70) {
            hotOrCold = 'hot';
        } else {
            hotOrCold = 'cold';
        }
       const gifResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=5J1l9E8XtgAsuQhUkHvL1CnhMZsaNv3f&s=${hotOrCold}`, {mode: 'cors'});
       
       gifResponse.json()
       .then(function(gifResponse) {
        img.src = gifResponse.data.images.original.url
       })
    })
    .catch(function(err) {
        console.log(err);
        console.log('oops something went wrong!')
    })
}