import "./Article.css";
import React from "react";
import Pokeball from "../pokeball/Pokeball";
import {Link} from "react-router-dom";


function Article({title, message, children}) {

    return(
            <article>
                <div className="about-us-title">
                    <Link
                        to={"/game-page"}
                        style={{textDecoration: 'none', color: 'white'}}
                    >
                        <h2>{title}</h2>
                    </Link>

                </div>

                <div className="about-us-message">
                    <p>{message}</p>
                    {children}
                </div>
            </article>

    )
}

export default Article;