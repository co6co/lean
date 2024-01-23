// interface 类型的静态检查
// Duck Typing （鸭子类型）
// shape 对对象的性质进行描述

interface Person {
    readonly id:number;
    name:string;
    age?:number; //可选属性 
} 
let person:Person={ //约束 person 的形状
    id:1,
    name:'vi',
    age:20, 
} 

//函数是一等公民
//输入 /返回
//申明写法
function add(x:number,y:number,z?:number):number{
    if (typeof z==='number')return x+y+z;
    return x+y
}
let result=add(2,3) 
//表达式 类型推断
const add2=(x:number,y:number,z?:number):number=>{
    if (typeof z==='number')return x+y+z;
    return x+y
} 
interface iSum{
    (x:number,y:number,z?:number):number //返回 
}
let add3:(x:number,y:number,z?:number)=>number=add2
let add4:iSum=add2

