import {useState} from "react"
import {fetchLanguages} from "../utils/movies-api"

export function useLanguages () {
    const [languages, setLanguages] = useState([])
    const [isLoading, setLoading] = useState(false);

    const getLanguages = async () => {
        setLoading(true)
        const {data} = await fetchLanguages()
        setLanguages(data)
        setLoading(false)
    }

    return {languages, isLoading, getLanguages}
}