// import sql from "better-sqlite3";

import { MongoClient } from "mongodb";
import slugify from "slugify";
import xss from "xss";

import fs from "node:fs";

// const db = sql("meals.db");

// export async function getMeals() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   return db.prepare("SELECT * FROM meals").all();
// }

// export async function getMeal(slug) {
//   return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
// }

// export function getMeal(slug) {
//   try {
//     const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
//     return meal;
//   } catch (error) {
//     return null;
//   }
// }

// const client = await MongoClient.connect(
//   "mongodb+srv://slava:pJdYaLpZhDBNHkx5@cluster0.wv9umia.mongodb.net/events?retryWrites=true&w=majority"
// );

export async function getOneMeal(slug) {
  // const connectionString = "mongodb+srv://slava:pJdYaLpZhDBNHkx5@cluster0.wv9umia.mongodb.net";
  // const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  // const client = new MongoClient(connectionString);
  // // console.log("Try to load meal details");
  // try {
  //   await client.connect();
  //   // const database = client.db('food-lovers');
  //   const database = client.db();
  //   const collection = database.collection("meals");
  //   const result = await collection.findOne({ slug });
  //   return result;
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // } finally {
  //   await client.close();
  // }
}

export async function getAllMeals() {
  // const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  // const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  // console.log(connectionString);

  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:pJdYaLpZhDBNHkx5@${process.env.MONGODB_CLUSTERNAME}.wv9umia.mongodb.net/food-lovers?retryWrites=true&w=majority`;
  const client = new MongoClient(connectionString);

  // console.log("Try to load all meals");
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

// export async function saveMeal(meal) {
//   meal.slug = slugify(meal.title, { lower: true });
//   meal.instructions = xss(meal.instructions);

//   const extension = meal.image.name.split(".").pop();
//   const fileName = `${meal.slug}.${extension}`;

//   const stream = fs.createWriteStream(`public/images/${fileName}`);
//   const bufferedImage = await meal.image.arrayBuffer();

//   stream.write(Buffer.from(bufferedImage), (error) => {
//     if (error) {
//       throw new Error("Saving image failed!");
//     }
//   });

//   meal.image = `/images/${fileName}`;

//   db.prepare(
//     `
//     INSERT INTO meals
//       (title, summary, instructions, creator, creator_email, image, slug)
//     VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
//   `
//   ).run(meal);
// }
