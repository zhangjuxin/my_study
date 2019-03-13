向其他分支合并代码：在自己的分支上提交代码，然后Git pull进行更新代码，然后git checkout +分支名 进行切换分支，然后Git merge +自己的分支，把某一个分支的代码和当前的分支合并，git push  提交





git branch -a

git pull 本地与服务器端同步

git checkout release   切换到release分支

git checkout .

git status

git branch zhangjuxin   创建分支

git branch -a

git checkout zhangjuxin:切换分支

git merge zhangjuxin  ：切换到要合并的分支后，执行命令，当前分支和zhangjuxin的分支合并，然后Git push  

```
add 把变更录入到索引中
$ git commit -m "添加add的说明"

```

master:主分支

首先，代码库应该有一个、且仅有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布，版本库初始化后，默认就建立了，默认就是在主分支上进行开发

**二、开发分支Develop**

主分支只用来分布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做Develop。

**三、临时性分支**

前面讲到版本库的两条主要分支：Master和Develop。前者用于正式发布，后者用于日常开发。其实，常设分支只需要这两条就够了，不需要其他了。

但是，除了常设分支以外，还有一些临时性分支，用于应对一些特定目的的版本开发。临时性分支主要有三种：

> 　　* 功能（feature）分支
>
> 　　* 预发布（release）分支
>
> 　　* 修补bug（fixbug）分支

**五、预发布分支**

第二种是预发布分支，它是指发布正式版本之前（即合并到Master分支之前），我们可能需要有一个预发布的版本进行测试。

预发布分支是从Develop分支上面分出来的，预发布结束以后，必须合并进Develop和Master分支。它的命名，可以采用release-*的形式。





