var World = Base.extend( {
	
	constructor: function()
	{
		this.level = new Level;
		this.active_objects = new ActiveObjectStorage;
		
		var that = this;
		
		var prompt = window.prompt( 'Load level', 'curvy' );
		
		if( prompt !== null )
		{
			this.level.load( prompt, function()
			{
				that.level.draw();
				that.active_objects.add( 'player', new Player( that.level.data.spawn.x, that.level.data.spawn.y ) );
				that.collision_observer = new CollisionObserver;
			} );
		}
	},
	update: function()
	{
		if( this.level.is_loaded )
		{
			this.level.update();
			this.active_objects.update_all();
			this.collision_observer.check_collisions();
		}
	}
	
} );