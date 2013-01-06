var sys = require("sys");

var usage = {
    //Print command line options
    print: function() {
        sys.puts("");
        sys.puts("usage: lesswatcher [options]");
        sys.puts("");
        sys.puts("options:");
        sys.puts("  -h, --help              Print help (this message) and exit.");
        sys.puts("");
        sys.puts("  -d, --directory         Set input directory - where your .less files are located");
        sys.puts("");
        sys.puts("  -o, --output            Set output directory - this is relative to the");
        sys.puts("                          directory where less files are generated from.");
        sys.puts("");
		sys.puts("  -b, --build-only        Performs a build and exits");
//      sys.puts("");
//		sys.puts("  --debug                 Outputs filename and line numbers in rendered CSS");
        sys.puts("");
        sys.puts("Example:");
        sys.puts("");
        sys.puts("  lesswatcher -d=styles/less -o=../css");
    }
}
for (var h in usage) { exports[h] = usage[h]; }
