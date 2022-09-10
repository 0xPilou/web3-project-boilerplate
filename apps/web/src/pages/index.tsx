import { Button } from "ui";
import Header from "../components/Header";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
} from "wagmi";
import { useQuery } from "react-query";
import axios from "axios";

export default function Web() {
  const { address, isDisconnected, isConnecting } = useAccount();

  const { isLoading: isFetchingPrice, data: price = [] } = useQuery(
    ["price"],
    async () => {
      const res = await axios.get(`/api/get-price?currency=ethereum`);
      console.log(res.data);
      return res.data || [];
    }
  );

  if (isFetchingPrice) return <div>Fetching Price...</div>;

  return (
    <>
      <Header />
      {isDisconnected && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15%",
          }}
        >
          <h1>please connect your wallet</h1>
        </div>
      )}

      {!isDisconnected && (
        <>
          <h1>My App Name</h1>
          <Button />
          <div>
            <h2>ETH Price : {price} $</h2>
          </div>
        </>
      )}
    </>
  );
}
