(function(_, Backbone, Palor, undefined){
    var merge = function(ring, ring_indices ){
	var ring_containers = ring.get("containers");
	return {
	    "with" : function() {
		var other_indices = arguments;
		return {
		    "of" : function(other){
			var other_containers = other.get("containers");
			for(var index = 0, n = ring_indices.length; index < n; index++) {
			    other_containers[other_indices[index]] = ring_containers[ring_indices[index]];
			}
			other.set("containers", other_containers);
		    }
		};
	    }
	};
    }

    var Ring = Backbone.Model.extend({
	defaults : { "n" : 5},

	initialize : function(){
	    var orbContainerFactory = function(){ return new Palor.OrbContainer()};
	    if (this.has("symbols")) {
		var symbols = this.get("symbols");
		orbContainerFactory = function(index){ 
		    var container = new Palor.OrbContainer();
		    container.place(new Palor.Orb({ "symbol": symbols[index] }))
		    return container; 
		};
		this.set("n", symbols.length);
	    }
	    var containers = [];
	    for(var index = 0, bound = this.get("n"); index < bound; index++) {
		containers.push(orbContainerFactory(index));
	    }
	    this.set("containers", containers);
	},

	eachContainer : function(callback){
	    _.each(this.get("containers"), callback, this);
	},

	at : function(index){
	    return this.get("containers")[index];
	},

	rotate : function(){
	    var n = this.get("n");
	    var containers = this.get("containers");
	    var inOrb = containers[n-1].orb();
	    for (var index = 0; index < n; index++) {
		var container = containers[index];
		var outOrb = container.remove();
		container.place(inOrb);
		inOrb = outOrb;
	    }
	},

	merge : function(){
	    return merge(this, arguments);
	}
    });

    Palor.Ring = Ring;
})(_, Backbone, Palor ? Palor :  {});