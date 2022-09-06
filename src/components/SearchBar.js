
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')
    const [search, setSearch] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9999')
            .then((response) => response.json())
            .then((json) => setSearch(json.results))
    }, [])


    let pokemonItem = document.getElementById('pokemon-search')

    return (


        <Stack sx={{ width: 300 }}>

            <form onSubmit={(e) => props.handleSearch(e, pokemonItem.value)}>



                <Autocomplete id='pokemon-search'
                    getOptionLabel={(search) => `${search.name}`}
                    options={search}
                    sx={{ width: 300 }}
                    isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                    }
                    noOptionsText={'Not Found'}
                    renderOption={(props, search, i) => (
                        <Box componebt='li' {...props} key={search.id}>
                            {search.name}
                        </Box>

                    )}
                    renderInput={(params) => <TextField {...params} label='search for pokemon' />} /><input type="submit" />

            </form >

        </Stack>
    )
}

export default SearchBar
