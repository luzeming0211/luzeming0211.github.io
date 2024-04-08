把本地公钥推动到远程服务器(相当于复制到远程的 .ssh/authorized_keys)
```
ssh-copy-id -i id_rsa.pub root@192.168.188.212
```
 
 修改authorized_keys访问权限
```
chmod 600 .ssh/authorized_keys
```

  编辑本地config文件 添加如下内容

```
vim .ssh/config
```
```
Host lu.dev
HostName 192.168.188.212
User root
IdentitiesOnly yes
```

 设置 SSH，打开密钥登录功能，编辑 /etc/ssh/sshd_config 文件，进行如下设置

```
PubkeyAuthentication yes   //打开密钥认证
```

重启sshd服务
```
service sshd restart
```

可以了
```
ssh lu.dev
```