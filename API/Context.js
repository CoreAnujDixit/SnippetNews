import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(1);

  //   Fetching News
  const fetchNews = async () => {
    const apiUrl = getNewsAPI(category);
    try {
      const { data } = await axios.get(apiUrl);
      console.log("API Response:", data);
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.error("Error fetching news:", error);
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
