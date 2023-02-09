Rails.application.routes.draw do
  draw :development

  root 'home#index'

  resources :people
  resources :pets
end
