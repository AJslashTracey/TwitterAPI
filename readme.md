# Twitter Scraper API

🚀 **Base URL:** `https://twitterapi-production-ea97.up.railway.app`

---

## 📌 Features
- Fetch tweets from any public Twitter account.
- Uses a scraper to avoid Twitter API restrictions.




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
