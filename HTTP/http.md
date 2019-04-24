# HTTP

无状态协议：请求响应一次之后就结束了

局域网：一种网络结构和互联网对应，手机电脑设备连接到的是路由器的局域网

## 输入网址后发生了什么：

用户———》浏览器——》保证网络是通的，确定自己可以连到外界的互联网----》

到dns服务器进行域名和ip的转换（ipv4,ipv6是一种IP协议版本，ipv6比ipv4可以

提供更多的IP地址）——》开始上路（需要经过多个路由【就像快递的配送中心】

的转换）——》找到对应的服务器集群，但是到底是哪一个服务器需要nginx——》

服务器处理请求——》经过一系列的路由回到浏览器进行页面的渲染

## 什么是HTTP协议：

一种**超文本**（图片，视频等资源）传输协议，网站是基于HTTP协议的。

HTTP是由客户端到服务器请求和从服务器到客户机的相应进行约束和规范

1991：HTTP 0.9

1996：HTTP 1.0

1999：HTTP 1.1

2015：HTTP 2.0



## 了解TCP/IP协议栈

应用层：为用户提供所需要的各种服务，HTTP等

传输层：TCP（可以维持住稳定链接状态，对方收不到自己可以知道，比较可靠），UTP协议(只负责发送，是否接受的到不管，传输是不可靠的)

网络层：IP地址的分配等

数据链路层：在物理层上传输的信号，例如网卡

物理层：硬件，网线等，无线电波



ISO/OSI协议7层比TCP详细只是一种建议，没有应用



## HTTP在tcp/ip协议栈中的位置

![http](/Users/apple/Desktop/yd/专题2--大话nodejs/images/http.jpg)

https在HTTP的基础上嵌入了tls,ssl的加密的模块

http默认端口号：80

https默认端口号：443



## HTTP的工作过程

一次HTTP操作称为一个**事务**（只要某一个步骤失败，整体就失败了），其工作过程可分为四步: 

1)首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始。 

2)建立连接后，客户机发送一个请求给服务器，请求方式的格式为:统一资源标识符(URL)、协议版本号， 后边是MIME信息包括请求修饰符、客户机信息和可能的内容。 

3)服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功 或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。 

4)客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。 

如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户 来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了 





状态行：



get 在请求正文中不会出现数据

请求方法

GET: 请求获取Request-URI所标识的资源
POST: 在Request-URI所标识的资源后附加新的数据
HEAD: 请求获取由Request-URI所标识的资源的响应消息报头
PUT: 请求服务器存储一个资源，并用Request-URI作为其标识
DELETE: 请求服务器删除Request-URI所标识的资源
TRACE: 请求服务器回送收到的请求信息，主要用于测试或诊断
CONNECT:HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
OPTIONS: 请求查询服务器的性能，或者查询与资源相关的选项和需求





Remote Address: 220.181.111.37:443    IP地址

