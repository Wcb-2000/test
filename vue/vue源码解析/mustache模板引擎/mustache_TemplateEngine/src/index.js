/*
 * Author: 吴楚标
 * Date: 2021-07-17 19:36:47
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-18 18:07:52
 * Description: 
*/
import Scanner from './Scanner.js'

// 全局提供templateEngine
window.templateEngine = {
  // 渲染方法
  render(templateStr, data){
    // 实例化一个扫描器，构造时候提供一个参数，这个参数就是模板字符串
    // 也就是说这个扫描器就是针对这个模板字符串工作的
    var scanner = new Scanner(templateStr);

    var word;
    // 当scanner没有到头
    while(!scanner.eos()){
      word = scanner.scanUtil('{{');
      console.log(word);
      scanner.scan('{{')
      
      word = scanner.scanUtil('}}');
      console.log(word);
      scanner.scan('}}');
    }
  }
};