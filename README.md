# HTML 转 EPUB API 服务

这是一个基于 Express.js 的 API 服务，用于将 HTML 内容转换为 EPUB 电子书格式。

## 安装

```bash
npm install
```

## 运行

开发模式：

```bash
npm run dev
```

生产模式：

```bash
npm start
```

## API 使用说明

**请求方式：** POST

**接口地址：** `/convert`

**请求体格式：**

```json
{
	"title": "文章标题",
	"author": "作者名称",
	"content": "<h1>文章标题</h1><p>文章内容...</p>"
	// other options in https://github.com/lesjoursfr/html-to-epub?tab=readme-ov-file#options
}
```

**响应格式：**

```json
{
	"success": true,
	"message": "EPUB生成成功",
	"filePath": "生成的EPUB文件名"
}
```

## 注意事项

1. 生成的 EPUB 文件将保存在`public`目录下
2. 文件名格式为时间戳.epub
3. 可以通过`http://localhost:3000/文件名.epub`访问生成的 EPUB 文件, 后续生产环境访问方式类似本地访问
