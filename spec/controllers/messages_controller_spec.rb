require 'rails_helper'

describe MessagesController, type: :controller do
  let(:user) { create(:user) }
  let(:group) {create(:group)}
  describe 'GET #index' do

    before do
      login_user user
      get :index, group_id: group
    end

    it "renders the :index template" do
      expect(response).to render_template :index
    end
  end
end
