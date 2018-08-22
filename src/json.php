<?php
header('Content-Type:text/html;charset=utf-8');
$conn=@mysqli_connect('localhost','root','root','vue') or die('数据连接失败');
mysqli_query($conn,"set names 'utf8'");
$sql="select * from second";
$rs=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($rs);
//echo json_encode($row,JSON_UNESCAPED_UNICODE);
echo $row
?>