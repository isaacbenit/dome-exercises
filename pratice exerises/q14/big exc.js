let a=[  { name: "Alice", age: 30, department: "Enginering" },

    { name: "Bob", age: 25, department: "Marketing" },
    
    { name: "Charlie", age: 35, department: "Engineering" },
    
    { name: "David", age: 40, department: "HR" },
    
    { name: "Eve", age: 28, department: "Marketing" },];
let b=a.length;
let sum=0;
let sum1=0;
let sum2=0;

let k=[];
for (let i=0;i<a.length;i++){

    if(a[i].department === "Engineering" ){
        sum+=a[i].age;       
    }
    else if(a[i].department === "HR" ){
        sum1+=a[i].age;       
    }
    else if(a[i].department === "Marketing" ){
        sum2+=a[i].age;       
    }
   
}
console.log(`[Engineering: ${sum}, Marketing: ${sum2}, HR: ${sum1}]`)
// k.push(sum,sum1,sum2);
// console.log(k);