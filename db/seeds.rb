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
  
  

[
  {:email => "leoherrick@gmail.com", :password => "test12"},
  {:email => "test1@test.com", :password => "test12"},
  {:email => "test2@test.com", :password => "test12"},
  {:email => "test3@test.com", :password => "test12"},
  {:email => "test4@test.com", :password => "test12"},
  {:email => "test5@test.com", :password => "test12"},
  {:email => "test6@test.com", :password => "test12"}
    ].each do |user|
      User.create(user)
end    
    
  User.find_by_email("leoherrick@gmail.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5425 College Ave."
  )
  User.find_by_email("leoherrick@gmail.com").crops.create(
    :food_type_id => 1,
    :planted_date => "1/1/10",
    :quantity => "12 bushels"
  )
  User.find_by_email("leoherrick@gmail.com").update_attribute(:username, "Leo Herrick")
   
  User.find_by_email("test1@test.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5400 Lawton Ave."
  )  
  User.find_by_email("test1@test.com").update_attribute(:username, "The Hendersons")
  
  User.find_by_email("test2@test.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5300 College Ave."
  )  
  User.find_by_email("test2@test.com").update_attribute(:username, "The O'Leerys")
  
  User.find_by_email("test3@test.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5700 College Ave."
  )  
  User.find_by_email("test3@test.com").update_attribute(:username, "Mary Hampton")

  User.find_by_email("test4@test.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5320 Lawton Ave."
  )  
  User.find_by_email("test4@test.com").update_attribute(:username, "The Johnsons")

  User.find_by_email("test5@test.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5425 Clifton Ave."
  )  
  User.find_by_email("test5@test.com").update_attribute(:username, "Rick Agee")

  User.find_by_email("test6@test.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5800 Ocean View Dr."
  )  
  User.find_by_email("test6@test.com").update_attribute(:username, "Rick Agee")

## crop categories
["Apples",
  "Apricots",
  "Artichokes",
  "Asparagus",
  "Avocados",
  "Basil", 
  "Beans",
  "Beets",
  "Blackberrys",
  "Blueberrys",
  "Broccoli",
  "Brussels sprouts",
  "Cabbage",
  "Carrots",
  "Cauliflower",
  "Celeriac",
  "Celery",
  "Chard",
  "Cherries",
  "Chicory",
  "Chives",
  "Collards",
  "Corn",
  "Cranberrys",
  "Cress",
  "Cucumbers",
  "Dill",
  "Fennel",
  "Figs",
  "Gourds",
  "Grapefruit",
  "Grapes",
  "Kale",
  "Kohlrabi",
  "Lavender",
  "Leek",
  "Lemons",
  "Lettuce",
  "Mandarin",
  "Marjoram",
  "Melons",
  "Mint",
  "Mushrooms",
  "Nectarine",
  "Onions",
  "Oranges",
  "Oregano",
  "Parsley",
  "Parsnips",
  "Peaches",
  "Pears",
  "Peas",
  "Peppers",
  "Plums",
  "Potatoes",
  "Pumpkins",
  "Radicchio",
  "Radishes",
  "Rhubarb",
  "Rosemary",
  "Rutabaga",
  "Sage",
  "Shallots",
  "Spinach",
  "Squash",
  "Strawberrys",
  "Swede",
  "Sweetcorn",
  "Sweet Potatoes",
  "Tarragon",
  "Thyme",
  "Tomatoes",
  "Turnips",
  "Watercress",
  "Watermelon",
  "Yams"].each do |food|
    FoodType.find_or_create_by_name food
  end

