const gulp = require("gulp");
const debug = require("gulp-debug");
const sass = require("gulp-sass");

gulp.task("default", () => {
	gulp.src("Content/Sass/main.scss")
		.pipe(debug())
		.pipe(sass())
		.pipe(gulp.dest("dist/css"));
});