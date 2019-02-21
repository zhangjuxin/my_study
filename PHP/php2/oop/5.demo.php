<?php 

/**
 * 含有抽象方法的类必须是抽象类
 * 抽象类不一定非要有抽象方法
 * 抽象类可以存在普通方法
 * 抽象类不能被实例化，必须有一个子类去继承，并且把抽象类的抽象方法都实现了
 */
abstract class person{
	public abstract function eat();//定义一个抽象类
}
class Man extends person{
	public function eat(){
		echo 'man eat';
	}
}
$man = new Man();
$man -> eat();

 ?>