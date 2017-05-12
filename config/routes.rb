Rails.application.routes.draw do
  root 'groups#index'
  devise_for :user
  resources :users, only: [:edit, :update]
  resources :groups, expect: [:destroy, :show] do
    resources :messages, only: [:index]
  end
end
