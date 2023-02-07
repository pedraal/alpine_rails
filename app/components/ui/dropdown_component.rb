# frozen_string_literal: true

class Ui::DropdownComponent < ApplicationComponent
  renders_one :trigger
  renders_many :items

  def initialize
    super
    @alpined = true
  end
end
