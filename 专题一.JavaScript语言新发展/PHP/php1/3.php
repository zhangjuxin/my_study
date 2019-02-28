<?php 

// 设置utf8的报头
header( 'Content-Type:text/html;charset=utf-8 ');
// get请求
$username = $_GET['username'];
//什么请求都可以检测到
$username = $_REQUEST['username'];

if (username=='123') {
	
	# code...
}
echo "成功";


 ?>