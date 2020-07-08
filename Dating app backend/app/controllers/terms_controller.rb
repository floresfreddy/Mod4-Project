class TermsController < ActionController::API
    # skip_before_action :logged_in?, only: [:create]
    
    # Sign Up
    def create
      username = term_params['username']
      user = User.all.find_by(username: username)

      terms = term_params['terms'].join(' ')

      user.terms.destroy_all

      term = Term.new(terms: terms, user_id: user.id)

      term.save
    end

    def index 
      @terms = Term.all
      render json: @terms, :only=>[:id,:terms,:user_id]
    end 

    def update 
        term=Term.all.find(params[:id])
        term.update[term_params]
    end 
  
    private
  
    def term_params
      params.permit(:username, :terms=>[])
    end
  end
  