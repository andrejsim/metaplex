import { MetaState } from './types';

export const getEmptyMetaState = (): MetaState => ({
  metadata: [],
  metadataByMint: {},
  masterEditions: {},
  masterEditionsByPrintingMint: {},
  masterEditionsByOneTimeAuthMint: {},
  metadataByMasterEdition: {},
  editions: {},
  auctionManagersByAuction: {},
  bidRedemptions: {},
  auctions: {},
  auctionDataExtended: {},
  vaults: {},
  payoutTickets: {},
  store: null,
  whitelistedCreatorsByCreator: {},
  bidderMetadataByAuctionAndBidder: {},
  bidderPotsByAuctionAndBidder: {},
  safetyDepositBoxesByVaultAndIndex: {},
  prizeTrackingTickets: {},
  safetyDepositConfigsByAuctionManagerAndIndex: {},
  bidRedemptionV2sByAuctionManagerAndWinningIndex: {},
  stores: {},
  creators: {},
});