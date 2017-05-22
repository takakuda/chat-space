Rails.application.routes.draw do
  root 'groups#index'
  devise_for :user
  resources :users, only: [:edit, :update]
  resources :groups, except: [:destroy, :show] do
    collection do
      get 'search'
    end
    resources :messages, only: [:index, :create]
  end
end
