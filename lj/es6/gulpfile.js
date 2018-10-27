const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// 걾프 의존성 --

gulp.task('default', function() {
	// 걸프 작업 --

	//ESLint 실행
	gulp.src(["/Users/byeonseong-in/Desktop/Javscript-1-/lj/es6/**/*.js","/Users/byeonseong-in/Desktop/Javscript-1-/lj/public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	// 노드 소스
	gulp.src("/Users/byeonseong-in/Desktop/Javscript-1-/lj/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("/Users/byeonseong-in/Desktop/Javscript-1-/lj/dist"));
	// 브라우저 소스
	gulp.src("/Users/byeonseong-in/Desktop/Javscript-1-/lj/public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("/Users/byeonseong-in/Desktop/Javscript-1-/lj/public/dist"));
});