var string = 'Hello Eric!';

console.log(string.charAt(0),'返回第一个字符','H');
console.log(string.charAt(string.length-1),'返回最后一个字符','!');
console.log(string.substring(1,4),'返回2-4个字符','llo');
console.log(string.slice(1,4),'返回2-4个字符','llo');
console.log(string.slice(-3),'返回最后三个字符','ic!');
console.log(string.indexOf('E'),'返回E第一次出现的位置','6');
console.log(string.indexOf('E',3),'返回E在位置3以及之后首次出现的位置','6');
console.log(string.lastIndexOf('E'),'返回E最后一次出现的位置','6');
console.log(string.split(','),'分割成数组',['Hello','Eric!']);
console.log(string.replace('h','H'),'全文字符替换','hello Eric!');
console.log(string.toUpperCase(),'大写','HELLO ERIC!');

