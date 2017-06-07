String知识点梳理
==

## API

### 静态方法

* #### String.fromCharCode(num1, ... ,numN)
 - **参数** 一组序列数字，表示 Unicode 值。
 - **返回** 字符串
 - **示例** `String.fromCharCode(65,66,67) // "ABC"`

* #### String.fromCodePoint(num1, ... ,numN)
 - **参数** 一组序列数字，表示 Unicode 值。
 - **返回** 字符串
 - **异常** "RangeError:NaN is not a valid code point"
 - **示例**

    ```
    String.fromCodePoint(42);       // "*"
    String.fromCodePoint(65, 90);   // "AZ"
    String.fromCodePoint(0x404);    // "\u0404"
    String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
    String.fromCodePoint(194564);   // "\uD87E\uDC04"
    String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
    String.fromCodePoint('_');      // RangeError
    String.fromCodePoint(Infinity); // RangeError
    String.fromCodePoint(-1);       // RangeError
    String.fromCodePoint(3.14);     // RangeError
    String.fromCodePoint(3e-2);     // RangeError
    String.fromCodePoint(NaN);      // RangeError
    ```

### 原型方法

* #### str.anchor(name)
 - **参数** 一个字符串，表示被创建的标签的 name 属性。
 - **示例**
    ```
    var myString = "Table of Contents";

    document.body.innerHTML = myString.anchor("contents_anchor");
    ```
    输出
    ```
    <a name="contents_anchor">Table of Contents</a>
    ```

* #### str.big(), str.small(), str.blink(), str.bold(), str.fixed(), str.italics(), str.fontcolor(), str.fontsize(), str.strike(), str.sub(), str.sup()

* #### str.toString(), str.valueOf()

* #### str.charAt(index)

* #### str.charCodeAt()

* ####  
