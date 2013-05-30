var CollisionObserver = Base.extend( {

	construct: function()
	{
	},
	check_collisions: function()
	{
		this.check_player_vs_level();
	},
	check_player_vs_level: function()
	{
		var player = Game.world.active_objects.get( 'player' );
		var level = Game.world.level;
		var c = player.get_position();
		
		var current_coord_index = Math.floor( c.x/50 );
		
		var a = level.level_data.coordinates[ current_coord_index ];
		var b = level.level_data.coordinates[ current_coord_index + 1 ];
		
		var slope_m = ( a.y - b.y ) / ( a.x - b.x );
		var intercept_b = a.y - slope_m * a.x;
		var interception = slope_m * c.x + intercept_b;

		// Check if point is under line
		var position_to_line = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
		
		if( position_to_line >= 0 )
		{
			player.vy = 0;
			
			// Set the player position to where it intersected with the line
			player.sprite.position.y = interception;
		}
	}
	
} );