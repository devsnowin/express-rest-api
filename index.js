const express = require('express')

const app = express()

app.use(express.json())

// Endpoints
app.get("/api/data", (req, res) => {
    const data = [
        {
            id: 1,
            item: "🔥"
        },
        {
            id: 2,
            item: "🦚"
        },
        {
            id: 3,
            item: "😎"
        },
        {
            id: 4,
            item: "⚽"
        },
        {
            id: 5,
            item: "✏"
        },
        {
            id: 6,
            item: "🌎"
        },
        {
            id: 7,
            item: "🚀"
        },
        {
            id: 8,
            item: "⚒"
        },
        {
            id: 9,
            item: "👩‍💻"
        },
        {
            id: 10,
            item: "📭"
        },
    ]
    
    res.json({
        status: "ok",
        message: "success",
        data
    })
})

// Listen to the server
const PORT  = 3001
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))
