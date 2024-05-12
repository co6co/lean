# hash
```
git log [选项] [分支名/提交哈希]
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
```
# push
```
git push origin v0  # 默认情况下 不会提交标签 需要手动提交
git push --set-upstream origin vite-backend-integration # 分支 提交是需要跟踪分支 ，git 会提示
```