Rails.application.routes.draw do
  devise_for :user
  root 'messages#index'
  resources :groups do
    resources :messages
  end
end
