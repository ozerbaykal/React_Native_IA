import axios from 'axios';
const { chatKey } = require('../constants');

const client = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + chatKey, //need to key go to constant file and get it
    },
});

const chatGptEndpoint = 'https://api.openai.com/v1/chat/completions';
const dalleEndpoint = 'https://api.openai.com/v1/images/generations';

export const apiCall = async (prompt, messages) => {
    try {
        const res = await client.post(chatGptEndpoint, {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Does this message want to generate an AI picture, image, art, or anything similar? ${prompt}. Simply answer with a yes or no.`,
                }
            ]
        });
        //console.log('data:', res.data.choices[0].message);
        let isArt = res.data?.choices[0].message?.content;

        if (isArt.toLowerCase().includes("yes")) {
            console.log("dalle api call");
            return dalleApiCall(prompt, messages || []);
        } else {
            console.log("chat gpt api call")
            return chatGptApiCall(prompt, messages || []);
        }

    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            return Promise.resolve({ success: false, msg: error.response.data.message });
        } else if (error.request) {
            console.error('Error request data:', error.request);
            return Promise.resolve({ success: false, msg: 'No response received' });
        } else {
            console.error('Error message:', error.message);
            return Promise.resolve({ success: false, msg: error.message });
        }
    }
};

const chatGptApiCall = async (prompt, messages) => {
    try {
        const res = await client.post(chatGptEndpoint, {
            model: 'gpt-3.5-turbo',
            messages

        })
        let answer = res.data?.choices[0]?.message?.content;
        messages.push({ role: "assistant", content: answer.trim() })
        return Promise.resolve({ success: true, data: messages })

    } catch (err) {
        console.log("err :", err);
        return Promise.resolve({ success: false, msg: err.message });

    }
}

const dalleApiCall = async (prompt, messages) => {
    try {
        const res = await client.post(dalleEndpoint, {
            //model: "dall-e-3",
            prompt,
            n: 1,
            size: "512x512"

        })
        let url = res?.data?.data[0]?.url;
        console.log("got url of the image", url)
        messages.push({ role: "assistant", content: url })
        return Promise.resolve({ success: true, data: messages })





    } catch (error) {

    }

}
