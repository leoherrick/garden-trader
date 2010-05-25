class CreateCrops < ActiveRecord::Migration
  def self.up
    create_table :crops do |t|
      t.integer :user_id
      t.integer :food_type_id
      t.date :planted_date
      t.string :quantity
      t.date :harvest_date

      t.timestamps
    end
  end

  def self.down
    drop_table :crops
  end
end
