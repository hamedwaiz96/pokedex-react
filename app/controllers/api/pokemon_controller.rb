class Api::PokemonController < ApplicationController

    def index
        @pokemons = Pokemon.all
        render :index
    end

    def create 
        @pokemon = Pokemon.new(pokemon_params)
        if @pokemon.save
            render :show
        else
            render json: @pokemon.errors.full_messages, status: 422
        end
    end
    
    def show
        @pokemon = Pokemon.find(params[:id])
        render :show
    end

    def pokemon_params
        params.require(:pokemon).permit(:image_url, :name, :attack, :defense, :poke_type, moves: [])
    end

end