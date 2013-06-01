var CollisionObserver = Base.extend( {

	constructor: function()
	{
		this.level = Game.world.level;
		this.player = Game.world.active_objects.get( 'player' );
	},
	check_collisions: function()
	{
		this.check_player_vs_level();
	},
	check_player_vs_level: function()
	{
		if( this.level.is_loaded )
		{
			var c = this.player.get_position();
			
			var grid_x = Math.floor( c.x / this.level.data.grid_size );
			var grid_y = Math.floor( c.y / this.level.data.grid_size );
			
			var line_data = this.level.data.collision_data[ grid_x ];
			
			if( line_data )
			{
				if( line_data[ grid_y ] )
				{
					// We gathered our line information
					var ax = ( line_data[ grid_y ][ 0 ] + grid_x ) * this.level.data.grid_size;
					var ay = ( line_data[ grid_y ][ 1 ] + grid_y ) * this.level.data.grid_size;
					var bx = ( line_data[ grid_y ][ 2 ] + grid_x ) * this.level.data.grid_size;
					var by = ( line_data[ grid_y ][ 3 ] + grid_y ) * this.level.data.grid_size;
					
					// Check if point is under line
					var position_to_line = (bx - ax) * (c.y - ay) - (by - ay) * (c.x - ax);
					
					if( position_to_line >= 0 )
					{
						// Do some crazy shit
						var slope_m = ( ay - by ) / ( ax - bx );
						var intercept_b = ay - slope_m * ax;
						var interception = slope_m * c.x + intercept_b;
					
						// Check if we need to slide
						if( slope_m < -1 || slope_m > 1 )
						{
							this.player.vx_dmg = slope_m*2;
						}
						else
						{
							this.player.vx_dmg = 0;
						}
						
						// Bounce the object
						this.player.vy = -Math.floor( this.player.vy * this.player.bounce_factor );
						
						// Set the player position to where it intersected with the line
						this.player.sprite.position.y = interception;
					}
					
				}
			}

		}
	}
	
} );