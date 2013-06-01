var World = Base.extend( {
	
	constructor: function()
	{
		this.level = new Level;
		this.active_objects = new ActiveObjectStorage;
		this.camera = new Camera;
		
		var that = this;
		
		var prompt = window.prompt( 'Load level', 'example' );
		
		if( prompt !== null )
		{
			this.level.load( prompt, function()
			{
				that.level.draw();
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
			this.camera.follow( this.active_objects.get( 'player' ) );
			this.collision_observer.check_collisions();
		}
	}
	
} );