Accept:text/plain, */*; q=0.01  接受的数据

Accept-Encoding:gzip, deflate, br  是否接受压缩

Accept-Language: zh-CN,zh;q=0.9   浏览器默认的语言

Connection: keep-alive  是否接受长链接

host：域名

User-Agent:  Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36    浏览器，操作系统等一些信息，爬虫会识别

referer:检查上一个请求来源是什么





## HTTP状态码 

状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值: 

 1xx:指示信息--表示请求已接收，继续处理

 2xx:成功--表示请求已被成功接收、理解、接受 

 3xx:重定向--要完成请求必须进行更进一步的操作 

 4xx:客户端错误--请求有语法错误或请求无法实现 

 5xx:服务器端错误--服务器未能实现合法的请求 



## cookie 和 session

<https://zhuanlan.zhihu.com/p/27669892>

<https://segmentfault.com/a/1190000004556040>

cookie：保存在客户端，两端都可以生成

Session:  保存在服务器，只能在服务器生成， 

 使用Cookie来管理状态

HTTP 是无状态协议，说明它不能以状态来区分和管理请求和响应。也就是说，无法根据之前的状态进行本次的请求处理。
不可否认，无状态协议当然也有它的优点。由于不必保存状态，自然可减少服务器的CPU 及内存资源的消耗。从另一侧面来说，也正是因为HTTP 协议本身是非常简单的，所以才会被应用在各种场景里。

 

![http](https://pic4.zhimg.com/80/v2-ba2f99ae66a2f4731ac8a176f562aac7_hd.png)
我们登录淘宝的时候首先要登录，我们看到了一个商品点进去，进行了页面跳转/刷新，按照HTTP的无状态协议岂不是又要登录一次？
所以为了解决这个问题，Cookie诞生了，在保留无状态协议这个特征的同时又要解决类似记录状态的矛盾问题。Cookie 技术通过在请求和响应报文中写入Cookie 信息来控制客户端的状态。
Cookie 会根据从服务器端发送的响应报文内的一个叫做Set-Cookie的首部字段信息，通知客户端保存Cookie。当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入Cookie 值后发送出去。
服务器端发现客户端发送过来的Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息。

- 没有Cookie信息状态下的请求

  ![img](https://pic1.zhimg.com/80/v2-85622297a93f493c891ffb90b67fd5e0_hd.png)

- 第2次以后（存有Cookie信息状态）的请求



![img](https://pic2.zhimg.com/80/v2-1f49734871c5e2da2d264d28ac310a65_hd.png)

上图很清晰地展示了发生Cookie 交互的情景。

HTTP 请求报文和响应报文的内容如下（数字和图中对应）。

①请求报文（没有Cookie 信息的状态）



```text
GET /reader/ HTTP/1.1
Host: hackr.jp
*首部字段内没有Cookie的相关信息
```

②响应报文（服务器端生成Cookie 信息）

```text
HTTP/1.1 200 OK
Date: Thu, 12 Jul 2012 07:12:20 GMT
Server: Apache
＜Set-Cookie: sid=1342077140226724; path=/; expires=Wed,10-Oct-12 07:12:20 GMT＞
Content-Type: text/plain; charset=UTF-8
```

③请求报文（自动发送保存着的Cookie 信息）

```text
GET /image/ HTTP/1.1
Host: hackr.jp
Cookie: sid=1342077140226724
```

# 2. 关于Cookie 的首部字段

![img](https://pic4.zhimg.com/80/v2-ba2f99ae66a2f4731ac8a176f562aac7_hd.png)



![img](https://pic4.zhimg.com/80/v2-b1147a2e2c3fbb6d6b46fdebda122ba3_hd.png)

## 2.1 Set-Cookie

```text
Set-Cookie: status=enable; expires=Tue, 05 Jul 2011 07:26:31 GMT; ⇒
path=/; domain=.hackr.jp;
```

当服务器准备开始管理客户端的状态时，会事先告知各种信息。下面的表格列举了Set-Cookie 的字段值。

### 2.1.1Set-Cookie 字段的属性

![img](https://pic4.zhimg.com/80/v2-d04615c640ec0b4fbb553cbc406eb057_hd.png)

### 2.1.2 expires 属性

Cookie 的expires 属性指定浏览器可发送Cookie 的有效期。当省略expires 属性时，Cookie仅在浏览器关闭之前有效。
另外，一旦Cookie 从服务器端发送至客户端，服务器端就不存在可以显式删除Cookie 的方法。但可通过覆盖已过期的Cookie，实现对客户端Cookie 的实质性删除操作。

### 2.1.3 path 属性

Cookie 的path 属性可用于限制指定Cookie 的发送范围的文件目录。不过另有办法可避开这项限制，看来对其作为安全机制的效果不能抱有期待。

### 2.1.4 domain 属性

通过Cookie 的domain 属性指定的域名可做到与结尾匹配一致。比如， 当指定http://example.com 后， 除http://example.com 以外，[Example Domain](http://link.zhihu.com/?target=http%3A//www.example.com)或www2.example.com 等都可以发送Cookie。因此，除了针对具体指定的多个域名发送Cookie 之外，不指定domain 属性显得更安全。

### 2.1.5 secure 属性

Cookie 的secure 属性用于限制Web 页面仅在HTTPS 安全连接时，才可以发送Cookie。发送Cookie 时，指定secure 属性的方法如下所示。
Set-Cookie: name=value; secure
以上例子仅当在https ：//[Example Domain](http://link.zhihu.com/?target=http%3A//www.example.com/)（HTTPS）安全连接的情况下才会进行Cookie 的回收。也就是说，即使域名相同时http : //[Example Domain](http://link.zhihu.com/?target=http%3A//www.example.com/)（HTTP） 也不会发生Cookie 回收行为。当省略secure 属性时，不论HTTP 还是HTTPS，都会对Cookie 进行回收。

### 2.1.6 HttpOnly 属性

Cookie 的HttpOnly 属性是Cookie 的扩展功能，它使JavaScript 脚本无法获得Cookie。其主要目的为防止跨站脚本攻击（Cross-sitescripting，XSS）对Cookie 的信息窃取。
发送指定HttpOnly 属性的Cookie 的方法如下所示。
Set-Cookie: name=value; HttpOnly
通过上述设置，通常从Web 页面内还可以对Cookie 进行读取操作。但使用JavaScript 的document.cookie 就无法读取附加HttpOnly 属性后的Cookie 的内容了。因此，也就无法在XSS 中利用JavaScript 劫持Cookie 了。
虽然是独立的扩展功能，但Internet Explorer 6 SP1 以上版本等当下的主流浏览器都已经支持该扩展了。另外顺带一提，该扩展并非是为了防止XSS 而开发的。

## 2.2 Cookie

Cookie: status=enable
首部字段Cookie 会告知服务器，当客户端想获得HTTP 状态管理支持时，就会在请求中包含从服务器接收到的Cookie。接收到多个Cookie 时，同样可以以多个Cookie 形式发送。

# 3 Session 管理及Cookie 应用

## 3.1 什么是Session

在计算机中，尤其是在网络应用中，称为“会话控制”。Session 对象存储特定用户会话所需的属性及配置信息。这样，当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。当用户请求来自应用程序的 Web 页时，如果该用户还没有会话，则 Web 服务器将自动创建一个 Session 对象。当会话过期或被放弃后，服务器将终止该会话。Session 对象最常见的一个用法就是存储用户的首选项。例如，如果用户指明不喜欢查看图形，就可以将该信息存储在 Session 对象中。

## 3.2 通过Cookie来管理Session

基于表单认证的标准规范尚未有定论，一般会使用Cookie 来管理Session（会话）。
基于表单认证本身是通过服务器端的Web 应用，将客户端发送过来的用户ID 和密码与之前登录过的信息做匹配来进行认证的。
但鉴于HTTP 是无状态协议，之前已认证成功的用户状态无法通过协议层面保存下来。即，无法实现状态管理，因此即使当该用户下一次继续访问，也无法区分他与其他的用户。于是我们会使用Cookie 来管理Session，以弥补HTTP 协议中不存在的状态管理功能。

![img](https://pic2.zhimg.com/80/v2-0b02fa4a73a8072eb03cdf78270235e1_hd.png)

Session 管理及Cookie 状态管理

- 步骤一：客户端把用户ID 和密码等登录信息放入报文的实体部分，通常是以POST 方法把请求发送给服务器。而这时，会使用HTTPS 通信来进行HTML 表单画面的显示和用户输入数据的发送。
- 步骤二：服务器会发放用以识别用户的Session ID。通过验证从客户端发送过来的登录信息进行身份认证，然后把用户的认证状态与Session ID 绑定后记录在服务器端。
  向客户端返回响应时，会在首部字段Set-Cookie 内写入Session ID（如PHPSESSID=028a8c…）。
  你可以把Session ID 想象成一种用以区分不同用户的等位号。然而，如果Session ID 被第三方盗走，对方就可以伪装成你的身份进行恶意操作了。因此必须防止Session ID 被盗，或被猜出。为了做到这点，Session ID 应使用难以推测的字符串，且服务器端也需要进行有效期的管理，保证其安全性。
  另外，为减轻跨站脚本攻击（XSS）造成的损失，建议事先在Cookie 内加上httponly 属性。
- 步骤三：客户端接收到从服务器端发来的Session ID 后，会将其作为Cookie 保存在本地。下次向服务器发送请求时，浏览器会自动发送Cookie，所以Session ID 也随之发送到服务器。服务器端可通过验证接收到的Session ID 识别用户和其认证状态。

 

# http 缓存机制



缓存在本地的计算机内

# https

非对称加密：加密和解密都是不一样的方法 

需要ca的证书

HTTP2.0

多路复用：

长连接：一次把所有请求都完成，充分利用带宽



网络

 

### 5.nginx文件目录

**5.1  nginx安装文件目录**
 /usr/local/Cellar/nginx
 **5.2  nginx配置文件目录**
 /usr/local/etc/nginx
 **5.3  config文件目录**
 /usr/local/etc/nginx/nginx.conf
 **5.4  系统hosts位置**
 /private/etc/hosts



<https://www.jianshu.com/p/026d67cc6cb1>

 



















