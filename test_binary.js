(function(){
    try {

        assert("0 in decimal should be 0 in binary | returned value was: " + binary(0), binary(0) == '0');

        assert("1 in decimal should be 1 in binary | returned value was: " + binary(1), binary(1) == '1');

        assert("2 in decimal should be 10 in binary | returned value was: " + binary(2), binary(2) == '10');

        assert("3 in decimal should be 11 in binary | returned value was: " + binary(3), binary(3) == '11');

        assert("4 in decimal should be 100 in binary | returned value was: " + binary(4), binary(4) == '100');

        assert("5 in decimal should be 101 in binary | returned value was: " + binary(5), binary(5) == '101');

        assert("8 in decimal should be 1000 in binary | returned value was: " + binary(8), binary(8) == '1000');

        assert("16 in decimal should be 10000 in binary | returned value was: " + binary(16), binary(16) == '10000');

        assert("17 in decimal should be 10000 in binary | returned value was: " + binary(17), binary(17) == '10001');

        assert("158 in decimal should be 10011110 in binary | returned value was: " + binary(158), binary(158) == '10011110');

        assert("1337 in decimal should be 10100111001 in binary | returned value was: " + binary(1337), binary(1337) == '10100111001');

        console.log("All tests passed!");
    } catch(msg) {
        console.log("Test failed: " + msg);
    }
})();
