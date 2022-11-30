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
    
    form.addEventListener('submit',function(e){
      e.preventDefault();
      zipcode = item.value
      loadData(zipcode);
      list.innerHTML += '<li id=' + item.value + '>' + item.value + '</li>';
      ls.store();
      item.value = "";
    },false);
    
    list.addEventListener('click',function(e){
      var t = e.target;
      zipcode = e.target.id;
      loadData(zipcode);
      ls.store();
    },false);
    
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
