/* jshint esversion: 6 */

import * as ls from './ls.js';
import * as util from './utility.js';

(function() {

    const list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');

    form.addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<li class="unchecked">' + item.value + '</li>';
      ls.store();
      util.countIncomplete();
      item.value = "";
    },false);
    
    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.classList.remove('checked');
        t.classList.add('unchecked');
      } else {
        t.classList.add('checked');
        t.classList.remove('unchecked');
      }
      ls.store();
      util.countIncomplete();
    },false);
    
    list.addEventListener('dblclick',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      }
      ls.store();
      util.countIncomplete();
    },false);
    ls.getValues();
    util.countIncomplete();
  })();

  const c = document.getElementById("showCompleted");
  const i = document.getElementById("showIncomplete");
  const a = document.getElementById("showAll");
  
  i.onclick = util.hideComplete;
  c.onclick = util.hideIncomplete;
  a.onclick = util.showAll;  

  function clearStorage() {
      localStorage.clear();
      location.reload();
  }

  window.local = {clearStorage};