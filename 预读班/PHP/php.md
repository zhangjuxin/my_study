# php语法

## 基本语法

### 数组

```php
//定义数组
$arrayName = array('0' => '🍎','1' => '🍌');
//打印数组
echo $arrayName[0];
```

## 请求方面

```php

// 设置utf8的报头
header( 'Content-Type:text/html;charset=utf-8 ');
// 接受get请求
$username = $_GET['username'];
//post请求
$username = $_POST['username'];
//什么请求都可以检测到
$username = $_REQUEST['username'];

```

## 链接数据库

```php
//设置报头
header("Content-type:text/html;charset=utf-8");
//定义链接的一些参数
$servername = "localhost";
//username默认是root
$username = "root";
$password = "";
//库名
$dbname = "PHPlesson";
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接，如果链接失败，就抛出错误
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//定义sql语句，添加信息
$sql = "INSERT INTO `news`(`news`, `newsimg`, `addtime`) VALUES ('news11','哈哈','2019-10-11')";

if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
//关闭链接
mysqli_close($conn);
```

## PHP的类



```php
class Person{
    //公共属性
	public $age;
    //公共方法
	public function say($word){
		echo 'she say {$word}';
	}
	public function info(){
        //调用方法，这里可以把 ->理解为js里面的点
		$this -> say('hi');
		return $this -> age;
	}
}
$xiaohong = new Person();
$xiaohong -> age = 22;
$age = $xiaohong -> info();
echo "123";
echo $age;//22
```

### 析构

```php
<?php 
 class person{
    //固定写法，类似于js里面的constructor
 	public function __construct($name,$age){
 		//new 的时候自动执行的
 		$this -> name = $name;
 		$this -> age = $age;
 	}
 	public function data(){
 		return $this -> age;
 	}
 	//析构--->代码执行完毕后指执行的函数
 	public function __destruct(){
 		echo $this -> data();
 		//用途：进行资源的释放，数据库的关闭，代码执行完毕，
 		echo "bye bye {$this -> name}";
 		echo "<hr/>";
 		//bye bye tory
 	}
 }
new person('tory',30); 
new person('red',320); 

 ?>
```

### 私有变量，方法，受保护的变量，方法，get和set

```php
<?php 
/*
当试图获取一个私有变量时，类会自动调用__get。
同样的，当试图设置一个私有变量时，类会自动调用__set。
*/
class person{
	//共有的
	public $name = "zjx";
	// 私有的
	private $age = '21';
	//受保护的
	protected $money = '30';
	//私有成员方法不能在类的外部访问
	private function getName(){
		return $this -> name;
	}
	protected function getMoney(){
		return $this -> money;
	}
	public function userCard(){
		echo $this -> name.$this -> getName().'存款'.$this -> getMoney();
	}
	public function __set($name,$value){
        //$name:变量名，$value：变量值
		//魔术方法的set只针对保护，私有变量
		echo $name.$value.'</br>';
		if ($name == 'age' && $value == '100') {
			echo 'zjx 100';
		}
	}
	public function __get($key){
        //$key：变量名
		echo 'ok'.$key.'ok';
	}
}

$xw = new person();
//没有set的时候是不能在外边操作私有变量的
$xw -> age = "100";
echo $xw -> userCard();
echo $xw -> age;
//isset() — 检测变量是否设置。
unset($name);//干掉某个变量

 ?>
```

### 类的继承

```php
/*PHP只支持单继承，不允许多重继承。一个子类只能有一个父类，不允许一个类直接继承多个类，但一个类可以被多个类继承。
可以有多层继承，即一个类可以继承某一个类的子类，如类B 继承了类A，类C又继承了类B，那么类C也间接继承了类A，*/
  class A{
     ....
  }
  class B  extends A{
     ....
  }
  class C  extends B{
     ....
  }
```

