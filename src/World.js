var ExampleLevel = {
	coordinates: [
		{ x: 0, y: 50 },
		{ x: 50, y: 120 },
		{ x: 100, y: 160 },
		{ x: 150, y: 190 },
		{ x: 200, y: 200 },
		{ x: 250, y: 180 },
		{ x: 300, y: 200 },
		{ x: 350, y: 200 },
		{ x: 400, y: 230 },
		{ x: 450, y: 230 },
		{ x: 500, y: 230 },
		{ x: 550, y: 230 },
		{ x: 600, y: 230 },
		{ x: 650, y: 250 },
		{ x: 700, y: 290 },
		{ x: 750, y: 300 },
		{ x: 800, y: 360 },
		{ x: 850, y: 400 },
		{ x: 900, y: 420 },
		{ x: 950, y: 410 },
		{ x: 1000, y: 410 },
		{ x: 1050, y: 430 },
		{ x: 1100, y: 450 },
		{ x: 1150, y: 480 },
		{ x: 1200, y: 600 },
		{ x: 1250, y: 700 },
		{ x: 1300, y: 750 },
		{ x: 1350, y: 800 },
		{ x: 1400, y: 700 },
	]
};

var World = Base.extend( {
	
	constructor: function()
	{
		this.collision_observer = new CollisionObserver;
		this.active_objects = new ActiveObjectStorage;
		
		this.level = new Level;
		this.level.load( ExampleLevel );
		this.level.draw();
		
		this.active_objects.add( 'player', new Player( 300, 0 ) );
	},
	update: function()
	{
		this.collision_observer.check_collisions();
		this.level.update();
		this.active_objects.update_all();
	}
	
} );