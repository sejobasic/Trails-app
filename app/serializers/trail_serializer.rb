class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description, :image_url, :avg_rating

  def avg_rating
    self.object.average_rating
  end
end
