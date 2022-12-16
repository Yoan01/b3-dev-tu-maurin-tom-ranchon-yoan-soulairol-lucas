const Calculatrice = require('../src/calculatrice').Calculatrice;

const expect = require('chai').expect;

describe('Testing Puissance Function', function() {
    it('1. Puissance', function(done) {
        let calcul1 = new Calculatrice(10,2);
        expect(calcul1.puissance()).to.equal(100);
        done();
    })
    
});

describe('Testing Racine carré Function', function() {
    it('2. Racine Carré', function(done) {
        let calcul2 = new Calculatrice(36);
        expect(calcul2.racineCarre()).to.equal(6);
        done();
    })
    
});