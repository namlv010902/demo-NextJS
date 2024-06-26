import { NextRequest, NextResponse } from "next/server";
import { instance } from "./instance";
import { IFormAuth } from "../types/auth";
const login = async (data: IFormAuth) => {
    const res = await instance.post("auth/login", data);
    return res?.data;
};
const signUp = async (data: IFormAuth) => {
    const res = await instance.post("auth/register", data);
    return res?.data;
};
const getMe = async () => {
    const res = await instance.get("auth/me")
    return res?.data;
};
const logout = async () => {
    const res = await instance.post("auth/logout");
    return res
};

export {
    login,
    getMe,
    logout,
    signUp
};
