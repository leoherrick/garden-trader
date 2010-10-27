require 'spec_helper' 

describe Address do 

  it "is valid if passed city, street, state, and zip" do
    Address.new(
      :city => "Alameda", 
      :street_address => "123 Main",
      :state => "CA",
      :zip => "93423").
      should be_valid
  end
  
  it "is invalid if passed nothing" do
    Address.new.should_not be_valid  
  end
end
