class MyGardenController < ApplicationController
  before_filter :authenticate_user!
end
