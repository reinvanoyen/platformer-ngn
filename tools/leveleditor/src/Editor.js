var Editor = {

	level_data: {},
	create: function( width, height, grid_size )
	{
		var that = this;
		
		this.grid_size = parseInt( grid_size );
		this.collision_layer = new CollisionLayer( width, height, this.grid_size );
		this.spawn_layer = new SpawnLayer( width, height, this.grid_size );
		
		this.$toolbar = $( '<div>' ).attr( 'id', 'toolbar' ).appendTo( $( 'body' ) );
		
		this.$export_button = $( '<button>' ).appendTo( $( this.$toolbar ) ).text( 'Export level' ).click( function()
		{
			that.export();
		} );
		
		this.$collision_data = $( '<button>' ).appendTo( $( this.$toolbar ) ).text( 'Collision data' );
		this.$player_spawn = $( '<button>' ).appendTo( $( this.$toolbar ) ).text( 'Player spawn' );
		
		this.$player_spawn.addClass( 'active' );
		
		this.$collision_data.click( function()
		{
			that.$collision_data.addClass( 'active' );
			that.$player_spawn.removeClass( 'active' );
			that.collision_layer.set_to_front();
			that.spawn_layer.set_to_back();
		} );
		
		this.$player_spawn.click( function()
		{
			that.$player_spawn.addClass( 'active' );
			that.$collision_data.removeClass( 'active' );
			that.spawn_layer.set_to_front();
			that.collision_layer.set_to_back();
		} );
	},
	export: function()
	{
		this.level_data.name = 'Some example';
		this.level_data.grid_size = this.grid_size;
		this.level_data.spawn = this.spawn_layer.export();
		this.level_data.collision_data = {};
		this.level_data.collision_data = this.collision_layer.export();
		alert( JSON.stringify( this.level_data ) );
	}

};