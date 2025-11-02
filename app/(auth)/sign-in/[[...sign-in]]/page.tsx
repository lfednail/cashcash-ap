import AuthWrapper from "@/components/AuthWrapper";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <AuthWrapper>
      <SignIn />
    </AuthWrapper>
  );
}
