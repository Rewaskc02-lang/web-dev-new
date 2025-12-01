// function arrsum(a){
//     let sum=0;
// for(let i=0;i<a.length;i++){
//     sum+=a[i];
// }
//     return sum;
// }
// let a=[1,5,8,9,2,0,7]
// let s= arrsum(a)
// console.log(s);


// function getevennumber(n){
//     let i,l=2,a=[];
//     for(i=0;i<n;i++){
//         a[i]=l;
//         l=l+2;
//     }
//     return a;
// }
// let n=6;
// let b=getevennumber(n);
// console.log(b);


// function getreverse(a){
//     let i,b=[];
//     let n=a.length
//     for(i=0;i<n;i++){
//         b[i]=a[n-i-1];
//     }
//     return b;
// }
// let a=[1,2,3,4,5,6,7,8,9,10];
// let b=getreverse(a);
// console.log(b);


// function studdetails(student){
//     let i;
//     console.log('name:' ,student.name);
//     console.log('age:' ,student.age);
//     console.log('colour:' ,student.color);
// }
// student={name:"asthibhai", age:"-0.5", color:"black"};
// studdetails(student);

function gettopper(stu){
    let n=stu.length,i,l=0,x; 
    for(i=0;i<n;i++){
           let f=stu[i];
        if(f.marks>l){
            l=f.marks;
            x=i;
        }
    }
    let s=stu[x];
    return s.name;
}
let students=[{name:"Aman",marks:98},{name:"Riya",marks:91},{name:"Kunal",marks:58},{name:"Sahil",marks:100}];
console.log(gettopper(students));

