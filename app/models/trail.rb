class Trail < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  has_many :favorites
 


  def average_rating
    self.reviews.average(:rating).to_f
  end
end
