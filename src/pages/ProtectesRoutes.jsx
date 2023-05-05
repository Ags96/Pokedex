import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectesRouts = () => {

  const { trainerName } = useSelector(state => state)


    if( trainerName.length >= 3){
      return <Outlet/>
    }else{
      return <Navigate to='/' />
    }
  
}

export default ProtectesRouts