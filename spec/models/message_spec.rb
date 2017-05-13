require 'spec_helper'
require 'rails_helper'
describe Message do
  describe '#create' do
    let(:message) { FactoryGirl.build(:message)}
    it "空欄ではメッセージが送信できないこと" do
      message = build(:message, body: "")
      message.valid?
      expect(message.errors[:body]).to include("本文を入力してください。")
    end

    it "メッセージが入力されていれば送信できること" do
      message.valid?
      expect(message).to be_valid
    end

  end
end
