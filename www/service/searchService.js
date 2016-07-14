'use strict';

(function(ServiceBase){

    function SearchService() {
		ServiceBase.call(this);
	}

	SearchService.prototype = Object.create(ServiceBase.prototype);
	SearchService.prototype.constructor = SearchService;

	SearchService.prototype.getRecentSearchAsync = function (userName) {
	    return this.getAsync('/rest/' + userName + '/recentSearch');
	};

	SearchService.prototype.getSimpleSearchResultAsync = function () {
	    return this.getAsync('/rest/search?keywords=Doc&_dc=1467261494166&page=1&start=0&pagesize=350');
	};

	SearchService.prototype.getSimpleSearchKeywordsAsync = function () {
	    return this.getAsync('/rest/configuration/search/fdtst10?_dc=1467261814013')
	};

	SearchService.prototype.getSavedSearchResultAsync = function () {
	    return this.getAsync('/rest/executefdksavedsearch/09020101800108ea?_dc=1467262127244&page=1&start=0&pagesize=350')
	};

	SearchService.prototype.getSavedSearchKeywordsAsync = function () {
	    return this.getAsync('/rest/fdksavedsearches?ispublic=false&_dc=1467261905532');
	};
	
	fdui.service('searchService', SearchService);
})(fdui.ServiceBase);