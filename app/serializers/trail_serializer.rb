class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description, :image_url, :rating, :favorites

  def rating
    self.object.average_rating
  end

  def favorites
    self.object.favorite_count
  end
end
