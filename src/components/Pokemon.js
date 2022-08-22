import { Fragment, React, useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import PokemonDisplay from "./pokemonDisplay"
export default function Pokemon(props) {
    let [search, setSearch] = useState('pikachu')
    let [message, setMessage] = useState('')
    let [data, setData] = useState([])

    useEffect(() => {
        if (search) {
            const fetchData = async () => {
                document.title = `${search} `
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
                const resData = await response.json()
                if (resData) {
                    setData(resData)
                } else {
                    setMessage('not found')
                }
            }
            fetchData()

        }

    }, [search])

    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    console.log(data)

    return (
        <>
            <div>
                <SearchBar handleSearch={handleSearch} />
                {message}
                <h1>Name: {search}</h1>
                <img src={data.sprites.front_default} alt={data.name} />
                <h2>Height: {data.height}</h2>
                <h2>ID: {data.id}</h2>
                <h2>Weight: {data.weight} </h2>





            </div>
        </>
    )
}