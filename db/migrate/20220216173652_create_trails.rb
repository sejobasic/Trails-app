class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :location
      t.string :image_url
      t.float :avg_rating

      t.timestamps
    end
  end
end
