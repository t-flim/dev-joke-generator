import { useState, useEffect } from "react";
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData(url)
    }, [url])

    const fetchData = async(url) => {
        setIsLoading(true)
        try {
            const res = await axios.get(url)
            const data = await res?.data

            setData(data)
            setIsLoading(false)
        } catch(err) {
            setError(err)
            setIsLoading(false)
        }
    }

    return { data, isLoading, error, fetchData }
}

export default useFetch