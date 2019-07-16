# eslint-cli-qyy-mp
eslint 相关配置生成工具

https://github.com/IBOS-Team/eslint-config-qyy-mp


全局安装配置工具

```powershell
cnpm i -g https://github.com/IBOS-Team/eslint-cli-qyy-mp.git
```

进入需要初始化的目录

```powershell
eslint-qyy-mp
```
---

git commit -m message规则
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
* 标题行: 必填, 描述主要修改类型和内容
* 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
* 页脚注释: 放 Breaking Changes 或 Closed Issues

部分结构如下：
* type: commit 的类型
* WIP: 工作进度
* feat: 新特性
* fix: 修改问题
* refactor: 代码重构
* docs: 文档修改
* style: 代码格式修改, 注意不是 css 修改
* test: 测试用例修改
* chore: 其他修改, 比如构建流程, 依赖管理.
* scope: commit 影响的范围, 比如: route, component, utils, build...
* subject: commit 的概述, 建议符合  50/72 formatting
* body: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting
* footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.


---
### 已实现
- [x] pre-commit 校验js文件
- [x] commit log 验证格式

### TODO
- [ ] pre-commit 只检查发生修改的文件


---

> Standard
> https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
>
> Airbnb
>
> https://github.com/airbnb/javascript



