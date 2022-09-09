/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MyContract, MyContractInterface } from "../MyContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "message",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "setMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107853803806107858339818101604052810190610032919061015a565b806000908051906020019061004892919061004f565b50506102f6565b82805461005b90610224565b90600052602060002090601f01602090048101928261007d57600085556100c4565b82601f1061009657805160ff19168380011785556100c4565b828001600101855582156100c4579182015b828111156100c35782518255916020019190600101906100a8565b5b5090506100d191906100d5565b5090565b5b808211156100ee5760008160009055506001016100d6565b5090565b6000610105610100846101c0565b61019b565b90508281526020810184848401111561011d57600080fd5b6101288482856101f1565b509392505050565b600082601f83011261014157600080fd5b81516101518482602086016100f2565b91505092915050565b60006020828403121561016c57600080fd5b600082015167ffffffffffffffff81111561018657600080fd5b61019284828501610130565b91505092915050565b60006101a56101b6565b90506101b18282610256565b919050565b6000604051905090565b600067ffffffffffffffff8211156101db576101da6102b6565b5b6101e4826102e5565b9050602081019050919050565b60005b8381101561020f5780820151818401526020810190506101f4565b8381111561021e576000848401525b50505050565b6000600282049050600182168061023c57607f821691505b602082108114156102505761024f610287565b5b50919050565b61025f826102e5565b810181811067ffffffffffffffff8211171561027e5761027d6102b6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610480806103056000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063368b87721461003b578063e21f37ce14610057575b600080fd5b61005560048036038101906100509190610228565b610075565b005b61005f61008f565b60405161006c91906102a2565b60405180910390f35b806000908051906020019061008b92919061011d565b5050565b6000805461009c90610378565b80601f01602080910402602001604051908101604052809291908181526020018280546100c890610378565b80156101155780601f106100ea57610100808354040283529160200191610115565b820191906000526020600020905b8154815290600101906020018083116100f857829003601f168201915b505050505081565b82805461012990610378565b90600052602060002090601f01602090048101928261014b5760008555610192565b82601f1061016457805160ff1916838001178555610192565b82800160010185558215610192579182015b82811115610191578251825591602001919060010190610176565b5b50905061019f91906101a3565b5090565b5b808211156101bc5760008160009055506001016101a4565b5090565b60006101d36101ce846102e9565b6102c4565b9050828152602081018484840111156101eb57600080fd5b6101f6848285610336565b509392505050565b600082601f83011261020f57600080fd5b813561021f8482602086016101c0565b91505092915050565b60006020828403121561023a57600080fd5b600082013567ffffffffffffffff81111561025457600080fd5b610260848285016101fe565b91505092915050565b60006102748261031a565b61027e8185610325565b935061028e818560208601610345565b61029781610439565b840191505092915050565b600060208201905081810360008301526102bc8184610269565b905092915050565b60006102ce6102df565b90506102da82826103aa565b919050565b6000604051905090565b600067ffffffffffffffff8211156103045761030361040a565b5b61030d82610439565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b82818337600083830152505050565b60005b83811015610363578082015181840152602081019050610348565b83811115610372576000848401525b50505050565b6000600282049050600182168061039057607f821691505b602082108114156103a4576103a36103db565b5b50919050565b6103b382610439565b810181811067ffffffffffffffff821117156103d2576103d161040a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea264697066735822122084feda5598d742003a803ac05a863f2e777b3d92ec6fa5fe44f3dda2cad9c74364736f6c63430008040033";

type MyContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyContract__factory extends ContractFactory {
  constructor(...args: MyContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyContract> {
    return super.deploy(_message, overrides || {}) as Promise<MyContract>;
  }
  override getDeployTransaction(
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_message, overrides || {});
  }
  override attach(address: string): MyContract {
    return super.attach(address) as MyContract;
  }
  override connect(signer: Signer): MyContract__factory {
    return super.connect(signer) as MyContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyContractInterface {
    return new utils.Interface(_abi) as MyContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyContract {
    return new Contract(address, _abi, signerOrProvider) as MyContract;
  }
}
