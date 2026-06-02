// Three.js hero — wireframe icosahedron + particle field reactive to mouse.
// Returns a teardown function.

export function initHeroCanvas(canvas) {
  if (typeof window === "undefined" || !window.THREE || !canvas) return () => {};
  const THREE = window.THREE;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const parent = canvas.parentElement || document.body;
  let width = parent.clientWidth;
  let height = parent.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);

  const accent = getAccent();

  const geo = new THREE.IcosahedronGeometry(2.6, 1);
  const mat = new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.5 });
  const ico = new THREE.Mesh(geo, mat);
  scene.add(ico);

  const innerGeo = new THREE.IcosahedronGeometry(1.7, 0);
  const innerMat = new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.22 });
  const inner = new THREE.Mesh(innerGeo, innerMat);
  scene.add(inner);

  const particleCount = 1200;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({ color: accent, size: 0.025, transparent: true, opacity: 0.7 });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  function onMove(e) {
    const r = canvas.getBoundingClientRect();
    mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.ty = -(((e.clientY - r.top) / r.height) * 2 - 1);
  }
  window.addEventListener("mousemove", onMove);

  function onResize() {
    width = parent.clientWidth;
    height = parent.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  window.addEventListener("resize", onResize);

  let frameId;
  const clock = new THREE.Clock();
  function tick() {
    const t = clock.getElapsedTime();
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;

    ico.rotation.x = t * 0.15 + mouse.y * 0.4;
    ico.rotation.y = t * 0.2 + mouse.x * 0.6;
    inner.rotation.x = -t * 0.1;
    inner.rotation.y = -t * 0.15;
    particles.rotation.y = t * 0.03 + mouse.x * 0.15;
    particles.rotation.x = mouse.y * 0.15;

    renderer.render(scene, camera);
    frameId = requestAnimationFrame(tick);
  }
  tick();

  // refresh accent on demand
  const onAccent = () => {
    const next = getAccent();
    mat.color.set(next);
    innerMat.color.set(next);
    pMat.color.set(next);
  };
  window.addEventListener("portfolio:accent", onAccent);

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("portfolio:accent", onAccent);
    geo.dispose();
    innerGeo.dispose();
    mat.dispose();
    innerMat.dispose();
    pGeo.dispose();
    pMat.dispose();
    renderer.dispose();
  };
}

function getAccent() {
  const v = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  return v || "#34d399";
}
