import express from "express";
import { Scraper } from "@0xindie/agent-twitter-client";
import dotenv from "dotenv";

dotenv.config();

const port = 5500;
const app = express();
let scraper;  // Define globally

(async () => {
    try {
        console.log("Setting up scraper...");
        scraper = new Scraper();
        await scraper.login("customapia98163", "testtesttest");
        console.log("Scraper login successful");
    } catch (error) {
        console.error("Error initializing scraper:", error);
    }
})();

app.get("/getTweets/:accountName/:amount", async (req, res) => {
    const { accountName, amount } = req.params;
    console.log("Account parameter received:", accountName); 
    console.log("Endpoint hit /getTweets");

    try {
        if (!scraper) {
            return res.status(500).json({ error: "Scraper not initialized" });
        }

        const tweets = [];

        for await (const tweet of scraper.getTweets(accountName, amount)) {
            tweets.push({ html: tweet.html });
        }

        
+
        res.json({ summary: tweets });
    } catch (error) {
        console.error("Error fetching tweets:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
