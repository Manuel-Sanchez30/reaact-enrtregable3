import axios from "axios"
import { useState } from "react"


const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()

    //READ

    const getApi = (path) =>{

        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then( res => setInfoApi(res.data) )
            .catch(err => console.error(err))

    }

    //CREATE

    const createNewRegister = (path, data)=>{
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setInfoApi( [...infoApi, res.data] )
            })
            .catch(err => console.error(err))

    }

    //DELETE

    const deleteReister = (path, id)=>{
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res=> {
                console.log(res.data)
                const infoApiFiltered = infoApi.filter(element => element.id !== id )
                setInfoApi(infoApiFiltered)
            })
            .catch(err=> console.error(err))
    } 

    //UPDATE

    const updateRegister = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.put(url, data)
            .then(res => {
                console.log(res.data)
                const infoApiUpdate = infoApi.map(element =>{
                    if(id === element.id) {
                        return data
                    }else{
                        return element
                    }                    
                })
                setInfoApi(infoApiUpdate)
            })
            .catch(err => console.log(err))
    }


    return [ infoApi, getApi, createNewRegister, deleteReister, updateRegister ]

}

export default useFetch