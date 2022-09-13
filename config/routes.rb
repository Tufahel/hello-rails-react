Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "static#index"
  namespace :api, defaults: {format: 'json'} do 
    resources :greetings, only:[:index]
  end
end
