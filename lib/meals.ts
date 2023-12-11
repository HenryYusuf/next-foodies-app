import sql from "better-sqlite3";

const db = sql("meals.db");

export interface MealsProps {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
};

const getMeal = /* async */ (slug: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export { getMeals, getMeal };
