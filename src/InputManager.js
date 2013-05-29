var InputManager = Base.extend( {
	
	constructor: function()
	{
		var that = this;
		window.addEventListener( 'keydown', function( e )
		{
			that._keys_down[e.which] = true;
		} );
		window.addEventListener( 'keyup', function( e )
		{
			that._keys_down[e.which] = false;
		} );
	},
	_keys_down: {},
	is_key_down: function( key )
	{
		return !!this._keys_down[key];
	}
	
} );