<?php
require_once('1.php');
require_once('2.php');
require_once('2.php');
use b\c\d\Apple;
use f\c\d\Apple as Bapple;

//use b\c\d\Apple;
$a=new Apple();
$a->get_info();

//use f\c\d\Apple as Bapple;
$a=new Bapple();
$a->get_info();

//使用没有命名空间的apple方法
$a=new \Apple();
$a->get_info();
?>