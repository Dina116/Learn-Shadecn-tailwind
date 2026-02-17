import { useState } from "react";

export default function useChangePaymentState() {
  const [isSearchByAccount, setIsSearchByAccount] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedCollectorId, setSelectedCollectorId] = useState<number | null>(
    null,
  );

  const [searchCriteria, setSearchCriteria] = useState<{
    empid: number | null;
    accno: string | null;
  }>({
    empid: null,
    accno: null,
  });

  const handleSearch = () => {
    if (isSearchByAccount) {
      setSearchCriteria({ empid: null, accno: accountNumber });
      console.log("TODO: Implement search by account number:", accountNumber);
    } else {
      setSearchCriteria({ empid: selectedCollectorId, accno: null });
    }
  };

  return {
    isSearchByAccount,
    setIsSearchByAccount,
    accountNumber,
    setAccountNumber,
    selectedCollectorId,
    setSelectedCollectorId,
    searchCriteria,
    handleSearch,
  };
}
