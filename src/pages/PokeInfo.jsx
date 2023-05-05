import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./styles/pokeInfo.css";
import top from "../assets/img/top.png";
import pokeTitle from "../assets/img/pokeTitle.png";

const PokeInfo = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);
  console.log(pokemon);

  return (
    <div>
      {hasError ? (
        <h1>This pokemon is not exists</h1>
      ) : (
        <>
          <img className="poke__bar" src={top} alt="" />
          <img className="poke__title" src={pokeTitle} alt="" />
          <header className={`poke__header bg-${pokemon?.types[0].type.name}`}>
            <img
              className="poke__img"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>
          <section className="poke__body">
            <p className="poke__id">#{pokemon?.id}</p>
            <h3 className={`poke__name color-${pokemon?.types[0].type.name}`}>
              {pokemon?.name}
            </h3>
            <ul className="poke__complexion">
              <li className="stat__name">
                Peso <div className="stat__value">{pokemon?.weight}</div>
              </li>
              <li className="stat__name">
                Altura <div className="stat__value">{pokemon?.height}</div>
              </li>
            </ul>
            <article className="card__description">
              <div className="types__container">
                <h2 className="type__title">Type</h2>
                <ul className="poke__types">
                  {pokemon?.types.map((pokeType, index) => (
                    <li
                      className={`poke__types-specific bg-${
                        pokemon.types[0].type.name
                      } ${index === 1 ? "bg-" + pokeType.type.name : ""}`}
                      key={pokeType.type.url}
                    >
                      {pokeType.type.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="abilities__container">
                <h2 className="ability__title">Abilities</h2>
                <ul className="poke__abilities">
                  {pokemon?.abilities.map((ability) => (
                    <li
                      className="poke__abilities-specific"
                      key={ability.ability.url}
                    >
                      {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="stats__bars-container">
              <h2 className="stats__title">Stats</h2>
              <ul className="poke__stats">
                {pokemon?.stats.map((pokeStat) => (
                  <li className="poke__stats-specific" key={pokeStat.stat.url}>
                    <div className="poke__stats-info">
                      <span className="poke__stats-label">{pokeStat.stat.name.charAt(0).toUpperCase() + pokeStat.stat.name.slice(1)}</span>
                      <span className="poke__stats-value">{pokeStat.base_stat} / 150</span>
                    </div>
                    <progress className="progress__bar" value={pokeStat.base_stat} max="100"></progress>
                  </li>
                ))}
              </ul>
            </article>
            <article className="movements__main-container">
                  <h2 className="movements__title">Movements</h2>
                  <ul className="movements__container">
                    {pokemon?.moves.slice(0, 23).map((move) => (
                      <li className="move__item" key={move.move.url}>{move.move.name}</li>
                    ))
                    }
                  </ul>
            </article>
          </section>
        </>
      )}
    </div>
  );
};

export default PokeInfo;
