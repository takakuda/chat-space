require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    config.generators do |g|
      config.i18n.default_locale = :ja
      g.javascripts false
      g.helper false
      g.test_framework false
    end
  end
end
