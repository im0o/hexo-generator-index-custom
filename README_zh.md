# hexo-generator-index-custom

![npm](https://img.shields.io/npm/v/hexo-generator-index-custom)

[EN](./README.md)

支持置顶与隐藏文章的 [Hexo] 首页生成器插件。在官方的首页生成器的基础上添加了使用 `top` 置顶文章和 `hide` 隐藏文章的功能。

它会根据您的主题的 `index` 或 `archive` 格式生成首页。

## 不同之处

- 置顶

`sticky` 与 `top` 参数在文章的 [Front-matter](https://hexo.io/docs/front-matter) 中可以使用来置顶文章。高的 `sticky` (或 `top`) 值意味着它会被排到最前面。

> 因为在旧版本中，hexo-generator-index 不能置顶文章到首页。
>
> 大多数人使用 [hexo-generator-index-pin-top](https://github.com/Qyh-Q/hexo-generator-index-pin-top) 来实现置顶功能


- 隐藏文章

在文章的 Front-matter 中使用 `hide: true` 可以隐藏文章（不在首页显示）。

> [hexo-generator-index-pin-top](https://github.com/Qyh-Q/hexo-generator-index-pin-top) 没有隐藏文章的功能


## 安装

[hexo-generator-index-custom](https://github.com/im0o/hexo-generator-index-custom)可以完全替代官方的 [hexojs/hexo-generator-index](https://github.com/hexojs/hexo-generator-index)，所以安装之后，先卸载官方的插件，不然会引起一些冲突。

``` bash
$ npm uninstall hexo-generator-index

$ npm install hexo-generator-index-custom --save
```

## 配置

在 _config.yml 中新增或修改如下配置：

``` yaml
index_generator:
  path: ''
  per_page: 10
  order_by: -date
  pagination_dir: page
```

- **path**: Root path for your blog's index page. 
  - default: ""
- **per_page**: Posts displayed per page.
  - default: [`config.per_page`](https://hexo.io/docs/configuration.html#Pagination) as specified in the official Hexo docs (if present), otherwise `10`
  - `0` disables pagination
- **order_by**: Posts order. 
  - default: date descending
- **pagination_dir**: URL format.
  - default: 'page'
  - `awesome-page` makes the URL ends with 'awesome-page/<page number>' for second page and beyond.

所有的配置均与官方首页生成器一样，不必修改。

## 使用方法

在文章开头的配置中添加 `sticky` 或 `top` 参数，可以置顶文章。

其值可以是 `true` 或数字，数字越大，文章排在越前面。

```yml
---
title: Hello World
date: 2013/7/13 20:46:25
sticky: 100
---
```

```yml
---
title: Hello World
date: 2013/7/13 20:46:25
top: 100
---
```

在文章开头的配置中添加 `hide` 参数，可以隐藏文章。

```yml
---
title: Hello World
date: 2013/7/13 20:46:25
hide: true
---
```

## Note

If your theme define a non-archive `index` layout (e.g. About Me page), this plugin would follow that layout instead and not generate an archive. In that case, use [hexo-generator-archive](https://github.com/hexojs/hexo-generator-archive) to generate an archive according to the `archive` layout.

## License

MIT

[hexojs/Hexo](https://github.com/hexojs/hexo)

[hexojs/hexo-generator-index](https://github.com/hexojs/hexo-generator-index)

[Hexo]: http://hexo.io/
