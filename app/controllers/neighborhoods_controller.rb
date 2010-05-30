class NeighborhoodsController < ActionController::Base
  protect_from_forgery
  
  def show
    @neighborhood = Neighborhood.find(params[:id])
    render :json => @neighborhood.to_json
  end
end