class UsersController < ActionController::Base
  protect_from_forgery
  
  def show
    @user = User.find(params[:id])
    @address = @user.address
    
    render :json => {
      :username => @user.username,
      :email => @user.email,
      :address =>{
        :street_address => @address.street_address,
        :city => @address.city,
        :zip => @address.zip
      }
    }.to_json
  end

end
