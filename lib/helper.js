"use strict";

var fs = require("fs"),
	colors = require("colors");

/**
 * Extend one object with another and return an extended object
 *
 * @param {Object} target Properties will be merged on to this object
 * @param {Object} other Properties from here will be merged on to the target
 * @returns {Object}
 */
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

/**
 * Read a config file if it exists.
 *
 * If it does exist, read the file, map the JSON and execute the if-exists callback
 * If the file does not exist, call the else callback
 *
 * @param {String} configFile
 * @param {Function} cbIfExists
 * @param {Function} cbElse
 */
function readConfig(configFile, cbIfExists, cbElse) {

	/**
	 * Initialize the readConfig
	 */
	function init() {
		fs.exists(configFile, function(exists){
			if (exists) {
				readFile(configFile, cbIfExists);
			}
			else {
				cbElse.call();
			}
		});
	}

	/**
	 * Read the config file.
	 *
	 * If there are errors reading the file or parsing the JSON
	 * an error is displayed.
	 *
	 * @param {String} configFile
	 * @param {Function} cb callback function
	 */
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
};

for (var h in helper) { exports[h] = helper[h]; }
