import gulp from "gulp";
import rollupEach from "gulp-rollup-each";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import { fileURLToPath } from 'url';

// Necessary evil, if working with ES Modules
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const transform = function (sourceFiles, destinationDirectory) {
  function scripts() {
    return gulp
      .src(sourceFiles)
      .pipe(
        rollupEach({
          output: {
            // outputOptions
            format: "cjs",
          },
          plugins: [nodeResolve()],
        })
      )
      .pipe(gulp.dest(destinationDirectory));
  }

  scripts();
};

let allJSFiles = path.resolve(__dirname, "../src") + '**/*.js';

transform([allJSFiles], path.resolve(__dirname, "../dist"));
