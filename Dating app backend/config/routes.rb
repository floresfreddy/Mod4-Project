Rails.application.routes.draw do
  resources :messages
  resources :terms, only: [:create, :index, :update]
  # localhost:3000/api/v1/login
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]

      post "/login", to: "auth#create"
    end
  end
end
