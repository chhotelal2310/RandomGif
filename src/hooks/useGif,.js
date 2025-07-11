import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = () => {
    const [gif, setGif] = useState("");
    const [loading, setIsLoading] = useState(false)

    const fetchData = async (tag) => {
        try {
            setIsLoading(true);
            const response = await axios.get(tag ? `${Url}&tag=${tag}` : Url);
            const ImageUrl = response?.data?.data?.images?.downsized?.url;
            setGif(ImageUrl);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { gif, fetchData, loading }

};




