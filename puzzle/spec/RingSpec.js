describe("A Ring", function(){
    it("should be defined", function(){
	expect(Palor.Ring).toBeDefined();
    });

    it("should be instantiable", function(){
	expect(new Palor.Ring()).toBeDefined();
    });

    it("should have a default number of containers", function(){
	var ring = new Palor.Ring();
	var count = 0;

	ring.eachContainer(function(){
	    count++;
	});

	expect(count).toBe(5);
    });

    it("should be able to place an orb at a location", function(){
	var ring = new Palor.Ring();

	ring.at(0).place(new Palor.Orb({ "symbol" : "water" }));
	ring.at(1).place(new Palor.Orb({ "symbol" : "earth" }));
	ring.at(2).place(new Palor.Orb({ "symbol" : "wind" }));
	ring.at(3).place(new Palor.Orb({ "symbol" : "fire" }));
	ring.at(4).place(new Palor.Orb({ "symbol" : "mana" }));
	
	expect(ring).toHaveSymbols(["water", "earth", "wind", "fire", "mana"]);
    });

    it("should be able to initialize with symbols", function(){
	var ring = new Palor.Ring({symbols : ["gold", "silver", "bronze"]});

	expect(ring).toHaveSymbols(["gold", "silver", "bronze"]);
    });
 
    it("should be able to initialize with symbols", function(){
	var ring = new Palor.Ring({symbols : ["gold", "silver", "bronze"]});

	expect(ring).toHaveSymbols(["gold", "silver", "bronze"]);
    });

 
    it("should be able to rotate the symbols", function(){
	var ring = new Palor.Ring({symbols : ["gold", "silver", "bronze"]});

	ring.rotate();

	expect(ring).toHaveSymbols(["bronze", "gold", "silver"]);
    });

    it("should be able to merge with a different ring", function(){
	var a_ring = new Palor.Ring({symbols : ["gold", "silver", "bronze"]});
	var other_ring = new Palor.Ring({symbols : ["mercury", "dummy", "dummy"]});

	a_ring.merge(1, 2).with(1, 2).of(other_ring);

	expect(a_ring).toHaveSymbols(["gold", "silver", "bronze"]);
	expect(other_ring).toHaveSymbols(["mercury", "silver", "bronze"]);
    });

    it("should be able to merge with a different ring and independently be rotated", function(){
	var a_ring = new Palor.Ring({symbols : ["gold", "silver", "bronze"]});
	var other_ring = new Palor.Ring({symbols : ["mercury", "dummy", "dummy"]});
	a_ring.merge(1, 2).with(1, 2).of(other_ring);

	a_ring.rotate();
	other_ring.rotate();

	expect(a_ring).toHaveSymbols(["bronze", "mercury", "gold"]);
	expect(other_ring).toHaveSymbols(["silver", "mercury", "gold"]);
    });

});