document.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector('a-scene');
  const arSystem = sceneEl.systems["mindar-image-system"];
  
  const target0 = document.querySelector('#target-0');
  const target1 = document.querySelector('#target-1');
  const target2 = document.querySelector('#target-2');
  
  const videoEl = document.querySelector('#overlay-vid');
  const scanningOverlay = document.querySelector('#scanning-overlay');

  let activeTargets = 0;

  function updateScanningUI() {
    if (activeTargets > 0) {
      scanningOverlay.classList.add('hidden');
    } else {
      scanningOverlay.classList.remove('hidden');
    }
  }

  // --- Target 0 (Image) ---
  target0.addEventListener("targetFound", event => {
    console.log("Target 0 found (Image)");
    activeTargets++;
    updateScanningUI();
  });
  target0.addEventListener("targetLost", event => {
    console.log("Target 0 lost");
    activeTargets = Math.max(0, activeTargets - 1);
    updateScanningUI();
  });

  // --- Target 1 (Video) ---
  target1.addEventListener("targetFound", event => {
    console.log("Target 1 found (Video)");
    activeTargets++;
    updateScanningUI();
    
    // Autoplay video when target is found
    if (videoEl) {
      videoEl.play().catch(e => {
        console.warn("Autoplay prevented by browser. User interaction might be needed.", e);
      });
    }
  });
  
  target1.addEventListener("targetLost", event => {
    console.log("Target 1 lost");
    activeTargets = Math.max(0, activeTargets - 1);
    updateScanningUI();
    
    // Pause video when target is lost
    if (videoEl) {
      videoEl.pause();
    }
  });

  // --- Target 2 (3D Model) ---
  target2.addEventListener("targetFound", event => {
    console.log("Target 2 found (3D Model)");
    activeTargets++;
    updateScanningUI();
  });
  target2.addEventListener("targetLost", event => {
    console.log("Target 2 lost");
    activeTargets = Math.max(0, activeTargets - 1);
    updateScanningUI();
  });

  // Handle mobile video interaction requirement
  // Sometimes mobile browsers require a click anywhere on the document to allow video playback
  document.body.addEventListener('click', function() {
    if (videoEl && videoEl.paused && activeTargets > 0) {
      videoEl.play().catch(e => console.log("Video play failed", e));
    }
  }, { once: true });
});
