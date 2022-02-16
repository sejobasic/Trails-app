class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :city
      t.string :state
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
