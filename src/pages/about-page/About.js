import "./About.css";
import React, {useState} from "react";
import Article from "../../components/article/Article";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
    CHERRY_BERRY,
    CHESTO_BERRY,
    KYOGRE,
    MAGO_BERRY, MEW_TWO,
    PECHA_BERRY,
    SNORLAX
} from "../../assets/images/constants";
import Main from "../../components/main/Main";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import ButtonReset from "../../components/button-reset/ButtonReset";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Pokeball from "../../components/pokeball/Pokeball";


function About() {

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [feedbackValue, setFeedbackValue] = useState("");
    const [selectValue, setSelectValue] = useState("Berries in general");
    const [isSent, setIsSent] = useState(false);


    function onSubmitSend(e) {
        e.preventDefault();
        console.log({
            "name":`${nameValue}`,
            "email": `${emailValue}`,
            "select":`${selectValue}`,
            "feedback":`${feedbackValue}`
        });
        setIsSent(true);
    }

    function resetSearch() {
        setNameValue("");
        setEmailValue("");
        setFeedbackValue("");
        setSelectValue("Berries in general");
        setIsSent(current => !current);
    }

    return (
        <>
            <Header
                message="About and Contact page"
                description="Here you can find out more about pokemon and berries or just get in touch with us!"
            />

            <Main>

                <div className="arrow-back">
                    <Link to={`/`}>
                        <AiOutlineArrowLeft
                            style={
                                {color: 'blue', fontSize: '44px', fontWeight: 'bold'}}
                        />
                    </Link>
                </div>
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

                        <form
                            className="registration-form"
                            onSubmit={onSubmitSend}
                        >
                        <Input
                            labelText="Your precious email"
                            idAttribute="email"
                            inputType="email"
                            placeholder="pikachu@pikachu.com"
                            nameAttribute="email"
                            type="email"
                            stateValue={emailValue}
                            stateSetter={setEmailValue}
                        />

                        <Input
                            labelText="Your first and last name"
                            idAttribute="name"
                            inputType="text"
                            placeholder="Pikachu Charmander"
                            nameAttribute="name"
                            type="text"
                            stateValue={nameValue}
                            stateSetter={setNameValue}
                        />

                        <Select
                            labelText="Select your main interest"
                            stateValue={selectValue}
                            stateSetter={setSelectValue}
                        />

                        <Textarea
                            labelText="We appreciate your feedback!"
                            placeholder="Curious what you have to say! :)"
                            stateValue={feedbackValue}
                            stateSetter={setFeedbackValue}
                        />

                            <div className="button-container">

                            <Button
                                type="submit"
                                className="registration-button"
                                disabled={
                                    nameValue.length === 0 &&
                                    emailValue.length === 0
                                }
                            >Send
                            </Button>

                            <ButtonReset
                                children="x"
                                resetHandler={resetSearch}
                                styling="reset-button-tab"
                            />

                            </div>
                        </form>

                        { isSent ?
                            <div className="success-message">
                                <div className="image-container-about">
                                    <img src={MEW_TWO} alt="charmander" className="about-image-charmander"/>
                                </div>
                                <p>Your feedback has been successfully sent! We'll get in touch with you as soon as possible!</p>
                            </div>
                            :
                            <p>Don't hesitate to get in touch!</p>
                        }

                    </Article>
                </section>

                <section className="wrapper-container-about">
                    <Link
                        to={"/"}
                        style={{textDecoration: 'none', color: 'black'}}
                    >
                        <Pokeball
                            ballMessage="back to home"
                            styling="poke-ball-container"
                        />
                    </Link>

                </section>



            </Main>

            <Footer
                buttonMessage="Back to top"
            />

        </>
    )
}

export default About;