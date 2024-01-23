//内置对象
//global objects
const a:Array<number> =[123,]
const data=new Date()
const reg =/abc/
reg.test('abc')

//build-in object
Math.pow(2,2)

// Dom And Bom
let body =document.body

let allLis=document.querySelectorAll("li")
allLis.keys()

document.addEventListener("click",(e)=>{
    e.preventDefault()
})


//Utility Types
interface IPerson{
    name:string
    age:number
}

let k:IPerson={name:'dd',age:20} //必须完整使用 name,age
type IPartial=Partial<IPerson> //name 和 age 可省略
let k2:IPartial={}

type IOmit =Omit<IPerson,'name'> //name 可忽略
let k3:IOmit={age:20 }
 