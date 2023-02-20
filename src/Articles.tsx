import React, { useState } from 'react';

export function Articles({ title, autorImg, text, autor, autorText }: any) {
  const [openArticles, setOpenArticles] = useState(false);

  return (
    <>
      <div
        className="articles__content"
        onClick={() => {
          setOpenArticles(true);
        }}
      >
        <div className="articles__title">{title}</div>
        <img src={autorImg} alt="articles" className="articles__img" />
      </div>
      <div className={`overlay animated ${openArticles ? 'show' : ''}`}>
        <div className="overlay__modal">
          <svg
            height="200"
            viewBox="0 0 200 200"
            width="200"
            className="modal__svg"
            onClick={() => setOpenArticles(false)}
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <div className="modal-flex">
            <h2 className="">{title}</h2>
            <span>{text}</span>
            <p>
              <b>{autor}</b>&nbsp;
              {autorText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
