import React from "react";
import PropTypes from "prop-types";
import New from "./New";

const News = ({ news }) => {
  return (
    <div className="row">
      {news.map((data) => (
        <New key={data.url} data={data} />
      ))}
    </div>
  );
};

News.propTypes = {
  news: PropTypes.array.isRequired,
};

export default News;
