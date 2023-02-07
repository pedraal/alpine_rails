# frozen_string_literal: true

class Ui::AccordionComponentPreview < ViewComponent::Preview
  def default
    render Ui::AccordionComponent.new do |accordion|
      accordion.header { "Header" }
      accordion.body { "Tempor excepteur velit velit consequat do consectetur labore anim sunt laborum magna est ea. Ullamco nulla eiusmod nisi proident in ex aliqua ullamco mollit ex do cillum est cupidatat excepteur. Reprehenderit esse quis esse occaecat Lorem. Nulla excepteur dolor magna sunt mollit aliqua enim sit fugiat culpa excepteur eiusmod nisi nulla amet. Minim elit officia est do consectetur quis nostrud consequat voluptate. In laboris ipsum minim id id velit ea est non. Irure sint minim anim et nulla veniam eu excepteur duis dolor occaecat elit velit." }
    end
  end
end
