console.log(Math.pow(2,8),'2的8次幂');//=>2的8次幂 256
console.log(Math.round(.6),'四舍五入');//=> 1.0
console.log(Math.ceil(.6),'向上求整 1.0');//=>向上求整 1.0
console.log(Math.floor(.6),'向下求整 0.0');//=>向下求整 0.0
console.log(Math.abs(-3),'-3的绝对值 3');//=>-3的绝对值 3
console.log(Math.max(2,8,9),'2,8,9其中最大的一个 9');//=>2,8,9其中最大的一个 9
console.log(Math.min(2,8,9),'2,8,9其中最小的一个 2');//=>2,8,9其中最小的一个 2
console.log(Math.random(),'一个0<=&&<1的伪随机数');//=>一个0<=&&<1的伪随机数
console.log(Math.PI,'π');//=>π 3.1415926~3.1415927
console.log(Math.E,'自然对数的底数e');//=>自然对数的底数e
console.log(Math.sqrt(3),'3的平方根');//=>3的平方根
console.log(Math.pow(3,1/3),'3的立方根');//=>3的立方根
console.log(Math.sin(0),'三角函数');//=>三角函数
console.log(Math.cos(0),'三角函数');//=>三角函数
console.log(Math.tan(0),'三角函数');//=>三角函数
console.log(Math.log(10),'10的自然对数');//=>10的自然对数
console.log(Math.log(10)/Math.LN10,'以10为底100的对数');//=>以10为底100的对数
console.log(Math.log(512)/Math.LN2,'以2为底512的对数');//=>以2为底512的对数
console.log(Math.exp(3),'e的三次幂');//=>e的三次幂


// 补充几个数字api,将数字转为字符串
const n = 123456.789;
console.log(n.toFixed(0),'1234567');
console.log(n.toExponential(1),'1.2e+5');
console.log(n.toPrecision(7),'123456.7');

// parseFloat() parseInt()
const n1 = '3.15asDSAd';
console.log(parseInt(n1),3);//整数
console.log(parseFloat(n1),3.15);//可以小数