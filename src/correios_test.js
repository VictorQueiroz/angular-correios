describe('angular-correios', function () {
	var Correios, $httpBackend;
	beforeEach(module('angular-correios'));
	beforeEach(inject(function (_Correios_, _$httpBackend_) {
		Correios = _Correios_
		$httpBackend = _$httpBackend_
	}))
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	it('should get a postal code', function () {
		$httpBackend.expectGET('http://cep.correiocontrol.com.br/02011200.json').respond({
			bairro: "Santana",
			logradouro: "Rua Voluntários da Pátria",
			cep: "02011200",
			uf: "SP",
			localidade: "São Paulo"
		});

		Correios.get('02011200').then(function (postalCode) {
			assert.equal('02011200', postalCode.cep);
		});

		$httpBackend.flush();
	});
});