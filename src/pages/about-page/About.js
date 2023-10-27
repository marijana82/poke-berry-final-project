import "./About.css";
import React from "react";
import Article from "../../components/article-component/Article";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
    BULBASAUR,
    CHERRY_BERRY,
    CHESTO_BERRY,
    KYOGRE,
    MAGO_BERRY,
    PECHA_BERRY,
    SNORLAX
} from "../../assets/images/constants";
import Main from "../../components/main/Main";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";


function About() {
    return (
        <>
            <Header
                message="About page"
                description="Here you can find out more about pokemon and berries "
            />

            <Main>
                <section className="wrapper-container-about">
                    <div className="article-container-about">
                    <Article
                        title="What are Pokemon?"
                        message="Say hi to pocket monsters"
                        stylingTitle="about-us-title"
                    >
                        <p>Much as happens with many other words and phrases borrowed from English, the Japanese name for the series, Pocket Monsters, became contracted into "Pokémon" during the development of the original games, likely as much for convenience when referring to it as to save on-screen real estate, considering the small size of the Game Boy's screen. The official romanization of "Pokémon" at this time was derived from the contraction of Pocket and Monsters, and can be seen explicitly in Primeape Goes Bananas, even in the English dub.
                            The "Pokémon" name used today came about during the translation of the games for an English audience during 1997 and 1998. <i>(Source: Bulbagarden, Bulbapedia)</i> </p>
                    </Article>

                    </div>
                    <aside>
                        <div className="image-container-about">
                        <img src={SNORLAX} alt="charmander" className="about-image-charmander"/>
                        </div>
                    </aside>
                </section>


                <section className="wrapper-container-about">
                    <aside>
                        <div className="image-container-about">
                            <img src={KYOGRE} alt="kyogre" className="about-image-charmander"/>
                            <div className="berry-container">
                                <img src={CHERRY_BERRY} alt="cherry-berry"/>
                                <img src={CHESTO_BERRY} alt="chesto-berry"/>
                                <img src={MAGO_BERRY} alt="mago-berry"/>
                                <img src={PECHA_BERRY} alt="pecha-berry"/>
                                <img src={CHERRY_BERRY} alt="cherry-berry"/>
                                <img src={CHESTO_BERRY} alt="chesto-berry"/>
                                <img src={MAGO_BERRY} alt="mago-berry"/>
                                <img src={PECHA_BERRY} alt="pecha-berry"/>
                            </div>

                        </div>

                    </aside>

                    <div className="article-container-about">
                    <Article
                        title="What are berries?"
                        message="Tree fruit for your Pokemon"
                        stylingTitle="about-us-title"
                    >
                        <p>Berries (Japanese: きのみ Tree Fruit) are small, juicy, fleshy fruit. As in the real world, a large variety exists in the Pokémon world, with a large range of flavors and effects. First found in the Generation II games, many Berries have since become critical held items in battle, where their various effects include HP and status condition restoration, stat enhancement, and even damage negation.<i>(Source: Bulbagarden, Bulbapedia)</i></p>
                    </Article>
                    </div>

                </section>

                <section className="wrapper-container-about">
                    <Article
                        title="Get in touch"
                        message="Fill in the form to get in touch or send us your feedback! "
                        stylingTitle="about-us-title"
                    >
                        <Input
                            labelText="Your precious email"
                            idAttribute="email"
                            inputType="email"
                            placeholder="pikachu@pikachu.com"
                            nameAttribute="email"
                        />

                        <Input
                            labelText="Your first and last name"
                            idAttribute="name"
                            inputType="text"
                            placeholder="Pikachu Charmander"
                            nameAttribute="name"
                        />

                        <Select
                            labelText="Select your main interest"
                        />
                    </Article>

                </section>





            </Main>

            <Footer/>

        </>
    )
}

export default About;