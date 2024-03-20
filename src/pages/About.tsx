function About() {
  return (
    <div className="flex w-full flex-col items-center gap-4 overflow-scroll bg-gradient-to-b from-surface-secondary p-4 font-sans">
      <div className="m-10 flex w-3/4 flex-col items-center gap-4 p-4">
        <h1 className="font-diabloHeavy text-4xl text-text-primary/60">
          Project Kardeshev
        </h1>
        <h2 className="font-diabloHeavy text-2xl text-text-secondary">
          Overview
        </h2>
        <p>
          {' '}
          Project Kardeshev&apos;s main goal is to bring knowledge to everyone
          by gamifying and incentivizing learning the real world applications
          and tooling used to create solutions, by way of engineering and other
          disciplines.
        </p>
        <h2 className="font-diabloHeavy text-2xl text-text-secondary">
          Bounties
        </h2>
        <p>
          {' '}
          In Project Kardeshev, each problem is a bounty. Players earn
          experience points by completing bounties. Bounties are created by the
          governing DAO and by AI problem paramaterizing web scraper bots. They
          scour the web for complaints searching for problems that can be
          parameterized and added as Bounties to the game for players solve.
        </p>
        <h3 className="font-diabloHeavy text-xl text-text-secondary">Assets</h3>
        <p>
          <ul className="customIndent customBullet">
            <li>
              Blueprints (NFT)
              <ul className="customIndent customBullet">
                <li>
                  Mechanical, electrical, civil, etc. Blueprints are digital
                  files with UDL licenses that can be used to create products
                  that are applied to solve bounties.
                </li>
                <li>
                  Indexing:
                  <ul className="customIndent customBullet">
                    <li>
                      The blueprints process indexes files on Arweave allowing
                      them to be retrieved and minted into existence. Minting
                      Blueprints requires payment of their UDL fee.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Degrees (NFT)
              <ul className="customIndent customBullet">
                <li>
                  Degrees are certifications that a player has achieved mastery
                  levels of certain disciplines. Degrees are cryptographic
                  proofs of education, certifying that the player is competent
                  by way of demonstrating abilities when solving bounties.
                </li>
                <li>
                  Each degree has metadata pertaining to the proofs conducted
                  and the state of the knowledge shown at the time of bestowing
                  the degree to the player.
                </li>
              </ul>
            </li>
            <li>
              $KARDeshev Coins (ERC20) - [AO process:
              brNWDSFqv6isPoKKfOE1ciFhGVwD99J9n_04os_dA0o]
              <ul className="customIndent customBullet">
                <li>
                  Cryptocurrency earned thru solving bounties that can be used
                  to purchase in game items and participate in the Kardeshev
                  Protocol.
                </li>
              </ul>
            </li>
          </ul>
        </p>
        <br />
        <h3 className="font-diabloHeavy text-xl text-text-secondary">
          Governance (DAO)
        </h3>
        <p>
          <ul className="customIndent customBullet">
            <li>
              <strong>Proposal Submission:</strong>
              <ul className="customIndent customBullet">
                <li>DAO members can submit proposals for consideration.</li>
                <li>
                  Proposals may include new bounties, changes to tokenomics,
                  project developments, or even the MemeFrame of this site.
                </li>
              </ul>
            </li>
            <li>
              <strong>Voting Process:</strong>
              <ul className="customIndent customBullet">
                <li>DAO members vote on proposals by staking $KARD.</li>
              </ul>
            </li>
            <li>
              <strong>Threshold Votes:</strong>
              <ul className="customIndent customBullet">
                <li>
                  Proposals must meet a predefined threshold (80% of the DAO) to
                  be approved.
                </li>
                <li>
                  Threshold requirements ensure significant support from the DAO
                  community before implementation.
                </li>
              </ul>
            </li>
            <li>
              <strong>Votes:</strong>
              <ul className="customIndent customBullet">
                <li>
                  Proposals must pass a threshold of 50% of the $KARD supply + 1
                  $KARD.
                </li>
              </ul>
            </li>
          </ul>
        </p>{' '}
        <h2 className="font-diabloHeavy text-2xl text-text-secondary ">
          Rewards
        </h2>
        <p>
          Earn $KARD by coming up with novel strategies to impact industry
          processes and offering them as patents (earn royalties with real use
          cases that you build in the game) licensed under the UDL. each player
          is an autonomous entity under the DAO. When royalties are payed to the
          player, the DAO takes a cut of the royalties generated by that player
          and distributes it to the DAO members as a reward for their
          participation in the DAO and maintaining the ecosystem.
        </p>
      </div>
    </div>
  );
}

export default About;
