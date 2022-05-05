// Színhely, színpad
const scene = new THREE.Scene();

// Perspektív kamera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, -0.2, 8.5);

// Renderer - Leképező
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

// Canvas - vászon beszúrása a html bodyba
document.body.appendChild(renderer.domElement);

// Háttér
const texture = new THREE.TextureLoader().load('img/background.png');
const geometry = new THREE.PlaneGeometry(16, 9);
const material = new THREE.MeshPhongMaterial({map: texture});
const background = new THREE.Mesh(geometry, material);
scene.add(background);

// Fény
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Méretezés
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Egér
document.addEventListener('mousemove', onDocumentMouseMove)

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
const windowHalfX = window.innerWidth/2;
const windowHalfY = window.innerHeight/2;

function onDocumentMouseMove(evt) {
    mouseX = (evt.clientX - windowHalfX);
    mouseY = (evt.clientY - windowHalfY);
};

// Render ciklus
function animate()
{
    // Animációk
    targetX = mouseX * -0.0004;
    targetY = mouseY * -0.0004;

    background.position.x += 0.02 * (targetX - background.position.x);
    background.position.y += 0.02 * (targetY - background.position.y);

    renderer.render(scene, camera);
 
    requestAnimationFrame(animate); //Másodpercenként 60 végrehajtás (rekurzív hívás)
}

animate();