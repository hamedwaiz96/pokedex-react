json.pokemon do
    json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
    json.image_url @pokemon.image_url
end
json.items do
    @pokemon.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
        end
    end
end
json.locations do
    @pokemon.locations.each do |location|
        json.set! location.id do
            json.extract! location, :id, :lat, :lng, :pokemon_id
        end
    end
end