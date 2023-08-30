import connectMongo from "@/db";
import paymentModel from "@/db/model/paymentModel";
export default async function Handler(req, res) {
  if (req.method === "PUT") {
    const { price, paylink } = req.body;
    try {
      await connectMongo();
      const payment = await paymentModel.findByIdAndUpdate(req.query.id, {
        price,
        paylink,
      });
      res.send("updated successfully");
    } catch (error) {
      console.log(error);
      throw Error("something went wrong");
    }
  }
}
