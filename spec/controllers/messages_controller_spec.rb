require 'spec_helper'
require 'rails_helper'

describe MessagesController, type: :controller do
  describe 'GET #index' do
    it "renders the :index template" do
      get :index, group_id: 1
      expect(response).to render_template :index
    end
  end
end
