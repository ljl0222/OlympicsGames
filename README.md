# 项目说明

## 题目内容

参加奥运会有n个国家，各国编号为1……n。比赛分成m个男子项目，和w个女子项目。项目编号为男子1……m，女子m+1……m+w。不同的项目取前五名或前三名积分；取前五名的积分分别为：7、5、3、2、1，前三名的积分分别为：5、3、2；哪些取前五名或前三名由学生自己设定。
- 可以输入各个项目的前三名或前五名的成绩；
- 能统计各国总分，
- 可以按各国编号、各国总分、男女团体总分排序输出；
- 可以按各国编号查询国家某个项目的情况；可以按项目编号查询取得前三或前五名的国家。


## 软件功能

### 功能介绍

- 本程序首先需要输入国家数，男子项目数，女子项目数，然后在一个大文本框逐行输入各个国家在各个项目中取得的名次。

- 之后可以分别使用展示总分、编号排序、总分排序、男女团排序以及搜索功能等等。在此展示其中的一项展示总分的功能。

### 可视化实现

在本程序中不涉及到绘图层面的图形界面的展示，而仅仅是采用了web开发中HTML/CSS的方式进行了前端的开发。在前端的开发当中，使用了Bootstrap这一简洁的前端开发框架。完善了表格的样式、按钮的样式以及输入框的样式。

## 设计思想

软件的设计思路主要分为前后端分别进行开发。
- 在前端部分，由于没有使用图形库，因此仅需要使用常规的HTML/CS进行开发即可。对于前端的开发，显然引入一个开源的前端开发框架是比较方便的选择，因此我引入了Bootstrap进行前端的开发。在输入框方面，使用了.form-group结合.form-control进行开发，在按钮方面，使用了.btn,.btn-waring,.btn-default,.btn-primary进行开发。因此在引入Bootstrap后，界面有了比较大的改观。
- 在后端部分，主要是组织好国家和项目之间的关系。一开始的计划是将项目和国家都分别封装为var Country = function()以及var Project = function()这样的类结构，但是后来在编写的过程中发现，直接读取textarea.value中的数据并逐行处理，要比封装Project要方便的多，因此最后虽然封装好了Project，但是却没有进行使用，仅仅使用了Country的类结构，并将其的一个属性设置为Projects，将Projects直接按照项目的编号进行组织，并且记录下来男团的项目是哪几个，女团的项目是哪几个，从而进行统计和展示。而对于各个展示项目的选择，展示总分和编号排序实际上是相同的，只需要按照编号进行组织即可。剩下的几个排序，调用JavaScript的array.sort(func)方法即可分别实现以不同的关键字进行排序，从而实现总分排序，男团排序，女团排序。对于搜索功能，分别采用Country中预设的Projects属性以及textarea.value中的逐行数据进行组织查找，从而给出搜索的结果。
- 这里选用的数据结构，则是由Country为元素组织成的线性表，这是很好理解的。首先由于编号是顺序增加的，所以显然选用顺序存储的方式比较好，因此这里采用了线性表的方法进行组织。这里采用了JavaScript中自带的new Array()的方式来组织起线性表。
- 而至于算法的设计思想，本题目中四个主要的展示模块思路类似。首先读取textarea.value，然后对这个部分逐行处理，初始化AllCountry数据，返回一个元素为Country的线性表。不同的模块使用不同的属性作为排序的关键字进行排序，从而产生不同的数组，在通过改变document.innerHTML的方法输出到html当中。

## 逻辑结构与物理结构

- 本程序的逻辑结构显然是线性结构，采用了Country作为线性表的基本元素，利用一个长度为n+1(舍弃第0项)的线性表组织起了所有的国家，将项目作为一个国家的固有属性，并且结合textarea.value辅助，从而完成程序的各个功能。
- 本程序的物理结构(即存储结构)是顺序结构，即将数据结构放在地址连续的存储单元当中。我在本次程序中采用线性表的结构，利用国家的编号作为线性表元素的下标，进行顺序存储和访问。

## 开发平台

- 操作系统：Windows 10
- 开发语言：JavaScript/HTML/CSS
- 开发环境：npm 6.14.4，Node.js 12.13.0，Electron 8.2.2(在交付的可执行程序中的局部安装的node_mdules的Electron的版本为10.1.1，对此已经在main.js中加以对高版本的限制，在第二个项目的开发中有比较详细的说明)。
- 核心使用集成环境：Node.js
- 核心使用框架：Electron
- 代码编辑工具：Visual Studio Code 1.49.0
在html中链接了http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css (Bootstrap)


# electron-quick-start官方说明

## electron-quick-start

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

### To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

### Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

### License

[CC0 1.0 (Public Domain)](LICENSE.md)
