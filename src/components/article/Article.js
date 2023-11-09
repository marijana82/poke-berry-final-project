import "./Article.css";
import React from "react";


function Article({title, message, children, stylingTitle, stylingMessage, stylingArticle}) {

    return(
            <article className={stylingArticle}>
                <div className={stylingTitle}>
                    <h2>{title}</h2>
                </div>

                <div className={stylingMessage}>
                    <h2>{message}</h2>
                    {children}
                </div>
            </article>

    );
}

export default Article;