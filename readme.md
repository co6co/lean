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

git branch --set-upstream-to=origin/<branch> <localBranch>  //--set-upstream（或简写为 -u）关联本地分支和远程分支>

>设置完提示：Branch 'localBranch' set up to track remote branch 'branch' from 'origin'.
git branch -vv  //查看跟踪的分支


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
# 本地分支名与上游分支名称不同

```

# 提示
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use
当前分支的上游分支与当前分支的名称不匹配。 要推送到远程的上游分支，请使用

> git push origin HEAD:tf-demo

To push to the branch of the same name on the remote, use
要推送到远端的同名分支，请使用

> git push origin HEAD

To choose either option permanently, see push.default in 'git help config'.
永久选择其中一个选项，请参阅 “git help config ”中的 push.default

```



# 权限
```
>>Please make sure you have the correct access rights and the repository exist
>ssh -T git@github.com   //-T 不分配伪终端

```
