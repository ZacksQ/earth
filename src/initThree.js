import * as THREE from 'three'


function init() {
  const renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.querySelector('#container').appendChild(renderer.domElement)
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
  // camera.position.x = 0
  // camera.position.y = 50
  // camera.position.z = 100
  // camera.up.x = 0
  // camera.up.y = 1
  camera.up.z = 500
  camera.lookAt({ x: 0, y: 0, z: 0 })
  const scene = new THREE.Scene()
  // const light = new THREE.DirectionalLight(0xffffff, 0.8, 1)
  // light.position.set(-400, 100, 150)
  // scene.add(light)
  // const ambientLight = new THREE.AmbientLight(0x222222)
  // scene.add(ambientLight)
  const earth_texture = new THREE.TextureLoader()
  earth_texture.load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg', texture => {
    const geometry = new THREE.SphereGeometry(200, 32, 32)
    const mesh = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 })
    const sphere = new THREE.Mesh(geometry, mesh)
    scene.add(sphere)
    // sphere.position.set(0, 0, 0)
  })
  renderer.clear()
  renderer.render(scene, camera)
}

export default init