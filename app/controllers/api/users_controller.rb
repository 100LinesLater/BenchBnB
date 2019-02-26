class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            render #page we want to go to
        else
            render json: @user.errors.full_messages , status: 401
            render #page we want to direct to
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
