import React from "react";
import PropTypes from "prop-types";

const New = ({ data }) => {
  const { title, description, source, urlToImage, url } = data;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            className="btn waves-effect waves-light"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            See more...
          </a>
        </div>
      </div>
    </div>
  );
};

New.propTypes = {
  data: PropTypes.object.isRequired,
};

export default New;
