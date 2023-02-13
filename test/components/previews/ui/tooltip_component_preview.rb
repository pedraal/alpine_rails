# frozen_string_literal: true

class Ui::TooltipComponentPreview < ViewComponent::Preview
  include ActionView::Helpers

  def default
    render_with_template
  end
end
