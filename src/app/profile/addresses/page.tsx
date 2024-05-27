import ListAddresses from "./components/ListAddresses";
import ProfileLayout from "../components/ProfileLayout";
import { AddressOutput } from "@/api/user/output/address-output";
import { UserApi } from "@/api/user/user.api";
import Sentry from "@/services/sentry";

export default async function ProfileAddresses() {
  let addresses: AddressOutput = [];

  try {
    const { data } = await UserApi.getAddresses();

    addresses = data;
  } catch (err) {
    Sentry.captureException(err);
  }

  return (
    <ProfileLayout>
      <ListAddresses addresses={addresses} />
    </ProfileLayout>
  );
}
