# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#   
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Major.create(:name => 'Daley', :city => cities.first)

## starter users
  User.all.each{|u| u.destroy}
[{:email => "leoherrick@gmail.com", :password => "test12"},
    {:email => "test1@test.com", :password => "test12"},
    {:email => "test2@test.com", :password => "test12"}].each do |user|
     User.find_or_create_by_email(user) 
end    
    
  User.find_by_email("leoherrick@gmail.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5425 College Ave."
  )  
  User.find_by_email("test1@test.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5400 Lawton Ave."
  )  
  User.find_by_email("test2@test.com").create_address(
    :state => "CA",
    :city => "Oakland",
    :zip => "94618",
    :street_address => "5300 College Ave."
  )  

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

