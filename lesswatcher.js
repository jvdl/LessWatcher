#!/usr/bin/env node

"use strict";

var helper = require("./lib/helper"),
	colors = require("colors"),
	monitor = require("less-monitor");

var configFile = "lesswatcher.config";

//default options
var options = {
	directory: "styles/less/",
	output: "../css/", //based on the dir where less files are parsed from
	options: true,
	master: true,
	force: true,
	debug: true,
	debugType: "comment"
};



helper.readConfig(
	configFile,
	function(configFileOptions){
		options = helper.extend(options, configFileOptions);
		main();
	},
	function(){
		main();
	}
);



function main() {

	var args = process.argv.slice(1),
		continueProcessing = true,
		currentErrorcode;

	args = args.filter(function (arg) {
		var match;

		if (match = arg.match(/^--?([a-z][0-9a-z-]*)(?:=([^\s]+))?$/i)) {
			arg = match[1];
		}
		else {
			return arg;
		}

		switch (arg) {
			case "b":
			case "build-only":
				monitor.app.on("parseCompleteAll", function( filesMap, options) {
					cli.logLine();
					cli.log( "All files parsed and saved.".cyan );
					cli.logLine();
					cli.log("Build Complete - Exiting");
					cli.logLine();

					process.removeAllListeners("exit");
					process.exit();
				});
				break;
			case "d":
			case "directory":
				options.directory = match[2];
				break;
			case "o":
			case "output":
				options.output = match[2];
				break;
			case "h":
			case "help":
				require("./lib/usage").print();
				continueProcessing = false;
		}

	});

	if (!continueProcessing) {
		return;
	}

	var cli = monitor.cli( monitor.app );

	cli.config = helper.extend(cli.config, options);

	monitor.app.init( options );

}
