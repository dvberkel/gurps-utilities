beforeEach(function(){
    this.addMatchers({
	toHaveSymbol : function(expected){
	    return this.actual.symbol() === expected;
	},
	toHaveSymbols : function(expected){
	    var result = true;
	    this.actual.eachContainer(function(container, index){
		result = result && container.orb().symbol() === expected[index];
	    });
	    return result;
	}
    });
});