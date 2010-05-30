class MyMailController < ApplicationController
  before_filter :authenticate_user!
end
