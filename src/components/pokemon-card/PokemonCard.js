import "./PokemonCard.css";

function PokemonCard({assets, type, title, weight, height}) {

    return(
        <>
            <div className="hover-card-container">
                <div className="card-hover">
                    <div className="image-container">
                        <img src={assets} alt="image-of-pokemon"/>
                    </div>
                    <div className="content">
                        <h3>{title}</h3>
                        <p>Height: {height} cm</p>
                        <p>Weight: {weight} cm</p>
                        <p>Type: {type} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonCard;