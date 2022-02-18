class User < ApplicationRecord
  has_secure_password
  has_many :reviews
  has_many :trails, through: :reviews 

  has_many :favorites
  # has_many :favorite_trails, through: :favorites, class_name: "Trail"
  
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
end
