import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("code-eka");
  const [index, setIndex] = useState(1);

  //   Fetching News
  const fetchNews = async () => {
    const apiUrl = getNewsAPI(category);
  
    try {
      const { data } = await axios.get(apiUrl);
      console.log("API Response:", data);
      
      // Check if the response has articles
      if (data.articles) {
        setNews(data);
        setIndex(1);
      } else {
        console.error("No articles found in the API response:", data);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
  
      // Check for specific 400 error
      if (error.response && error.response.status === 400) {
        console.error("Bad request - check your API key or request parameters");
      }
    }
  };
  
  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <NewsContext.Provider value={{ news, index, setIndex, fetchNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
