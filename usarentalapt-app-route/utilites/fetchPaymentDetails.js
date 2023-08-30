const { PrismaClient } = require("@prisma/client");

export const fetchPaymentDetails = async () => {
  try {
    const prisma = new PrismaClient();
    const res = await prisma.payment.findMany({ take: 1 });
    return res[0];
  } catch (error) {
    console.log(error);
  }
};
