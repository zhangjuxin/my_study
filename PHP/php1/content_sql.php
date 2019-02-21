
<?php
header("Content-type:text/html;charset=utf-8");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "PHPlesson";
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "INSERT INTO `news`(`news`, `newsimg`, `addtime`) VALUES ('news11','哈哈','2019-10-11')";

 
if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
 
mysqli_close($conn);
?>