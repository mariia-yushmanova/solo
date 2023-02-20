import React, { useState, useEffect } from 'react';
import './App.css';
import { Articles } from './Articles';
import { Collection } from './Collection';

const cats = [
  { name: 'All photo' },
  { name: 'Travel' },
  { name: 'Street Photography' },
  { name: 'Business & Work' },
  { name: 'Fashion & Beauty' },
  { name: 'Health & Wellness' },
  { name: 'Arts & Culture' },
];

function App() {
  const [collection, setCollection] = useState([]);
  const [articles, setArticles] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    async function getPhoto() {
      const url = `https://63c2ce4ae3abfa59bdb38f70.mockapi.io/collection?${
        categoryId ? `category=${categoryId}` : ''
      }`;
      const response = await fetch(url);
      const data = await response.json();

      setCollection(data);
    }

    getPhoto();
  }, [categoryId]);

  useEffect(() => {
    async function getAutorImg() {
      const url = 'https://63c2ce4ae3abfa59bdb38f70.mockapi.io/articles';
      const response = await fetch(url);
      const data = await response.json();

      setArticles(data);
    }

    getAutorImg();
  }, []);

  return (
    <>
      <header className="container">
        <div className="header">
          <nav className="navbar">
            <div className="header__logo">
              <a href="/" className="header__link">
                <img src="img/logo.png" alt="Logo" className="header__img" />
                <span className="header__text">Photo Land</span>
              </a>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#searchLine" className="nav__link">
                  <span className="nav__text">Photo search</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#Blog" className="nav__link">
                  <span className="nav__text">Blog</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="music">
            <audio controls src="/img/shook.mp3" className="audio">
              <a href="/img/shook.mp3">Download audio</a>
            </audio>
          </div>
          <div className="info">
            <div>
              <div className="info__text">
                The most powerful photo gallery
                <br />
                in the world.
              </div>
              <div>Your favorite photographers in one place!</div>
              <button onClick={() => setOpen(true)} className="info__btn">
                Get a little smile
              </button>
              <div className={`overlay animated ${open ? 'show' : ''}`}>
                <div className="overlay__modal">
                  <svg
                    height="200"
                    viewBox="0 0 200 200"
                    width="200"
                    className="modal__svg"
                    onClick={() => setOpen(false)}
                  >
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                  </svg>
                  <img src="/img/cat.jpg" alt="cat" className="modal__img" />
                </div>
              </div>
            </div>
            <div>
              <img
                src="img/collages.png"
                alt="collages"
                className="info__img"
              />
            </div>
          </div>
          <div className="info__flex">
            <div className="info__flex">
              <img src="img/item.svg" alt="" className="info__icon" />
              <div>
                <h3>1.4B</h3>
                <span>requests/month</span>
              </div>
            </div>
            <div className="info__flex">
              <img src="img/item2.svg" alt="" className="info__icon" />
              <div>
                <h3>4.7M</h3>
                <span>photos</span>
              </div>
            </div>
            <div className="info__flex">
              <img src="img/item3.svg" alt="" className="info__icon" />
              <div>
                <h3>323.1k</h3>
                <span>photographers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="photo">
          <div className="photo__line"></div>
        </div>
        <div className="container">
          <div className="search-line" id="searchLine">
            <ul className="search__list">
              {cats.map((obj, i) => {
                return (
                  <li
                    onClick={() => setCategoryId(i)}
                    className={categoryId === i ? 'active' : ''}
                    key={obj.name}
                  >
                    {obj.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="search">
            <div className="search__flex">
              <svg width="32" height="32">
                <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
              </svg>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search photo"
                className="search__input"
              />
            </div>
          </div>
          <div className="catalog">
            <div className="catalog__card">
              {collection
                .filter((obj: any) => {
                  return obj.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((obj: any, index) => {
                  return (
                    <Collection
                      key={index}
                      images={obj.photos[0]}
                      name={obj.name}
                    />
                  );
                })}
              {collection
                .filter((obj: any) => {
                  return obj.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((obj: any, index) => {
                  return (
                    <Collection
                      key={index}
                      images={obj.photos[1]}
                      name={obj.name}
                    />
                  );
                })}
            </div>
            <div className="catalog__card">
              {collection
                .filter((obj: any) => {
                  return obj.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((obj: any, index) => {
                  return (
                    <Collection
                      key={index}
                      images={obj.photos[2]}
                      name={obj.name}
                    />
                  );
                })}
              {collection
                .filter((obj: any) => {
                  return obj.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((obj: any, index) => {
                  return (
                    <Collection
                      key={index}
                      images={obj.photos[3]}
                      name={obj.name}
                    />
                  );
                })}
            </div>
            <div className="catalog__card">
              {collection
                .filter((obj: any) => {
                  return obj.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((obj: any, index) => {
                  return (
                    <Collection
                      key={index}
                      images={obj.photos[4]}
                      name={obj.name}
                    />
                  );
                })}
              {collection
                .filter((obj: any) => {
                  return obj.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((obj: any, index) => {
                  return (
                    <Collection
                      key={index}
                      images={obj.photos[5]}
                      name={obj.name}
                    />
                  );
                })}
            </div>
          </div>
          <div className="blog_text" id="Blog">
            Our blog
          </div>
          <div className="articles">
            {articles.map((obj: any) => (
              <Articles
                title={obj.title}
                autorImg={obj.autorImg}
                text={obj.text}
                autor={obj.autor}
                autorText={obj.autorText}
              ></Articles>
            ))}
          </div>
        </div>
      </main>
      <footer className="container">
        <div className="footer footer__flex">
          <div className="footer__content">
            <span className="footer__text">
              © 2023 Brand All Rights Reserved.
            </span>
          </div>
          <div className="footer__social">
            <ul className="footer__flex gap">
              <li>
                <a href="/">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="M29.3 7.9c-.8 1.1-1.6 2.1-2.7 2.9v.7c0 7.2-5.6 15.5-15.7 15.2-3.1 0-6-.8-8.4-2.4.4.1.9.1 1.3.1 2.5 0 4.9-.9 6.8-2.4-2.4 0-4.4-1.6-5-3.7.4.1.7.1 1.1.1.5 0 1.1 0 1.5-.1-2.5-.5-4.4-2.6-4.4-5.3v-.1c.8.4 1.6.7 2.4.7-1.4-1-2.3-2.7-2.3-4.6 0-.9.3-1.9.8-2.6 2.7 3.2 6.6 5.4 11.1 5.6-.1-.4-.1-.8-.1-1.2 0-3 2.4-5.4 5.4-5.4 1.6 0 3.1.7 4 1.6 1.2-.3 2.4-.7 3.4-1.3-.4 1.3-1.3 2.4-2.4 3 1.2-.2 2.3-.5 3.2-.8z"
                      fill="#999"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg width="32" height="32">
                    <path
                      d="M29.3 16c0 6.7-4.9 12.2-11.2 13.2v-9.3h3.1l.6-3.8h-3.7v-2.5c0-1.1.5-2.1 2.2-2.1H22V8.2S20.5 8 19 8c-3 0-5 1.8-5 5.2V16h-3.4v3.9H14v9.2C7.6 28.2 2.7 22.7 2.7 16c0-7.3 6-13.3 13.3-13.3 7.3 0 13.3 5.9 13.3 13.3z"
                      fill="#999"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg width="32" height="32">
                    <path
                      d="M29.2 10.5c-.1-1.4-.3-2.4-.6-3.2-.3-.9-.8-1.6-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5-.8-.3-1.8-.6-3.2-.6-1.4-.1-1.9-.1-5.5-.1s-4.1 0-5.5.1c-1.4 0-2.4.2-3.2.6-.9.3-1.7.8-2.4 1.5S3.7 6.4 3.4 7.3c-.4.8-.6 1.8-.7 3.2-.1 1.4-.1 1.9-.1 5.5s0 4.1.1 5.5c.1 1.4.3 2.4.6 3.2.3.9.8 1.6 1.5 2.4.7.7 1.5 1.2 2.4 1.5.8.3 1.8.6 3.2.6 1.4.1 1.9.1 5.5.1s4.1 0 5.5-.1c1.4-.1 2.4-.3 3.2-.6.9-.3 1.6-.8 2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.6-1.8.6-3.2.1-1.4.1-1.9.1-5.5.1-3.6.1-4.1 0-5.5zm-2.4 10.9c-.1 1.3-.3 2-.5 2.5-.2.6-.5 1.1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.5.5-1.4.1-1.8.1-5.4.1-3.6 0-4 0-5.4-.1-1.3-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.5.1-1.4.1-1.8.1-5.4s0-4 .1-5.4c.1-1.3.3-2 .5-2.5.2-.6.5-1.1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.5-.5H16c3.6 0 4 0 5.4.1 1.3.1 2 .3 2.5.5.6.2 1.1.5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.5.1 1.4.1 1.8.1 5.4s-.1 3.9-.2 5.3zM16 9.2c-3.8 0-6.8 3.1-6.8 6.8 0 3.8 3.1 6.8 6.8 6.8 3.8 0 6.8-3.1 6.8-6.8s-3-6.8-6.8-6.8zm0 11.2c-2.5 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.5 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4zm8.7-11.5c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6.7-1.6 1.6-1.6 1.6.7 1.6 1.6z"
                      fill="#999"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
