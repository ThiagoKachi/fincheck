import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(true);

  const handleOpenFiltersModal = () => setIsFiltersModalOpen(true);

  const handleCloseFiltersModal = () => setIsFiltersModalOpen(false);

  return {
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: false,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
