import "./About.css";
import React from "react";
import Article from "../../components/article-component/Article";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


function About() {
    return (
        <>
            <Header
                message="About page"
                description="Here you can find out more about pokemon and berries "
            />

                <Article
                    message="What are pokemon?"
                >
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                </Article>


                <Article
                    message="What are berries?"
                >
                    <p>bla bla bla</p>
                    <p>bla bla bla</p>
                </Article>

                <Article
                    message="Fill in the form to get in touch or send us your feedback! "
                >


                </Article>

            <Footer/>

        </>
    )
}

export default About;