# sql语句

### 改：

```mysql
UPDATE `news` SET `news`='1',`newsimg`='2',`addtime`='3' WHERE newsid=0

解读：
更新news表，更新newsid=1这一条数据，更新的内容为
`news`='1',`newsimg`='2',`addtime`='3' 
```

### 增:

```mysql
INSERT INTO `news`(`newsid`, `news`, `newsimg`, `addtime`) VALUES ('1','2','3','4')

增加一条数据，各个字段为1，2，3，4
```

# PDO

```
就是操作数据库的方法，
pdo就是把操作数据库的函数封装成一个pdo类，其间做了安全验证而已。
在使用PDO之前首先要设置PHP.INI文件，使PHP支持PDO，因为PHP5默认是不支持的。在PHP安装目录下找到PHP.INI文件，打开并搜索extension=php_pdo.dll 和 extension=php_pdo_mysql.dll，将前面的分号（；）去掉，重启apache即可。
```

