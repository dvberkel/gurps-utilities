(function(Backbone, Palor, undefined){
    var Orb = Backbone.Model.extend({
	defaults : { symbol : "unknown" },
	
	symbol : function(){
	    return this.get("symbol");
	}
    });

    var OrbContainer = Backbone.Model.extend({
	defaults : { "orb" : undefined },

	place : function(orb){
	    if (this.get("orb")) {
		throw "container occupied";
	    }
	    this.set("orb", orb);
	},

	remove : function(){
	    var orb = this.get("orb");
	    this.set("orb", undefined);
	    if (orb) {
		return orb;
	    }
	    throw "container empty";
	},

	orb : function(){
	    return this.get("orb");
	}
    });

    Palor.Orb = Orb;
    Palor.OrbContainer = OrbContainer;
})(Backbone, Palor ? Palor : {});