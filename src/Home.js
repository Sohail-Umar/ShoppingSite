import React from "react"
import "./App.css";
import DataArray from "./DataArray";
import Cards from "./Cards";

function Home() {
    return (
        <div className="NavBar-appMain">
            {
                DataArray.map((value) => {
                    return <Cards value={value} />
                })
            }

        </div>
    );
}

export default Home;