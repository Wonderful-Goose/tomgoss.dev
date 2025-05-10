const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas with Open Graph image dimensions
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

// Set background color
context.fillStyle = '#1a1a1a';
context.fillRect(0, 0, width, height);

// Add gradient
const gradient = context.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#4f46e5');
gradient.addColorStop(1, '#3b82f6');
context.fillStyle = gradient;
context.fillRect(0, 0, width, height);

// Add text
context.font = 'bold 70px sans-serif';
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillStyle = '#ffffff';
context.fillText('Thomas Goss', width / 2, height / 2 - 40);

// Add subtitle
context.font = '40px sans-serif';
context.fillText('Content & Product Marketing', width / 2, height / 2 + 40);

// Convert to buffer
const buffer = canvas.toBuffer('image/jpeg');

// Write to file
const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');

// Ensure directories exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

fs.writeFileSync(path.join(imagesDir, 'og-image.jpg'), buffer);

console.log('Open Graph image created at public/images/og-image.jpg'); 