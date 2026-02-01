## Demo目录

boltcep+vue+tailwindcss3: 使用vue+tw3开发, 兼容2020版本, 过低版本没测试过

## 工具介绍

[bolt-cep](https://github.com/hyperbrew/bolt-cep) 是一个基于 Vite + TypeScript + Sass 构建的、用于使用 Svelte、React 或 Vue 构建 Adobe CEP 扩展的极速框架

## 文档

[Adobe Cep 官方仓库](https://github.com/adobe-cep)

[脚本文档](https://docs.yuelili.com/)

## 注意事项

### CSS

- AE 2020 不支持gap 用margin或者space-x/y 代替, Ae 22支持gap

- 不支持grid 只能flex

- 不支持tw4(待验证), 用tw3可以

### js

`new RegExp('[\\\\/:*?"<>|]', "g")` 正则要多个反斜杠 不然编译报错?

### bolt cep

- 开发AE2020的时候建议使用AE21+进行, 否则开发的时候会报vite错误, 打包可以正常显示

- jsx部分尽量不要使用中文 可能会打包错误

## 其他说明

Add Key.reg: windows 运行拓展前需要先添加本注册表, 否则拓展可能加载不出来
