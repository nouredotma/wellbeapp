import axios from "axios";

export const translateText = async (text, targetLang) => {
    try {
        const response = await axios.post(
            "https://libretranslate.com/translate",
            {
                q: text,
                source: "auto", // Detects source language automatically
                target: targetLang,
                format: "text",
            },
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        return response.data.translatedText;
    } catch (error) {
        console.error("Translation Error:", error);
        return text; // Return original text in case of error
    }
};
