import { transporter } from "@/utilites/transporter";

export default async function Handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;
    try {
      const data = await transporter.sendMail({
        from: "rentalapplication@usarentalapt.com",
        to: "prateraliced@gmail.com",
        subject: "USA RentalApt",
        html: `<div style="width: 95%; margin: 0 auto">
        <h3>Client Inbox Info:</h3>
        <ol>
          <li style="margin-bottom: 10px"><strong>Name: </strong>${name}</li>
          <li style="margin-bottom: 10px"><strong>Email: </strong>${email}</li>
          <li style="margin-bottom: 10px">
            <strong>phone: </strong>${phone}
          </li>
          <li style="margin-bottom: 10px"><strong>message: </strong>${message}
          </li>
        </ol>
      </div>`,
      });
      res.send("send successfully");
    } catch (error) {
      throw Error("something went wrong for sending email");
    }
  }
}
