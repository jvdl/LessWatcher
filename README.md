#LessWatcher
An easy to use, globally installable .less compiler and watcher.

	usage: lesswatcher [options]

	options:
	  -h, --help              Print help (this message) and exit.

	  -d, --directory         Set input directory - where your .less files are located

	  -o, --output            Set output directory - this is relative to the
	                          directory where less files are generated from.

	  -b, --build-only        Performs a build and exits

	Example:

	  lesswatcher -d=styles/less -o=../css

Alternatively, a `lesswatcher.config` file can be placed in the directory where you are calling it from to specify a set of options.

For example the following content in `lesswatcher.config` will set the corresponding options:

	{
		directory: "styles/less",
		output: "../css"
	}


## About
Most of this project is simply a shorthand to [Guilherme Dupont](https://github.com/gdupont "Guilherme Dupont")'s work on [less-monitor](https://github.com/gdupont/less-monitor "less-monitor").

It depends on `less-monitor` and `less` to perform all the hard work. I just wanted a quick-and-dirty command that I could run from the CLI without having to set loads of options. Additionally the use of a config file was a feature I thought was necessary.
