# TypeScript

![image-20211102195349263](C:\Users\WCB\AppData\Roaming\Typora\typora-user-images\image-20211102195349263.png)

## 1. 简介

### 1.1 typescript是什么
  主要结构：以JavaScript为基础构建的语言
  理解：JavaScript的超集
  扩展：新增类型，从动态类型语言转为静态类型语言
  运行环境：在任何支持的JavaScript平台中执行，但是不能被js解析器直接执  行，需要转化为js

### 1.2 新增了什么

  * 类型
  * 支持ES新特性
  * 添加ES不具备的新特性
  * 丰富的配置选项
  * 强大的开发工具

## 2. 环境搭建

  1. 下载nodejs
  2. npm全局安装（npm install -g typescript）
  3. 创建ts文件 
  4. 使用tsc编译（进入ts文件所在目录   tsc xxx.ts）

## 3. Typescript基本类型
### 3.1 类型声明
* 含义：通过类型声明可以指定TS中（参数、形参）的类型
* 作用：指定类型之后，为其赋值时Typescript编译器会自动检查值类型，不符合会报错
* 简述：类型声明之后，变量只能存储单一类型的值
* 意义：类型声明是重要特点之一，可以为某些特定的值设定类型，防止出错

使用场景：
```typescript
// 1.定义一个变量
// let 变量：类型；
// 声明一个变量a，同时他的值类型为number。可同时赋值
var a: number;
var a: number =5;
var a: number ="5"; // 报错

// 如果没有声明类型，TS会自动对变量进行类型检测
let c = false;  // boolean

// 2.声明一个方法
// 注：JS中的函数无需考虑参数的类型和个数，而TS是可以严格执行的
// function ex(参数：类型， 参数：类型)：输出值得类型{}
function ex(a:string, b:number):string{
  ...
}
let result = ex("123", 456) // 传多了、少了，类型不对都自动报错

```

总结：
* TS拥有自动的类型判断机制
* 当变量的声明和赋值是同时进行时，TS编译器会自动判断变量的类型
* 所以，如果变量的声明和赋值是同时进行的，可以省略类型声明（那写法就更JS一样，但是在TS里，他是严格执行类型）

### 3.2 类型

| 类型    | 例子              | 描述                           |
| ------- | ----------------- | ------------------------------ |
| number  | 1, -33, 2.5       | 任意数字                       |
| string  | ‘hi’, “hi”        | 任意字符串                     |
| boolean | true, false       | 布尔值                         |
| 字面量  | 其本身            | 限制变量的值就是该字面量的值   |
| any     | *                 | 任意类型                       |
| unknown | *                 | 类型安全的any                  |
| void    | 空值（undefined） | 没有值（或undefined）          |
| never   | 没有值            | 不能是任何值                   |
| object  | {name:‘zx’}       | 任意的JS对象                   |
| array   | [1,2,3]           | 任意JS数组                     |
| tuple   | [4,5]             | 元素，TS新增类型，固定长度数组 |
| enum    | enum{A,B}         | 枚举，TS中新增类型             |


使用场景
```typescript
// number
let a:number = 5;
let b:number = 0xf00d; // 16进制
let c:number = 0o744;  // 8进制
let d:number = 0b1010; // 2进制
let big:bigint = 100n; // bigint数据类型

// boolean
let good:boolean = false;

// string
let me:string = "孙悟空";
me = "猪八戒";

let fullName: string = "Bob Bobbington";
let age: number = 12;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

// 也可使用字面量声明
let a:10;  //声明number类型
a = 10;

// 可以使用 | 来连接多个类型（联合类型）
let people: "male"|"female";
people = "male";
people = "female";

let tag: boolean | string;
tag = true;
tag = 'hello';

// any
// 表示任意类型，相当于关闭TS 的类型检测，和js定义变量无异
let a: any;

// 隐式any, 声明变量时 不定义类型，则 解析器自动判断类为any
let d;
d = 'aaa';
d = 10;
d = true;

// unknown 表示未知的值，跟any一样 但是属于安全的any
// 它不可以赋值给其他变量
let e: string;
e = "aaaa";

let d: unknown;
d = 1;
e =d //报错

// 类型断言，可以用来告诉解析器变量的实际类型
/*****
 * 语法：
 *      变量 as 类型
 *      <类型>变量
 */
s = e as string;
s = <string>e;

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
    return null;
}

// never 表示永远不会返回结果
function fn2(): never {
    throw new Error("报错了")
}

// object 表示一个 js 对象
let a: object;
a = {};
a = function (){}

// {} 用来指定对象中可以包含哪些属性
// 语法: {属性名:属性值,属性名:属性值}
// 在属性民后边加上?,表示属性是可选的
let b: {name: string, age?: number};
b = {name: '孙悟空', age: 18}

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any};
c = {name: '猪八戒', age: 18, gender: '男'};

/*****
 * 设置函数结构的类型声明:
 *      语法: (形参: 类型, 形参: 类型...) => 返回值
 */
let d: (a: number, b: number) => number;
// d = function (n1: number, n2: number): number {
//     return 10;
// }

/**
 * 数组的类型声明:
 *      类型[]
 *      Array<类型>
 */
// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];

// number[] 表示数值数值
let f: number[];

let g: Array<number>
g = [1,2,3];

/*****
 * 元组，元组就是固定长度的数组
 *      语法: [类型，类型，类型]
 */
let h: [string, number];
h = ['hello', 123]

/*****
 * enum 枚举
 */
enum Gender {
    Male = 0,
    Female = 1
}

let i: {name: string, gender: Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
}
console.log(i.gender === Gender.Male);

// & 表示同时
let j: {name: string} & {age: number}
// j = {name: '孙悟空', age: 18};

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType

```

