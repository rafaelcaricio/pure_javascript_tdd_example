(function(){
    try {
        
        if (function typeof assert) throw "assert is not a funcion";
    
        console.log("All tests passed!");
    } catch(e) {
        console.log("Test failed: " + e.message);
    }
})();
