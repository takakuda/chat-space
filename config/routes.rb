Rails.application.routes.draw do
  devise_for :user
  root 'home#index'
  root 'messages#index'
  resources :messages
  resources :users
end
