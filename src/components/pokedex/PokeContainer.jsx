import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import PokeCard from "./PokeCard";
import "./styles/pokeContainer.css";
import Pagination from "./Pagination";

const PokeContainer = ({ formUrl, currentPage, setCurrentPage }) => {
  const [pokeCards, setPokeCards] = useState([]);
  const [pokemonsPerPage] = useState(9);
  const [pokemons, getAllPokemons] = useFetch(formUrl);

  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;

  useEffect(() => {
    getAllPokemons();
  }, [formUrl]);

  useEffect(() => {
    if (pokemons?.results) {
      setPokeCards(pokemons.results);
    } else if (pokemons?.pokemon) {
      setPokeCards(pokemons.pokemon.map((objPoke) => objPoke.pokemon));
    }
  }, [pokemons]);

  return (
    <>
      <div className="poke-container">
        {pokemons?.results
          ? pokemons?.results
              .slice(firstIndex, lastIndex)
              .map((pokemon) => (
                <PokeCard key={pokemon.url} url={pokemon.url} />
              ))
          : pokemons?.pokemon
              .slice(firstIndex, lastIndex)
              .map((objPoke) => (
                <PokeCard key={objPoke.pokemon.url} url={objPoke.pokemon.url} />
              ))}
      </div>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokemons={pokeCards.length}
      />
    </>
  );
};

export default PokeContainer;
