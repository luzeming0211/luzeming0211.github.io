1.搜索栏中搜索预览体验计划添加账户后根据提示操作(https://jingyan.baidu.com/article/f3ad7d0f549a4209c2345b54.html)



2.启用 WSL2（官方文档：https://aka.ms/wsl2kernel）


- (1)确认系统版本大于等于1903  $ `winver`

- (2)管理员模式打开powershell运行
  
 
````
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
````


- (3)重启后执行

	
````
dism.exe /online/enable-feature/featurename:VirtualMachinePlatform /all /norestart
````
	

- (4)重启待开机后下载安装升级包(https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)	



	
	
- (5)将 WSL 2 设置为默认版本	
```
wsl --set-default-version 2
```

3.打开微软商店下载linux (ubun 18.04)

- (1)下载完成后打开等待几分钟后提示设置用户名和密码

- (2)换源

- 其他错误问题解决(https://aka.ms/wsl2kernel)


- docker桌面版安装(https://laravelacademy.org/post/21708)

4.安装docker桌面版(https://hub.docker.com/editions/community/docker-ce-desktop-windows/)

5.设置docker集成到wsl2
- (1)打开docker设置进行如图设置general设置
![](https://ftp.bmp.ovh/imgs/2021/04/e5711d76f659fe89.jpg)

- (2)resource设置
![](https://ftp.bmp.ovh/imgs/2021/04/b56419b20bb28c9e.jpg)

- (3)apply && restart

5.wsl执行 `docker version` 有结果则安装成功


*注意点

>wsl 和virtualbox虚拟机不能同时启动
如需使用wsl则需启用hyper-v(powershell 管理员执行后得重启)


```
bcdedit /set hypervisorlaunchtype auto
```

>如需使用virtualbox
```
bcdedit /set hypervisorlaunchtype off
```