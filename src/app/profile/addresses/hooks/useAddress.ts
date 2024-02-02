import { AddressOutput } from "@/api/user/output/address-output";
import { UserApi } from "@/api/user/user.api";
import Sentry from "@/services/sentry";
import { useEffect, useState } from "react";

export const useAddress = () => {
  const [addresses, setAddreses] = useState<AddressOutput>([]);

  const fetchAddress = async () => {
    try {
      const { data } = await UserApi.getAddresses();

      setAddreses(data);
    } catch (err) {
      Sentry.captureException(err);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return {
    addresses,
  };
};
