# MacOS安装Tesseract实现OCR & 计算机图像文字内容识别

### 1. Tesseract介绍

> Tesseract是一个开源的OCR引擎，能识别100多种语言（中，英，韩，日，德，法...等等），但是Tesseract对手写的识别能力较差。
>
> **Tesseract**是一个[光学字符识别](https://zh.m.wikipedia.org/wiki/%E5%85%89%E5%AD%A6%E5%AD%97%E7%AC%A6%E8%AF%86%E5%88%AB)引擎，支持多种操作系统。[[1\]](https://zh.m.wikipedia.org/zh/Tesseract#cite_note-Kay01Jul07-1)Tesseract是基于[Apache许可证](https://zh.m.wikipedia.org/wiki/Apache%E8%AE%B8%E5%8F%AF%E8%AF%81)的[自由软件](https://zh.m.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E8%BD%AF%E4%BB%B6)[[2\]](https://zh.m.wikipedia.org/zh/Tesseract#cite_note-UbuntuDoc-2)，自2006 年起由[Google](https://zh.m.wikipedia.org/wiki/Google)赞助开发[[3\]](https://zh.m.wikipedia.org/zh/Tesseract#cite_note-3)。
>
> 2006年，Tesseract被认为是最精准的[开源](https://zh.m.wikipedia.org/wiki/%E5%BC%80%E6%BA%90)光学字符识别引擎之一。
>
> ### 历史
>
> Tesseract项目最初由惠普实验室支持，1996年被移植到Windows上，1998年进行了C++化。在2005年Tesseract由惠普公司宣布开源。2006年到现在，都由Google公司开发。

### 2. MacOS上安装

```sh
//先安装依赖库libpng, jpeg, libtiff, leptonica
brew install leptonica

//安装tesseract的同时安装训练工具
brew install --with-training-tools tesseract

//安装tesseract的同时安装所有语言，语言包比较大，如果安装的话时间较长，建议不安装，按需选择
brew install  --all-languages tesseract

//安装tesseract，并安装训练工具和语言
brew install --all-languages --with-training-tools tesseract 

//只安装tesseract，不安装训练工具
brew install  tesseract
```

### 3. 下载语言库

下载地址:[https://github.com/tesseract-ocr/tessdata](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Ftesseract-ocr%2Ftessdata)

根据自己的需求选择所要的语言库，在这里我们选择的是简体中文所以选择的库是：`chi_sim.traineddata`、`eng.traineddata`
 将文件拷贝到到：/usr/local/Cellar/tesseract/3.04.01_2/share/tessdata目录下。

3.Tesseract使用
 终端输入命令:`tesseract --help`

一般使用:

//默认使用eng文字库， imgName是图片的地址，result识别结果

> ```sh
> tesseract imgName result
> ```

指定语言:

> //指定使用简体中文
>
> ```sh
> tesseract -l chi_sim imgName result
> ```
>
>  //查看本地存在的语言库
>
> ```sh
>  tesseract --list-langs
> ```
>
>  //查看本地存在的语言库
>  tesseract --list-langs

指定多语言:

> //指定多语言，用+号相连
>
> ```sh
>  tesseract -l chi_sim+eng imgName result
> ```

### 4. MacOS上语言库位置

```sh
open /usr/local/Cellar/tesseract/4.0.0_1/share/tessdata
```

