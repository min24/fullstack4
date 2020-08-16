import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash now import by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());


import {person as nguoi, modal} from './modules/modal.js';