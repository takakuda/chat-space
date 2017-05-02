Rails.application.routes.draw do
  root 'messages#index'
  resource :users
end
