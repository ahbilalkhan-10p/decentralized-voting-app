const MyContract = artifacts.require("Ballot");

module.exports = function(deployer) {
  deployer.deploy(MyContract, 'Ballot', 'Prime Minister');
};
