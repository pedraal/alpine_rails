# == Schema Information
#
# Table name: pets
#
#  id         :bigint           not null, primary key
#  animal     :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  person_id  :integer
#
class Pet < ApplicationRecord
  belongs_to :person

  enum animal: { dog: "dog", cat: "cat", bird: "bird", fish: "fish", other: "other" }
end
