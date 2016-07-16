/*
 * testFilter
 */

'use strict';

(function () {
    function ToDoTileDirective() {
        return {
        	restrict: 'EA',
        	replace: false,
		    templateUrl: './directive/toDoTileDirective/toDoTileDirective.html'
		};
    }

    fdui.directive('toDoTileDirective', ToDoTileDirective);
})();
