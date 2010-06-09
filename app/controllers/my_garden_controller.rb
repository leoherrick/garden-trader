class MyGardenController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    @crops = current_user.crops
  end
  
end
