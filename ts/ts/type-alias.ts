
let sum:(x:number,y:number)=>number
//const result=sum(1,2) //仅申明 未实现
type PlushType=(x:number,y:number)=>number

type StrOrNumber=string |number

let result:StrOrNumber='123'
result=123

const str:'name'='name' //
type Directions ='up'|'down'|'left'|'right'
let t:Directions ="left"

interface Iname{
    name:String
}
type Iperson=Iname  & {age:number} //交叉类型 //扩展对象
let person:Iperson={name:'123',age:123}
