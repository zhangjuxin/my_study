<?php
$servername = "localhost";
$username = "PHPlesson";
$password = "";
 
try {
    $conn = new PDO("mysql:host=$servername;", $username, $password);
    echo '1'; 
    foreach($conn->query("SELECT * FROM `news` WHERE 1") as $row) {
    	print_r($row);
    }

    $query = "SELECT * FROM `news` WHERE 1";

}
catch(PDOException $e){
    echo $e->getMessage();
}
?>