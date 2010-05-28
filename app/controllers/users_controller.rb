class UsersController < ActionController::Base
  protect_from_forgery
  
  def show
    @user = User.find(params[:id])
    render :json => @user.to_json
  end

end
