/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: [
            "images.unsplash.com",
            "m.media-amazon.com",
            "img.pchome.com.tw",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"],
        // remotePatterns: [{ hostname: "images.unsplash.com" }]
    }
}

module.exports = nextConfig
