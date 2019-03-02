<?php
/* 
程序中，有些类的作用只是用来继承，无须实例化；

为了满足类的这种需求，php提供了抽象类的概念 ，关键词abstract；

抽象类原则：

抽象类不能被实例化
有抽象方法的类一定是抽象类；类必须要abstract修饰
抽象方法不能有函数体；即abstract function fun();
抽象类中的非抽象方法，可以被子类调用
非抽象子类继承抽象类，子类必须实现父类的所有抽象方法
抽象子类继承抽象类，无需继承父类的抽象方法
*/
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