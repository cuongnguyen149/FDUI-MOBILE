/*
 * testFilter
 */

'use strict';

(function () {
    function TestFilter() {
        return function(input, start) {
            if(input){
                start = +start; //parse to int
                return input.slice(start);
            }
        }
    }

    fdui.filter('testFilter', TestFilter);
})();
