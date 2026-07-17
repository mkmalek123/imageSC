# MindAR Image Tracking Web App

A pure HTML/JS WebAR application using **MindAR.js** and **A-Frame**. This app allows users to track three different target images and display three different types of augmented reality content:
1.  **Image Overlay**
2.  **Video Overlay** (with auto-play/pause)
3.  **3D Model** (GLB/GLTF)

## Features
*   **No App Required:** Runs entirely in the mobile web browser (iOS Safari, Android Chrome).
*   **Premium UI:** A sleek, glassmorphic landing page guides the user.
*   **Multi-Target Support:** Uses a single compiled `.mind` file to track multiple different images independently.

## Getting Started

### Local Testing
WebAR requires a secure context to access the device camera. This means you must run the site over **HTTPS** or on `localhost`.

If you have Python installed, you can start a quick local server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser. (Note: To test on your phone over your local network, you will need a tool like `ngrok` or a local HTTPS setup, because phones will block camera access on `http://192.168...`).

### How to Use Your Own Content
This project is currently using placeholder assets from the MindAR CDN. To use your own:

1.  **Read the Target Images Guide:** Open `target-images/README.md` to learn how to generate your own `.mind` file from your images.
2.  **Update `ar.html`:**
    *   Change the `<a-scene mindar-image="imageTargetSrc: ...">` to point to your new `.mind` file.
    *   Change the `<img id="overlay-img" src="...">` to your custom image.
    *   Change the `<video id="overlay-vid" src="...">` to your custom video (mp4).
    *   Change the `<a-asset-item id="overlay-model" src="...">` to your custom 3D model (.glb or .gltf).

## Deployment to GitHub Pages

GitHub Pages is the easiest way to host this for free, as it automatically provides the required HTTPS.

1.  Initialize a Git repository in this folder: `git init`
2.  Commit all files: `git add .` and `git commit -m "Initial commit"`
3.  Create a new public repository on GitHub.
4.  Push your code to GitHub.
5.  Go to your repository settings -> **Pages**.
6.  Set the source to the `main` branch.
7.  Wait a few minutes, and your WebAR app will be live on your `github.io` domain!
