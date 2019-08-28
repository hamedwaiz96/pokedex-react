class Api::LocationController < ApplicationController
    
    def create
        @location = Location.new(location_params)
        if @location.save
            render :show
        else    
            render json: @location.errors.full_messages, status: 422
        end
    end

    def location_params
        params.require(:location).permit(:pokemon_id, :lat, :lng)
    end
end
