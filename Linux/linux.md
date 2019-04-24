### 网络端口

什么是端口：

服务启动之后需要提供服务，端口相当于一个门，http服务端口默认是80，https默认是443端口

MySQL：3306，

端口冲突就是两个服务的端口一样，必定有一个服务启动不了

nginx和Apache默认是80端口，需要改任意一个的配置文件，修改端口

pid是进程的编号

### 什么是服务

随着操作系统的启动而开启，没有界面，是一种特殊的进程

apache是一个静态服务器，可以存放我们的静态HTML,css,js文件

apache可以安装php模块，这样就可以运行PHP代码了,php 文件属于动态文件





### 什么是终端

windows的命令行是一个模拟的dos命令行,具有部分终端的功能

终端是人机操作的界面，

### 远程登录linux

```
**windows：**

putty工具

cmder终端下面使用ssh命令

**Mac linux：**

ssh：一个通信加密的协议

**ssh命令登录服务器：**

1. ssh root(用户名)@+（服务器的IP地址）
2. 回车，输入密码

第一次链接的时候需要在本地保存一个文件，选择yes就完了

root@VM_0_16_centos ~
~是home目录
我的是：
ssh root@139.199.117.199

```

### 行编辑器：vi/vim的使用：

```
vi+文件名进入文件，当前为只读模式，输入i，进入输入模式，按esc，输入：进入底线命令模式，w是保存，q是退出，输入：wq保存并退出

:q! 表示不保存直接退出

/ver 回车 ：搜索ver字符，找下一个输入n

输入/进入检索模式，查某个单词，n查找下一个，p查找上一个

登录服务器后需要使用vim去修改代码，所以使用比较多
```

### 基本的Linux命令： 

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

ctrl+l:清屏

tar -zxvf …..gz  解压文件

./XXX 执行xxx脚本

Ls -al显示出文件的权限

cp -R a b  递归复制目录(-R是递归目录)

ip addr   查看linux的ip

ls -a 查看隐藏文件 

设置文件/文件件权限：chmod +rxw  -R(递归给文件夹和文件全部操作)
```

kernel:真正的linux内核

centos等都是发行版，使用的linux内核

虚拟机：vmware(workstation pro) 注册码网上个搜



守护进程：一直在后台开启，

systemctl  ———  linux管理进程的命令(Mac上的是launchctl)

systemctl status nginx  查看nginx的进程信息

systemctl start nginx  开启nginx

kill 主进程(master,如果不知道哪个是主进程，kill pid小的那个 进程)

ps aux | grep nginx

### 进程，线程，协程



进程里面跑着若干个线程



io:针对cpu的io操作(键盘，网络，显示器，存储。。。)

  

 

### linux免密登录

前端工程化的时候测试，发布的流程需要免密登录

#### 加密手段：

```
1.对称加密

2.不对称加密(加密是一种，解密又是一种)
```

 #### 方法

1.生成密钥对(私钥：自己保存的(就像钥匙🔑)  公钥：可以发送给别人，类似于锁头🔐)

```
cd 
cd .ssh
ll  查看known_hosts文件和config文件的权限是否为-rw-r--r--

本地存放私钥的位置.ssh 文件known_hosts文件和config文件的权限是否为-rw-r--r--(644)  私钥文件需要是-rw-----（600）权限
```

 ssh-keygen -t rsa(rsa不对称加密算法) -C  "zhangjuxin"  -f  "mykey" (秘钥的文件名)

 回车后会问你是否设置秘钥密码，直接回车两次(默认不使用密码㊙️)

生成一个公钥文件mykey.pub，一个私钥文件mykey

2.上传并配置公钥(公钥上传到服务器的对应账号的  home/.ssh目录)

ssh-copy-id -i mykey.pub root@+ip  把公钥发送到某个服务器上面，在.ssh文件下面有一个文件叫做 authorized_keys ———  linux上存公钥的文件,所有的公钥都在这一个文件里面，打开文件看是否有上一步( ssh-keygen -t rsa(rsa不对称加密算法) -C  "zhangjuxin"  -f  "mykey" (秘钥的文件名)命令的zhangjuxin字样，如果有就是上传成功了

ssh root@139.199.117.199 -i mykey(本地私钥的地址)  

直接免密登录，但是这样输入的还是比较多，我们可以配置一个文件简化

3.配置本地的免密登录文件(在当前用户根目录下的.ssh目录下面)

查看本地的私钥权限是不是 -rw------

私钥的地址和配置文件（config文件）在/Users/apple/.ssh   自己用户的根目录下面的.ssh文件

配置本地免密登录的配置文件

没有config,自己创建，touch config创建文件，下面是config 文件的配置

```
### 单主机配置

Host zhangjuxin   自定义主机名，就是登陆的时候  ssh 后面的东西
User root
HostName 139.199.117.199    服务器名称(IP或者域名(不带协议))
IdentityFile ~/.ssh/evilboy_rsa   私钥的路径  ~是用户的根目录,下面的不需要改
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
LogLevel INFO

### 多主机配置

Host gateway-produce
HostName IP或绑定的域名
Port 22

Host node-produce
HostName IP或绑定的域名
Port 22

Host java-produce
HostName IP或绑定的域名
Port 22

Host *-produce
User root
IdentityFile ~/.ssh/produce_key_rsa
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
LogLevel INFO
```

完成后直接   ssh zhangjuxin   成功免密登录

### 端口冲突

linux上：ss -anp | grep :80  查看端口占用信息

```
-a  所有的信息

n   网络信息

p  查看进程的信息
```

Mac： lsof -a:80  查看端口信息











 