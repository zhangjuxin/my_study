<?php 
 class person{
 	public function __construct($name,$age){
 		//new 的时候自动执行的
 		$this -> name = $name;
 		$this -> age = $age;
 	}
 	public function data(){
 		return $this -> age;
 	}
 	//析构
 	public function __destruct(){
 		echo $this -> data();
 		//用途：进行资源的释放，数据库的关闭，代码执行完毕，
 		//代码执行完毕后指执行的函数
 		echo "bye bye {$this -> name}";
 		echo "<hr/>";
 		//bye bye tory
 	}
 }
new person('tory',30); 
new person('red',320); 

 ?>