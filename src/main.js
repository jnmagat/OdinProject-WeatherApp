import { getCurrentWeather } from "./weatherAPI";

const searchVal = document.getElementById('searchBar');

searchVal.addEventListener('keyup',function(e){
    if(e.key == 'Enter' || e.keyCode === 13){
        const search = document.getElementById('searchBar').value;
        getCurrentWeather(search);
    }
})