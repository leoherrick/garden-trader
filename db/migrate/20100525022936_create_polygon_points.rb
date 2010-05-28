class CreatePolygonPoints < ActiveRecord::Migration
  def self.up
    create_table :polygon_points do |t|
      t.integer :neighborhood_id
      t.float :latitude
      t.float :longitude
    end
  end

  def self.down
    drop_table :polygon_points
  end
end
