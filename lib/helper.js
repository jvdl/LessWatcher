var fs = require("fs"),
	colors = require("colors");

function extend (target, other) {
	target = target || {};
	for (var prop in other) {
		if (typeof other[prop] === 'object') {
			target[prop] = extend(target[prop], other[prop]);
		}
		else {
			target[prop] = other[prop];
		}
	}
	return target;
}

//read the map file
function readConfig(configFile, cb) {

	function init() {
		fs.exists(configFile, function(exists){
			if (exists) {
				readFile(configFile, cb);
			}
		});
	}

	function readFile(configFile, cb) {

		fs.readFile(configFile, "utf-8", function(err, content) {
			var jsonMap = {};
			content = content.trim();
			if (err !== null) {
				console.log("Errors while trying to load the config. Please check that "+configFile+" is readable.".red);
			}
			else if ( content !== undefined && content !== "") {
				try {
					jsonMap = JSON.parse(content);
				}
				catch(e) {
					console.log();
					console.log("Could not parse JSON in config file:".red, configFile);
					console.log();
				}

			}
			cb.call(this, jsonMap);
		});
	}

	init();
}

var helper = {
	readConfig: readConfig,
	extend: extend
}

for (var h in helper) { exports[h] = helper[h]; }
