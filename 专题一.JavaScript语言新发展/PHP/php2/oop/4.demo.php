<?php 

/**
*
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
* 
*/
class yellow extends person
{
	
	function __construct($name,$age,$money)
	{
		parent::__construct($name,$age,$money);
	}
	public function cardinfo($pp){
		parent::cardinfo();
		echo $pp;
	}
}

$s = new yellow('xiaom','1','20');
$s -> cardinfo(11);

 ?>