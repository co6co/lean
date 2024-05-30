# 管理多个项目
npm install pnpm -g
pnpm init
# 创建 `pnpm-workspace.yaml` 文件
# 创建 `.npmrc` 文件
三方依赖依赖，项目中使用了第三方的依赖，哪天第三方卸载不在该包了，那就找不到了，称之为“幽灵依赖” ，
所以需要“羞耻提升”，暴露到外层中，即在根目录下的node_modules内，而非在.pnpm文件夹中。

# 全局安装 `pnpm install vue -w`
`-w `的意思是，**workspace-root**把依赖包安装到工作目录的根路径下，则根目录下会生成node_modules文件夹。
可以共用，后续每个项目需要用到vue的，都直接从根目录node_modules里取。

可以看出根目录下的node_modules里，vue安装到了与.pnpm同层级位置当中了 [.pnpm 、@vue、vue 都在node_modules目录中]，这就是第3步骤shamefully-hoist = true的效果，把vue从.pnpm内提到node_modules中，并且vue的**相关依赖**，也**拍平**到了该层级文件夹中。

若是此时看到vue的依赖没有拍平到node_modules下，还是在.pnpm当中，不用慌，执行`pnpm uninstall vue -w`，
接着删掉了`.npmrc`文件重新创建`.npmrc`文件，然后删除node_modules文件，这会终端就会提示：“ERR_PNPM_PUBLIC_HOIST_PATTERN_DIFF  This modules directory was created using a different public-hoist-pattern value. Run "pnpm install" to recreate the modules directory.”，按照指示，执行“pnpm install”即可

# 3 全局安装` pnpm install typescript -w -D`
# 3.1  pnpm init初始化packages 中的子项目[生成package.json]

# 3.2 web 项目 npm create vite 


```
  //安装时的依赖
  "dependencies": {
    "vue": "^3.2.25"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.3.3",
    "vite": "^2.9.9"
  }
```
web1/node_modules下有依赖包， ，将来我们这个项目会有web2、web3...出来，不能每个子项目都在自身安装vue、@vitejs/plugin-vue、vite，这样不好管理，而且依赖包臃肿，应当把这三者安装到全局当中，以共用。 

## 3.2.1 **卸载vue、@vitejs/plugin-vue、vite**
```
pnpm uninstall vue
pnpm uninstall @vitejs/plugin-vue -D
pnpm uninstall vite -D
# 使用全局安装方式来使用
pnpm install @vitejs/plugin-vue vite -D -w 
pnpm install vue -w
``` 
web1所依赖的资源，自身没有的话，就往上层去取。

# 4. 建立关联
##  4.1 模块引入
```
# 会增加版本号，只能使用 @manage/utils 的 1.0.0 版本
pnpm install @manage/utils@workspace --filter @manage/web1 
# 增加到根项目
pnpm install @manage/utils@workspace --workspace-root


//在web1/package.json 中增加
 "dependencies": {
    "@manage/utils": "workspace:^1.0.0"
  }

# 不指定版本号 取最新版
pnpm install @manage/utils@* --filter @manage/web1
"dependencies": {
    "@manage/utils": "workspace:*"
  }
```

我们是在项目web1用相对路径引用utils：
通常引用方式：
```
import { add } from '../../utils';
```
我们需要：路径引用层级好管理，所以需要加入tsconfig.json来配置路径，定义按照规则去查找utils 安装typescript到全局
```
pnpm install typescript -D -w

# 根路径执行
pnpm tsc --init //生成tsconfig.json  
{
    "compilerOptions":{
        .....

        "paths":{
        // 方式1.  即以@manage开头的都去该路径下查找，是个数组
        "@manage/*":[
        "packages/*/src",
        ], 
        //方式2 .
        "@manage/util/components":["packages/util/components"],
        "@manage/util/utils":["packages/util/utils"],
        "@manage/util/fetch":["packages/util/fetch"],
        "@manage/util/styles":["packages/util/styles"],

        //方式 3 或者用*号处理匹配
        "@manage/util/*":["packages/util/*"]
    }
    }
    
}


//引用方式
import { add } from '@manage/util';
```

## 4.2 style 引入
`pnpm install sass -D -w`
```
/* 本子项目variables.scss */
@import 'variables.scss';
/* 本子项目mixin.scss */
@import 'mixin.scss'; 
@import "@manage/utils/styls/index.scss";
```

## 运行
```
 "scripts": {
    "dev:web1": "pnpm -C packages/web1 & pnpm dev"
    "dev:web2": "cd packages/web1 & pnpm dev"
  },


pnpm run -w dev:web1

```