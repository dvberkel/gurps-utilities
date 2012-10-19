describe("An Orb", function(){
    it("should be defined", function(){
	expect(Palor.Orb).toBeDefined();
    });

    it("should be callable", function(){
	expect(new Palor.Orb()).toBeDefined();
    });

    it("should have a default symbol", function(){
	var orb = new Palor.Orb();

	var symbol = orb.symbol();

	expect(symbol).toBe("unknown");
    });

    describe("Container", function(){
	it("should be defined", function(){
	    expect(Palor.OrbContainer).toBeDefined();
	});

	it("should be callable", function(){
	    expect(new Palor.OrbContainer()).toBeDefined();
	});

	it("should be able to place an orb", function(){
	    var container = new Palor.OrbContainer();

	    container.place(new Palor.Orb());
	});

	it("should be able to remove a placed orb", function(){
	    var container = new Palor.OrbContainer();
	    var orb = new Palor.Orb({ symbol : "water"});
	    container.place(orb);

	    var result = container.remove();

	    expect(result).toHaveSymbol("water");
	});

	it("should not be able to place an orb if one is already present", function(){
	    var container = new Palor.OrbContainer();

	    container.place(new Palor.Orb());

	    expect(function(){
		container.place(new Palor.Orb());
	    }).toThrow();
	});

	it("should not be able to remove an orb if one is not present", function(){
	    var container = new Palor.OrbContainer();

	    expect(function(){
		var orb = container.remove();
	    }).toThrow();
	});


	it("should be able to place an orb after one is removed", function(){
	    var container = new Palor.OrbContainer();
	    container.place(new Palor.Orb());

	    container.remove()

	    expect(function(){
		container.place(new Palor.Orb());
	    }).not.toThrow();
	});
    });
});