var CollisionLayer = Layer.extend( {
	
	collision_data: {},
	collision_tiles: [],
	constructor: function( width, height, grid_size )
	{
		this.base( width, height, grid_size );
		
		var that = this;
		
		for( x = 0; x < width; x++ )
		{
			for( y = 0; y < height; y++ )
			{
				var tile = new CollisionTile( x, y, this.grid_size );
				tile.$tile.appendTo( this.$layer );
				this.collision_tiles.push( tile );
			}
		}
	},
	export: function()
	{
		for( i = 0; i < this.collision_tiles.length; i++ )
		{
			var tile = this.collision_tiles[ i ];
			
			if( tile.is_complete )
			{
				if( ! this.collision_data[ tile.tile_x ] )
				{
					this.collision_data[ tile.tile_x ] = {};
				}
				if( ! this.collision_data[ tile.tile_x ][ tile.tile_y ] )
				{
					this.collision_data[ tile.tile_x ][ tile.tile_y ] = [];
				}
				
				// Add points
				this.collision_data[ tile.tile_x ][ tile.tile_y ][ 0 ] = tile.point_a.x;
				this.collision_data[ tile.tile_x ][ tile.tile_y ][ 1 ] = tile.point_a.y;
				this.collision_data[ tile.tile_x ][ tile.tile_y ][ 2 ] = tile.point_b.x;
				this.collision_data[ tile.tile_x ][ tile.tile_y ][ 3 ] = tile.point_b.y;
			}
		}
		
		return this.collision_data;
	}
	
} );