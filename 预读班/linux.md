### 网络端口

什么是端口：

服务启动之后需要提供服务，端口相当于一个门，http服务端口默认是80，https默认是443端口

MySQL：3306，

端口冲突就是两个服务的端口一样，必定有一个服务启动不了

nginx和Apache默认是80端口，需要改任意一个的配置文件，修改端口

pid是进程的编号

### 什么是服务

随着操作系统的启动而开启，没有界面，是一种特殊的进程

### 什么是终端

windows的cmd是dos命令行,具有部分终端的功能

终端是人机操作的界面，

### 远程登录linux

```
**windows：**

putty

cmder终端下面使用ssh命令

**Mac：**

ssh：一个通信加密的协议

**ssh命令登录服务器：**

1. ssh root(用户名)@+（服务器的IP地址）
2. 回车，输入密码
```

**常用的Linux命令：**

行编辑器：vi/vim的使用：

```
vi+文件名进入文件，当前为只读模式，输入i，进入输入模式，按esc，输入：进入底线命令模式，w是保存，q是退出，输入：wq保存并退出

输入/进入检索模式，查某个单词，n查找下一个，p查找上一个

登录服务器后需要使用vim去修改代码，所以使用比较多
```

```
Ifconfig:显示一些配置

Pwd:显示当前路径

Curl,wget:命令行下载命令，下载源代码包，linux工具

curl http://baidu.com -o baidu.html  访问baidu.com 下载在baidu.html

brew ,yum,apt-get：是一个在线的软件商店，Mac工具

ctrl+s:暂停屏幕输出

ctrl+q:恢复屏幕的输出

ctrl+c:结束当前运行的程序

ctrl+a:跳到行首

ctrl+e:调到行位

tar -zxvf …..gz  解压文件

./XXX 执行xxx脚本
```

### 基本命令

Ls -al显示出文件的权限









