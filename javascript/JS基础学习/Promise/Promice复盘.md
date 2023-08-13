## Promise 的状态
实例对象中的一个属性 [PromiseState]
* pending 未决定的
* resolve / fullfilled 成功
* rejected 失败
* 注意： 只能由pending --> resolve/fullfilled 或 pending --> rejected  成功与失败不能转换

## Promice 对象的值
实例对象中的另一个属性 [PromiseResult]
保存着异步任务 [成功/失败] 的结果
* resolve
* reject
  