class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user 
  before_action :set_post, only: [:show, :update, :destroy]
  
  def index
    render json: User.posts
  end
  
  def create
    post = @user.post.new(post_params)
      if post.save
        render json: post
      else 
        render json: @post.errors, status: 422
      end

  def update
    if @post.update(post_params)
      render json: @post
    else 
      render json: @post.errors, status: 422 
    end
  end

  end 

  def destroy
    @post.destroy 
  end

  private 

    def set_user
      @user = User.find(params[:user_id])
    end 

    def set_post
      @post = Post.find(params[:id])
    end 

    def post_params
      params.require(:post).permit(:comment)
    end 
end
