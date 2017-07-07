# JavaScript权威指南--6
    
## 第一章、JavaScript概述
    
### 第一部分. JavaScript语言核心

### 第二章、词法结构
    
    1. 字符集
    2. 注释
    3. 直接量
    4. 标识符和保留字
    5. 可选的分号

###  第三章、类型、值和变量

    1. 数据类型：
        原始类型->数字、字符串、布尔值
            特殊原始值：->null(空) undefined(未定义)
        对象类型->数组、对象
            ->特殊对象->函数
                如果函数用来初始化(用new运算符)一个新建的对象，我们就称之为构造函数。
                    每个构造函数定义了一类(class)对象-由构造函数初始化的对象组成的集合
            类可以看做是对象类型的子类型->es6真正分离出来了
            类->日期Date类
                正则RegExp类
                错误Error类 
	2. Math->参考第三章Math.js
	3. String->参考第三章String.js

###  第四章、表达式和运算符
	
	1. in=>查询x在o对象中存不存在
		`var o={x:1,y:0};
		'x' in o->true`
	2. void=>让浏览器不必显示这个表达式的计算结果
		`<a href:='javascript:void(0)'></a>`	

###  第五章、语句

	1. 标签语句
	2. break语句
	3. continue语句
	4. return语句
	5. throw语句
	6. debugger语句
	7. 'use strict'
		   
### 第二部分. 客户端JavaScript