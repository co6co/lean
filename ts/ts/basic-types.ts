let isDown:boolean =false
let age:number=15
let firstName:string ='vi'
let message:string =`hello ${firstName}`
let u:undefined=undefined
let n:null=null 

let notSure:any=4
notSure='maybe a string'

//数组
let arrOfNumbers:number[] =[1,24,5]
arrOfNumbers.push(3) //对 push 内容做 限制

function test(){
    console.log(arguments) //类数组
    let html:HTMLCollection
}
//元组  可以存储不同的类型
let user:[string,number]=['vi',20]
user.push('123') // string | number //联合类型
user.push(1)


//union types
let numberOrString :number|string
numberOrString='abc'
numberOrString=2
numberOrString.toString()//访问联合类型的共有属性和方法

function getLength(numberOrString :number|string){
    //类型断言不是类型的转换
    const str =numberOrString as string //类型断言
    if(str.length) return str.length
    const num= numberOrString as number
    return num.toString().length 
}
//type guard
function getLength2(numberOrString :number|string){
    //智能缩小 联合类型的范围
    if(typeof numberOrString==="string")    return   numberOrString.length
    else return  numberOrString.toString().length 
}


