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
require "test_helper"

class PetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
