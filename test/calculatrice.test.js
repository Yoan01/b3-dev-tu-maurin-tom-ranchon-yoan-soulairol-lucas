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

describe('Testing addition Function', function() {
    it('3. Addition', function(done) {
        let calcul3 = new Calculatrice(48,9);
        expect(calcul3.addition()).to.equal(57);
        done();
    })
    
});

describe('Testing soustraction Function', function() {
    it('4. Soustraction', function(done) {
        let calcul4 = new Calculatrice(48,9);
        expect(calcul4.soustraction()).to.equal(39);
        done();
    })
    
});

describe('Testing multiplication Function', function() {
    it('5. Multiplication', function(done) {
        let calcul5 = new Calculatrice(48,2);
        expect(calcul5.multiplication()).to.equal(96);
        done();
    })
    
});

describe('Testing division Function', function() {
    it('6. Division', function(done) {
        let calcul6 = new Calculatrice(5,10);
        expect(calcul6.division()).to.equal(0.5);
        done();
    })
    
});



describe('Testing Pourcentage Function', function() {
    it('7. Pourcentage', function(done) {
        let calcul7 = new Calculatrice(10,2);
        expect(calcul7.pourcentage()).to.equal(500);
        done();
    })
    
});