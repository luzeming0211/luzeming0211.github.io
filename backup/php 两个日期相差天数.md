```
	// 指定两个日期，转换为 Unix 时间戳

	$date1 = strtotime("2017-1-12 22:45:00");

	$date2 = strtotime("2018-1-12 10:44:01");

	//计算两个日期之间的时间差

	$diff= $date1 - $date2 ;

	$days =abs(round($diff / 86400));

	echo "相差: ".$days."天";
```