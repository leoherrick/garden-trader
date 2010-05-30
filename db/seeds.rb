# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#   
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Major.create(:name => 'Daley', :city => cities.first)

## clear tables
  User.all.each{|u| u.destroy}
  puts "cleared all users"
  Address.all.each{|u| u.destroy}
  puts "cleared all addresses"
  Crop.all.each{|u| u.destroy}
  puts "cleared all crops"
  
  
@user1 = User.create(:email => "leoherrick@gmail.com", :password => "test12", :username => "Leo Herrick")
@user2 = User.create(:email => "test1@test.com", :password => "test12")
@user3 = User.create(:email => "test2@test.com", :password => "test12")
@user4 = User.create(:email => "test3@test.com", :password => "test12")
@user5 = User.create(:email => "test4@test.com", :password => "test12")
@user6 = User.create(:email => "test5@test.com", :password => "test12")
@user7 = User.create(:email => "test6@test.com", :password => "test12")
   
    
  @user1.create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5425 College Ave."
  )
  @user1.crops.create(
    :food_type_id => FoodType.find_by_name("Apples").id,
    :planted_date => "1/1/10",
    :quantity => "12 Bags"
  )
  @user1.update_attribute(:username, "Leo Herrick")
  @user1.update_attribute(:neighborhood, Neighborhood.find_by_name("Shafter") )
  puts "added " + @user1.username
   
  @user2.create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5400 Lawton Ave."
  )  
  @user2.update_attribute(:username, "The Hendersons")
  @user2.update_attribute(:neighborhood, Neighborhood.find_by_name("Shafter") )
  puts "added " + @user2.username
  
  @user3.create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5300 College Ave."
  )  
  @user3.update_attribute(:username, "The O'Leerys")
  @user3.update_attribute(:neighborhood, Neighborhood.find_by_name("Rockridge") )
  puts "added " + @user3.username
  
  @user4.create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5700 College Ave."
  )  
  @user4.update_attribute(:username, "Mary Hampton")
  @user4.update_attribute(:neighborhood, Neighborhood.find_by_name("Rockridge") )
  puts "added " + @user4.username
  

  @user5.create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5320 Lawton Ave."
  )  
  @user5.update_attribute(:username, "The Johnsons")
  @user5.update_attribute(:neighborhood, Neighborhood.find_by_name("Shafter") )
  puts "added " + @user5.username
  
  

  @user6.create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5425 Clifton Ave."
  )  
  @user6.update_attribute(:username, "Rick Smith")
  @user6.update_attribute(:neighborhood, Neighborhood.find_by_name("Shafter") )
  puts "added " + @user6.username

  @user7.create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5800 Ocean View Dr."
  )  
  @user7.update_attribute(:username, "Tom and Benji")
  @user7.update_attribute(:neighborhood, Neighborhood.find_by_name("Rockridge") )
  puts "added " + @user7.username



