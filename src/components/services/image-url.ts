import noImage from "../../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;

// This string-based transformation is a lightweight way to serve optimized images without manual resizing or compression.

// The getCroppedImageUrl function optimizes images by modifying the original image URL to request a cropped version 
// with fixed dimensions of 600x400 pixels. This is done by inserting a crop/600/400/ segment into the URL after the media/ path, 
// It required that the image server supports such URL-based transformations (like Cloudinary or similar CDNs). 
// By enforcing consistent dimensions, the function helps reduce file size, improves page load times, 
// and ensures uniform display of images across the UI, which is especially beneficial for grid layouts or responsive designs. 
// Additionally, it includes a fallback to a placeholder image (noImage) when no valid URL is provided, preventing broken image issues. 

