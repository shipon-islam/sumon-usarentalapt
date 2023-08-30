import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const body = await req.json();
  const prisma = new PrismaClient();
  try {
    const user = await prisma.payment.update({
      where: {
        id: params.id,
      },
      data: {
        price: body.price,
        paylink: body.paylink,
      },
    });
    return NextResponse.json({ message: "successfully updated" });
  } catch (error) {
    throw Error("something went wrong");
  }
};
