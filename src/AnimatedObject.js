var AnimatedObject = ActiveObject.extend( {

	set_animation: function( textures, animation_data )
	{
		this.sprite_animation = new SpriteAnimation( textures, animation_data );
		this.sprite_animation.sprite.anchor.x = 0.5;
		this.sprite_animation.sprite.anchor.y = 1;
		this.sprite = this.sprite_animation.sprite;
	}

} );