FactoryGirl.define do

  factory :message do
    body {Faker::Name.name }
    image ""
  end
end
