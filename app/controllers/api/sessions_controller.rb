class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if login(@user)
            render 'api/users/show'
        else
            render json: "Username / Password doesn't exist" , status: 401
        end
    end

    def destroy
        user = User.find_by(params[:id])
        if user.delete
            render {}
        else 
            render json: "User not logged in", status: 404
        end
    end
end
