const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const Ballot = artifacts.require("Ballot");

contract("Ballot", (accounts) => {
  let instance;
  // let accounts;
  // console.log('accounts', accounts[0]);

  before(async () => {
    instance = await Ballot.deployed();
    // accounts = await web3.eth.getAccounts();
    // console.log('Instance Before', instance);
    // Add 10 candidates
    const candidates = instance.getCandidates();
    for (let i = 0; i < 10; i++) {
      await instance.addVoter(accounts[i], `Voter ${i}`,`422012368935${i}`);
    }
    // console.log('candidates', candidates);
  });

  it("should measure the execution time to vote for 10 candidates", async () => {
    // Start the vote
    const startVote = await instance.startVote();
    console.log('startVote1', startVote);

    // Vote for all 10 candidates
    const start = new Date().getTime();
    for (let i = 0; i <= 99; i++) {
      const res = await instance.voteCandidate(i%4);
      // console.log('Response', res);
    }
    const end = new Date().getTime();

    // End the vote
    const endVote = await instance.endVote();
    console.log('endVote', endVote);

    // await instance.

    // Print the execution time
    const executionTime = end - start;
    console.log(`Execution time to vote for 10 candidates: ${executionTime} ms`);
  });

  // it("should measure the execution time to vote for 20 candidates", async () => {
  //   // Start the vote
  //   const startVote = await instance.startVote();
  //   console.log('startVote2', startVote);
  //
  //   // Vote for all 10 candidates
  //   const start = new Date().getTime();
  //   for (let i = 1; i <= 20; i++) {
  //     await instance.voteCandidate(i%4);
  //   }
  //   const end = new Date().getTime();
  //
  //   // End the vote
  //   await instance.endVote();
  //   // await instance.
  //
  //     // Print the execution time
  //     const executionTime = end - start;
  //   console.log(`Execution time to vote for 20 candidates: ${executionTime} ms`);
  // });

  // it("should measure the execution time to vote for 50 candidates", async () => {
  //   // Start the vote
  //   await instance.startVote();
  //
  //   // Vote for all 10 candidates
  //   const start = new Date().getTime();
  //   for (let i = 1; i <= 50; i++) {
  //     await instance.voteCandidate(1);
  //   }
  //   const end = new Date().getTime();
  //
  //   // End the vote
  //   await instance.endVote();
  //   // await instance.
  //
  //     // Print the execution time
  //     const executionTime = end - start;
  //   console.log(`Execution time to vote for 50 candidates: ${executionTime} ms`);
  // });
});
