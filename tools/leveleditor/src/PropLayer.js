var PropLayer = Layer.extend( {
	
	prop_data: {},
	constructor: function( width, height, grid_size )
	{
		this.base( width, height, grid_size );
		
		var that = this;
		this.$layer.click( function( e )
		{
			that.process_click( e );
		} );
	},
	process_click: function( e )
	{
		var type = prompt( 'type', 'crate' );
		
		if( type !== null )
		{
			var prop_name = prompt( 'prop name' );
			
			if( prop_name !== null )
			{
				this.prop_data[ prop_name ] = {};
				this.prop_data[ prop_name ].type = type;
				this.prop_data[ prop_name ].x = e.offsetX;
				this.prop_data[ prop_name ].y = e.offsetY;
				
				this.load_prop( type, e.offsetX, e.offsetY );
			} 
		}
	},
	load_prop: function( type, x, y )
	{
		var that = this;
		$.ajax( {
			url: '../../props/' + type + '.prop',
			dataType: 'json',
			success: function( data )
			{
				that.show_prop( data.texture, x, y );
			}
		} );
	},
	show_prop: function( texture, x, y )
	{
		$prop = $( '<img>' ).attr( 'src', '../../sprites/' + texture ).addClass( 'prop' ).css( {
			top: y,
			left: x
		} ).appendTo( this.$layer );
	},
	export: function()
	{
		return this.prop_data;
	}
	
} );