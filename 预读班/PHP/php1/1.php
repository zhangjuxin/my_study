<?php 

echo "string";
require_once('1.php');
include_once('2.php');
function test(){

}
// 数组
$arrayName = array('0' => '🍎','1' => '🍌');
echo $arrayName[0];

//session
session_start();
$_SESSION['views'];


?>