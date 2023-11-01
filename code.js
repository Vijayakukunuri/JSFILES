// task using function,constructor,conditionalf//
function emp(name,age){
    this.name=name;
    this.age=age;

    if(age>=18){
          console.log(` ${name} age ${age} eligible for vote`);
     }
    else{
        console.log('not eligible');
    }
      
}
let emp1= new emp("vijaya",22);
console.log(emp1);
let emp2=new emp("nani",22);
console.log(emp2);