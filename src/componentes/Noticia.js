import React from "react";
import PropTypes from "prop-types";

const Noticia = props => {
  const { title, url, urlToImage, description, source } = props.noticia;
  return (
    <div className="col s12 m6 14">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
          <span className="card-title">{source.name}</span>
        </div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <a href={url} target="_blank" className="waves-effect waves-light btn">
          Leer más
        </a>
      </div>
    </div>
  );
};

Noticia.protoTypes = {
  noticia: PropTypes.shape({
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    source: PropTypes.object
  })
};
export default Noticia;
