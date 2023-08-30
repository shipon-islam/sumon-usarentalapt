import { model, models, Schema } from "mongoose";

const paymentSchema = new Schema({
  price: { type: String, required: true },
  paylink: { type: String, required: true },
});
const paymentModel = models.Payment || model("Payment", paymentSchema);
export default paymentModel;
