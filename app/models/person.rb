# == Schema Information
#
# Table name: people
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Person < ApplicationRecord
  has_many :pets, dependent: :destroy

  accepts_nested_attributes_for :pets, allow_destroy: true
end
