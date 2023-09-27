import { httpClient } from "../httpClient";

interface meResponse {
  name: string;
  email: string;
}

export async function me() {
  const { data } = await httpClient.get<meResponse>("/users/me");

  return data;
}
