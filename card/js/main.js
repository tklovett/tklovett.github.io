function initialize() {
	jQuery.ajax( {
		url: 'https://graph.facebook.com/tklovett?fields=cover'
		, dataType: 'json'
		, success: function( data ) {
			$("#cover-photo-frame img").attr("src", data.cover.source);
		}
		, error: function( data ) { console.log( 'error', data ); }
	});
}