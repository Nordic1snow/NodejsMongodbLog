# 项目设计使用说明书

## 1.项目设计

### （1）项目总体构成

 “最优寝"是一款基于Nodejs+express+mongodb的校园寝室管理系统。

#### 服务架构：

web frame ---应用express+框架
web server ---应用nodejs
 Database ---应用MonggoDB 进行管理
前端展示 ---应用html+ejs+bootstrap

### （2）引用包在项目中的作用相关说明

#### 1).Express

Express是一个基于 [Node.js](https://nodejs.org/en/) 平台，快速、开放、极简的 Web 开发框架，在本项目中帮助管理服务器端应用程序中服务器和路由之间的数据流，connect模块进一步利用http模块与Node.js通信。

#### 2）mongoose

mongodb包为程序提供的一个驱动来操作mongoDB数据库,mongoose包是基于mongodb构建的一个对象操作模型，适用于nodejs.

本项目用mongoose中的Schema来定义数据库的结构；Model，由schema编译出的构造器，用来定义集合模型，Model的实例即是文档，实现数据库的增删改查。

#### 3）ejs

EJS是一个JavaScript模板库，用来从JSON数据中生成HTML字符串。使用ejs对页面进行渲染，让代码更加干净整洁，让人易懂。使用EJS来维护性良好的HTML代码结构。

#### 4)bootstrap

Bootstrap 是一个用于快速开发 Web 应用程序和网站的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的。本项目应用bootstrap快速搭建简易美观的前端界面



### （3）项目目录结构和各个部分的说明

项目结构如下图所示

![image-20220101105250795](/home/osuser/01project/NodejsMongodbLog/image-20220101105250795.png)

![image-20220101105156255](/home/osuser/01project/NodejsMongodbLog/image-20220101105156255.png)

node_modules中存放下载的各种包，public下主要存放前端的html界面，以及所用到的图片存放在ptoto文件夹中。readme.md是本项目的项目使用说明以及开发者日记。

## 2.使用说明书

1）首先安装上面提到的引用包(npm install 包名 --save),安装完成后，运行NodejsMongodbLog.js文件，在浏览器中输入地址：http://172.21.2.236:10407/即可进入项目网站。

2）程序解读

（1）利用express的model方法定义表结构：

![image-20220101122600995](/home/osuser/01project/NodejsMongodbLog/image-20220101122600995.png)

（2）将三张表写入数据库

![image-20220101122814012](/home/osuser/01project/NodejsMongodbLog/image-20220101122814012.png)

（3）注册方法，静态路由获取前端的提交信息，根据定义的model将数据写入文档。

![image-20220101122930588](/home/osuser/01project/NodejsMongodbLog/image-20220101122930588.png)

（4）登陆:获取登录界面的提交信息，查询数据库信息进行比对

![image-20220101123202065](/home/osuser/01project/NodejsMongodbLog/image-20220101123202065.png)

（5）修改密码：获取登录界面的提交信息，查询数据库信息进行比对，对应正确后修改但条信息

![image-20220101123358313](/home/osuser/01project/NodejsMongodbLog/image-20220101123358313.png)

（6）登记违规事件：获取前端的提交信息，根据定义的model将数据写入文档。

![image-20220101123536126](/home/osuser/01project/NodejsMongodbLog/image-20220101123536126.png)

（7）水电费缴纳：获取前端的提交信息，读取对应寝室的数据信息，计算后根据定义的model将新数据写入文档

![image-20220101123638273](/home/osuser/01project/NodejsMongodbLog/image-20220101123638273.png)

（8）查询信息：从数据库中查询信息，并将结果用ejs渲染

![image-20220101123807882](/home/osuser/01project/NodejsMongodbLog/image-20220101123807882.png)

## 3.开发日记

2021/12/05 项目初建，远程仓库调试成功

2021/12/08 mongoose,express包成功安装并测试

2021/12/12 成功将前台数据写入数据库，ejs成功安装，测试基本完成

2021/12/18 初步完成界面设计、数据库设计

2021/12/20 界面基本完成，数据库表结构完成

2021/12/24 美化界面，将数据写入

2021/12/30 登陆注册方法成功实现

2021/12/31 区分管理员和普通用户身份，成功将前端数据写入数据库

2022/01/01 增加了修改密码、违规登记、水电费缴纳、退出登陆等功能、数据查询部分完成。

2022/01/02 编写项目开发报告，最终部署到服务器

## 4.项目开发

### 1)网站界面说明：

（1）首页：包含本项目相关介绍以及开发者信息。在页面最上面的导航栏中可选择注册登陆。

![image-20220101110531423](/home/osuser/01project/NodejsMongodbLog/image-20220101110531423.png)

（2）注册页面：填写或选择个人信息，注意：姓名需是英文哦，这里可选身份，后续将根据不同身份提供不同业务。信息填写完整后即可注册，注册后需进行登陆

![image-20220101110920483](/home/osuser/01project/NodejsMongodbLog/image-20220101110920483.png)

（3）登陆界面：姓名密码均正确填写方可登陆，系统将根据姓名判别身份。（已注册信息：管理员：姓名：hjt,密码：814；普通用户：姓名：ltt,密码：111，也可以自行注册体验）

![image-20220101111334353](/home/osuser/01project/NodejsMongodbLog/image-20220101111334353.png)

（4）管理员业务：成功注册后进入首页：首页播放轮播图，内涵学校或生活园区的活动推送信息，管理员可根据上方导航栏进行相关业务。

![image-20220101111858888](/home/osuser/01project/NodejsMongodbLog/image-20220101111858888.png)	（5)违规事件登记：由管理员输入学生姓名，违规内容和违规时间点击登记即可将违规记录写入数据库。

![image-20220101112415042](/home/osuser/01project/NodejsMongodbLog/image-20220101112415042.png)

（6）水电费缴纳：选择寝室号，输入水电费缴纳金额，这里，交费输入正值，花费输入负值即可，后台将根据数据库记录自动结算。

![image-20220101112533325](/home/osuser/01project/NodejsMongodbLog/image-20220101112533325.png)

（7）查看所有违规事件：所有登记的违规事件都将展示，后台结合两章表的信息将违规人寝室号和联系方式一并展示。

![image-20220101113136059](/home/osuser/01project/NodejsMongodbLog/image-20220101113136059.png)

(8)普通用户业务：根据登陆新名进行判断，若为普通用户即进入以下界面，与管理言的不同在于导航栏提供了不同业务。

![image-20220101113339861](/home/osuser/01project/NodejsMongodbLog/image-20220101113339861.png)

（9）修改密码：用户输入自己的姓名旧密码，两次输入新密码。如果姓名密码对应正确、两次新密码输入一致即可更改数据库信息。

![image-20220101113543983](/home/osuser/01project/NodejsMongodbLog/image-20220101113543983.png)

（10）查看个人违规情况：根据登陆信息查询本人所有违规信息。![image-20220101113836139](/home/osuser/01project/NodejsMongodbLog/image-20220101113836139.png)

（11）查看所在寝室水电费余额

![image-20220101114024712](/home/osuser/01project/NodejsMongodbLog/image-20220101114024712.png)

（12）退出登陆，返回首页。	

### 2)数据库设计

本数据库共3张表，如下所示
t_member:人员表
t_room:寝室表
t_violation:违规事件表

![t_member](/home/osuser/01project/NodejsMongodbLog/t_member.jpg)

![t_room](/home/osuser/01project/NodejsMongodbLog/t_room.jpg)

![t_violation](/home/osuser/01project/NodejsMongodbLog/t_violation.jpg)

