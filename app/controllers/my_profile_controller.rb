class MyProfileController < ApplicationController
  layout "gardentrader"
  before_filter :authenticate_user!
  
  def index
  end

end
