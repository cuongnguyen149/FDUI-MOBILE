/*
 * testFilter
 */

'use strict';

(function () {
    function PaginationFilter() {
        return function(input, start) {
            if(input){
                start = +start; //parse to int
                return input.slice(start);
            }
        }
    }

    fdui.filter('paginationFilter', PaginationFilter);
})();
