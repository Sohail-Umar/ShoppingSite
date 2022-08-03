import React from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cart");
    }

    return (
        <>

            <div className="card-container">
                <img src={props.value.image}></img>
                <p><span>{props.value.id}</span></p>
                <p><span>{props.value.title}</span></p>
                <p><span>{props.value.price}</span></p>
                <p><span>{props.value.description}</span></p>
                <p><span>{props.value.category}</span></p>

                <button className="btn-card" onClick={handleClick}>
                    Add to Cart
                </button>

            </div>
        </>
    );
}

export default Cards;