/*
 * testFilter
 */

'use strict';

(function () {
    function SearchTileDirective() {
        return {
        	replace: true,
		    templateUrl: './directive/searchTileDirective/searchTileDirective.html'
		};
    }

    fdui.directive('searchTileDirective', SearchTileDirective);
})();
