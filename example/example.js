requirejs.config({
    baseUrl: '..',
    paths: {
      'underscore': 'node_modules/underscore/underscore-min',
      'jquery': 'node_modules/jquery/dist/jquery.min',
      'd3': 'node_modules/d3/d3.min'
    },
    shim: {
        d3: {
            exports: 'd3'
        }
    }
});

requirejs(["src/js/sunburst"], function(Sunburst) {
	var sunburst = new Sunburst('#sunburst', {
		data: {}
	});
});
