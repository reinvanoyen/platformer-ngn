var SpriteAnimation = Base.extend( {
	
	animation_data: {},
	constructor: function( textures, animation_data )
	{
		this.stepper = 0;
		this.sprite = new PIXI.MovieClip( textures );
		this.animation_data = animation_data;
	},
	play: function( scene )
	{
		if( this.stepper % 3 === 0 )
		{
			var scene_data = this.animation_data[ scene ];
				
			var start_frame = scene_data[ 0 ];
			var end_frame = scene_data[1];
			
			if( start_frame === end_frame )
			{
				this.sprite.gotoAndStop( start_frame );
			}
			else
			{
				if( this.sprite.currentFrame < end_frame )
				{
					this.sprite.gotoAndStop( this.sprite.currentFrame + 1 );
				}
				else
				{
					this.sprite.gotoAndStop( start_frame );
				}
			}
		}
		
		this.stepper++;
	}
} );