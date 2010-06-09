class MyProfileController < ApplicationController
  layout "gardentrader"
  
  def index
    @name = current_user
  end

end
