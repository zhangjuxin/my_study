<?php

interface usb{
    const brand = 'siemens';    // 接口的属性必须是常量
    public function connect();  // 接口的方法必须是public【默认public】，且不能有函数体
}
// new usb();  // 接口不能实例化

// 类实现接口
class Android implements usb{
    public function connect(){  // 类必须实现接口的所有方法
        echo '实现接口的connect方法';
    }
}


interface usbA{
    public function connect();
}

interface usbB{
    public function contact();
}

// 类可以同时实现多个接口
class mi implements usbA,usbB{
    public function connect(){

    }
    public function contact(){

    }
}
?>