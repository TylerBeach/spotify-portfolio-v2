export default function getSecondDominantColor(imageSrc, callback) {
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'Anonymous'; 

    img.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0, img.width, img.height);

        // get the top 3 quarter of the image
        const startY = Math.floor(img.height * 0.75);

        // start at the bottom quarter of the image
        const imageData = context.getImageData(0, startY, img.width, img.height - startY);
        const data = imageData.data;
        const colorCount = {};

        // iterate and map the pixel colors
        for (let i = 0; i < data.length; i += 4) {
            const rgb = [data[i], data[i + 1], data[i + 2]].join(',');
            if (colorCount[rgb]) {
                colorCount[rgb]++;
            } else {
                colorCount[rgb] = 1;
            }
        }

        // most freq color
        let sortedColors = Object.keys(colorCount).sort((a, b) => colorCount[b] - colorCount[a]);
        let secondDominantColor = sortedColors[0]; // Access the second item in sorted array

        // convert the color to RGB
        const rgbParts = secondDominantColor.split(',');
        const brightnessFactor = 0.5; // Reduce brightness to 80%
        const adjustedRGB = rgbParts.map(color => Math.floor(color * brightnessFactor)).join(', ');

        callback(`${adjustedRGB}`);
    };

    img.onerror = function() {
        callback(null); 
    };
}
