// var fn;
// function foo() {
//     var a=2;
//     function baz() {
//         console.log(a);
//     }
//     fn = baz;
// }
// function bar() {
//     fn();
// }
//
// foo();//undefined
// bar();//2
// var fn;
// var m = 20;
// function foo() {
//     var a = 2;
//     function baz(a) {
//         console.log(a);
//     }
//     fn = baz;
// }
// function bar() {
//     fn(m);
// }
//
// foo();//
// bar();
// function foo() {
//     var a = 2;
//
//     return function bar() {
//         var b = 9;
//
//         return function fn() {
//             console.log(a);
//         }
//     }
// }
//
// var bar = foo();
// var fn = bar();
// fn();
// (function() {
//
//     var a = 10;
//     var b = 20;
//
//     var test = {
//         m: 20,
//         add: function(x) {
//             return a + x;
//         },
//         sum: function() {
//             return a + b + this.m;
//         },
//         mark: function(k, j) {
//             return k + j;
//         }
//     }
//
//     window.test = test;
//
// })();
//
// test.add(100);
// test.sum();
// test.mark();
//
// var _mark = test.mark;
// _mark();
function foo() {
    var a = 10;

    function fn1() {
        return a;
    }

    function fn2() {
        return 10;
    }

    fn2();
}

foo();
