class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :pokemon_id, null: false
      t.timestamps
    end
    add_index :locations, :pokemon_id
  end
end
