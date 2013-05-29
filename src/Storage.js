var Storage = Base.extend( {
	_objects : {},
	add: function( k, v )
	{
		this._objects[ k ] = v;
	},
	get: function( k )
	{
		return this._objects[ k ];
	},
	update_all: function()
	{
		for( key in this._objects )
		{
			this._objects[ key ].update();
		}
	}
} );