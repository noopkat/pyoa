from printer import ThermalPrinter
import Image, ImageDraw

p = ThermalPrinter()

# bitmap
# i = Image.open("example-lammas.png")
# data = list(i.getdata())
# w, h = i.size
# p.print_bitmap(data, w, h)

# text
p.print_text(self, "oh hello there! Meow.")