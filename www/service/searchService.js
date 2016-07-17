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
	    return this.getAsync('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
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