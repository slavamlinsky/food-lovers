// import sql from "better-sqlite3";

import { MongoClient } from "mongodb";
import slugify from "slugify";
import xss from "xss";

import fs from "node:fs";

export async function getMeal(slug) {
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
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection("meals");

    const result = await collection.find().toArray();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await client.close();
  }
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  // db.prepare(
  //   `
  //   INSERT INTO meals
  //     (title, summary, instructions, creator, creator_email, image, slug)
  //   VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  // `
  // ).run(meal);

  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  const client = new MongoClient(connectionString);

  try {
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
