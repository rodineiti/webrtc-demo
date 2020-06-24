var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// Server observer HTML/CSS/JS
gulp.task("serve", function () {
  browserSync.init({
    server: "./src",
    port: 2019,
  });

  gulp
    .watch(["src/*.html", "src/css/*.css", "src/js/*.js"])
    .on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
