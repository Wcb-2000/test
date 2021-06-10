/*
 * Author: 吴楚标
 * Date: 2021-06-10 21:10:50
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-11 00:01:42
 * Description: 
*/
//  在入口JS中暴露功能
export function test(){
  // 
  document.write('测试自定义包');
  console.log('test()');
}
export function test3(){
  // 
  console.log('aaaa()');
}

// 引入其他文件、再暴露
// 1.目标文件中暴露数据  export 数据
// import {chunk} from './Array/chunk'
// 2. 暴露数据
// export {chunk};

// 此方法等效上面的方法
export {chunk} from './Array/chunk';
export {map, reduce, filter, find, findIndex, every, some} from './Array/arrMathod';
export {concat} from './Array/concat';
export {difference} from './Array/difference';
export {drop} from './Array/drop';
export {flatten1, flatten2} from './Array/flatten';
export {pull, pullAll} from './Array/pull';
export {slice} from './Array/slice';
export {unique1, unique2, unique3} from './Array/unique';
export {axios} from './axios/index';
export {addEventListener} from './event-bind/event-bind';
export {eventBus} from './event-bus/index';
export {apply} from './Function/apply';
export {call} from './Function/call';
export {bind} from './Function/bind';
export {debounce} from './Function/debounce';
export {throttle} from './Function/throttle';
export {clone1, clone2, deepClone1, deepClone2,deepClone3, deepClone4} from './Object/clone';
export {mergeObject} from './Object/mergeObject';
export {myInstanceOf} from './Object/myInstanceOf';
export {newInstance} from './Object/newInstance';
export {PubSub} from './pub-sub/index';
export {reverseString, palindrome, truncate} from './String';
