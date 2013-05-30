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
			
			var current_coord_index = Math.floor( c.x/50 );
			
			var a = this.level.level_data.coordinates[ current_coord_index ];
			var b = this.level.level_data.coordinates[ current_coord_index + 1 ];
			
			if( a && b )
			{
				var slope_m = ( a.y - b.y ) / ( a.x - b.x );
				var intercept_b = a.y - slope_m * a.x;
				var interception = slope_m * c.x + intercept_b;
				
				// Check if point is under line
				var position_to_line = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
				
				if( position_to_line >= 0 )
				{
					// Check if we need to slide
					if( slope_m > 1 || slope_m < -1 )
					{
						this.player.vx_dmg = slope_m;
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
	
} );