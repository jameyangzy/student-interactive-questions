const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/submit-answers', async (req, res) => {
    const { userAnswers } = req.body; // 从请求体获取用户答案
    const token = process.env.GITHUB_TOKEN; // 安全地存储您的GitHub Token在环境变量

    const owner = 'jameyangzy';
    const repo = 'student-interactive-questions';
    const path = 'results.json';

    try {
        const fileResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            headers: {
                Authorization: `token ${token}`
            }
        });

        const file = await fileResponse.json();
        const sha = file.sha;

        const encodedContent = Buffer.from(JSON.stringify({ userAnswers }), 'utf8').toString('base64');

        const result = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            method: 'PUT',
            headers: {
                Authorization: `token ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Update answers',
                content: encodedContent,
                sha: sha
            })
        });

        if (result.ok) {
            res.sendStatus(200);
        } else {
            res.status(500).send('Error updating file');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
