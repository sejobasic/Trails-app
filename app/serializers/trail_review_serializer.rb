class TrailReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description, :image_url, :rating

  def rating
    self.object.average_rating
  end

  has_many :reviews
end
