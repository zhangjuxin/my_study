<?php 

/**
 * 当试图获取一个私有变量时，类会自动调用__get。

同样的，当试图设置一个私有变量时，类会自动调用__set。
 */
//__set

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
		//魔术方法的set只针对保护，私有变量
		echo $name.$value.'</br>';
		if ($name == 'age' && $value == '100') {
			echo 'zjx 100';
		}
	}
	public function __get($key){
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


//__get

 ?>