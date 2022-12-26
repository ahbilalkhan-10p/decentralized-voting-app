# decentralized-voting-app
==========================

INTRODUCTION:
In every democracy, the security of an election is a matter of national security. The
computer security field has for a decade studied the possibilities of electronic voting
systems, with the goal of minimizing the cost of having a national election,
while fulfilling and increasing the security conditions of an election.
Electronic voting machines have been viewed as flawed, by the security community,
primarily based on physical security concerns. Anyone with physical access to such
machine can sabotage the machine, thereby affecting all votes cast on the
aforementioned machine.
A blockchain is a distributed, immutable, incontrovertible, public ledger. This new
technology works through four main features:
• The ledger exists in many different locations: No single
point of failure in the maintenance of the distributed
ledger.
•
There is distributed control over who can append new
transactions to the ledger.
• Any proposed “new block” to the ledger must reference
the previous version of the ledger, creating an immutable
chain from where the blockchain gets its name, and
thus preventing tampering with the integrity of previous
entries.
• A majority of the network nodes must reach a consensus
before a proposed new block of entries becomes a permanent part of the ledger.

PROPOSED SOLUTION:
We propose a Blockchain based solution for solving various problems faced in the voting
process. This project is a simple attemmpt to design and build an electronic voting
system; where we make use of Ethereum Smart Contracts to create a decentralized
voting application (Dapp).
Our implementation consists of a web interface to allow user to interact with the
blockchain, ReactJS as font-end and NodeJS as back-end. Connected to Ethereum Smart
Contract via WEB3.

SYSTEM DESIGN:
At a very high level, a simple voting system comprises of an organising
authority(Election Commission) , a voting machine and a vote. In case of our
system, we add an etherium based blockchain, which establishes the network
between the three mentioned entities.
Ultimately our project converges a Decentralised Web application(). The
components of this application are:
• Front-end system for Election Commission or Voting Machine
• Voter Validation
• Smart Contracts

SMART CONTRACT:
Ballot smart contract. the Ballot smart contract is where the votes are recorded.
The Ballot instance is deployed on the blockchain; and it consists a list of
candidate data for populated when the contract is initially deployed.
The Contract has three states i.e. Start Vote, Voting, and End Vote. The Ballot
consist of a vote function which can be called by the client to increment vote
count of a candidate.
Since this function changes the state of the contract, it is function is payable, and
thus recorded on the blockchain. This contract will be accessed by the voting
application for voting.

WEB CLIENT:
The system is designed with the following assumptions:
• The candidates are added by the ballator to the contract. For now we have
hard coded the candidates in the contract for testing purpose.
• There is a voter authentication system integrated to the contract (NADRA).
For now we are using some hard coded values for testing purpose.
The Voter has to enter the CNIC after which he is validated and can cast the vote
to it’s desired candidate.
VOTER AUTHENTICATION SERVICE:
The Voter will enter the cnic and will be authenticated by entering a pin sent to his
phone. Currently we have pushed the values from back-end for testing purpose.
This can be fetched from front-end as well when there will be an external
validation system integrated with the application.

BLOCKCHAIN:
The blockchain is established using remix. The contract is deployed on remix and
we have integrated it to our Web client via ABI key provided by remix. The
transaction data can be viewed and fetched from remix. For Transaction logging
we have used Ganache.

Follow the instructions to deploy on remix

1) Enter 2 strings for Ballot Name and Proposal Eg: "Ballot", "Prime Minister" and hit deploy (that current address would be Ballot Address)

2) click startVote then copy the address of any voter from code and replace the Account address. (Currently the ballotOfficialAddress is restricted to vote)
3) enter Candidate Id (1,2,3,4) and hit voteCandidate
4) check if the voteCount is reflected in candidate by entering same candidateId in candidates field.
5) check if it's reflected in totalVotes
6) copy the voter address and enter in the registerVoter field and check the voted field (should be true)
7) 1 voter can vote can only 1 candidate
8) change the address to vote from a different voter
9) hit endVote
10) click Winner and the winning candidate name would display
