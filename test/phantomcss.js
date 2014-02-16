casper
.start()


// test page
.thenOpen( 'test/fixture/lofi.html', function() {
	phantomcss.screenshot( 'body', 'lofi' );
})


// control page (missing 'lofi' class)
.thenOpen( 'test/fixture/control.html', function() {
	phantomcss.screenshot( 'body', 'control' );
});
