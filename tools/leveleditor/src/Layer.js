var Layer = Base.extend( {
	
	constructor: function( width, height, grid_size )
	{
		this.grid_size = parseInt( grid_size );
		
		this.$layer = $( '<div>' ).attr( 'class', 'layer' ).css( {
			width: width * this.grid_size,
			height: height * this.grid_size
		} ).appendTo( $( 'body' ) );
	},
	show: function()
	{
		this.$layer.show();
	},
	hide: function()
	{
		this.$layer.hide();
	},
	set_to_front: function()
	{
		this.$layer.css( {
			zIndex: 9999
		} );
	},
	set_to_back: function()
	{
		this.$layer.css( {
			zIndex: 0
		} );
	}
	
} );