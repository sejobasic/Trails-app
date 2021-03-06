class Review < ApplicationRecord
  belongs_to :user
  belongs_to :trail

  validates :text, length: { minimum: 5 }
  validates :rating, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
end
