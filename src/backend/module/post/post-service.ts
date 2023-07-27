import clientPromise from "@/utils/monogodb";
import { ObjectId } from "mongodb";

export const get = async (type: string) => {
  //use mongo for update the favoutite
  const client = await clientPromise;

  const response = await client
    .db()
    .collection("post")
    .find(type === "favorite" ? { favorite: true } : {})
    .toArray();
  return response.map((item) => ({ ...item, id: item._id }));
};

// update the existing items 
export const update = async (id: string, favorite: boolean) => {
  const client = await clientPromise;

  const response = await client
    .db()
    .collection("post")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { favorite: favorite } });
  return response;
};
