/* jshint esversion: 6 */

import * as ls from './ls.js';
import * as util from './utility.js';
import * as zip from './zip.js';

(function() {

    const list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
    var zipcode = '84321'
    loadData(zipcode);
    
    // adds zip code to list
    form.addEventListener('submit',function(e){
      e.preventDefault();
      zipcode = item.value
      loadData(zipcode);
      setTimeout(function(){  // delay so we can get the city and state
        let selLoc = document.getElementById('selectedLocation');
        list.innerHTML += '<li id=' + item.value + '>' + selLoc.textContent + '</li>';
        ls.store();
        item.value = "";
      }, 1500); // delay in milliseconds     
    },false);
    
    //selects zip code in list
    list.addEventListener('click',function(e){
      var t = e.target;
      zipcode = e.target.id;
      loadData(zipcode);
      ls.store();
    },false);
    
    // deleted zip code from list
    list.addEventListener('dblclick',function(e){
      var t = e.target;
      t.parentNode.removeChild(t);
      ls.store();
    },false);
    ls.getValues();
  })();

  function clearStorage() {
      localStorage.clear();
      location.reload();
  }

  window.local = {clearStorage};

  function loadData(zipcode){
    const zipurl = 'https://api.openweathermap.org/geo/1.0/zip?zip=' + zipcode + ',us&appid=7bcb523faeae2a7693622e17ed4cfcf2';
    zip.apiZipFetch(zipurl);
  }

const t = document.getElementById("toggle-weather");
const m = document.getElementById("toggle-mode");

t.onclick = util.toggleWeather;
m.onclick = util.toggleMode;
