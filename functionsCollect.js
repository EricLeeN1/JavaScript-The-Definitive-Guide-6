
/*1.数组复制*/
let a= [1,2,3,4];
let b= [2,3];
// for(let i=0;i<a.length;i++){
//     b[i]=a[i];
// }

// 2.比较两个数组
function equalArrays(a,b) {
    if (a.length!=b.length) {
        return false;
    }else {
        for (let i = 0;i<a.length;i++) {
            if (a[i]!==b[i]){
                return false;
            }
        }
        return true;
    }
};

