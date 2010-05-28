
class MyNeighborhoodController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
  layout "gardentrader"

  def index
    @title = 'My Neighborhood'  
  end
  
end
