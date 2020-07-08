class MessagesController < ApplicationController
skip_before_action :logged_in?, only: [:create, :index]

    def index 
        messages=Message.all 
        render json: messages.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        @message=Message.new(user_id: params[:user_id], sender_id: params[:sender_id], message: params[:message])
    
        if @message.save
            render json: @message
        else
            render json: { error: 'Message not saved' }
        end
    end 

    private
    def request_params
        params.require(:message).permit(:message, :user_id, :sender_id)
    end
end
