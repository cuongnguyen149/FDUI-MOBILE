/*
 * 
 */

'use strict';

(function () {
    function SpinnerDirective() {
        return {
        	replace: true,
		    templateUrl: './directive/spinnerDirective/spinnerDirective.html'
		};
    }

    fdui.directive('spinnerDirective', SpinnerDirective);
})();
