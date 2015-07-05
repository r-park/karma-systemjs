'use strict';

import lettersRegexp from './letters-regexp.js';


export default {
  isValid(str) {
    return lettersRegexp.test(str);
  }
}
