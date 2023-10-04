import { useQuery } from "@tanstack/react-query";
import { bankAccountsService } from "../services/bankAccountsService.ts";

export function useBankAccounts() {
  const { data, isFetching } = useQuery({
    queryKey: ['bank-accounts'],
    queryFn: bankAccountsService.getAll,
    staleTime: Infinity,
  });

  return { accounts: data ?? [], isFetching };
}
