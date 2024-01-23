//
enum Dicection{
    //0 开始递增
    UP,Down,Left=11,Right
}
console.info(Dicection.Left)
console.info(Dicection[0])//可以输出 UP

enum DicectionStr{ 
    UP="up",Down="down",Left="left",Right="right"
}
//常量枚举 常量值才能做常量枚举
const enum DicectionStr2{ 
    UP="up",Down="down",Left="left",Right="right"
}

const value="up"
if(value===DicectionStr.UP){console.log("up")}
if(value===DicectionStr2.UP){console.log("up")}
