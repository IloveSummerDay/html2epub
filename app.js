import { EPub } from '@lesjoursfr/html-to-epub'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/convert', async (req, res) => {
	try {
		const { title, content } = req.body

		if (!title || !content) {
			return res.status(400).json({ error: '标题和内容为必填项' })
		}

		const option = {
			...req.body
		}

		const __filename = fileURLToPath(import.meta.url)
		const dirname = path.dirname(__filename)
		const outputPath = path.join(dirname, 'public', `${Date.now()}.epub`)
		const epub = new EPub(option, outputPath)

		await epub.render()

		res.json({
			success: true,
			message: 'EPUB生成成功',
			filePath: path.basename(outputPath)
		})
	} catch (error) {
		console.error('生成EPUB失败:', error)
		res.status(500).json({
			success: false,
			message: '生成EPUB失败',
			error: error.message
		})
	}
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`server on http://localhost:${PORT}`)
})
