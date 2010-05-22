module ApplicationHelper
  def active_tab?(link)
    if link == params[:controller]
    "class=active"
     end
  end
end
