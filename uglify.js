var UglifyJS = require('uglify-js');
var fs = require('fs');

var files = [
    fs.readFileSync('person.js', "utf8"),
];
var result = UglifyJS.minify(files, {
	mangle: {
        toplevel: true,
        properties: {
            regex: /getFullName/
        }
    },
	compress: {
        hoist_funs: false,
		sequences: true,
		dead_code: true,
		conditionals: true,
		booleans: true,
		unused: true,
		if_return: true,
		join_vars: true,
		drop_console: false,
    },
    output: {
        beautify: true
    }
});

console.log(result.code);

fs.writeFileSync('person.min.js', result.code);