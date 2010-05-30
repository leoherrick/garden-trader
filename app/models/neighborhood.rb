class Neighborhood < ActiveRecord::Base
  has_many :polygon_points
  has_many :users
  
  
  def contains_point?(point)
    contains_point = true
    i = -1
    j = polygon_points.size - 1
    while (i += 1) < polygon_points.size
      a_point_on_polygon = polygon_points[i]
      trailing_point_on_polygon = polygon_points[j]
      if point_is_between_the_ys_of_the_line_segment?(point, a_point_on_polygon, trailing_point_on_polygon)
        if ray_crosses_through_line_segment?(point, a_point_on_polygon, trailing_point_on_polygon)
          contains_point = !contains_point
        end
      end
      j = i
    end
    return contains_point
  end

  private

  def point_is_between_the_ys_of_the_line_segment?(point, a_point_on_polygon, trailing_point_on_polygon)
    (a_point_on_polygon.longitude <= point[:latitude] && point[:longitude] < trailing_point_on_polygon.longitude) || 
    (trailing_point_on_polygon.longitude <= point[:longitude] && point[:longitude] < a_point_on_polygon.longitude)
  end

  def ray_crosses_through_line_segment?(point, a_point_on_polygon, trailing_point_on_polygon)
    (point[:latitude] < (trailing_point_on_polygon.latitude - a_point_on_polygon.latitude) * (point[:longitude] - a_point_on_polygon.longitude) / 
               (trailing_point_on_polygon.longitude - a_point_on_polygon.longitude) + a_point_on_polygon.latitude)
  end
  
  
  
end

## This is a point in shafter
## http://maps.google.com/?ie=UTF8&hq=&hnear=5425+College+Ave,+Oakland,+Alameda,+California+94618&ll=37.840566,-122.252469&spn=0.001396,0.00284&z=19

## Neighborhood.all.find{|x| x.contains_point?({:latitude => 37.840566, :longitude => -122.252469})}