CommonJs规范的包应该具备以下特征：
package.json必须在包的项目目录下
二进制文件应该在bin目录下
javaScript代码应该在lib目录下
文档应该在doc目录下
单元测试应该在test目录下

package.json的规范属性
name: 包的名称，必须是唯一
description: 包的简要说明
version: 符合语义化版本识别规范的版本字符串
keywords： 关键字数据，通常用于搜索
maintainers: 维护者数组，每个元素要包含name、email、web可选字段
contributors: 贡献者数组，格式与maintainers相同。包的作者应该是贡献者数据的第一个元素
bugs: 提交bug的地址，可以是网址或者电子邮件地址
license: 许可证地址，每个元素要包含type和url字段
repositories: 仓库托管地址数组，每个元素要包含type、url和path字段
dependencies: 包的依赖，一个关联数组，由包名称和版本号组成