class ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    review = @current_user.reviews.create!(review_params)
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:summary, :text, :rating, :user_id, :trail_id)
  end
end
