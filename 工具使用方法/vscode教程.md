# vscode使用指南

### 配置中文

```md
1.下载语言包 插件 输入“Chinese” ，安装插件 “Chinese (Simplified) Language Pack for Visual Studio Code”

2、 Ctrl +Shift +P快捷键 输入 “Configure  Language” 配置本地语言 
将local的值，设置为中文简体“zh-cn”
```

#### 安装代码美化♣️插件

```
https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify
插件配置：-->  .jsbeautifyrc文件
https://github.com/HookyQR/VSCodeBeautify/blob/master/Settings.md

editor.formatOnSave:true即可实现保存时自动格式化

```

### 标签高亮闭合标签

```
Highlight Matching Tag
勾选：Highlight From Content
```

### 添加头注释：koroFileHeader

https://juejin.im/post/5bc45aa66fb9a05cdb10622d

快捷键：

ctrl+cmd+i

ctrl+cmd+t

#### 配置在浏览器中打开

```
open in browser 插件
安装完重启后右击html文件会出现打开默认浏览器和打开其他浏览器
```

## 怎么定制自己的代码提示

User/snippets是snippets存放位置，比如javascript的定义

见

```
User/snippets/javascript.json
```

```
 "Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
```

说明：

- "Print to console" 是智能提示显示的
- "prefix" 是用户输入的字母，比如本例中输入log自动提示
- 当用户触发此snippet的时候，会按照"body"里代码生成
- $1代表光标位置

自己按照上面的方法定义自己的snippets，可以提高很多工作效率哦