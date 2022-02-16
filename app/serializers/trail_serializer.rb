class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image_url, :avg_rating
end
