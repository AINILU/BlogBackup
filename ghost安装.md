> Ghost 是一套基于 Node.js 构建的开源博客平台(Open source blogging platform),具有易用的书写界面和体验,博客内容默认采用 Markdown 语法书写。

### 安装环境

- ubuntu14.04 64 (阿里云ECS)
- nvm 0.33.1
- node.js 4.8.5 (官方推荐)
- ghost 0.11.7
- mysql 5.5.54
- nginx 1.4.6
- forever 0.15.3

### 工具

- xShell 5
- xftp

### 安装步骤


#### 初始化阿里云ECS环境

- 更新ubuntu

      `apt-get update && apt-get dist-upgrade`

- 安装zsh和oh-my-zsh

 1. 查看安装的shell

      `cat /etc/shells`

 2. 查看运行的shell

     `echo $SHELL`

 3. 安装 zsh、git、curl、unzip、oh-my-zsh

     ```    
     apt-get install zsh git curl unzip
     wget --no-check-certificate https://github.com/robbyrussell/oh-my- zsh/raw/master/tools/install.sh -O - | sh
     ```

 4. 替换bash为zsh

     `chsh -s /bin/zsh`

 5. 重启(重新连接xShell)

#### 安装nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

或

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

重启

```
nvm --version     #查看版本
```

#### 安装node

- 首先用nvm查看现有的所有node版本： `nvm ls-remote`

- 然后选择你想要的版本安装： `nvm install <version>`

- 如果安装了多个版本之后，你可以用`nvm use <version>`来选择你想要的版本。

- 你可以用`nvm current`来查看当前的node版本，`node ls`也可以查看本地node.

- 通过一下命令来设置默认的版本：`nvm alias default<version>`

- nvm 安装npm的同时会安装npm。 安装好之后，可以通过`node -v`来查看你所安装的版本`npm -v`查看npm版本

#### npm换成淘宝源

```
npm config set registry https://registry.npm.taobao.org
npm config get registry  #查看是否成功
```

#### 安装mysql

```
apt-get install mysql-sever mysql-client -y
```

为了避免数据库存放的中文是乱码，我们还需要设置Mysql的编码

```
nano /etc/mysql/my.cnf
```

编辑：

```
[mysqld]
character-set-server=utf8  
collation-server=utf8_general_ci
```

保存退出，重启Mysql：

`service mysql restart`

新建一个数据库，用来存放博客的数据：

```
mysql -u root -p # 输入设置好的密码  
create database ghost; # 创建ghost数据库  
grant all privileges on ghost.* to 'ghost'@'%' identified by '123456'; # 新建一个用户ghost，密码为123456，这里自己设置即可。
flush privileges # 重新读取权限表中的数据到内存，不用重启mysql就可以让权限生效
```

#### 安装ghost

去github下载官方安装包：

1. git clone <地址>
2. xftp（本地下载上传至服务器）
3. wget curl（慢的一笔）

安装：

```
mkdir /var/www/ghost
unzip Ghost-0.11.7.zip -d ghost
```

在ghost目录下安装依赖

```
npm install --production
```

配置文件

```
cp config.example.js config.js  
nano config.js
```

编辑：

```
production: {  
    url: 'http://xxxx.me', # 修改为你的域名或者IP，注意加上http://
    mail: {from: 'xxxxxx@qq.com', #修改为你的qq邮箱
       transport: 'SMTP',
       host: 'smtp.qq.com',
       options: {
           secureConnection: true,     // 是否启用SSL，大可删掉此行
           port: 465,                  // SMTP端口号
           service: 'QQ',
           auth: {
               user: 'xxxxxx@qq.com',#修改qq邮箱和密码
               pass: 'xxxxxxx'
           }
       }
    },
    database: {
        client: 'mysql'
        connection: {
            host     : '127.0.0.1',
            user     : 'ghost', # 数据库连接的用户
            password : '123456', # 先前创建的密码
            database : 'ghost', # 先前创建的数据库
            charset  : 'utf8'
        },
    server: {
            host: '127.0.0.1',
            port: '2368' # 若修改该端口记得在nginx中做相应改变
        }
    }
```

执行

```
npm start --production
```

#### 安装nginx

```
apt-get install nginx
rm /etc/nginx/sites-enabled/default
touch /etc/nginx/sites-available/ghost
nano /etc/nginx/sites-available/ghost
```

编辑：

```
server {
    listen 80;
    server_name your_domain.tld;
###修该为你的域名
    location / {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
        proxy_pass         http://127.0.0.1:2368;
    }
}
```

然后建立一个链接，将你新建的配置告诉Nginx：

```
sudo ln -s /etc/nginx/sites-available/ghost /etc/nginx/sites-enabled/ghost
```

然后重启Nginx：

```
sudo service nginx restart
```

#### 安装forever

```
npm install -g forever
```

然后执行：

```
NODE_ENV=production forever start index.js
```

接下来看一下forever是否挂在了index.js：

```
forever list
```

显示

![forever](http://ocygn6f54.bkt.clouddn.com/forever.PNG)

结束进程

```
forever index.js
```

#### 升级Ghost

- 备份content文件夹、config.js

- 解压ghost安装包到 /var/www/ghost

- `npm install --production #安装依赖包`

- forever重启

大功告成！
