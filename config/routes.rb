Rails.application.routes.draw do
  devise_for :user
  root 'groups#index'
  resources :groups, expect: [:destroy, :show, :index] do
    resources :messages, only: [:index]
  end
end
