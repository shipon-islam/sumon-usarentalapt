import { transporter } from "@/utilites/transporter";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const body = await req.json();
  try {
    const data = await transporter.sendMail({
      from: "shiponmohammad82@gmail.com",
      to: "shiponkhan566@gmail.com",
      subject: "USA RentalApt",
      html: `<div style="width: 95%; margin: 0 auto">
    <h3>Client Inbox Info:</h3>
    <ol>
      <li style="margin-bottom: 10px"><strong>Name: </strong>${body.name}</li>
      <li style="margin-bottom: 10px"><strong>Email: </strong>${body.email}</li>
      <li style="margin-bottom: 10px">
        <strong>phone: </strong>${body.phone}
      </li>
      <li style="margin-bottom: 10px"><strong>message: </strong>${body.message}
      </li>
    </ol>
  </div>`,
    });

    return NextResponse.json({ message: "email send successfuly" });
  } catch (error) {
    throw Error("something went wrong for sending email");
  }
};
