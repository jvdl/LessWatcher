#LessWatcher
LessWatcher is a globally installable shorthand for using less-monitor. 
	
	usage: lesswatcher [options]
	
	options:
	  -h, --help              Print help (this message) and exit.
	
	  -d, --directory         Set input directory - where your .less files are located
	
	  -o, --output            Set output directory - this is relative to your the directory
	                          where less files are generated from.
	
	  -b, --build-only        Performs a build and exits
	
	  --debug                 Outputs filename and line numbers in rendered CSS
	
	Example:
	
	  lesswatcher -d=styles/less -o=../css --debug

Alternative, a `lesswatcher.config` file can be placed in the directory where you are calling it from to specify a set of options.

For example the following content in `lesswatcher.config` will set the corresponding options:

	{
		directory: "styles/less",
		output: "../css",
		debug: true
	}