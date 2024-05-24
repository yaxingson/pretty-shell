## DOS命令和批处理

### 内部命令

```powershell
# 设置、显示环境变量或算术运算
set [/a] [/p] [variable=[string]]

# 拷贝目录
copy 

# 移动并重命名文件或目录
move

title [string]

mode [width, height] [/?]

color [backgroundColor][foregroundColor]

# 显示网络适配器信息
ipconfig

hostname

pause

# 注释说明
rem [comment]

@echo off

echo %errorlevel%

# 退出程序
exit

# 跳转到label指定程序
goto <label>

# 命令行下打开文件、文件夹或网址和运行指定程序
start [/max] [/min] [dir|file|url|program]

# 调用程序
call *.bat

# 基于文件每行内容进行排序
sort <file>

# 显示文件内容
type <file>

# 关机
shutdown [/t] [/r] [/a] [/i]

# 查看远程端口是否开放
telnet 

# 显示网络路由信息
tracert

# 清屏
cls

find 

findstr

# 显示网络TCP/IP连接状态
netstat [-ano]

# 转换磁盘文件系统格式
convert 

# 配置磁盘
diskpart 

compmgmt

chkdsk [/f] [/r]

# 检查和修复系统
sfc 

# 获取系统版本信息
winver

# 系统激活信息
slmgr [/xpr]

# 注册表操作
reg

# 显示所有任务进程列表
tasklist [/s]

# 杀死任务进程
taskkill [/f] [/i] [/m] [/pid]

# 打开任务管理器
taskmgr

# 用户、用户组和服务进程管理
net [user] [localgroup] [share] [start] [stop] [/delete]

services.msc

netsh

# 设置、显示当前日期
date [/t]

# 设置、显示当前时间
time [/t]

# 以树形显示文件夹结构
tree [/a] [/f]

# 配置计划任务
at 

schtasks

dir [/a]

mkdir 

rmdir 

# 切换目录
cd

# 重命名
ren [drive:][path]filename1 filename2

# 删除文件
del 

# 显示和修改地址解析协议(ARP)使用的“IP 到物理”地址转换表
arp 



```

### 外部命令

```powershell
mstsc 

# 检测主机网络联通性
ping [url]

```

```powershell
# 下载网络资源
wget

```

> 特殊符号：重定向(>、>>、<、<<)、连接符(&、&&、||)、管道符(|)和分组(())

批处理文件参数格式：%n
