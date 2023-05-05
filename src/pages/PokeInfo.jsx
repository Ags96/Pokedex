import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const PokeInfo = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [ pokemon, getPokemonByName, hasError ] = useFetch(url)

  useEffect(() => {
    getPokemonByName()
  },[name])

  return (
    <div>
      {
        hasError
        ? <h1>This pokemon is not exists</h1>
        : <>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2>{pokemon?.name}</h2>
        </>
      }
    </div>
  )
}

export default PokeInfo