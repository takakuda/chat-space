require 'rails_helper'

describe MessagesController, type: :controller do
  let(:user) { create(:user) }
  let(:group) {create(:group)}
  let(:message) {create(:message)}
  let(:params) { { message: attributes_for(:message), group_id: group.id, user_id: user.id } }
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

  describe 'POST #create' do
    let(:message_params) do
      {group_id: group.id,
        message: {
          body: "test message"
          }
        }
        end
      let(:message_empty) do
        {
          group_id: group,
          message: {
            body: ""
          }
        }
      end
    context '有効なパラメータの場合' do
      before do
      login_user user
    end
      it '保存できる場合' do
        expect{
          post :create, params: params}.to change( Message, :count ).by(1)
      end
      it '保存が成功した後の画面に移動するか' do
        post :create, params: params
        expect(response).to redirect_to 'http://test.host/'
      end
    end
    context '無効なパラメータの場合' do
      before do
      login_user user
    end
    it '保存に失敗した場合' do
      expect { post :create, params: message_empty }.to change(Message, :count).by(0)
    end
    it '保存が失敗して、元の画面に移動するか' do
      post :create, params: message_empty
      expect(response).to render_template :index
    end
  end
  end
end
