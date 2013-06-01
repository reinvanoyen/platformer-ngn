var Player = AnimatedObject.extend( {

	constructor: function( x, y )
	{
		this.base();
		
		var texture = PIXI.Texture.fromImage( "sprites/point.png" );
		this.set_texture( texture );
		
		this.set_animation( [
			PIXI.Texture.fromImage( "sprites/player/walking_01.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_02.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_03.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_04.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_05.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_06.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_07.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_08.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_09.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_10.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_11.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_12.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_13.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_14.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_15.png" ),
			PIXI.Texture.fromImage( "sprites/player/walking_16.png" ),
			PIXI.Texture.fromImage( "sprites/player/idle_01.png" )
		], {
			IDLE: [ 16, 16 ],
			WALKING: [ 0, 15 ]
		} );
		
		this.set_position( x, y);
		this.direction = 1;
		this.movement_speed = 8;
	},
	update: function()
	{
		this.vx = 0;
		
		if( this.vy === 0 )
		{
			if( Game.input_manager.is_key_down( 32 ) )
			{
				this.vy = -23;
			}
		}
		
		if( Game.input_manager.is_key_down( 37 ) )
		{
			this.direction = -1;
			this.vx = -this.movement_speed;
			this.sprite_animation.play( 'WALKING' );
		}
		else if( Game.input_manager.is_key_down( 39 ) )
		{
			this.direction = 1;
			this.vx = this.movement_speed;
			this.sprite_animation.play( 'WALKING' );
		}
		else
		{
			this.sprite_animation.play( 'IDLE' );
		}
		
		this.sprite.scale.x = this.direction;
		this.move();
	}
	
} );