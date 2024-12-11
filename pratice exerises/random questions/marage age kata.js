function datingRange(age){
  //return min-max
 let min=0;
  let max=0;
  
  if(age>14){
    min= (age/2)+7;
    max=(age-7)*2;
  }
  else if (age<=14){
    min = age - 0.10 * age;
    max = age + 0.10 * age
  }
  return Math.floor(min)+'-'+Math.floor(max);
}
console.log(datingRange(20));