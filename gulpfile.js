var gulp = require('gulp');

var sass = require('gulp-sass');


// *.scss 匹配当前目录下所有以.scss结尾的文件
// **/*.scss 切尔西当前目录及所有子目录下，所有以.scss结尾的文``
// !not-me.scss不包含名为not-me.scss文件
// *.+(scss|sass) 匹配当前目录下所有以.scss或者.sass结尾的文件


gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss') //待处理文件
    .pipe(sass()) //用gulp-sass编译scss文件 用gulp插件处理文件
    .pipe(gulp.dest('app/css'))  //输出目标文件
});

// gulp.watch('files-to-watch', ['tasks_to_run']);
//
//自动监听文件改变
gulp.task('watch',function () {
    gulp.watch('app/scss/**/*.scss',['sass']);
    //其他任务
})
