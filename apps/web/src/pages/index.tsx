import { Button } from "ui";
import Header from "../components/Header";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
} from "wagmi";

export default function Web() {
  const { address, isDisconnected, isConnecting } = useAccount();

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
        </>
      )}
    </>
  );
}
