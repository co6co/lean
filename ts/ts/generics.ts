
//#  1. 泛型基本
function echo (arg){
    return arg
}
let gr=echo(123)

function echo2 <T>(arg:T):T{
    return arg
}
const ss="123"
const  gr2=echo2(ss)

function swap <T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const result2=swap(["string",123])

//# 2. 泛型在函数种的应用
//约束泛型
//解决需要传入带有指定方法的的对象
function echoWithAr<T>(t:T[]):T[]{
    console.log(t.length) //要求 T 有 length
    return t
}
//
const arrs=echoWithAr([1,2,3])  
//约束
interface IWithLength{
    length: number
}
function echoWithLength<T extends IWithLength>(t:T):T{
    console.log(t.length) 
    return t
}
const strin=echoWithLength("123")  
const obj=echoWithLength({length:10,width:123})  
const arrs2=echoWithAr([1,2,3]) 

//# 3. 泛型 类/接口中的应用
class Queue <T>{
    private data:T[]=[];
    push(item:T){
        return this.data.push(item)
    }
    pop():T|undefined{ 
        return this.data.shift() 
    }
} 
const queue=new Queue<number>()
queue.push(1)

interface KeyPair<T,V>{
    key:T
    value:V
}

let kp1:KeyPair<number,string>={key:1,value:"123"}
let arr:number[]=[1,24]
let arr2:Array<number>=[1,24]