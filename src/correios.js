var join = function () {
	var delimiter = '/';
	var array = Array.prototype.slice.apply(arguments);

	return Array.prototype.join.apply(array, [delimiter]);
};

function CorreiosProvider (){
	var defaults = this.defaults = {
		endpoint: '//viacep.com.br/ws',
    		lastParameter: '/json'
	};
	this.$get = CorreiosFactory;
	function CorreiosFactory ($http) {
		function Correios () {}

		Correios.prototype = {
			endpoint: function (postalCode) {
				return join(defaults.endpoint, postalCode + defaults.lastParameter);
			},
			transformResponse: function (res) {
				return res.data;
			},
			get: function (postalCode) {
				return $http.get(this.endpoint(postalCode)).then(this.transformResponse);
			}
		};

		return new Correios();
	}
}

angular.module('angular-correios', [])
.provider('Correios', CorreiosProvider);
