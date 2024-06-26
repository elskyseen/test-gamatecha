import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const App = async () => {
  const user = await getServerSession(authOptions);
  if (user) {
    redirect("/dashboard");
  } else {
    redirect("/auth/login");
  }
};

export default App;
