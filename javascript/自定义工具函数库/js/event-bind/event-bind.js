/*
 * Author: 吴楚标
 * Date: 2021-06-09 17:24:54
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-09 17:52:57
 * Description:
 */
function addEventListener(el, type, fn, selector) {
  // 判断 el 的类型
  if (typeof el === "string") {
    el = document.querySelector(el);
  }
  // 事件绑定
  // 若没有传递子元素的选择器，则给el元素绑定事件
  if (!selector) {
    el.addEventListener(type, fn);
  } else {
    el.addEventListener(type, function (e) {
      // 获取点击的目标事件源
      const target = e.target;
      // console.log(target); //li
      // 判断选择器与目标元素是否相符合,匹配
      if (target.matches(selector)) {
        // 若符合 则调用回调
        fn.call(target, e);
      }
    });
  }
}
