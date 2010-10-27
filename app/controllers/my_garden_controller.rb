class MyGardenController < ApplicationController
  
  def index
    @crops = current_user.crops
  end
  
end
