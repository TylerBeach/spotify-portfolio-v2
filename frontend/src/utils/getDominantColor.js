export default function getSecondDominantColor(imageSrc, callback) {
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'Anonymous'; // This might be needed for loading images from external URLs

    img.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0, img.width, img.height);

        // Calculate the starting point for the bottom half of the image
        const startY = Math.floor(img.height * 0.75);

        // Get pixel data for the bottom half of the image
        const imageData = context.getImageData(0, startY, img.width, img.height - startY);
        const data = imageData.data;
        const colorCount = {};

        // Process each pixel in the bottom half and count occurrences of each color
        for (let i = 0; i < data.length; i += 4) {
            const rgb = [data[i], data[i + 1], data[i + 2]].join(',');
            if (colorCount[rgb]) {
                colorCount[rgb]++;
            } else {
                colorCount[rgb] = 1;
            }
        }

        // Find the second most frequent color
        let sortedColors = Object.keys(colorCount).sort((a, b) => colorCount[b] - colorCount[a]);
        let secondDominantColor = sortedColors[1]; // Access the second item in sorted array

        // Convert the second most frequent color to RGB format and adjust brightness
        const rgbParts = secondDominantColor.split(',');
        const brightnessFactor = 0.5; // Reduce brightness to 80%
        const adjustedRGB = rgbParts.map(color => Math.floor(color * brightnessFactor)).join(', ');

        // Return the result through a callback
        callback(`${adjustedRGB}`);
    };

    img.onerror = function() {
        callback(null); // Handle errors, such as when an image fails to load
    };
}
