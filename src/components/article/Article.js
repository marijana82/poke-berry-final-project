import "./Article.css";
import React from "react";
import {Link} from "react-router-dom";


function Article({title, message, children, stylingTitle, stylingMessage}) {

    return(
            <article>
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