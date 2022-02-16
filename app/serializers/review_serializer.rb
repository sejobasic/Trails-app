class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :rating, :user_id, :trail_id
end
