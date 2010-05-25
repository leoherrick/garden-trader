class Crop < ActiveRecord::Base
  belongs_to :user
  has_one :food_type
end
