class User < ApplicationRecord
  has_secure_password
  has_many :reviews
  has_many :trails, through: :reviews 

  has_many :favorites
  



  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
end
