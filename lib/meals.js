// import sql from "better-sqlite3";
// import { sql } from "@vercel/postgress";

import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

import { MongoClient } from "mongodb";
import slugify from "slugify";
import xss from "xss";

// import fs from "node:fs";

export async function getMeal(slug) {
  // return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);

  // const meal = sql`SELECT * FROM meals WHERE slug='spicy-cury'`;
  // return meal;

  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/`;
  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    // const database = client.db('food-lovers');
    const database = client.db(`${process.env.MONGODB_DATABASE}`);
    const collection = database.collection("meals");

    const meal = await collection.findOne({ slug });
    return meal;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

export async function getMeals() {
  // return db.prepare("SELECT * FROM meals").all();

  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection("meals");

    const result = await collection.find().toArray();
    return result;
  } catch (error) {
    // console.log(error);
    throw error;
  } finally {
    await client.close();
  }
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const { url } = await put("articles/blob1.txt", "Hello Hello World!", { access: "public" });

  console.log(url);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  // console.log(fileName);

  const blob = await put(fileName, meal.image, {
    access: "public",
  });

  // console.log(blob);

  // console.log(json(blob));

  // const stream = fs.createWriteStream(`/images/${fileName}`);
  // const bufferedImage = await meal.image.arrayBuffer();

  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("Saving image failed!");
  //   }
  // });

  meal.image = `/images/${fileName}`;

  // db.prepare(
  //   `
  //   INSERT INTO meals
  //     (title, summary, instructions, creator, creator_email, image, slug)
  //   VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  // `
  // ).run(meal);

  /** Vercel Blog Image Upload */

  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  const client = new MongoClient(connectionString);

  try {
    const response = NextResponse.json(blob);

    const newBlob = await response.json();

    // console.log("ImageBlob", newBlob);
    // console.log("ImageUrl", newBlob.url);

    meal.image = newBlob.url;

    await client.connect();
    const database = client.db();
    const collection = database.collection("meals");

    const result = await collection.insertOne(meal);
    // console.log(result);
    return result;
  } catch (error) {
    // console.log(error);
    throw error;
  } finally {
    await client.close();
  }
}
