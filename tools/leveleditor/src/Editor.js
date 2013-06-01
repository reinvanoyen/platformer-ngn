var Editor = {

	level_data: {},
	create: function( size, grid_size )
	{
		var that = this;
		
		this.grid_size = parseInt( size );
		this.collision_layer = new CollisionLayer( size, this.grid_size );
		
		this.$toolbar = $( '<div>' ).attr( 'id', 'toolbar' ).appendTo( $( 'body' ) );
		
		this.$export_button = $( '<button>' ).appendTo( $( this.$toolbar ) ).text( 'Export level' ).click( function()
		{
			that.export();
		} );
		
		this.$hide_collision_layer = $( '<button>' ).appendTo( $( this.$toolbar ) ).text( 'Hide collision layer' ).click( function()
		{
			that.collision_layer.hide();
		} );
		
		this.$show_collision_layer = $( '<button>' ).appendTo( $( this.$toolbar ) ).text( 'Show collision layer' ).click( function()
		{
			that.collision_layer.show();
		} );
	},
	export: function()
	{
		this.level_data.name = 'Some example';
		this.level_data.grid_size = this.grid_size;
		this.level_data.spawn = { x: 300, y: 0 };
		this.level_data.collision_data = {};
		this.level_data.collision_data = this.collision_layer.export();
		console.log( JSON.stringify( this.level_data ) );
	}

};