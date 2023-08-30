import PaymentUpdate from "@/components/PaymentUpdate";
import { fetchPaymentDetails } from "@/utilites/fetchPaymentDetails";
export const revalidate = 1;
async function Dashboard() {
  const data = await fetchPaymentDetails();
  return (
    <main>
      <PaymentUpdate payment={data} />
    </main>
  );
}

export default Dashboard;
