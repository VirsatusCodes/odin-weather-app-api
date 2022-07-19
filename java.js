
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

    try{
    const textOutput = document.getElementById('weather-info');
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&units=imperial&APPID=d24b077e6c1742ff58872e0136f6ff54`);
    const responseObj = await response.json()
    const img = document.querySelector('img');

    textOutput.textContent = `Whew! ${responseObj.name}'s Weather sure is something!
                                its a whopping ${responseObj.main.temp} degrees 
                                farenheit there! oof`;

    let hotOrCold;
    
    if (responseObj.main.temp > 70) {
        hotOrCold = 'hot';
        console.log('1')
    } else {
        hotOrCold = 'cold';
        console.log('2')
    }
    const gifResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=5J1l9E8XtgAsuQhUkHvL1CnhMZsaNv3f&s=${hotOrCold}`, {mode: 'cors'});
    const gifResponseObj = await gifResponse.json()

    img.src = gifResponseObj.data.images.original.url
    } catch (err) {
        console.log(err)
    }
}