# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
GardenTrader::Application.initialize!

class Date
  def nifty_date_format
    if self.today?
      "Today"
    elsif (self + 1.day).today?
      "Yesterday"
    else
      self.strftime("%m/%d/%y")
    end
  end
end


class Time
  def nifty_time_format
    if self.today?
      self.strftime("%I:%M %p")
    elsif (self + 1.day).today?
      "Yesterday"
    elsif (self + 2.day).today?
      "2 Days Ago"
    else
      self.strftime("%m/%d/%y")
    end
  end
  def nifty_date_format
    if self.today?
      "Today"
    elsif (self + 1.day).today?
      "Yesterday"
    elsif (self + 2.day).today?
      "2 Days Ago"
    elsif (self - 1.day).today?
      "Tomorrow"
    elsif (self - 2.day).today?
      "In 2 Days"
    else
      self.strftime("%m/%d/%y")
    end
  end
end

