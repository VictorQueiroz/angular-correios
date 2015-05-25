# angular-correios

Módulo para AngularJS que te ajudará a manipular a API dos Correios.

### Installation
```
bower install --save angular-correios
```

### Usage
```js
angular.module('app', ['angular-correios'])
.controller('MyApp', function () {
	$scope.ourPostalCode = false;

	Correios.get('02011200').then(function (data) {
		$scope.ourPostalCode = data.cep;
	});
});
```