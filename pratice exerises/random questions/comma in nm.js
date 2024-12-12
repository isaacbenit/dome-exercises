function com(num){
    let n=0;
    let arr=num.toString().split('')
   let arr2=[]
   
   for(let i=arr.length-1; i>=0;i--){
    if(n===3){
        arr2.push(',')
        n=0    
    }
    n++
    arr2.push(arr[i])
   }
 
   return arr2.reverse().join('')
}
console.log(com(1000000))


//