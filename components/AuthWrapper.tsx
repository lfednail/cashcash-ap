import { Wrench } from "lucide-react";
import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="flex items-center mb-6">
        <div className="bg-blue-700 text-white rounded-full p-2">
          <Wrench className="w-6 h-6" />
        </div>
        <span className="ml-3 font-bold text-3xl">
          CashCash <span className="text-green-600">Ap</span>
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthWrapper;
