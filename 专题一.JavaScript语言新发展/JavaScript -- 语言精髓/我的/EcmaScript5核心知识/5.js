console.log({} + []); //[object,object]
{} + {}; //0
/* 
{}+[]:根据语句有限的原则，{}被理解成符合语句块，所以相当于{};+[]
+[]=0
--------------
js把()中的语句当做表达式，
*/
/* 
[]+{}
"[object Object]"
*/