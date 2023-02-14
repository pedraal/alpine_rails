class ApplicationComponent < ViewComponent::Base
  def base_attributes
    @alpined ? alpine_attributes : {}
  end

  def alpine_attributes
    {
      'x-ignore': "",
      'ax-load':  "",
      'x-data':   alpine_identifier
    }
  end

  def alpine_identifier
    self.class.to_s.underscore.gsub("/", "__").gsub("_component", "")
  end
end
