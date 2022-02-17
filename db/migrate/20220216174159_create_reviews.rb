class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :summary
      t.text :text
      t.float :rating

      # Relations
      t.belongs_to :user
      t.belongs_to :trail

      t.timestamps
    end
  end
end
