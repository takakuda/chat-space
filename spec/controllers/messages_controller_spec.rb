require 'rails_helper'

describe MessagesController, type: :controller do
  let(:user) { create(:user) }
  let(:group) {create(:group)}
  let(:message) {create(:message)}
  describe 'GET #index' do

    before do
      login_user user
      get :index, group_id: group
    end

    it "インスタンス変数の値は正しいものか" do
      expect(assigns(:message)).to be_a_new (Message)
    end

    it "正しい画面が表示されているか" do
      expect(response).to render_template :index
    end
  end
end
