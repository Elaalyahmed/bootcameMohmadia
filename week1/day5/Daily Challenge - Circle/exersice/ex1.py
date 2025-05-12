import math
class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be specified")
    
    @property
    def diameter(self):
        return self.radius * 2
    
    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def __str__(self):
        return f"Circle with radius: {self.radius:.2f}, diameter: {self.diameter:.2f}, area: {self.area():.2f}"
    
    def __repr__(self):
        return f"Circle(radius={self.radius})"
    
    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)
    
    def __lt__(self, other):
        return self.radius < other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius
    
    def __le__(self, other):
        return self.radius <= other.radius
    
    def draw(self, turtle_instance, x, y):
        turtle_instance.penup()
        turtle_instance.goto(x, y - self.radius)
        turtle_instance.pendown()
        turtle_instance.circle(self.radius)
        turtle_instance.penup()
        turtle_instance.goto(x, y)
        turtle_instance.write(f"r={self.radius:.1f}", align="center")


if __name__ == "__main__":
    c1 = Circle(radius=5)
    c2 = Circle(diameter=10)
    c3 = Circle(radius=7)
    c4 = Circle(radius=3)
    
    print(c1)  
    print(f"Area of c1: {c1.area():.2f}")
    
    c5 = c1 + c2
    print(f"Sum of c1 and c2: {c5}")
    
    print(f"Is c1 bigger than c3? {c1 > c3}")
    print(f"Are c1 and c2 equal? {c1 == c2}")
    
    circles = [c1, c2, c3, c4]
    sorted_circles = sorted(circles)
    print("\nSorted circles:")
    for circle in sorted_circles:
        print(circle)
    
    