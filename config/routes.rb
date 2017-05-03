Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'
  get 'pages/show'
  get 'pages/index'

  get 'pages/show'

  root 'messages#index'
end
