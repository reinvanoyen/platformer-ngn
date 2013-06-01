var SpawnLayer = Layer.extend( {
	
	spawn_data: { x: 0, y: 0 },
	constructor: function( width, height, grid_size )
	{
		this.base( width, height, grid_size );
		var that = this;
			
		this.$layer.click( function( e ) {
			that.process_click( e );
		} );
		
		this.$player = $( '<img>' ).attr( 'src', '../../sprites/player/idle_01.png' ).addClass( 'prop' ).css( {
			top: this.spawn_data.y,
			left: this.spawn_data.x
		} ).hide().appendTo( this.$layer );
	},
	process_click: function( e )
	{
		this.spawn_data.x = e.offsetX;
		this.spawn_data.y = e.offsetY;
		this.update_spawn_position();
	},
	update_spawn_position: function()
	{
		this.$player.css( {
			top: this.spawn_data.y,
			left: this.spawn_data.x
		} ).show();
	},
	export: function()
	{
		return this.spawn_data;
	}
	
} );