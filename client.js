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
  const hotbar = await client.fetch('*[_type == "hotbar"]');
  return hotbar;
}

export async function getColdBar() {
  const coldbar = await client.fetch('*[_type == "coldbar"]');
  return coldbar;
}

export async function getExtras() {
  const extra = await client.fetch('*[_type == "extra"]');
  return extra;
}

export async function getHealtyBar() {
  const healtyBar = await client.fetch('*[_type == "healtyBar"]');
  return healtyBar;
}

export async function getHerbalBar() {
  const herbalBar = await client.fetch('*[_type == "herbalBar"]');
  return herbalBar;
}

export async function getSoftBar() {
  const softbar = await client.fetch('*[_type == "softbar"]');
  return softbar;
}

export async function getCakes() {
  const cakes = await client.fetch('*[_type == "cakes"]');
  return cakes;
}

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
