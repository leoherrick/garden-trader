require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "create_user" do
    a = User.create(:email => "testusername@test.com", :password => "test12")
    a.update_attribute(:username, "Leo Herrick")
    assert (a.username == "Leo Herrick")
  end
end