## 4. TypeScript编译选项（tsconfig.json）

### 4.1 自动编译文件
* 编译文件时，使用 -w 指令后，TS 编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译
* 示例
    tsc xxx.ts -w

### 4.2 自动编译整个项目
* 如果直接使用 tsc 指令，则可以自动将当前项目下的所有 ts 文件编译为 js 文件
* 但是能直接使用 tsc 命令的前提时，要先在项目根目录下创建一个 ts 的配置文件 tsconfig.json
* tsconfig.json 是一个 JSON 文件，添加配置文件后，只需 tsc 命令即可完成对整个项目的编译

### 4.2.1 配置选项 include
* 定义将被编译文件所在的目录
* 默认值: ["**/*"] **表示所有文件夹  *表示所有文件
* 示例
    "include":["src/**/*","tests/**/*"]
    上述示例中，所有 src 目录和 tests 目录下的文件都会被编译

### 4.2.2 配置选项 exclude
* exclude
* 定义不被编译的目录
* 默认值: ["node_modules", "bower_components","jspm_packages"]
* 示例
    "exclude": ["./src/hello/**/*"]
    上述示例中，src 下 hello 目录下的文件都不会被编译

### 4.2.3 配置选项 extends
* extends
* 定义被继承的配置文件
* 示例:
    "extends": "./configs/base"
    上述示例中，当前配置文件中会自动包含 config 目录下 base.json 中的所有配置信息

### 4.2.4 配置选项 files
* files
* 指定被编译文件的列表，只有需要编译的文件少时才会用到
* 示例:
```json
// 列表中的文件都会被 TS 编译器所编译
"files": [
	"core.ts",
	"sys.ts",
	"types.ts",
	"scanner.ts",
	"parser.ts",
	"utilities.ts",
	"binder.ts",
	"checker.ts",
	"tsc.ts"
]
```

### 4.2.5 配置选项 compilerOptions（详细配置可查看tsconfig.json文件中的对应选项）
* 编译选项，涉及各类配置选项

* 里面包含多个子项，完成对文件的编译配置

* 主要分类
    * target
        * 设置ts代码编译的目标版本
        * 可选类型
            * ES3(默认)、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2020、ESNext
        * 示例：
            * "compilerOptions": {"target": "ES6"}
    * lib
        * 指定代码运行时所包含的库（宿主环境）
        * 可选值：
            * ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost…
    * module
        * 设置编译后代码使用的模块化系统
        * 可选值：
            * CommonJS、UMD、AMD、System、ES2020、ESNext、None
    * outDir
        * 编译后文件的所在目录
        * 默认情况下，编译后的 js 文件会和 ts 文件位于相同的目录，设置 outDir 后可以改变编译后文件的位置
        * 示例：
            * 设置后编译后的 js 文件将会生成到 dist 目录
            * "compilerOptions": {"outDir": "dist"}
    * outFile
        * 将所有文件编译为一个js文件
        * 默认会将所有的编写在全局作用域中的代码合并为一个 js 文件，如果 module 制定了 None、System 或 AMD 则会将模块一起合并到文件之中
        * 示例：
            * "compilerOptions": {"outFile": "dist/app.js"}
    * rootDir
        * 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir 可以手动指定根目录
        * 示例：
            * "compilerOptions": {"rootDir": "./src"}
    * allowJs
        * 是否对js文件编译
    * checkJs
        * 是否对js文件进行检查
    * remove Comments
        * 是否删除注释
        * 默认为 false
    * noEmit
        * 不对代码进行编译
        * 默认为 false
    * sourceMap
        * 是否生成sourceMap
        * 用于文件经过打包压缩后，仍可以方便调试
        * 介绍地址：https://blog.csdn.net/weixin_40599109/article/details/107845431
        * 默认值 false
    * 严格检查
    
    | 选项名称                     | 选项功能                                                     |
    | ---------------------------- | ------------------------------------------------------------ |
    | strict                       | 启用所有的严格检查，默认值为 true，设置后相当于开启了所有的严格检查 |
    | alwaysStrict                 | 总是以严格模式对代码进行编译                                 |
    | noImplicitAny                | 禁止隐式的 any 类型                                          |
    | noImplicitThis               | 禁止类型不明确的 this                                        |
    | strictBindCallApply          | 严格检查 bind、call 和 apply 的参数列表                      |
    | strictFunctionTypes          | 严格检查函数的类型                                           |
    | strictNullChecks             | 严格的空值检查                                               |
    | strictPropertyInitialization | 严格检查属性是否初始化                                       |
    
    * 额外检查

    | 选项名称                   | 选项功能                         |
    | :------------------------- | -------------------------------- |
    | noFallthroughCasesInSwitch | 检查 switch 语句包含正确的 break |
    | noImplicitReturns          | 检查函数没有隐式的返回值         |
    | noUnusedLocals             | 检查未使用的局部变量             |
    | noUnusedParameters         | 检查未使用的参数                 |

    * 高级配置
        * allowUnreachableCode
            * 检查不可达代码
            * 可选值：
                1. true，忽略不可达代码
                2. false， 不可达代码将引起错误
        * noEmitOnError
            * 有错误的情况下不进行编译
            * 默认值： false
​	    
## 5. 使用webpack打包Typescript
### 5.1 webpack整合
    * 通常情况下，都实际开发中我们都需要使用构建工具对代码进行打包