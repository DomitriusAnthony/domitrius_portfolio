Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
  get "/portfolio" => "home#portfolio"
  get "/contact" => "home#contact"
end
