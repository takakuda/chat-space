Rails.application.routes.draw do
  root 'messages#index'
  resources :messages
  resources :users
  devise_for :user
end
