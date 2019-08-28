export const fetchAllPokemon = () => (
    $.ajax({
        url: "/api/pokemon",
        method: "GET"
    })
);

export const fetchSinglePokemon = (id) => (
    $.ajax({
        url: `/api/pokemon/${id}`,
        method: 'GET'
    })
);

export const createSinglePokemon = (pokemon) => (
    $.ajax({
        url: '/api/pokemon',
        method: 'POST',
        data: {pokemon}
    })
);

export const createSingleLocation = (location, pokemonId) => (
    $.ajax({
        url: `/api/pokemon/${pokemonId}/location`,
        method: 'POST',
        data: {location}
    })
);