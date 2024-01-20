"use server"

import { NotionDatabaseResponse } from '@/app/_types/notion';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID ?? "";

export async function list() {
  const response = await notion.databases.query({
    database_id: databaseId
  });

  const typedResponse = (response as unknown) as NotionDatabaseResponse;
  const products = typedResponse.results;

  return products.map((product) => {
    return {
      id: product.id,
      name: product.properties.name.title[0].plain_text,
      supplier: product.properties.supplier.rich_text[0].plain_text,
      sku: product.properties.sku.rich_text[0].plain_text,
      description: product.properties.description.rich_text[0].plain_text,
      availability: product.properties.availability.multi_select.map((option) => option.name),
      type: product.properties.type.select.name,
      subType: product.properties.subType.select.name,
      imageUrl: product.properties.image.url,
      quantity: product.properties.quantity.number,
      salesPrice: product.properties.salesPrice.number,
    };
  });
};

export async function get(sku: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "sku",
          rich_text: {
            equals: sku,
          }
        }
      ]
    }
  });

  const typedResponse = (response as unknown) as NotionDatabaseResponse;
  const product = typedResponse.results[0];

  return {
    id: product.id,
    name: product.properties.name.title[0].plain_text,
    supplier: product.properties.supplier.rich_text[0].plain_text,
    description: product.properties.description.rich_text[0].plain_text,
    sku: product.properties.sku.rich_text[0].plain_text,
    availability: product.properties.availability.multi_select.map((option) => option.name),
    type: product.properties.type.select.name,
    subType: product.properties.subType.select.name,
    imageUrl: product.properties.image.url,
    quantity: product.properties.quantity.number,
    salesPrice: product.properties.salesPrice.number,
  };
};