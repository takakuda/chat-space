Rails.application.routes.draw do
  devise_for :user
  root 'messages#index'
  resources :messages
  resources :groups
end
