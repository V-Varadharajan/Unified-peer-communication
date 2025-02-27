// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


module.exports = buildModule("UPCModule", (m) => {
  const upc = m.contract("UPC");

  return { upc };
});
