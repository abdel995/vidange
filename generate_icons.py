from PIL import Image, ImageDraw, ImageFont
import math

def create_app_icon(size):
    # Create image with RGBA
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Rounded squircle / background container
    # Deep automotive navy-blue / dark slate gradient base
    # We will draw concentric or rounded rectangle
    radius = int(size * 0.22)
    margin = int(size * 0.04)
    
    # Main background rounded rect
    draw.rounded_rectangle(
        [(margin, margin), (size - margin, size - margin)],
        radius=radius,
        fill=(15, 23, 42, 255) # slate-900
    )
    
    # Inner glowing border
    draw.rounded_rectangle(
        [(margin, margin), (size - margin, size - margin)],
        radius=radius,
        outline=(234, 179, 8, 180), # amber/gold accent outline
        width=max(2, int(size * 0.02))
    )
    
    # Subtle inner circle glow
    center_x = size // 2
    center_y = int(size * 0.52)
    glow_r = int(size * 0.32)
    draw.ellipse(
        [(center_x - glow_r, center_y - glow_r), (center_x + glow_r, center_y + glow_r)],
        fill=(30, 41, 59, 255) # slate-800
    )
    
    # Draw stylized Golden Oil Droplet
    # Droplet apex at (center_x, center_y - int(size * 0.22))
    # Droplet base circle at center (center_x, center_y + int(size * 0.04)) with radius drop_r
    drop_r = int(size * 0.16)
    drop_cy = int(size * 0.52)
    drop_top_y = int(size * 0.28)
    
    # Bottom circle of droplet
    draw.ellipse(
        [(center_x - drop_r, drop_cy - drop_r), (center_x + drop_r, drop_cy + drop_r)],
        fill=(245, 158, 11, 255) # amber-500
    )
    
    # Top triangle of droplet
    tangent_x_offset = int(drop_r * 0.95)
    triangle_points = [
        (center_x, drop_top_y),
        (center_x - tangent_x_offset, drop_cy),
        (center_x + tangent_x_offset, drop_cy)
    ]
    draw.polygon(triangle_points, fill=(245, 158, 11, 255))
    
    # Droplet highlight / reflection curve
    hl_r = int(drop_r * 0.5)
    draw.ellipse(
        [(center_x - int(drop_r * 0.6), drop_cy - int(drop_r * 0.5)),
         (center_x - int(drop_r * 0.6) + hl_r, drop_cy - int(drop_r * 0.5) + hl_r)],
        fill=(253, 230, 138, 200) # amber-200
    )
    
    # Small car silhouette or wrench across the bottom
    wrench_w = int(size * 0.44)
    wrench_h = int(size * 0.07)
    wrench_y = int(size * 0.74)
    draw.rounded_rectangle(
        [(center_x - wrench_w // 2, wrench_y - wrench_h // 2),
         (center_x + wrench_w // 2, wrench_y + wrench_h // 2)],
        radius=wrench_h // 2,
        fill=(59, 130, 246, 255) # blue-500
    )
    
    # Two accent dots on wrench bar
    dot_r = int(size * 0.02)
    draw.ellipse(
        [(center_x - wrench_w // 2 + int(size * 0.04) - dot_r, wrench_y - dot_r),
         (center_x - wrench_w // 2 + int(size * 0.04) + dot_r, wrench_y + dot_r)],
        fill=(255, 255, 255, 255)
    )
    draw.ellipse(
        [(center_x + wrench_w // 2 - int(size * 0.04) - dot_r, wrench_y - dot_r),
         (center_x + wrench_w // 2 - int(size * 0.04) + dot_r, wrench_y + dot_r)],
        fill=(255, 255, 255, 255)
    )
    
    return img

# Generate icons
create_app_icon(512).save("icons/icon-512.png", "PNG")
create_app_icon(192).save("icons/icon-192.png", "PNG")
create_app_icon(180).save("icons/apple-touch-icon.png", "PNG")
create_app_icon(64).save("icons/favicon.png", "PNG")
print("Icons successfully created!")
