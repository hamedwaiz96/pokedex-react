class Location < ApplicationRecord
    validates :lat, :lng, :pokemon_id, presence: true

    belongs_to :pokemon
end