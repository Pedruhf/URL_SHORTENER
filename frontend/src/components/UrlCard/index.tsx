import { useState } from "react";

import "./styles.scss";

interface UrlCardProps {
  url: string;
  shortenedURL: string;
}

const UrlCard: React.FC<UrlCardProps> = ({ url, shortenedURL}) => {
  return (
    <div className="urlCard">
      <a target="_blank" href={url} className="urlToShorten">{url}</a>

      <hr />

      <a target="_blank" href={shortenedURL} className="shortenedUrl">{shortenedURL}</a>

      <button>Copy</button>
    </div>
  );
};

export { UrlCard };