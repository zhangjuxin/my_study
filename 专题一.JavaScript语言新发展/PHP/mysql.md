# mysql

登录MySQL：mysql -u root -p

Tables:数据表

​	Nn:非空

​	ai:自动增长

function：自定义函数（可以自己写）

### 系统函数：

```
Count(*) ：总数

min(birthdate)  求最小值

SELECT now()

SELECT rand()*10

SELECT concat(name," ",id) FROM t_student

name和id链接起来
```

### 创建数据表：

```sql
CREATE TABLE `db_test`.`t_student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NOT NULL,
  `birthdate` DATE NOT NULL,
  `gender` CHAR(1) NOT NULL COMMENT '男性：M\n女性：W',
  `class_id` INT NOT NULL,
  PRIMARY KEY (`id`));

```

### 条件查询：

```
筛选出生日期在1990-01-10和2018-11-11之间的同学：
SELECT * FROM db_test.t_student
WHERE birthdate >= '1990-01-01'
AND birthdate <= '2018-11-11'
```

```
--+空格：注释
SELECT * FROM t_student
WHERE birthdate BETWEEN '1990-01-01' AND '2019-01-01'

关键字：BETWEEN  AND  (在。。之间)
```

```
SELECT * FROM t_student
WHERE name='张三'
//找name=张三

-- 筛选姓张的同学
SELECT * FROM t_student
WHERE name LIKE '张%'

注意：百分号叫通配符(% 代表任意字符)

-- 筛选带张的同学(两个%)
SELECT * FROM t_student
WHERE name LIKE '%张%'
```

```MySQL
按照出生日期从大到小排序(ORDER BY)
SELECT * FROM t_student
ORDER BY birthdate 

逆序排序
SELECT * FROM t_student
ORDER BY birthdate DESC
```

```mysql
两个数据表链接起来，通过calss——id进行关联，只查询 t_student.id, t_student.name,t_class.class_name 这些字段

SELECT t_student.id, t_student.name,t_class.class_name FROM t_student,t_class
WHERE t_student.class_id=t_class.class_id
```



