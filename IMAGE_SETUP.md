# Image Setup Guide

## Required Images

To complete the design, please add the following images to the `/public/images/` directory:

### Hero Slider Images (Homepage)
1. **aircraft.jpg** - Aircraft in flight (for slide 1: Gateway to Pakistan's Aviation & Defence)
2. **drone.jpg** - Military/defence drone (for slide 2: Bid & Proposal Management)
3. **naval-ship.jpg** - Naval ship (for slide 3: Technical Installation & Commissioning)
4. **aircraft-maintenance.jpg** - Aircraft maintenance scene (for slide 4: Aviation MRO)

### Services Page Images
1. **aircraft.jpg** - For Bid and Proposal Management service
2. **aircraft.jpg** - For Marketing & Business Development service (or use a different business image)
3. **drone.jpg** - For Installation & Commissioning service
4. **aircraft-maintenance.jpg** - For Aviation MRO Services
5. **naval-ship.jpg** - For Operations & Logistics service

### About Page Images
1. **aircraft.jpg** - For the "Our Expertise" section

## Image Specifications

### Recommended Dimensions:
- **Hero Slider Images**: 1200x800px (3:2 aspect ratio)
- **Service Card Images**: 800x600px (4:3 aspect ratio)
- **About Page Images**: 1000x1000px (1:1 aspect ratio)

### Image Format:
- Use JPG or WebP format for best performance
- Optimize images before uploading (recommended tools: TinyPNG, Squoosh)
- Keep file sizes under 500KB for optimal loading

### Image Content Suggestions:
- **Aircraft**: Commercial or military aircraft, preferably in flight or on runway
- **Drones**: Military or commercial drones, preferably in operation
- **Naval Ships**: Military naval vessels or ships
- **Aircraft Maintenance**: Aircraft in hangar or maintenance facility
- **Business/Operations**: Professional business settings, logistics operations

## Adding Images

1. Create the images directory (already created):
   ```bash
   mkdir -p public/images
   ```

2. Add your images to `/public/images/` with the exact filenames listed above

3. The images will automatically be used in the components

## Fallback Behavior

If images are not found, they will gracefully hide without breaking the layout. The glassmorphism effects and other design elements will still work perfectly.

## Alternative: Using Placeholder Images

If you don't have images ready yet, you can use placeholder services:
- Unsplash: `https://images.unsplash.com/photo-[id]?w=1200&h=800&fit=crop`
- Placeholder.com: `https://via.placeholder.com/1200x800`

Just replace the image paths in the code with these URLs temporarily.

