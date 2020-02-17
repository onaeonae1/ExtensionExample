const COORDS = 'coords';
const API_KEY = "3ccf53163b8ca88eadc8eb78cd3c83a1";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        //response 대기
        return response.json();
    }).then(function(json){
        //response 들어오면 날짜JSON을 받아온 것이므로 이를 출력
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} °C @${place}`;
        console.log(json);
    });
}
function saveCoords(coordsObj){
    //로컬 저장소에 저장할땐 stringify
    console.log(coordsObj);
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function handleGeoSucces(position){
    console.log(position);
    const latitude = position.coords.latitude; //위도
    const longitude = position.coords.longitude; //경도
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log("cant access location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    //askForCoords();
    if(loadedCoords==null){
        askForCoords();
    }
    else{
        //parse해서 가져옴
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();