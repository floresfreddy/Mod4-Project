class TermsController < ActionController::API
    # skip_before_action :logged_in?, only: [:create]
    
    # Sign Up
    def create
      terms = Term.new(term_params)
    end

    def index 
      @terms = Term.all
      render json: @terms
    end 

    def update 
        term=Term.all.find(params[:id])
        term.update[term_params]
    end 
  
    private
  
    def term_params
      params.permit(:terms, :user_id)
    end
  end
  