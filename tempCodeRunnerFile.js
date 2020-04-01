 let arr = [11,2,4,4,5,6,10,8,-12];

 function matrix(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let result = 0;
     for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j = arr.length - 1; j--) {
            sum1 += arr[i];
            sum2 += arr[j];
        
         }
     }
    console.log(sum1); 
    console.log(sum2);
       
 }
 matrix(arr)