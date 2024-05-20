#  字符串转数组
		$comment_content =  str_replace(",","，",$comment_content);
	  $sUserId = preg_replace("/(\n)|(\s)|(\t)|(\')|(')|(，)/" ,',' ,$sUserId);
	  $aUserId = explode(',', $sUserId); //转换为数组了


# 数组转字符串


如果需要带引号
````
$a = array("123","321","111");
$s = "'" . join("','", $a) . "'";
echo $s;

````

如果是数字
````
$statusInStr = implode(',', $status);
````

使用
````
$statusInStr = "'".implode("','", $status)."'";
"select * from table where status in ({$statusInStr})"
````