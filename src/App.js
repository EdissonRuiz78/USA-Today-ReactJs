import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import News from "./components/News";

function App() {
  const [category, updateCategory] = useState("");
  const [news, updateNews] = useState([]);

  useEffect(() => {
    const getDataAPI = async () => {
      const apiKey = "6e1c99183c7949ce88343a2afed596a8";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
      const response = await fetch(url);
      const news = await response.json();
      updateNews(news.articles);
    };
    getDataAPI();
  }, [category]);

  return (
    <Fragment>
      <Header tittle="USA Today" />
      <div className="container white">
        <Form updateCategory={updateCategory} />
        <News news={news} />
      </div>
    </Fragment>
  );
}

export default App;
