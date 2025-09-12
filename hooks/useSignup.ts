"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";

type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

export function useSignup() {
  return useMutation({
    mutationFn: async (payload: SignupPayload) => {
      const res = await api.post("/auth/signup", payload);
      return res.data;
    },
  });
}
