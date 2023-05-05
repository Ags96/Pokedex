import './styles/home.css'
import FormNameUser from '../components/home/FormNameUser'
import homePokeBar from '../assets/img/homePokeBar.png'
import pokeTitle from '../assets/img/pokeTitle.png'


const Home = () => {

  return (
    <div className='home__presentation'>
        <img className='title__img' src={pokeTitle} alt="" />
        <h2 className='greeting__trainer'>Hi Trainer!</h2>
        <p>please, give us your trainer name to start.</p>
        <FormNameUser/>
        <img className='bottom__img' src={homePokeBar} alt="" />
    </div>
  )
}

export default Home