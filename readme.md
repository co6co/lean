# hash
```
git log [选项] [分支名/提交哈希]
```
# 仓库

```
git remote add <name> <url> //<name>是远程仓库的简写名称通常为origin，<url>是远程仓库的URL eg:git@github.com:co6co/lean.git
git remote rename <old-name> <new-name>
git remote remove <name>
git remote set-url <name> <new-url> //修改指定远程仓库的URL
git remote show <name>：显示指定远程仓库的详细信息，包括URL和跟踪分支
```


# tag
```
 git tag -a v0 85fc7e7
 ```
# branch
```
git branch git-lean v0
git checkout -b vite-ssr-vue3 v0 #从 v0 中创建分支并切换到新建的分支
git push origin --delete base # 删除远程分支

git branch --set-upstream-to=origin/<branch> <localBranch>   // --set-upstream（或简写为 -u）

git branch --set-upstream-to=origin/<branch> <localBranch>  //关联本地分支和远程分支
```

# pull

```
git pull <remote> <branch>
```


# push
```
git push origin v0  # 默认情况下 不会提交标签 需要手动提交
git push --set-upstream origin localBranch # 分支 提交是需要跟踪分支 ，git 会提示
#创建远程分支
git push origin master:remoteBranch //创建分支、提交分支
```



# 权限
``
>>Please make sure you have the correct access rights and the repository exist
>ssh -T git@github.com   //-T 不分配伪终端

```
