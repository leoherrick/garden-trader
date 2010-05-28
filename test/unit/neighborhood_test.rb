  require 'test_helper'

class NeighborhoodTest < ActiveSupport::TestCase

  test "test two_neighborhoods loaded" do
    assert (Neighborhood.all.length == 2)
  end

  test "point is in shafter?" do
    @shafter = Neighborhood.find_by_name("Shafter")
    assert ( @shafter.contains_point?({:latitude => 37.840566, :longitude => -122.252469}) )
  end
  
end
