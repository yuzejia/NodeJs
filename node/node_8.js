// 模块系统

// exports 和 module.exports 的使用

// 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。

// Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

var hello = require('./node_8_1')
const m = require('./node_8_2')
hello()
m.name()


// 不建议同时使用 exports 和 module.exports。

// 如果先使用 exports 对外暴露属性或方法，再使用 module.exports 暴露对象，会使得 exports 上暴露的属性或者方法失效。

// 原因在于，exports 仅仅是 module.exports 的一个引用。在 nodejs 中，是这么设计 require 函数的：

// function require(...){
//     var module = {exports: {}};
  
//     ((module, exports) => {
//       function myfn () {}
//       // 这个myfn就是我们自己的代码
//       exports.myfn = myfn; // 这里是在原本的对象上添加了一个myfn方法。
//       module.exports = myfn;// 这个直接把当初的对象进行覆盖。
//     })(module,module.exports)
//     return module.exports;
//   }