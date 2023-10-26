let names=["vijaya","surya","sishva","sai",{1:"nani",2:"pavan"}];
   console.log(names);
// push to add an element from last//
names.push("last");
  console.log(names);
// pop to remove last element//
 names.pop();
   console.log(names);
// to add an element in first// 
names.unshift[1];
  console.log(names);
// to remove an element (opp ) to unshift//
names.shift();
  console.log(names);
//splice to replace the element and remove(it print the modifiied values) //
let arrname=names.splice(3,2,"saikiran","durga",0,6,"sai");
   console.log(names);
   console.log(arrname);
// one of the method to replace an element//
names[3]="sai";
  console.log(names);
// slice single element//
names.slice(1,3);
   console.log(names.slice(2,3));
// using indexOf (print the index position)//
let x=["nav","krish","vijju","surya"];
let index=x.indexOf("krish",1);
//  console.log(x);
 console.log(index);


