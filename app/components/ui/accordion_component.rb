# frozen_string_literal: true

class Ui::AccordionComponent < ApplicationComponent
  renders_one :header
  renders_one :body

  def initialize
    super
    @alpined = true
  end
end
