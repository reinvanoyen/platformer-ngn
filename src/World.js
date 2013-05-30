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
		
		this.active_objects.add( 'player', new Player( 200, 20 ) );
	},
	update: function()
	{
		this.level.update();
		this.active_objects.update_all();
	}
	
} );