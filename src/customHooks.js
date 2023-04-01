import axios from 'axios'
import {useState,useEffect} from 'react'
export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])
    
    const create = async newObject => {
        const response = await axios.post(baseUrl, newObject)
        setResources([...resources,response.data])
    }
    useEffect( () => {
        axios.get(baseUrl).then(response =>setResources([...response.data]))
      },[baseUrl])
    const service = {
      create
    }
    return [
      resources, service
    ]
  }
export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
  }  