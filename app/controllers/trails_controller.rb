class TrailsController < ApplicationController
  def index
    trails = Trail.all
    render json: trails
  end

  def show
    trail = Trail.find(params[:id])
    render json: trail, serializer: TrailReviewSerializer, include: ['reviews.user']
  end

  def favorites
    trails = Trail.joins("INNER JOIN favorites ON trails.id = favorites.trail_id WHERE favorites.user_id = #{@current_user.id}")
    render json: trails
  end
end
