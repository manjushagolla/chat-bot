# ✨ AI Chatbot Integration Web App

Welcome to the **AI ChatBot with Stunning 3D UI**, a fully functional chatbot application built using **HTML**, **CSS**, **JavaScript**, and **groq API**, enhanced with an immersive **3D Spline animation** to deliver an engaging user experience.


 ## 🚀 Features
 
🔥 Powered by GROQ – lightning-fast inference with LLaMA 3 (70B, 8192 context window)

⚡ FastAPI backend – scalable, async-ready, modern Python API

🛡️ CORS Enabled – ready for frontend integration

📦 Production-ready structure – ideal for scaling and deploying

💬 Chatbot Endpoint – plug into your frontend, Telegram bot, or Slack

🧪 Tested with CURL/Postman – simple and dev-friendly

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend (Chatbot Engine)**:Python
- **Version Control**: Git & GitHub
- **Model**:LLaMA 3 - Meta's latest 70B model via GROQ
- **Api**:GROQ API
-  **Spline Integration**:We used an **iframe** to embed the Spline 3D scene directly beside the chatbot using a flexbox layout.

---


## 🧾 Installation

### 1. Clone the Repository

git clone https://github.com/yourusername/chatbot.git
cd ai-chatbot-webapp

### 2. Create a Virtual Environment

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

### 3.Install Dependencies

pip install -r requirements.txt

### 4.Set Your GROQ API Key
Create a .env file in the root directory:
GROQ_API_KEY=your_groq_api_key_here

### 5.Running the Server
uvicorn main:app --reload
🌐 Visit: http://localhost:8000/docs to access Swagger UI for testing.


---

### 🙌 Acknowledgments
-⚡ GROQ API

-🚀 FastAPI

-🦙 Meta LLaMA 3 70B

-🎨 Spline 

-💡 You – the curious mind exploring this!

