<?php 

//接口声明的关键字是interface
//接口中的方法都是抽象方法，不也使用abstract去手动的定义
//
interface person{
	public function run();
}
interface study{
	public function eat();
}
class student implements person,study{

	public function run(){
		echo "run";
	}
	public function eat(){
		echo "eat";
	}
}

const name = '1';//常量

 ?>