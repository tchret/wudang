module MetaHelper
  def meta_description
    data.site.baseline
  end

  def meta_image
    # path = image_path('meta.png')
  end

  def meta_page_title
    data.site.name
  end

  def meta_site_name
    data.site.name
  end

  def meta_title
    data.site.name
  end

  def meta_twitter
    "@#{data.site.twitter}"
  end

  def meta_url
    'withsquad.com'
  end
end
