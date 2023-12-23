import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "82q33avn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-01-12",
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export async function getHotBar() {
  const posts = await client.fetch('*[_type == "hotbar"]');
  return posts;
}

export async function getColdBar() {
  const posts = await client.fetch('*[_type == "coldbar"]');
  return posts;
}

export async function getExtras() {
  const posts = await client.fetch('*[_type == "extra"]');
  return posts;
}

export async function getHealtyBar() {
  const posts = await client.fetch('*[_type == "healtyBar"]');
  return posts;
}

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
}

export async function getHerbalBar() {
  const snacks = await client.fetch('*[_type == "herbalBar"]');
  return snacks;
}



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
