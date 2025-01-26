let ip; 
let ip_api = 'https://api.ipify.org?format=json';
let RandomFox_api = 'https://randomfox.ca/floof';
let foxImage;

async function getIP() {
  try {
    let data = await fetch(ip_api);
    let j_data = await data.json(); 
    ip = j_data.ip;
  } catch (error) {
    console.error('Error fetching IP:', error);
    ip = 'Error fetching IP';
  }
}

async function getRandomFox() {
  try {
    let data = await fetch(RandomFox_api);
    let j_data = await data.json();
    foxImage = loadImage(j_data.image);
  } catch (error) {
    console.error('Error fetching fox image:', error);
    foxImage = null;
  }
}

function setup() {
  createCanvas(400, 400);
  getIP();
  getRandomFox();
}

function draw() {
  background(220);

  if (ip) {
    fill(0);
    textSize(16);
    text(`IP Address: ${ip}`, 20, 100);
  }

  if (foxImage) {
    image(foxImage, 50, 150, 300, 200);
  } else {
    fill(0);
    textSize(16);
    text('Loading fox image...', 20, 150);
  }
} 
