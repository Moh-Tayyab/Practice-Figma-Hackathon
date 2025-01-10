import { createClient } from "@sanity/client";
import fetch from "node-fetch";

// Sanity Client
const client = createClient({
  projectId: "h4b5ta60", // Replace with your actual project ID
  dataset: "production", // Default dataset
  useCdn: false,
  apiVersion: "2024-12-24", //replace with your
  token: "skERJwgL5NPz4aSU6f5Ic6hZnMHeAETaAGLB95o1e5EAgoTiRNdPIu6r6VRbx6UIvAHXMfr3sR3weuqGfMPuFUzZJydaS9bBM04pwyjxlF6hrcEFeAVEZNGTdmmLNnKdHWYgfuoWTUoEFg2AsUzRp0QoHV8CcgUYediHZkz30sFJe2xFNtvu", //replace with your
});

// Function to upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    // Fetch image from the URL
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }
    const imageBuffer = await imageResponse.buffer();

    // Upload image to Sanity
    const imageAsset = await client.assets.upload("image", imageBuffer, {
      filename: `product-image-${Date.now()}.jpg`, // Fixed template string syntax
    });

    return imageAsset._id; // Return image asset reference
  } catch (error) {
    console.error("Error uploading image:", error);
    return null; // Return null if image upload fails
  }
}

// Function to import data
const importData = async () => {
  try {
    const apiFetch = await fetch("https://fakestoreapi.com/products");
    if (!apiFetch.ok) {
      throw new Error("Failed to fetch products from API.");
    }
    const products = await apiFetch.json();

    for (const product of products) {
      // Upload the image and get the asset reference
      const imageRef = await uploadImageToSanity(product.image);

      if (imageRef) {
        const document = {
          _id: `product-${product.id}`, // Unique _id generated from product id
          _type: "product",
          title: product.title, // Title field mapped
          price: product.price,
          description: product.description,
          category: product.category,
          image: {
            _type: "image",
            asset: {
              _ref: imageRef, // Image asset reference from Sanity
              _type: "reference",
            },
          },
          rating: {
            rate: product.rating.rate,
            count: product.rating.count,
          },
        };

        // Log each product being processed
        console.log(`Processing product: ${product.title}`);

        // Create or replace document in Sanity
        await client.createOrReplace(document);
        console.log(`Product "${product.title}" successfully imported.`);
      } else {
        console.error(`Failed to upload image for product: ${product.title}`);
      }
    }

    console.log("All products successfully imported!");
  } catch (error) {
    console.error("Error importing data:", error);
  }
};

// Call the data import function
importData();
