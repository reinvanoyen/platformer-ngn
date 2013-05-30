var World = Base.extend( {
	
	constructor: function()
	{
		this.collision_observer = new CollisionObserver;
		this.active_objects = new ActiveObjectStorage;
		
		var that = this;
		
		this.level = new Level;
		
		var prompt = window.prompt( 'Load level', 'example_1' );
		
		if( prompt !== null )
		{
			this.level.load( prompt, function()
			{
				that.level.draw();
				that.active_objects.add( 'player', new Player( 300, 0 ) );
			} );
		}
	},
	update: function()
	{
		this.level.update();
		this.active_objects.update_all();
		this.collision_observer.check_collisions();
	}
	
} );