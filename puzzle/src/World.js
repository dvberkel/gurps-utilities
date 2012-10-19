(function($, _, Backbone, undefined){
    var WorldView = Backbone.View.extend({
	el : 'body',

	initialize : function(){
	    this.render();
	},

	render : function(){
	    var container = $("<div />");
	    container.appendTo(this.$el);
	}
    });

    Palor.WorldView = WorldView;
})(jQuery, _, Backbone, Palor);