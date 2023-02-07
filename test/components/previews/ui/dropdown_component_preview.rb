# frozen_string_literal: true

class Ui::DropdownComponentPreview < ViewComponent::Preview
  def default
    render Ui::DropdownComponent.new do |dropdown|
      dropdown.with_trigger { "Dropdown" }
      dropdown.with_item { "Item 1" }
      dropdown.with_item { "Item 2" }
      dropdown.with_item { "Item 3" }
    end
  end
end
