<?php
/*
 命名空间，当其他模块引入改模块的时候，如果其他模块也有同样的方法，为了不覆盖，
使用命名空间的方法来避免。
*/
class Apple{
    function get_info(){
        echo "1.php";
    }
}

?>