import { Fragment, React, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonDisplay from "./pokemonDisplay";
import Card from 'react-bootstrap/Card';

export default function Pokemon(props) {
    let [search, setSearch] = useState('pikachu')
    let [message, setMessage] = useState('')
    let [data, setData] = useState({})

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
                <div>

                </div>
                {/* {data.moves?.map(item => item?.move?.name)} */}

                <Card style={{ width: '18rem', border: '1px solid red' }}>
                    <Card.Img style={{ border: '1px solid red' }} variant="top" src={data.sprites?.front_default} alt={data.name} />
                    <Card.Body>
                        <Card.Title>{search}</Card.Title>

                        <Card.Text>
                            Height: {data.height}<br />
                            ID: {data.id}<br />
                            Weight: {data.weight}<br />
                            Types: {data.types?.map((item, i) => <li key={i}>{item?.type?.name}</li>)}
                        </Card.Text>

                    </Card.Body>
                </Card>


            </div>

        </>
    )
}