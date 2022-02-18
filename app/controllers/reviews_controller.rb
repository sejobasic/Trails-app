class ReviewsController < ApplicationController
  
  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    render json: find_review, status: :ok
  end

  def create
    review = @current_user.reviews.create!(review_params)
    render json: review, status: :created
  end

  def destroy
    review = find_review
    review.destroy!
    head :no_content
end

  private

  def review_params
    params.permit(:summary, :text, :rating, :user_id, :trail_id)
  end


  def find_review
    Review.find(params[:id])
end
end
