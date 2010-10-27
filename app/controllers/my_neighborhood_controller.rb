
class MyNeighborhoodController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
  layout "gardentrader", :except => ['user_panel', 'neighborhood_panel']

  # The index page shows a user other users in the neighborhood. 
  def index
    @title = 'My Neighborhood'  
  end
  
  def user_panel
    @user = User.find(params[:user_id])
  end

  def neighborhood_panel
    @neighborhood = Neighborhood.find(params[:neighborhood_id])
  end
  
end
