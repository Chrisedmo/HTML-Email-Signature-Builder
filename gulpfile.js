// Includes
var gulp = require('gulp'),
data = require('gulp-data'),
convert = require('gulp-convert'),
rename = require('gulp-rename'),
handlebars = require('gulp-compile-handlebars'),
path = require('path');

var people = require('./_data/_data.json');

// source and distribution folder
var
    dest = 'signatures_out/';

gulp.task('handlebars', ['csv2json'], function() {

  for(var i=0; i<people.length; i++) {
        var person = people[i],
            fileName = person.Name.replace(/ +/g, '-').toLowerCase();

            gulp.src('templates/*.handlebars')
            .pipe(handlebars(person))
            .pipe(rename(fileName + ".html"))
            .pipe(gulp.dest('./signatures_out/'));
  }
});

gulp.task('copyCSV', function() {
  gulp.src(['./_csv/*.csv'])
  .pipe(gulp.dest('./signatures_out/'));
});

gulp.task('csv2json', function(){
  gulp.src(['_csv/*.csv'])
    .pipe(convert({
      from: 'csv',
      to: 'json'
     }))
    .pipe(gulp.dest('_data/'));
});

gulp.task('default', ['csv2json', 'handlebars', 'copyCSV']);
