"use client";
import {
  getUserApi,
  logoutApi,
  signinApi,
  signupApi,
} from "@/services/authService";
import { useRouter } from "next/navigation";
import { createContext, use, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const SIGNIN = "signin";
const SIGNUP = "signup";
const REJECTED = "rejected";
const LOADING = "loading";
const USER_LOADED = "user/loaded";
const LOGOUT = "logout";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SIGNIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case SIGNUP:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...initialState,
        isLoading: false,
      };

    default:
      throw new Error("unknown acrion!");
  }
};

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const router = useRouter();

  const signin = async (values) => {
    dispatch({ type: LOADING });
    try {
      const { user, message } = await signinApi(values);
      toast.success(message);
      dispatch({ type: SIGNIN, payload: user });
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: REJECTED, payload: errorMsg });
      toast.error(errorMsg);
    }
  };
  const signup = async (values) => {
    dispatch({ type: LOADING });
    try {
      const { user, message } = await signupApi(values);
      toast.success(message);
      dispatch({ type: SIGNUP, payload: user });
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: REJECTED, payload: errorMsg });
      toast.error(errorMsg);
    }
  };
  const getUser = async () => {
    dispatch({ type: LOADING });
    try {
      const { user } = await getUserApi();
      dispatch({ type: USER_LOADED, payload: user });
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: REJECTED, payload: errorMsg });
      toast.error(errorMsg);
    }
  };
  const logout = async () => {
    try {
      await logoutApi();
      dispatch({ type: LOGOUT });
      router.replace("/");
      toast("شما از حساب خود خارج شدید", {
        icon: "ℹ️",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      getUser();
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signin, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = use(AuthContext);
  if (context === undefined) throw new Error("not found Auth context");

  return context;
}
