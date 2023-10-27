import "./Article.css";
import React from "react";
import {Link} from "react-router-dom";


function Article({title, message, children}) {

    return(
            <article>
                <div className="about-us-title">
                    <Link
                        to={"/about-page"}
                        style={{textDecoration: 'none', color: 'white'}}
                    >
                        <h2>{title}</h2>
                    </Link>

                </div>

                <div className="about-us-message">
                    <h2>{message}</h2>
                    {children}
                </div>
            </article>

    )
}

export default Article;