Rails.application.routes.draw do
  get 'pages/index'

  get 'pages/show'

  root 'messages#index'
end
