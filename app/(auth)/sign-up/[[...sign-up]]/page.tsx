import AuthWrapper from "@/components/AuthWrapper";
import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <AuthWrapper>
      <SignUp />
    </AuthWrapper>
  );
}
