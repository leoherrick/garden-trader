class AddNeighborhoodIdToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :neighborhood_id, :integer
  end

  def self.down
    remove_column :users, :neighborhood_id
  end
end
