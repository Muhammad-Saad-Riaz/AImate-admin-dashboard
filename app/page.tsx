import { redirect } from "next/navigation";

const RootPage = () => {
  // Automatically send users to the dashboard
  redirect("/dashboard");
}
export default RootPage;