# Electron for MacOS环境搭建

> ### Electron介绍
>
> **Electron**（原名为**Atom Shell**[[3\]](https://zh.wikipedia.org/wiki/Electron#cite_note-3)）是[GitHub](https://zh.wikipedia.org/wiki/GitHub)开发的一个[开源](https://zh.wikipedia.org/wiki/%E5%BC%80%E6%BA%90)[框架](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%A1%86%E6%9E%B6)。[[4\]](https://zh.wikipedia.org/wiki/Electron#cite_note-4)它允许使用[Node.js](https://zh.wikipedia.org/wiki/Node.js)（作为后端）和[Chromium](https://zh.wikipedia.org/wiki/Chromium)（作为前端）完成桌面[GUI](https://zh.wikipedia.org/wiki/GUI)[应用程序](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)的开发。Electron现已被多个开源[Web应用程序](https://zh.wikipedia.org/wiki/Web%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)用于前端与后端的开发，著名项目包括GitHub的[Atom](https://zh.wikipedia.org/wiki/Atom_(%E6%96%87%E5%AD%97%E7%B7%A8%E8%BC%AF%E5%99%A8))和[微软](https://zh.wikipedia.org/wiki/%E5%BE%AE%E8%BD%AF)的[Visual Studio Code](https://zh.wikipedia.org/wiki/Visual_Studio_Code)。[[5\]](https://zh.wikipedia.org/wiki/Electron#cite_note-5)[[6\]](https://zh.wikipedia.org/wiki/Electron#cite_note-6)
>
> 一个基础的Electron包含三个文件：`package.json`（元数据）、`main.js`（代码）和`index.html`（[图形用户界面](https://zh.wikipedia.org/wiki/%E5%9B%BE%E5%BD%A2%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2)）。框架由Electron可执行文件（[Windows](https://zh.wikipedia.org/wiki/Windows)中为`electron.exe、`[macOS](https://zh.wikipedia.org/wiki/MacOS)中为`electron.app`、[Linux](https://zh.wikipedia.org/wiki/Linux)中为`electron`）提供。开发者可以自行添加标志、自定义图标、重命名或编辑Electron可执行文件。
>
> 官方网站：[Electron官方网站]("https://electronjs.org")

### 1.1 Electron环境搭建

以为electron依赖于node.js所以我们需要先安装node

```bash
brew install node

#以为node官方源仓库在国外大陆访问有问题所以我们设置为国内阿里巴巴淘宝的源

npm install -g cnpm --registry=https://registry.npm.taobao.org

#全局安装electron

npm install electron -g
```

### 1.2 Electron快速入门

示例1：使用官网的electron-quick-start作为例子✅(推荐使用这种)

```bash
# 克隆这仓库
git clone https://github.com/electron/electron-quick-start
# 进入仓库
cd electron-quick-start
# 安装依赖库
npm install
# 运行应用
npm start
```

示例2：使用全局依赖库

```bash
# 克隆这仓库
git clone https://github.com/electron/electron-quick-start
# 进入仓库
cd electron-quick-start
# 运行应用
npm start
```

### 1.3 自己通过命令行创建项目

```bash
#通过命令创建一个目录存放我们编写的源代码
mkdir electron-learning-01
#创建成功切换到对应的目录里
cd electron-learning-01
#使用node初始化项目
npm init
```

### 1.4 然后命行会自动提示你设置项目一些基本配置参数

从开发的角度来看, Electron application 本质上是一个 Node. js 应用程序。 与 Node.js 模块相同，应用的入口是 `package.json` 文件。 一个最基本的 Electron 应用一般来说会有如下的目录结构：

```text
your-app/
├── package.json
├── main.js
└── index.htmlCopy
```

为你的新Electron应用创建一个新的空文件夹。 打开你的命令行工具，然后从该文件夹运行`npm init`

```sh
npm init
```

npm 会帮助你创建一个基本的 `package.json` 文件。 其中的 `main` 字段所表示的脚本为应用的启动脚本，它将会在主进程中执行。 如下片段是一个 `package.json` 的示例：

```json
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js"
}
```

**注意**：如果 `main` 字段没有在 `package.json` 中出现，那么 Electron 将会尝试加载 `index.js` 文件（就像 Node.js 自身那样）。 如果你实际开发的是一个简单的 Node 应用，那么你需要添加一个 `start` 脚本来指引 `node` 去执行当前的 package：

```json
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js",
  "scripts": {
    "start": "node ."
  }
}
```

把这个 Node 应用转换成一个 Electron 应用也是非常简单的，我们只不过是把 `node` 运行时替换成了 `electron`运行时。

```json
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

现在，您需要安装`electron`。 我们推荐的安装方法是把它作为您 app 中的开发依赖项，这使您可以在不同的 app 中使用不同的 Electron 版本。 在您的app所在文件夹中运行下面的命令：

```sh
npm install --save-dev electron
```

### 1.5 到这里你就可以通过你喜欢的IDE打开编写项目了我这里使用的VScode

![猿翻译](https://ws2.sinaimg.cn/large/006tKfTcgy1g1dozprd4vj317w0u07wh.jpg)

这个是通过electron实现一个跨平台翻译软件,感兴趣的朋友可以去我的GitHub仓库查看[去查看仓库]("https://github.com/JDode/ApeTranslation")



# electron-builder打包见解

```sh
#全局安装electron应用构建工具

npm install electron-builder -g
```

开发electron客户端程序，打包是绕不开的问题。下面就我在工作中的经验以及目前对`electron-builder`的了解来分享一些心得。

## 基本概念

[官网](https://link.juejin.im/?target=https%3A%2F%2Fwww.electron.build%2F)的定义

> A complete solution to package and build a ready for distribution Electron app for macOS, Windows and Linux with “auto update” support out of the box.

关于`electron`和`electron-builder`的基础部分这篇文章就跳过了，有兴趣的话可以看[这篇文章](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2FQDMarkMan%2FCodeBlog%2Ftree%2Fmaster%2FElectron)

## 如何使用

builder的使用和配置都是很简单的 builder配置有两种方式

- `package.json`中直接配置使用（比较常用，我们下面着重来讲这个）
- 指定`electron-builder.yml`文件

demo地址会在文章末尾给出（demo项目中`electron`使用得是`V2.0.7`版本,目前更高得是`2.0.8`版本）。

下面是一个简单的`package.json`中带注释的配置

1. 基础配置

```json
"build": {  // 这里是electron-builder的配置
    "productName":"xxxx",//项目名 这也是生成的exe文件的前缀名
    "appId": "com.xxx.xxxxx",//包名  
    "copyright":"xxxx",//版权  信息
    "directories": { // 输出文件夹
      "output": "build"
    }, 
    // windows相关的配置
    "win": {  
      "icon": "xxx/icon.ico"//图标路径 
    }  
  }
```

在配置文件中加入以上的文件之后就可以打包出来简单的文件夹，文件夹肯定不是我们想要的东西。下一步我们来继续讲别的配置。 2. 打包目标配置 要打包成**安装程序**的话我们有两种方式，

1. 使用NSIS工具对我们的文件夹再进行一次打包，打包成exe
2. 通过electron-builder的nsis直接打包成exe，配置如下

```json
"win": {  // 更改build下选项
    "icon": "build/icons/aims.ico",
    "target": [
      {
        "target": "nsis" // 我们要的目标安装包
      }
    ]
  },
```

1. 其他平台配置

```json
  "dmg": { // macOSdmg
    "contents": [
      ...
    ]
    },
    "mac": {  // mac
      "icon": "build/icons/icon.icns"
    },
    "linux": { // linux
      "icon": "build/icons"
    }
```

1. **nsis配置**

这个要详细的讲一下，这个nsis的配置指的是安装过程的配置，其实还是很重要的，如果不配置nsis那么应用程序就会自动的安装在C盘。没有用户选择的余地，这样肯定是不行的

关于nsis的配置是在build中nsis这个选项中进行配置，下面是部分nsis配置

```json
"nsis": {
  "oneClick": false, // 是否一键安装
  "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
  "allowToChangeInstallationDirectory": true, // 允许修改安装目录
  "installerIcon": "./build/icons/aaa.ico",// 安装图标
  "uninstallerIcon": "./build/icons/bbb.ico",//卸载图标
  "installerHeaderIcon": "./build/icons/aaa.ico", // 安装时头部图标
  "createDesktopShortcut": true, // 创建桌面图标
  "createStartMenuShortcut": true,// 创建开始菜单图标
  "shortcutName": "xxxx", // 图标名称
  "include": "build/script/installer.nsh", // 包含的自定义nsis脚本 这个对于构建需求严格得安装过程相当有用。
  "script" : "build/script/installer.nsh" // NSIS脚本的路径，用于自定义安装程序。 默认为build / installer.nsi  
},
```

关于`include` 和 `script` 到底选择哪一个 ？

在对个性化安装过程需求并不复杂，只是需要修改一下安装位置，卸载提示等等的简单操作建议使用`include`配置,如果你需要炫酷的安装过程，建议使用`script`进行完全自定义。

`NSIS`对于处理安装包这种东西，功能非常的强大。但是学习起来并不比一门高级语言要容易。其中的奥秘还要各位大佬自行探索

这里上一些学习资源

- [NSIS初级篇](https://link.juejin.im/?target=https%3A%2F%2Fblog.csdn.net%2Fddjj_1980%2Farticle%2Fdetails%2F7843944)
- [NSIS 打包脚本基础](https://link.juejin.im/?target=http%3A%2F%2Fwww.cnblogs.com%2Fjingmoxukong%2Fp%2F5033622.html)
- [示例脚本](https://link.juejin.im/?target=http%3A%2F%2Fwww.cppblog.com%2Fmomoxiao%2Farchive%2F2010%2F02%2F06%2F107326.html)
- [NSIS论坛](https://link.juejin.im/?target=http%3A%2F%2Fwww.nsisfans.com%2Fforum-2-1.html)

1. 关于操作系统的配置

主要是windows中64和32位的配置

CLI参数

```json
electron-builder --ia32 // 32位
electron-builder        // 64位(默认)
```

nsis中配置

```json
"win": {
  "icon": "build/icons/aims.ico",
  "target": [
    {
      "target": "nsis",
      "arch": [ // 这个意思是打出来32 bit + 64 bit的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打32的安装包。
        "x64", 
        "ia32"
      ]
    }
  ]
}
```

1. 更新配置

下面这个是给更新用的配置，主要是为了生成`lastest.yaml`配置文件

```json
"publish": [
  {
    "provider": "generic", // 服务器提供商 也可以是GitHub等等
    "url": "http://xxxxx/" // 服务器地址
  }
],
```

## 完整配置

基本上可用的完整的配置

```json
"build": {
    "productName":"xxxx",//项目名 这也是生成的exe文件的前缀名
    "appId": "com.leon.xxxxx",//包名  
    "copyright":"xxxx",//版权  信息
    "directories": { // 输出文件夹
      "output": "build"
    }, 
    "nsis": {
      "oneClick": false, // 是否一键安装
      "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
      "allowToChangeInstallationDirectory": true, // 允许修改安装目录
      "installerIcon": "./build/icons/aaa.ico",// 安装图标
      "uninstallerIcon": "./build/icons/bbb.ico",//卸载图标
      "installerHeaderIcon": "./build/icons/aaa.ico", // 安装时头部图标
      "createDesktopShortcut": true, // 创建桌面图标
      "createStartMenuShortcut": true,// 创建开始菜单图标
      "shortcutName": "xxxx", // 图标名称
      "include": "build/script/installer.nsh", // 包含的自定义nsis脚本
    },
    "publish": [
      {
        "provider": "generic", // 服务器提供商 也可以是GitHub等等
        "url": "http://xxxxx/" // 服务器地址
      }
    ],
    "files": [
      "dist/electron/**/*"
    ],
    "dmg": {
      "contents": [
        {
          "x": 410,
          "y": 150,
          "type": "link",
          "path": "/Applications"
        },
        {
          "x": 130,
          "y": 150,
          "type": "file"
        }
      ]
    },
    "mac": {
      "icon": "build/icons/icon.icns"
    },
    "win": {
      "icon": "build/icons/aims.ico",
      "target": [
        {
          "target": "nsis",
          "arch": [
            "ia32"
          ]
        }
      ]
    },
    "linux": {
      "icon": "build/icons"
    }
  }
```

## 命令行参数（CLI）

Commands(命令):

```sh
  electron-builder build                    构建命名                      [default]
  electron-builder install-app-deps         下载app依赖
  electron-builder node-gyp-rebuild         重建自己的本机代码
  electron-builder create-self-signed-cert  为Windows应用程序创建自签名代码签名证书
  electron-builder start                    使用electronic-webpack在开发模式下运行应用程序(须臾要electron-webpack模块支持)
```

Building(构建参数):

```sh
  --mac, -m, -o, --macos   Build for macOS,                              [array]
  --linux, -l              Build for Linux                               [array]
  --win, -w, --windows     Build for Windows                             [array]
  --x64                    Build for x64 (64位安装包)                     [boolean]
  --ia32                   Build for ia32(32位安装包)                     [boolean]
  --armv7l                 Build for armv7l                              [boolean]
  --arm64                  Build for arm64                               [boolean]
  --dir                    Build unpacked dir. Useful to test.           [boolean]
  --prepackaged, --pd      预打包应用程序的路径（以可分发的格式打包）
  --projectDir, --project  项目目录的路径。 默认为当前工作目录。
  --config, -c             配置文件路径。 默认为`electron-builder.yml`（或`js`，或`js5`)

```

Publishing(发布):

```sh
  --publish, -p  发布到GitHub Releases [choices: "onTag", "onTagOrDraft", "always", "never", undefined]

```

**Deprecated(废弃):**

```sh
  --draft       请改为在GitHub发布选项中设置releaseType                 [boolean]
  --prerelease  请改为在GitHub发布选项中设置releaseType                 [boolean]
  --platform    目标平台 (请更改为选项 --mac, --win or --linux)
           [choices: "mac", "win", "linux", "darwin", "win32", "all", undefined]
  --arch        目标arch (请更改为选项 --x64 or --ia32)
                   [choices: "ia32", "x64", "armv7l", "arm64", "all", undefined]
```

Other(其他):

```sh
s  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

Examples(例子):

```sh
  electron-builder -mwl                        为macOS，Windows和Linux构建（同时构建）
  electron-builder --linux deb tar.xz          为Linux构建deb和tar.xz
  electron-builder -c.extraMetadata.foo=bar    将package.js属性`foo`设置为`bar`
  electron-builder --config.nsis.unicode=false 为NSIS配置unicode选项
    
```

TargetConfiguration(构建目标配置):

```sh
target:  String - 目标名称，例如snap.
arch “x64” | “ia32” | “armv7l” | “arm64”> | “x64” | “ia32” | “armv7l” | “arm64”  -arch支持列表
```

## 常见的错误

- `NPM`下载的问题

  因为`NPM`在国内比较慢。导致`electron-V.xxxx.zip`下载失败。这些东西如果是第一次打包的话是需要下载对应`electron`版本的支持文件。解决办法有两个

  设置镜像：在C盘User中找到`.npmrc`文件。然后加入下面这句代码,但是这个有时候也不是很好用

  ```sh
  ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
  ```

  直接去淘宝镜像文件库找到对应的文件并下载，放到指定的目录下，electron的淘宝[镜像地址](https://link.juejin.im/?target=https%3A%2F%2Fnpm.taobao.org%2Fmirrors%2Felectron%2F)。下载完之后放到指定的文件。一般文件得地址在`C:\Users\Administrator\AppData\Local\electron\Cache`。例如我要下载1.8.4版本的`electron`，那么找到镜像下得文件然后放到指定文件夹中。

- 配置好的完整的示例:

  ```json
  {
      "name": "apetranslation",
      "version": "1.0.1",
      "description": "一个使用Electron技术🚀开发的跨平台桌面操作系统强大的翻译程序🔥.",
      "main": "main.js",
      "scripts": {
          "start": "electron .",
          "dist-win": "electron-builder --mac --x64"
      },
      "build": {
          "appId": "me.codegc.apetranslation",
          "productName": "猿翻译",
          "asar": true,
          "electronVersion": "4.1.0",
          "icon": "./resource/img/logo",
          "copyright": "👷个人独立开发:丁 烁 \n 📮:coding1618@gmail.com \n Copyright ©️ https://apet.codegc.me",
          "directories": {
              "buildResources": "build"
          },
          "mac": {
              "icon": "./resource/img/logo.icns",
              "target": [
                  "dmg"
              ]
          },
          "dmg": {
              "background": "./resource/img/background.jpg",
              "window": {
                  "x": 100,
                  "y": 100,
                  "width": 560,
                  "height": 380
              }
          },
          "nsis": {
              "oneClick": false,
              "installerIcon": "./icon.icns",
              "allowToChangeInstallationDirectory": true,
              "language": "zh-Hans"
          }
      },
      "repository": {
          "type": "git",
          "url": "git+https://github.com/JDode/ApeTranslation.git"
      },
      "author": "Mr.Ding",
      "license": "MIT",
      "bugs": {
          "url": "https://github.com/JDode/ApeTranslation/issues"
      },
      "homepage": "https://github.com/JDode/ApeTranslation#readme"
  }
  ```

  