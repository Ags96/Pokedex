import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormPoke from "../components/pokedex/FormPoke";
import PokeContainer from "../components/pokedex/PokeContainer";
import "./styles/pokedex.css";
import PokeBar from "../assets/img/homePokeBar.png";
import pokeTitle from "../assets/img/pokeTitle.png";

const Pokedex = () => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
  

  const [formUrl, setFormUrl] = useState(urlBase);
 


  const { trainerName } = useSelector((state) => state);

  return (
    <div>
      <img className="poke__bar" src={PokeBar} alt="" />
      <img className="poke__title" src={pokeTitle} alt="" />
      <p className="welcome__text">
        <span className="trainer__name">Welcome {trainerName},</span> here you
        can find your favorite pokemon
      </p>
      <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} />
      <PokeContainer formUrl={formUrl} />
    </div>
  );
};

export default Pokedex;
