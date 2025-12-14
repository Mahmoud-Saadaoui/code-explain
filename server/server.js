import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import "dotenv/config";
import Groq from "groq-sdk";

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
}));
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});

// Initialize Groq client
const client = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/explain", async (req, res) => {
    try {
        const { code, language } = req.body;
        if (!code || !language) {
            return res.status(400).json({ error: "Missing code or language" });
        }

        const messages = [
            {
                role: "user",
                content: `Please explain this ${language || ""
                    } code in simple terms:\n\n\`\`\`${language || ""}\n${code}\n\`\`\``,
            },
        ];

        const response = await client.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages,
            temperature: 0.2,
            max_completion_tokens: 600,
        })

        const explanation = response?.choices?.[0]?.message?.content;
        if (!explanation) {
            return res.status(500).json({ error: "Failed to explain code" });
        }
        res.json({ explanation, language: language || unknown });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to explain code" });
    }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});