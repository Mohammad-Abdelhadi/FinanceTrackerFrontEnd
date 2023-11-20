import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);
   const { dispatch } = useAuthContext();

   const signup = async (username, email, password, confirmPassword) => {
      setIsLoading(true);
      setError(null);

      if (password !== confirmPassword) {
         setIsLoading(false);
         setError("Passwords do NOT match.");
      } else {
         const response = await fetch("https://backendfinancetracker.onrender.com/api/user/signup", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
         });

         const json = await response.json();

         if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
         }

         if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json));

            dispatch({
               type: "LOGIN",
               payload: json,
            });
            setIsLoading(false);
            setError(null);
         }
      }
   };

   return {
      signup,
      isLoading,
      error,
   };
};

export default useSignup;
