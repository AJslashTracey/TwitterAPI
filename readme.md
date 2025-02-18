# Twitter Scraper API

This API fetches tweets from a specified account using the `@0xindie/agent-twitter-client`. It is deployed at:

🚀 **Base URL:** `https://twitterapi-production-ea97.up.railway.app`

---

## 📌 Features
- Fetch tweets from any public Twitter account.
- Uses a scraper to avoid Twitter API restrictions.

---

## 🚀 Setup & Installation

### 1️⃣ **Clone the Repository**
```sh
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Create a `.env` File**
Add your Twitter account credentials in a `.env` file:
```env
account=your_twitter_username
password=your_twitter_password
```

### 4️⃣ **Run the Server**
```sh
node index.js
```

Your server should now be running on `http://localhost:5500`.

---

## 📡 API Endpoints

### 🔹 **Fetch Tweets**
Fetches a specified number of tweets from a Twitter account.

📌 **URL:**
```
GET /getTweets/:accountName/:amount
```

📌 **Example Request:**
```sh
 https://twitterapi-production-ea97.up.railway.app/getTweets/spotonchain/20
```

📌 **Response Format:**
```json
{
  "summary": [
    { "html": "<tweet content 1>" },
    { "html": "<tweet content 2>" }
  ]
}
```

---

## 🛠️ Tech Stack
- **Express.js** - Backend framework
- **@0xindie/agent-twitter-client** - Twitter scraping library
- **dotenv** - Environment variable management

---

## ❗ Notes
- Ensure your `.env` file contains valid Twitter credentials.
- The API uses scraping techniques to fetch tweets, which may break if Twitter updates its site structure.

📌 **Test API Call:**  
[https://twitterapi-production-ea97.up.railway.app/getTweets/spotonchain/20](https://twitterapi-production-ea97.up.railway.app/getTweets/spotonchain/20)

---

## 📞 Contact & Support
For any issues, feel free to open a pull request or contact the repository maintainer!

🚀 Happy Coding!
