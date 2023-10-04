import { User } from "../../entities/User";
import { httpClient } from "../httpClient";

type meResponse = User;

export async function me() {
  const { data } = await httpClient.get<meResponse>("/users/me");

  return data;
}
