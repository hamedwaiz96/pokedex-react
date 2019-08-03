export const fetchAllPokemon = () => (
    $.ajax({
        url: "/api/pokemon",
        method: "GET"
    })
)

export const fetchSinglePokemon = (id) => (
    $.ajax({
        url: `/api/pokemon/${id}`,
        method: 'GET'
    })
)