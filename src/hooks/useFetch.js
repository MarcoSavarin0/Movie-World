import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const getFetch = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setState({
                    data,
                    isLoading: false,
                    errors: null
                })
            })
            .catch(error => {
                setState({
                    data: null,
                    isLoading: false,
                    errors: error
                })
            })
    }

    useEffect(() => {
        if (!url) return
        getFetch()
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        errors: state.errors
    }   
}
