var CollisionTile = Base.extend( {

	constructor: function( x, y, size )
	{
		var that = this;

		this.grid_size = parseInt( size );
		
		this.tile_x = x;
		this.tile_y = y;
		
		this.is_complete = false;
		
		this.$tile = $( '<div>' ).addClass( 'collision_tile' ).css( {
			top: y * size,
			left: x * size,
			width: size,
			height: size
		} ).mousemove( function( e )
		{
			that.process_move( e );
		} ).click( function( e )
		{
			that.process_click( e );
		} );
		
		this.$node_cursor = $( '<div>' ).addClass( 'node_cursor' ).appendTo( this.$tile );
	},
	process_move: function( e )
	{
		var cursor_position_x, cursor_position_y;

		var half_tile_size = this.grid_size / 2;
		
		var distance_to_left = e.offsetX;
		var distance_to_top = e.offsetY;
		var distance_to_right = this.grid_size - distance_to_left;
		var distance_to_bottom = this.grid_size - distance_to_top;
		
		if( distance_to_left < half_tile_size )
		{
			if( distance_to_top < half_tile_size )
			{
				if( distance_to_left > distance_to_top )
				{
					cursor_position_x = distance_to_left;
					cursor_position_y = 0;
				}
				else
				{
					cursor_position_x = 0;
					cursor_position_y = distance_to_top;
				}
			}
			else
			{
				if( distance_to_left > distance_to_bottom )
				{
					cursor_position_x = distance_to_left;
					cursor_position_y = this.grid_size;
				}
				else
				{
					cursor_position_x = 0;
					cursor_position_y = distance_to_top;
				}
			}
		}
		else
		{
			if( distance_to_top < half_tile_size )
			{
				if( distance_to_right > distance_to_top )
				{
					cursor_position_x = distance_to_left;
					cursor_position_y = 0;
				}
				else
				{
					cursor_position_x = this.grid_size;
					cursor_position_y = distance_to_top;
				}
			}
			else
			{
				if( distance_to_right < distance_to_bottom )
				{
					cursor_position_x = this.grid_size;
					cursor_position_y = distance_to_top;
				}
				else
				{
					cursor_position_x = distance_to_left;
					cursor_position_y = this.grid_size;
				}
			}
		}
		
		this.$node_cursor.css( {
			left: cursor_position_x,
			top: cursor_position_y
		} ).attr( 'data-tile-x', cursor_position_x ).attr( 'data-tile-y', cursor_position_y );
	},
	process_click: function( e )
	{
		var cursor_position_x = parseInt( this.$node_cursor.attr( 'data-tile-x' ) );
		var cursor_position_y = parseInt( this.$node_cursor.attr( 'data-tile-y' ) );
		
		this.add_collision_node( cursor_position_x, cursor_position_y );
		
		var tile_x = Math.floor( cursor_position_x / this.grid_size );
		var tile_y = Math.floor( cursor_position_y / this.grid_size );
		
		if( ! this.point_a )
		{
			this.point_a = { x: cursor_position_x / this.grid_size, y: cursor_position_y / this.grid_size };
		}
		else if( ! this.point_b )
		{
			this.point_b = { x: cursor_position_x / this.grid_size, y: cursor_position_y / this.grid_size };
		}
		else
		{
			alert( 'Deleting line data for tile' );
			this.point_a = false;
			this.point_b = false;
		}
		
		this.update_state();
	},
	add_collision_node: function( x, y )
	{
		$( '<div>' ).addClass( 'collision_node' ).css( {
			top: y,
			left: x
		} ).appendTo( this.$tile );
	},
	update_state: function()
	{
		if( ! ( this.point_a && this.point_b ) )
		{
			this.is_complete = false;
			this.$tile.removeClass( 'complete' ).addClass( 'incomplete' );
		}
		else
		{
			this.is_complete = true;
			this.$tile.removeClass( 'incomplete' ).addClass( 'complete' );
		}
	}

} );