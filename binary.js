binary = function(decimalValue) {
    var binaryValue = '';
    if (decimalValue == 0) {
        binaryValue = '0';
    } else if (decimalValue % 2 == 1) {
        var partial = binary(parseInt(decimalValue / 2));
        if (partial != '0') binaryValue += partial;
        binaryValue += '1';
    } else {
        binaryValue += binary(parseInt(decimalValue / 2)) + '0';
    }
    return binaryValue;
}
