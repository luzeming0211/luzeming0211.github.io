- 1.apache配置文件增加内容
```
<IfModule mod_fcgid.c>
	 FcgidProcessLifeTime 8200
	 FcgidIOTimeout 8200
	 FcgidConnectTimeout 4000
 </IfModule>
```
- 2.更换其他apache, 如:使用laravel 的  php artisan serve --host=a.test --port=8001