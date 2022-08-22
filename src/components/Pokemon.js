import { Fragment, React, useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import PokemonDisplay from "./pokemonDisplay"
export default function Pokemon(props) {
    let [search, setSearch] = useState('pikachu')
    let [message, setMessage] = useState('search for pokemon')
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
                    console.log('not found')
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
                <h1>{search}</h1>
                <img src={data.sprites} />
                <PokemonDisplay />



            </div>
        </>
    )
}