import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy("MyContract", {
    from: deployer,
    args: ["Hello World"],
  });

  console.log(deployer);

  deployments.log(`Contract MyContract deployed at ${deployment.address}`);
};

export default func;

func.tags = ["MyContract"];
