# yii

http://localhost:8080/yii2.0/web/index.php?r=hello/index&id=100

```php
 $request= \YII::$app->request;

 //get请求获取传参的id：如果id没有传，那么id就是100
 echo $request->get('id',100);

 //post
     echo $request->post('id',100);
    //判断请求的类型
     if($request->isGet){
       echo "这是一个get";
     }elseif($request->isPost){
      echo "这是一个post";
     }
     //获取本地IP
      echo $request->userIp;
```

