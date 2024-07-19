import React from "react";
import { useState, useEffect } from "react";
import './NewsSection.css';
import { articleList } from '../../shared/constants';
import ArrowButton from "../ArrowButton/ArrowButton";

const NewsSection = () => {
    const [mainArticle, setMainArticle] = useState({});
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (articleList.length > 13) {
            articleList.splice(0, articleList.length - 13)
        }

        setMainArticle(articleList[articleList.length - 1]);
        const partialArray = articleList.slice(0, -1);
        setArticles(partialArray.toReversed())
    }, []);

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <>
            <div className='main-content-container'>
                <div className="section-head">
                    <h1>НОВИНИ</h1>
                    <button className="show-all">всички новини</button>
                </div>
                <div className="all-articles-container">
                    <div className={`article-container primary ${page !== 0 ? 'hidden' : ''}`}>


                        <article className="main-article">
                            <div className="image-container">
                                <img src={`../../../images/${mainArticle.image}`} alt="china"></img>
                                <div className="image-overlay"></div>
                            </div>

                            <div className="main-article-content">
                                <h3>{mainArticle.title}</h3>
                                <p>{mainArticle.text}</p>
                            </div>
                        </article>


                        <div className="articles">

                            {articles.map((item, index) => {
                                if (index < 4) {
                                    return (
                                        <article
                                            key={index}
                                            className="single-article">
                                            <div className="image-container">
                                                <img src={`../../../images/${item.image}`} alt="/"></img>
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="article-content">
                                                <h3>{item.title}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </article>)
                                }
                                return false;
                            })}

                        </div>
                    </div>



                    <div className={`article-container secondary ${page !== 1 ? 'hidden' : ''}`}>

                        <div className="articles">
                            {articles.map((item, index) => {
                                if (index >= 4 && index <= 7) {
                                    return (
                                        < article
                                            key={index}
                                            className="single-article">
                                            <div className="image-container">
                                                <img src={`../../../images/${item.image}`} alt="/"></img>
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="article-content">
                                                <h3>{item.title}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </article>
                                    )
                                }
                                return false;
                            })}
                        </div>


                        <div className="articles">
                            {articles.map((item, index) => {
                                if (index >= 8 && index <= 11) {
                                    return (
                                        < article
                                            key={index}
                                            className="single-article">
                                            <div className="image-container">
                                                <img src={`../../../images/${item.image}`} alt="/"></img>
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="article-content">
                                                <h3>{item.title}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </article>
                                    )
                                }
                                return false;
                            })}
                        </div>

                    </div>
                </div>

                <div className={`button-container ${page !== 0 ? 'hidden' : ''}`}>
                    {/* <button className={`button ${page !== 0 ? 'hidden' : ''}`} onClick={() => changePage(1)}>
                        <div className="arrow-button"></div>
                    </button> */}
                    <ArrowButton clickHandler={() => changePage(1)}/> 
                </div>


                <div className={`button-container left ${page !== 1 ? 'hidden' : ''}`}>
                    {/* <button className={`button ${page !== 1 ? 'hidden' : ''}`} onClick={() => changePage(0)}>
                        <div className="arrow-button back"></div>
                    </button> */}
                    <ArrowButton direction="left" clickHandler={() => changePage(0)}/>
                </div>

            </div >
        </>
    );
}

export default NewsSection;
