import axios from "axios"
import { useState } from "react"


const useFetch = url => {

    const [state, setState] = useState()
    const [hasError, setHasError] = useState(false)

    const getData = () => {
        axios.get(url)
        .then(res => {
            setState(res.data)
            setHasError(false)
        })
        .catch(err => {
            setHasError(true)
            console.log(err)
    })
    }

    return [ state, getData, hasError ]
}

export default useFetch