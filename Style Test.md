> Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。Ghost博客客就是以Markdown方式进行写作，不过Ghost博客的Markdown功能并不完全，有点遗憾。

### Markdown

```
# 标题
## 标题
### 标题
#### 标题
##### 标题
###### 标题

***

> I'm blockquote.
**I'm bold Text.**
*I'm emphasize Text.*
~~I'm strike-through Text.~~
[I'm a link.](http://toxni.com)
`I'm inline-code.`
I'm ==highlight== text.
[Markdown Preview](###Markdown Preview)

[百度前端学院][1]
[知乎][2]

[1]:http://baidu.com
[2]:https://zhihu.com

1. <http://chuenwei.com>
2. <me@chuenwei.com>

![原型链](http://ocygn6f54.bkt.clouddn.com/prototype.jpg)

* html
- css
+ js

`const aqiData = document.querySelector('aqi-data')`

    body {
        margin: 0;
        padding: 0;
    }
    .box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 100px;
        height: 100px;
        background-color: #f0f;
    }

> 请问 Markdwon 怎么用？ - 小白
>> 自己看教程！ - 愤青
>>> 教程在哪？ - 小白

- [x] C
- [x] C++
- [x] Android
- [ ] C#
- [ ] .NET

:blush:

:smile:

|Header One      | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |

```
>Markdown支持HTML，用于扩展Markdown的功能（如表格、脚注、内嵌iframe等等）

### HTML
```
#### 表单
<fieldset>
    <legend>Form</legend>
    <form action="">
        <label><input type="text" name="" value="" placeholder="我是个文本输入框"></label>
        <input type="password" pattern="/[A-Za-z0-9]/" minlength="6" maxlength="16" placeholder="6-16个数字或英文字母">
        <input type="search" name="" value="" placeholder="我是个搜索框">
        <label for="">
        爱好：
        <input type="checkbox" name="hobby" value="sport">体育
        <input type="checkbox" name="hobby" value="art">艺术
        <input type="checkbox" name="hobby" value="math">数学
        </label>
        colorpick:
        <input type="color" name="" value="">
        date:
        <input type="date" name="" value="">
        datetime-local:
        <input type="datetime-local" name="" value="">
        email:
        <input type="email" name="" value="" placeholder="example@xxx.com">
        file:
        <input type="file" name="" value="">
        month:
        <input type="month" name="" value="">
        number:
        <input type="number" name="" value="" step="">
        sex:
        <input type="radio" name="sex" value="man">man
        <input type="radio" name="sex" value="woman">woman
        range:
        <input type="range" name="" value="" step="0">
        reset:
        <input type="reset" name="" value="reset">
        submit:
        <input type="submit" name="" value="submit">
        button:
        <input type="button" name="" value="button">
        tel:
        <input type="tel" name="" value="" placeholder="+86-180xxxxxxxx">
        time:
        <input type="time" name="" value="">
        url:
        <input type="url" name="" value="" placeholder="http://ife.baidu.com">
        week:
        <input type="week" name="" value="">
        menu:
        <input id="myCar" list="cars" />
        <datalist id="cars">
            <option value="BMW">
            <option value="Ford">
            <option value="Volvo">
        </datalist>
        select:
        <select class="" name="">
            <option value="">北京</option>
            <option value="">南京</option>
            <option value="">东京</option>
        </select>
        meter:
        <meter value="3" min="0" max="10">十分之三</meter>
        <meter value="0.7">70%</meter>
        progress:
        <progress value="22" max="100"></progress>
        textarea:
        <textarea name="name" rows="8" cols="80"></textarea>
        <p>
            image:
            <input type="image" name="" value="" src="http://ocygn6f54.bkt.clouddn.com/prototype.jpg" width="100px" height="100px">
        </p>
        <button type="button" style="width: 60px; height: 30px; background-color:#f0f; color: #fff;">按钮</button>
        <button style="width: 60px; height: 30px; background-color:#f0f; color: #fff;">提交</button>    
        <button type="reset" style="width: 60px; height: 30px; background-color:#f0f; color: #fff;">重置</button>
    </form>
</fieldset>
```

```
#### 文本
2<sub>2</sub>
2<sup>-2</sup>

<address>
Written by <a href="mailto:chuenwei0129@gmail.com">Connact me</a>.<br>
Visit me at:<br>
chuenwei.com<br>
nanjing, jiangsu<br>
china
</address>

<abbr title="人民解放军">PRC</abbr>

<del>删除线</del>

<dfn>定义</dfn>

<blockquote cite="http://baike.baidu.com/link?url=mnDtw-wJHzN-yNYzHfQ3OotdwXfa0t3qFskcPla9sPI7aL9x5Mx63WJCP73uoC7AFW2590Cr9M56HXLcXSdxol4pHWZfMVJrzTxlU14_vFYbIonj1EWUUCSHWwps7vojYPWKDE-k8JOZPOVBxxvnE-S07Bol0OlHu5vUQ8XTh3ZEfa1Fd9FJ8sKBwuzzNq2l">为什么你那么熟练呀</blockquote>

<strong>强调</strong>

#### 多媒体

<audio src="http://ocygn6f54.bkt.clouddn.com/niwei.mp3" controls loop preload="auto"></audio>

<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=4855052&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>

<br>

<canvas id="myCanvas"></canvas>
<script type="text/javascript">
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f0f';
    ctx.fillRect(0, 0, 80, 100);
</script>

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=2&id=392522&auto=0&height=32"></iframe>

<video controls="controls" preload="auto">
  <source src="http://ocygn6f54.bkt.clouddn.com/mouse.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>

<iframe height='265' scrolling='no' title='水平垂直居中' src='//codepen.io/CHUENWEI0129/embed/rmLmgB/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/CHUENWEI0129/pen/rmLmgB/'>水平垂直居中</a>
</iframe>

#### 表格
<table border="1">
    <tcaption>标题</tcaption>
    <thead>
        <tr>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>表内单元格</td>
            <td>表内单元格</td>
            <td><a href="">操作</a></td>
        </tr>
        <tr>
            <td>表内单元格</td>
            <td>表内单元格</td>
            <td><a href="">操作</a></td>
        </tr>
        <tr>
            <td>表内单元格</td>
            <td>表内单元格</td>
            <td><a href="">操作</a></td>
        </tr>
        <tr>
            <td>表内单元格</td>
            <td>表内单元格</td>
            <td><a href="">操作</a></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>总计</td>
            <td colspan="2">1000</td>
        </tr>
        </tdoot>
</table>
```

### Markdown Preview

# 标题
## 标题
### 标题
#### 标题
##### 标题
###### 标题

***

> I'm blockquote.
**I'm bold Text.**
*I'm emphasize Text.*
~~I'm strike-through Text.~~
[I'm a link.](http://toxni.com)
`I'm inline-code.`
I'm ==highlight== text.
[Markdown Preview](###Markdown Preview)

[百度前端学院][1]
[知乎][2]

[1]:http://baidu.com
[2]:https://zhihu.com

1. <http://chuenwei.com>
2. <me@chuenwei.com>

![原型链](http://ocygn6f54.bkt.clouddn.com/prototype.jpg)

* html
- css
+ js

`const aqiData = document.querySelector('aqi-data')`

    body {
        margin: 0;
        padding: 0;
    }
    .box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 100px;
        height: 100px;
        background-color: #f0f;
    }

> 请问 Markdwon 怎么用？ - 小白
>> 自己看教程！ - 愤青
>>> 教程在哪？ - 小白

- [x] C
- [x] C++
- [x] Android
- [ ] C#
- [ ] .NET

:blush:

:smile:

|Header One      | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |

### HTML Preview

#### 表单
<fieldset>
    <legend>Form</legend>
    <form action="">
        <label><input type="text" name="" value="" placeholder="我是个文本输入框"></label>
        <input type="password" pattern="/[A-Za-z0-9]/" minlength="6" maxlength="16" placeholder="6-16个数字或英文字母">
        <input type="search" name="" value="" placeholder="我是个搜索框">
        <label for="">
        爱好：
        <input type="checkbox" name="hobby" value="sport">体育
        <input type="checkbox" name="hobby" value="art">艺术
        <input type="checkbox" name="hobby" value="math">数学
        </label>
        colorpick:
        <input type="color" name="" value="">
        date:
        <input type="date" name="" value="">
        datetime-local:
        <input type="datetime-local" name="" value="">
        email:
        <input type="email" name="" value="" placeholder="example@xxx.com">
        file:
        <input type="file" name="" value="">
        month:
        <input type="month" name="" value="">
        number:
        <input type="number" name="" value="" step="">
        sex:
        <input type="radio" name="sex" value="man">man
        <input type="radio" name="sex" value="woman">woman
        range:
        <input type="range" name="" value="" step="0">
        reset:
        <input type="reset" name="" value="reset">
        submit:
        <input type="submit" name="" value="submit">
        button:
        <input type="button" name="" value="button">
        tel:
        <input type="tel" name="" value="" placeholder="+86-180xxxxxxxx">
        time:
        <input type="time" name="" value="">
        url:
        <input type="url" name="" value="" placeholder="http://ife.baidu.com">
        week:
        <input type="week" name="" value="">
        menu:
        <input id="myCar" list="cars" />
        <datalist id="cars">
            <option value="BMW">
            <option value="Ford">
            <option value="Volvo">
        </datalist>
        select:
        <select class="" name="">
            <option value="">北京</option>
            <option value="">南京</option>
            <option value="">东京</option>
        </select>
        meter:
        <meter value="3" min="0" max="10">十分之三</meter>
        <meter value="0.7">70%</meter>
        progress:
        <progress value="22" max="100"></progress>
        textarea:
        <textarea name="name" rows="8" cols="80"></textarea>
        <p>
            image:
            <input type="image" name="" value="" src="http://ocygn6f54.bkt.clouddn.com/prototype.jpg" width="100px" height="100px">
        </p>
        <button type="button" style="width: 60px; height: 30px; background-color:#f0f; color: #fff;">按钮</button>
        <button style="width: 60px; height: 30px; background-color:#f0f; color: #fff;">提交</button>    
        <button type="reset" style="width: 60px; height: 30px; background-color:#f0f; color: #fff;">重置</button>
    </form>
</fieldset>

#### 文本
2<sub>2</sub>
2<sup>-2</sup>

<address>
Written by <a href="mailto:chuenwei0129@gmail.com">Connact me</a>.<br>
Visit me at:<br>
chuenwei.com<br>
nanjing, jiangsu<br>
china
</address>

<abbr title="人民解放军">PRC</abbr>

<del>删除线</del>

<dfn>定义</dfn>

<blockquote cite="http://baike.baidu.com/link?url=mnDtw-wJHzN-yNYzHfQ3OotdwXfa0t3qFskcPla9sPI7aL9x5Mx63WJCP73uoC7AFW2590Cr9M56HXLcXSdxol4pHWZfMVJrzTxlU14_vFYbIonj1EWUUCSHWwps7vojYPWKDE-k8JOZPOVBxxvnE-S07Bol0OlHu5vUQ8XTh3ZEfa1Fd9FJ8sKBwuzzNq2l">为什么你那么熟练呀</blockquote>

<strong>强调</strong>

#### 多媒体
<audio src="http://ocygn6f54.bkt.clouddn.com/niwei.mp3" controls loop preload="auto"></audio>

<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=4855052&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>

<br>

<canvas id="myCanvas"></canvas>
<script type="text/javascript">
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f0f';
    ctx.fillRect(0, 0, 80, 100);
</script>

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=2&id=392522&auto=0&height=32"></iframe>

<video controls="controls" preload="auto">
  <source src="http://ocygn6f54.bkt.clouddn.com/mouse.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>

<iframe height='265' scrolling='no' title='水平垂直居中' src='//codepen.io/CHUENWEI0129/embed/rmLmgB/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/CHUENWEI0129/pen/rmLmgB/'>水平垂直居中</a>
</iframe>

#### 表格
<table border="1">
    <tcaption>标题</tcaption>
    <thead>
        <tr>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>表内单元格</td>
            <td>表内单元格</td>
            <td><a href="">操作</a></td>
        </tr>
        <tr>
            <td>表内单元格</td>
            <td>表内单元格</td>
            <td><a href="">操作</a></td>
        </tr>
        <tr>
            <td>表内单元格</td>
            <td>表内单元格</td>
            <td><a href="">操作</a></td>
        </tr>
        <tr>
            <td>表内单元格</td>
            <td>表内单元格</td>
            <td><a href="">操作</a></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>总计</td>
            <td colspan="2">1000</td>
        </tr>
        </tdoot>
</table>
