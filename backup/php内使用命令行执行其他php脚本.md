$arg是要传递给php文件的参数，多个参数用空格隔开
```
   pclose(popen('cd /var/www/blog && php test.php'.$arg .' '.'> /dev/null 2>&1 &', 'r'));
```

$argv 是在test.php接收到的参数