class Address < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :city, :street_address, :state, :zip,
      :message => "Comon man, you forgot to enter %{attribute}"
end
