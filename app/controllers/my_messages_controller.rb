class MyMessagesController < ApplicationController
  before_filter :authenticate_user!
end
