import requests
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

GROQ_API_KEY = "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"  # Replace with your key
GROQ_MODEL = "llama3-70b-8192"  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_msg = data.get("message", "")

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": GROQ_MODEL,
        "messages": [
            {"role": "system", "content": "You are a smart and friendly AI assistant."},
            {"role": "user", "content": user_msg}
        ]
    }

    response = requests.post("https://api.groq.com/openai/v1/chat/completions",
                             headers=headers, json=payload)

    result = response.json()
    reply = result["choices"][0]["message"]["content"]
    return {"response": reply}
