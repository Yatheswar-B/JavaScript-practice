let a=["hari",2.4,"lavan",4.6,"pushpa",6.8];
function task(){
    let count=0;
    let count1=0;
    for (let i = 0; i < a.length; i++) {
         if (typeof a[i]=='number') {
            count++; 
         }  
    }
    let arr= new Array(count);
    for (let j = 0; j < a.length; j++) {
         if (typeof a[j]=='number'){
            arr[count1]=a[j];
            count1++;
         }
          
    }
    return arr;
}
let result=task();
console.log(result);

