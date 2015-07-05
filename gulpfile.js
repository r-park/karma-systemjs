var babel      = require('gulp-babel'),
    del        = require('del'),
    gulp       = require('gulp'),
    karma      = require('karma').server,
    sourcemaps = require('gulp-sourcemaps');


gulp.task('clean.target', function(done){
  del('./target/*', done);
});


gulp.task('transpile.dev', function transpile(){
  return gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({modules: 'system'}))
    .pipe(sourcemaps.write('.', {sourceRoot: './src'}))
    .pipe(gulp.dest('./target'));
});


gulp.task('test', gulp.series('clean.target', 'transpile.dev', function(done){
  karma.start({configFile: __dirname + '/karma.conf.js'}, done);
}));


gulp.task('default', gulp.series('clean.target', 'transpile.dev', function watch(){
  gulp.watch('./src/**/*.js', gulp.task('transpile.dev'));
}));
