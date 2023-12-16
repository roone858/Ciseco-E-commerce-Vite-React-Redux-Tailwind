import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Credentials, SignupFormValues, State, User } from "../interfaces";
import { login } from "../redux/slice/login-slice";
import { AxiosError } from "axios";
import axios from "../utils/axios";
import { fetchUserInfo, updateUser } from "../redux/slice/user-slice";
import { logout } from "../redux/slice/login-slice";

const authService = {
  login: async (dispatch: any, data: Credentials) => {
    (dispatch as ThunkDispatch<State, Credentials, AnyAction>)(login(data));
  },
  logout: async (dispatch: any) => {
    sessionStorage.clear();
    dispatch(logout());
  },
  signup: async (newUser: SignupFormValues) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        newUser
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return axiosError?.response?.data;
    }
  },
  changePassword: async (currentPassword: string, newPassword: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/change-password",
        { newPassword, currentPassword }
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return axiosError?.response?.data;
    }
  },
  getAuthenticatedUserInfo: async (dispatch: any) => {
    (dispatch as ThunkDispatch<State, Credentials, AnyAction>)(fetchUserInfo());
  },
  updateAuthenticatedUser: async (dispatch: any, updatedUserData: User) => {
    (dispatch as ThunkDispatch<State, SignupFormValues, AnyAction>)(
      updateUser(updatedUserData)
    );
  },
  checkUsernameExists: async (newUsername: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/check-username",
        {
          username: newUsername,
        }
      );
      return response.data.isTaken;
    } catch (error) {
      console.error("Error checking username:", error);
    }
  },
  checkEmailExists: async (email: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/check-email",
        {
          email: email,
        }
      );
      return response.data.isExists;
    } catch (error) {
      console.error("Error checking email:", error);
    }
  },
};
export default authService;
