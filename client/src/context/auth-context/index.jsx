import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { useToast } from "@/hooks/use-toast";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  async function handleRegisterUser(event) {
    event.preventDefault();
    
    try {
      const data = await registerService(signUpFormData);
      
      if (data.success) {
        toast({
          title: "🎉 Welcome to CloudCampus!",
          description: "Your account has been created successfully. You're ready to start your learning journey!",
          variant: "default",
        });
        // Reset form after successful registration
        setSignUpFormData(initialSignUpFormData);
      } else {
        toast({
          title: "Registration Failed",
          description: data.message || "Unable to create account. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      if (error.response && error.response.data) {
        toast({
          title: "Registration Error",
          description: error.response.data.message || "An error occurred during registration.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Network Error",
          description: "Unable to connect to the server. Please check your internet connection.",
          variant: "destructive",
        });
      }
    }
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    
    try {
      const data = await loginService(signInFormData);
      console.log(data, "datadatadatadatadata");

      if (data.success) {
        await sessionStorage.setItem(
          "accessToken",
          JSON.stringify(data.data.accessToken)
        );
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        toast({
          title: "🚀 Welcome Back!",
          description: "Successfully logged in. Let's continue your learning adventure!",
          variant: "default",
        });
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        toast({
          title: "Login Failed",
          description: data.message || "Invalid email or password.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      
      setAuth({
        authenticate: false,
        user: null,
      });
      
      if (error.response && error.response.data) {
        toast({
          title: "Login Error",
          description: error.response.data.message || "An error occurred during login.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Network Error",
          description: "Unable to connect to the server. Please check your internet connection.",
          variant: "destructive",
        });
      }
    }
  }

  //check auth user

  async function checkAuthUser() {
    try {
      const data = await checkAuthService();
      if (data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        setLoading(false);
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      if (!error?.response?.data?.success) {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    }
  }

  function resetCredentials() {
    setAuth({
      authenticate: false,
      user: null,
    });
  }

  useEffect(() => {
    checkAuthUser();
  }, []);

  console.log(auth, "gf");

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        resetCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
