# 
https://www.softether-download.com/files/softether/

# 安装
```
tar -zxvf softether-vpnclient-v4.32-9731-beta-2020.01.01-linux-x64-64bit.tar.gz
cd vpnclient
make
./vpnclient start
./vpncmd  # ## lang.config
>1 2 3
>2
>
VPN Client> AccountCreate  # 创建账号
//----------------- 其他可能用到的命令--------------------------------
AccountProxyNone #然后设置为tcp/ip直连方式
AccountPasswordSet #设置连接时的密码
AccountList #查看连接列表
AccountConnect #连接
AccountDetailSet    # 网络慢可进行详细配置
```

