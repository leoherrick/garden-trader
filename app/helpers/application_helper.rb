module ApplicationHelper
  
  def active_tab?(link)
    if link == params[:controller]
    "active"
     end
  end 
   
end
