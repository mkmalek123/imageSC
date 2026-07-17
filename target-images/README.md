# How to Create Target Images (.mind file)

To make this AR experience work with your own images, you need to compile them into a special `.mind` file that the MindAR tracking engine can understand.

## 1. Prepare Your Images
You need 3 target images (one for the image overlay, one for the video, and one for the 3D model).
*   **Good Targets:** High contrast, lots of details/edges, asymmetrical (e.g., a detailed painting, a complex logo, a printed photo).
*   **Bad Targets:** Solid colors, gradients, simple shapes, blurry images, or repeating patterns.

## 2. Compile the `.mind` File
1. Go to the official **[MindAR Target Compiler Tool](https://hiukim.github.io/mind-ar-js-doc/tools/compile/)**.
2. Drag and drop your **3 target images** into the tool. **Order matters!**
   *   **Image 1 (Index 0):** This will trigger the Image Overlay.
   *   **Image 2 (Index 1):** This will trigger the Video Overlay.
   *   **Image 3 (Index 2):** This will trigger the 3D Model.
3. Click **Start** to process the images.
4. Once finished, click **Download** to save your `targets.mind` file.

## 3. Update the App
1. Move the downloaded `targets.mind` file into this project.
2. Open `ar.html`.
3. Locate the `<a-scene>` tag.
4. Update the `mindar-image` attribute to point to your new file. For example:
   ```html
   <a-scene mindar-image="imageTargetSrc: ./path/to/your/targets.mind;">
   ```
5. Update the `<a-assets>` section in `ar.html` with your own image, video, and 3D model (GLB/GLTF) paths.
