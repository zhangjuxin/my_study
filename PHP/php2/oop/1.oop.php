<?php 

/**
* $引用名 = new类名（构造函数）
* $引用名->成员属性=赋值	//对象属性赋值
* echo $引用名->成员属性  //输出对象的属性
* $引用名->成员方法（参数）//调用对象的方法
*/


class Person{
	public $age;
	public function say($word){
		echo 'she say {$word}';
	}
	public function info(){
		$this -> say('hi');
		return $this -> age;
	}
}
$xiaohong = new Person();
$xiaohong -> age = 22;
$age = $xiaohong -> info();
echo "123";
echo $age;//22

 ?>