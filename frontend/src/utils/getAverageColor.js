export default function getAverageColor(imageSrc, callback) {
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'Anonymous'; // This might be needed for loading images from external URLs

    img.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0, img.width, img.height);
        
        const imageData = context.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;
        let r = 0, g = 0, b = 0;

        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
        }

        // Average the colors
        r = Math.floor(r / (data.length / 4));
        g = Math.floor(g / (data.length / 4));
        b = Math.floor(b / (data.length / 4));

        // Convert to hexadecimal color format
        const rgb = `${r}, ${g}, ${b}`;
        // const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

        // Return the result through a callback
        callback(rgb);
    };

    img.onerror = function() {
        callback(null); // Handle errors, such as when an image fails to load
    };
}