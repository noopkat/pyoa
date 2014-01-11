from printer import ThermalPrinter
import Image, ImageDraw

p = ThermalPrinter()
i = Image.open("example-lammas.png")
data = list(i.getdata())
w, h = i.size
p.print_bitmap(data, w, h)