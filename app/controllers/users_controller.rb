class UsersController < ActionController::Base
  protect_from_forgery
  
  def show
    @user = User.find(params[:id])
    @address = @user.address
    @crops = @user.crops
    @neighborhood = @user.neighborhood
    
    render :json => {
      :username => @user.username,
      :email => @user.email,
      :address =>{
        :street_address => @address.street_address,
        :city => @address.city,
        :zip => @address.zip
      },
      :number_of_crops => @crops.length,
      :crops => @crops,
      :neighborhood => @neighborhood.name
    }.to_json
  end

end
