require 'spec_helper'
require 'rails_helper'
describe Message do
  describe '#create' do
    let(:message){build(:message, body: "") }
    it "空欄ではメッセージが送信できないこと" do
      message.valid?
      expect(message.errors[:body]).to include("本文を入力してください。")
    end

    it "メッセージが入力されていれば送信できること" do
      message = build(:message)
      message.valid?
      expect(message).to be_valid
    end

  end
end
