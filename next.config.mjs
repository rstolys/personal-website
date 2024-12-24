/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,  // Disables the Image Optimization API
    },
    
    trailingSlash: false
};

export default nextConfig;