```php
<?php 

/**
* 父类
*/
class person
{
	public $name = 'zjx';
	private $age = '10';//私有的属性无法继承
	protected $money = '100';//受保护的外部无法访问，但是可以继承过去
	function __construct($name,$age,$money){
		$this -> name = $name;
		$this -> age = $age;
		$this -> money = $money;
	}
	public function cardinfo(){
		echo $this -> name.'->'.$this -> age.'->'.$this -> money;
	}
}

/**
* yellow继承person
*/
class yellow extends person
{
	
	function __construct($name,$age,$money)
	{
        //使用父类的构造函数，如果不写这个的话就会覆盖父类的构造函数
		parent::__construct($name,$age,$money);
	}
	public function cardinfo($pp){
        //借用父类的cardinfo方法
		parent::cardinfo();
		echo $pp;
	}
}

$s = new yellow('xiaom','1','20');
$s -> cardinfo(11);
 ?>
```

1. 在子类中，使用parent访问父类中的被覆盖的属性和方法
2. 在子类里面允许重写（覆盖）父类的方法
3. 子类继承父类的所有内容，但父类中的private部分不能直接访问
4. 子类中新增加的属性和方法是对父类的扩展
5. 子类中定义的与父类同名的属性是对父类属性的覆盖，同名的方法也是对父类方法的覆盖

## [php接口interface的使用](https://www.cnblogs.com/minigrasshopper/p/7754512.html)

#### 接口是什么？

- 使用接口（interface），可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。

- 接口是通过 interface 关键字来定义的，就像定义一个标准的类一样，但其中定义所有的方法都是空的。

- 接口中定义的所有方法都必须是公有，这是接口的特性。

**什么时候用接口？**

1、定规范，保持统一性；

2、多个平级的类需要去实现同样的方法，只是实现方式不一样

**接口使用规范**

- 接口不能实例化
- 接口的属性必须是常量
- 接口的方法必须是public【默认public】，且不能有函数体
- 类必须实现接口的所有方法
- 一个类可以同时实现多个接口，用逗号隔开
- 接口可以继承接口【用的少】

**实例：**

```php
<?php

//接口声明的关键字是interface
//接口中的方法都是抽象方法，不也使用abstract去手动的定义
    
interface usb{
    const brand = 'siemens';    // 接口的属性必须是常量
    public function connect();  // 接口的方法必须是public【默认public】，且不能有函数体
}
// new usb();  // 接口不能实例化

// 类实现接口
class Android implements usb{
    public function connect(){  // 类必须实现接口的所有方法
        echo '实现接口的connect方法';
    }
}


interface usbA{
    public function connect();
}

interface usbB{
    public function contact();
}

// 类可以同时实现多个接口
class mi implements usbA,usbB{
    public function connect(){

    }
    public function contact(){

    }
}
?>
```

## [php 抽象类abstract](https://www.cnblogs.com/minigrasshopper/p/7753652.html)

程序中，有些类的作用只是用来继承，无须实例化；

为了满足类的这种需求，php提供了抽象类的概念 ，关键词abstract；

**抽象类原则：**

- 抽象类不能被实例化
- 有抽象方法的类一定是抽象类；类必须要abstract修饰
- 抽象方法不能有函数体；即abstract function fun();
- 抽象类中的非抽象方法，可以被子类调用
- 非抽象子类继承抽象类，子类必须实现父类的所有抽象方法
- 抽象子类继承抽象类，无需继承父类的抽象方法

```php
<?php
abstract class Animal{
    public $name = 'animal';
    // 有抽象方法的类一定是抽象类；类必须要abstract修饰
    // 抽象方法不能有函数体
    abstract function cry();
    public function getName(){
        echo '我的名字';
    }
}
// new Animal();   // 报错，抽象类不能被实例化

class Dog extends Animal {
    // 非抽象子类继承抽象类，子类必须实现父类的所有抽象方法
    public function cry(){

    }
}

$dog = new Dog();
$dog->getName();    //抽象类中的非抽象方法可以调用

abstract class Cat extends Animal{
    // 抽象子类继承抽象类，无需继承父类的抽象方法
}
?>
```

## [php require、require_once和include、include_once的区别](https://www.cnblogs.com/minigrasshopper/p/7798282.html)



