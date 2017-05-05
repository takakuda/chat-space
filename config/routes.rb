Rails.application.routes.draw do
  root 'messages#index'
  resources :messages
  devise_for :user
end
