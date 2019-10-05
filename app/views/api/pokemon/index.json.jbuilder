@pokemons.each do |pokemon|
    json.set! pokemon.id do
        json.extract! pokemon, :id, :name
        json.image_url pokemon.image_url
        json.moves []
        json.item_ids []
    end
end