```
一、引入php文件路径的方法
require '文件路径';  require ('文件路径');
require_once '文件路径';  require_once ('文件路径');

include 同 require
include_once 同 require_once 
 
二、include和require的区别
```

- 相同点：都是引入文件
- 不同点：require遇到错误终止程序；include遇到错误继续执行。

推荐使用require_once方法引入文件



## [php 面向对象三大特点：封装、继承、多态]

在讲解这三大特性前，我们先讲访问修饰符。

php中有3中访问修饰符：public protected private；

public：表示公有的；可在本类、子类、对象实例中访问。

protected：表示受保护的；可在本类、子类中访问；不能在对象实例中访问。

private：表示私有的；可在本类中访问；不能在子类、对象实例中访问。

 

**一、封装性**

封装就是把抽取出来的数据和对数据的操作封装在一起，数据被保护在内部，程序的其他部分只有被授权的操作（方法）才能对数据进行操作。

```php
class Student{
    public $name;
    protected $age;
    private $play;
    public function __construct($name, $age){
        echo '我是Student类';
        $this->name = $name;
        $this->age = $age;
    }
}

$student = new Student('moon', 18);
```

**二、继承性**

当多个类有很多共同属性和方法时，代码冗余；这时，我们可以将共有部分提取出来，封装成一个类；子类经过一些操作可以使用这个共有的父类，这个就叫继承。

语法结构： 

class 父类名｛｝ 

class 子类名 extends 父类名｛｝

继承要素：

- 一个子类只能继承一个父类（这里指直接继承）；如果希望继承多个类的属性和方法，可以使用多层继承
- 在子类中调用父类的构造方法 父类::__construct() 或者 parent::__construct()
- 如果子类和父类的方法名相同(public，protected)，我们称为方法覆盖或方法重写（override），看下面的多态性 

```php
class Student{
    public $name;
    protected $age;
    private $play;
    public function __construct($name, $age){
        echo '我是Student类';
        $this->name = $name;
        $this->age = $age;
    }
}

// Pupil类继承Student类
class Pupil extends Student {
    public function testing(){
        echo '我是Pupil';
    }
    public function __construct($name, $age){
        parent::__construct($name, $age);   // 调用父类的构造方法1
        // Student::__construct($name, $age);   // 调用父类的构造方法2
        echo $this->name;
        echo $this->age;
        // echo $this->play;    // 报错，父类private定义的属性不能被子类继承
    }
}

new Pupil('sky', 18);


// 实现类的多层继承
class A{
    public $name='AAA';
}
class B extends A{
    public $age=30;
}
class C extends B{}
$p = new C();
echo $p->name; // 这里会输出AAA  
```

**三、多态性**

- 子类覆盖父类的方法(重写)，必须要求父类、子类的方法名和参数个数完全一致 
- 子类调用父类的方法(protected/public)，使用 父类名::方法名 或者 parent::方法名 
- 在实现方法重写的时候，访问修饰符可以不一样，但是子类方法的访问权限必须大于等于父类方法的访问权限 

```php
class Student{
    public $name;
    protected $age;
    private $play;
    public function getPlay(){
        echo '我是Student';
    }
}

// Pupil类继承Student类
class Pupil extends Student {
    public function __construct(){
        parent::getPlay(); // 可以这样调用父类的方法
    }

    public function getPlay(){
        echo '我是Pupil';
    }
}

$p1 = new Pupil();  // 我是Student
$p1->getPlay();     // 我是Pupil 
```

扩展： 

方法重载（overload） 

基本概念：函数名相同，但参数的个数或参数的类型不同，达到调用同一个函数，可以区分不同的函数 

在PHP5中虽然也支持重载，但是和其它语言还是有很大区别的，php中不能定义多个同名函数 

PHP5中提供了强大的“魔术”函数，使用这些魔术函数，我们可以做到函数重载

这里我们要到到 __call,当一个对象调一个方法时，而该方法不存在，则程序会自动调用__call 