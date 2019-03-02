# brew

使用 React Native，必须安装的依赖有：Node、Watchman 和 React Native 命令行工具以及 Xcode。

推荐使用[Homebrew](http://brew.sh/)来安装 Node 和 Watchman。

1、Homebrew是什么？ 

Homebrew是以最简单，最灵活的方式来安装苹果公司在MacOS中不包含的UNIX工具。 换句话说就是**macOS 缺失的软件包的管理器。**

官方网站：[点击查看](https://brew.sh/index_zh-cn.html)

仓库地址：[点击查看](https://github.com/Homebrew/brew/)

2、Homebrew 安装：

打开mac终端，复制粘贴下面命令，根据要求，一步一步即可。

*/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"*

3、Homebrew卸载：

打开mac终端，复制粘贴下面命令(其实只用把上面安装的install换成uninstall就行了)。

*/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"*

4、Homebrew 怎么使用？常用命令有哪些？

```
安装软件，如：brew install oclint
卸载软件，如：brew uninstall oclint
搜索软件，如：brew search oclint
更新软件，如：brew upgrade oclint
查看安装列表， 如：brew list
更新Homebrew，如：brew update
```

5、安装中遇到的问题

（1）错误描述如下：

xcode-select: error: invalid developer directory '/Library/Developer/CommandLineTools'

Failed during: /usr/bin/sudo /usr/bin/xcode-select --switch /Library/Developer/CommandLineTools

原因：xcode的命令行工具不再安装在/Library/Developer/CommandLineTools 这个位置了，而是如下图所示的位置：

/Applications/Xcode.app 

![img](https://img2018.cnblogs.com/blog/721613/201809/721613-20180928140405716-1666033493.png)

这个时候只需要使用下面这个命令设置一下就可以了:

sudo xcode-select --switch /Applications/Xcode.app

最后再输入下面命令验证一下：

xcode-select -p

打印输出

/Applications/Xcode.app/Contents/Developer

然后再尝试安装命令，就没有出现上面的那个问题了。

想法：个人觉得上面的那个问题可以不用管，因为xcode 已经自动安装了CommandLineTools这个工具。

6、详细的流程：

$ sudo xcode-select --switch /Applications/Xcode.app

Password:

$ xcode-select -p

/Applications/Xcode.app/Contents/Developer

/usr/bin/ruby−e"/usr/bin/ruby−e"(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

**==>** **This script will install:**

/usr/local/bin/brew

/usr/local/share/doc/homebrew

/usr/local/share/man/man1/brew.1

/usr/local/share/zsh/site-functions/_brew

/usr/local/etc/bash_completion.d/brew

/usr/local/Homebrew

**==>** **The Xcode Command Line Tools will be installed.**

Press RETURN to continue or any other key to abort

**==>** **Searching online for the Command Line Tools**

**==>** **/usr/bin/sudo /usr/bin/touch /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress**

**==>** **Installing Command Line Tools (macOS High Sierra version 10.13) for Xcode-9.4**

**==>** **/usr/bin/sudo /usr/sbin/softwareupdate -i Command\ Line\ Tools\ (macOS\ High\ Sierra\ version\ 10.13)\ for\ Xcode-9.4**

Software Update Tool

Downloading Command Line Tools (macOS High Sierra version 10.13) for Xcode

Downloaded Command Line Tools (macOS High Sierra version 10.13) for Xcode

Installing Command Line Tools (macOS High Sierra version 10.13) for Xcode

Done with Command Line Tools (macOS High Sierra version 10.13) for Xcode

Done.

**==>** **/usr/bin/sudo /bin/rm -f /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress**

Password:

**==>** **/usr/bin/sudo /usr/bin/xcode-select --switch /Library/Developer/CommandLineTools**

**==>** **Downloading and installing Homebrew...**

HEAD is now at dae47914 Merge pull request #4992 from MikeMcQuaid/keg-remove-top-level-directories

==> **Migrating /Library/Caches/Homebrew to /Users/galahad/Library/Caches/Homebrew**

==> **Deleting /Library/Caches/Homebrew...**

Already up-to-date.

**==>** **Installation successful!**

**==>** **Homebrew has enabled anonymous aggregate formulae and cask analytics.**

**Read the analytics documentation (and how to opt-out) here:**

  **https://docs.brew.sh/Analytics.html**

**==>** **Homebrew is run entirely by unpaid volunteers. Please consider donating:**

  https://github.com/Homebrew/brew#donations

**==>** **Next steps:**

\- Run `brew help` to get started

\- Further documentation: 

  https://docs.brew.sh

接下来可以使用[Homebrew](http://brew.sh/)来安装 Node 和 Watchman等工具了。





GitHub创建仓库

```
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/zhangjuxin/my_study.git
git push -u origin master
```

推代码

```
git remote add origin https://github.com/zhangjuxin/my_study.git
git push -u origin master
```