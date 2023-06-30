Rails.application.routes.draw do
  get 'contact/index'
  get 'hero/index'
  get 'about/index'
  get 'projects/index'
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
