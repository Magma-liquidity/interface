import { ChainId } from '@aave/contract-helpers';
import {
  // AaveV2Avalanche,
  AaveV2Ethereum,
  // AaveV2EthereumAMM,
  // AaveV2Fuji,
  // AaveV2Polygon,
  // AaveV3Arbitrum,
  // AaveV3ArbitrumSepolia,
  // AaveV3Avalanche,
  // AaveV3Base,
  // AaveV3BaseSepolia,
  // AaveV3BNB,
  AaveV3Ethereum,
  // AaveV3Fantom,
  // AaveV3FantomTestnet,
  // AaveV3Fuji,
  // AaveV3Gnosis,
  // AaveV3Harmony,
  // AaveV3Metis,
  // AaveV3Optimism,
  // AaveV3OptimismSepolia,
  // AaveV3Polygon,
  // AaveV3Scroll,
  // AaveV3ScrollSepolia,
  // AaveV3Sepolia,
  // AaveV3Magma
} from '@bgd-labs/aave-address-book';

import { ReactNode } from 'react';

// Enable for premissioned market
// import { PermissionView } from 'src/components/transactions/FlowCommons/PermissionView';
export type MarketDataType = {
  v3?: boolean;
  marketTitle: string;
  market: CustomMarket;
  // the network the market operates on
  chainId: ChainId;
  enabledFeatures?: {
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
    debtSwitch?: boolean;
    withdrawAndSwitch?: boolean;
    switch?: boolean;
  };
  permitDisabled?: boolean; // intended to be used for testnets
  isFork?: boolean;
  permissionComponent?: ReactNode;
  disableCharts?: boolean;
  subgraphUrl?: string;
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    DEBT_SWITCH_ADAPTER?: string;
    WITHDRAW_SWITCH_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    WALLET_BALANCE_PROVIDER: string;
    L2_ENCODER?: string;
    UI_POOL_DATA_PROVIDER: string;
    UI_INCENTIVE_DATA_PROVIDER?: string;
    COLLECTOR?: string;
    V3_MIGRATOR?: string;
    GHO_TOKEN_ADDRESS?: string;
    GHO_UI_DATA_PROVIDER?: string;
  };
  /**
   * https://www.hal.xyz/ has integrated aave for healtfactor warning notification
   * the integration doesn't follow aave market naming & only supports a subset of markets.
   * When a halIntegration is specified a link to hal will be displayed on the ui.
   */
  halIntegration?: {
    URL: string;
    marketName: string;
  };
};
export enum CustomMarket {
  // v3 test networks, all v3.0.1
  // proto_arbitrum_sepolia_v3 = 'proto_arbitrum_sepolia_v3',
  // proto_fantom_testnet_v3 = 'proto_fantom_testnet_v3',
  // proto_fuji_v3 = 'proto_fuji_v3',
  // proto_optimism_sepolia_v3 = 'proto_optimism_sepolia_v3',
  // proto_scroll_sepolia_v3 = 'proto_scroll_sepolia_v3',
  // proto_sepolia_v3 = 'proto_sepolia_v3',
  // proto_base_sepolia_v3 = 'proto_base_sepolia_v3',
  // // v3 mainnets
  proto_mainnet_v3 = 'proto_mainnet_v3',
  // proto_optimism_v3 = 'proto_optimism_v3',
  proto_magma_v3 = 'proto_magma_v3',

  // proto_fantom_v3 = 'proto_fantom_v3',
  // proto_harmony_v3 = 'proto_harmony_v3',
  // proto_avalanche_v3 = 'proto_avalanche_v3',
  // proto_polygon_v3 = 'proto_polygon_v3',
  // proto_arbitrum_v3 = 'proto_arbitrum_v3',
  // proto_metis_v3 = 'proto_metis_v3',
  // proto_base_v3 = 'proto_base_v3',
  // proto_gnosis_v3 = 'proto_gnosis_v3',
  // proto_bnb_v3 = 'proto_bnb_v3',
  // proto_scroll_v3 = 'proto_scroll_v3',
  // // v2
  proto_mainnet = 'proto_mainnet',
  // proto_avalanche = 'proto_avalanche',
  // proto_fuji = 'proto_fuji',
  // proto_polygon = 'proto_polygon',
  // amm_mainnet = 'amm_mainnet',
  // external
  // permissioned_market = 'permissioned_market',
}

export const marketsData: {
  [key in keyof typeof CustomMarket]: MarketDataType;
} = {
  [CustomMarket.proto_mainnet_v3]: {
    marketTitle: 'Ethereum',
    market: CustomMarket.proto_mainnet_v3,
    chainId: ChainId.mainnet,
    v3: true,
    enabledFeatures: {
      governance: true,
      staking: true,
      liquiditySwap: true,
      collateralRepay: true,
      incentives: true,
      withdrawAndSwitch: true,
      debtSwitch: true,
      switch: true,
    },
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3',
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: AaveV3Ethereum.POOL,
      WETH_GATEWAY: AaveV3Ethereum.WETH_GATEWAY,
      REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
      SWAP_COLLATERAL_ADAPTER: AaveV3Ethereum.SWAP_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: AaveV3Ethereum.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: AaveV3Ethereum.COLLECTOR,
      GHO_TOKEN_ADDRESS: AaveV3Ethereum.ASSETS.GHO.UNDERLYING,
      GHO_UI_DATA_PROVIDER: AaveV3Ethereum.UI_GHO_DATA_PROVIDER,
      WITHDRAW_SWITCH_ADAPTER: AaveV3Ethereum.WITHDRAW_SWAP_ADAPTER,
      DEBT_SWITCH_ADAPTER: AaveV3Ethereum.DEBT_SWAP_ADAPTER,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
      marketName: 'aavev3',
    },
  },
  [CustomMarket.proto_mainnet]: {
    marketTitle: 'Ethereum',
    market: CustomMarket.proto_mainnet,
    chainId: ChainId.mainnet,
    enabledFeatures: {
      governance: true,
      staking: true,
      liquiditySwap: true,
      collateralRepay: true,
      incentives: true,
      debtSwitch: true,
      switch: true,
    },
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: AaveV2Ethereum.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: AaveV2Ethereum.POOL,
      WETH_GATEWAY: AaveV2Ethereum.WETH_GATEWAY,
      REPAY_WITH_COLLATERAL_ADAPTER: AaveV2Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
      SWAP_COLLATERAL_ADAPTER: AaveV2Ethereum.SWAP_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: AaveV2Ethereum.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: AaveV2Ethereum.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: AaveV2Ethereum.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: AaveV2Ethereum.COLLECTOR,
      V3_MIGRATOR: AaveV2Ethereum.MIGRATION_HELPER,
      DEBT_SWITCH_ADAPTER: AaveV2Ethereum.DEBT_SWAP_ADAPTER,
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
      marketName: 'aavev2',
    },
  },
  // [CustomMarket.permissioned_market]: {
  //   marketTitle: 'Ethereum Permissioned Market example',
  //   chainId: ChainId.mainnet,
  //   enabledFeatures: {
  //     // liquiditySwap: true,
  //     // collateralRepay: true,
  //     // incentives: true,
  //     permissions: true,
  //   },
  //   permissionComponent: <PermissionView />,
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: markets..POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: markets..POOL,
  //     WETH_GATEWAY: markets..WETH_GATEWAY,
  //     // REPAY_WITH_COLLATERAL_ADAPTER: markets..REPAY_WITH_COLLATERAL_ADAPTER,
  //     // SWAP_COLLATERAL_ADAPTER: markets..SWAP_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: markets..WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: markets..UI_POOL_DATA_PROVIDER,
  //     // UI_INCENTIVE_DATA_PROVIDER: markets..UI_INCENTIVE_DATA_PROVIDER,
  //     PERMISSION_MANAGER: '<address here>',
  //   },
  // },
  // [CustomMarket.amm_mainnet]: {
  //   marketTitle: 'Ethereum AMM',
  //   market: CustomMarket.amm_mainnet,
  //   chainId: ChainId.mainnet,
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV2EthereumAMM.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV2EthereumAMM.POOL,
  //     WETH_GATEWAY: AaveV2EthereumAMM.WETH_GATEWAY,
  //     WALLET_BALANCE_PROVIDER: AaveV2EthereumAMM.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV2EthereumAMM.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV2EthereumAMM.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV2EthereumAMM.COLLECTOR,
  //     V3_MIGRATOR: AaveV2EthereumAMM.MIGRATION_HELPER,
  //   },
  // },
  // [CustomMarket.proto_polygon]: {
  //   marketTitle: 'Polygon',
  //   market: CustomMarket.proto_polygon,
  //   chainId: ChainId.polygon,
  //   enabledFeatures: {
  //     liquiditySwap: true,
  //     incentives: true,
  //     collateralRepay: true,
  //     debtSwitch: true,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV2Polygon.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV2Polygon.POOL,
  //     WETH_GATEWAY: AaveV2Polygon.WETH_GATEWAY,
  //     SWAP_COLLATERAL_ADAPTER: AaveV2Polygon.SWAP_COLLATERAL_ADAPTER,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV2Polygon.REPAY_WITH_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: AaveV2Polygon.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV2Polygon.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV2Polygon.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV2Polygon.COLLECTOR,
  //     V3_MIGRATOR: AaveV2Polygon.MIGRATION_HELPER,
  //     DEBT_SWITCH_ADAPTER: AaveV2Polygon.DEBT_SWAP_ADAPTER,
  //   },
  //   halIntegration: {
  //     URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
  //     marketName: 'aavepolygon',
  //   },
  // },
  // [CustomMarket.proto_avalanche]: {
  //   marketTitle: 'Avalanche',
  //   market: CustomMarket.proto_avalanche,
  //   chainId: ChainId.avalanche,
  //   enabledFeatures: {
  //     liquiditySwap: true,
  //     incentives: true,
  //     collateralRepay: true,
  //     debtSwitch: true,
  //     switch: true,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2-avalanche',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV2Avalanche.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV2Avalanche.POOL,
  //     WETH_GATEWAY: AaveV2Avalanche.WETH_GATEWAY,
  //     SWAP_COLLATERAL_ADAPTER: AaveV2Avalanche.SWAP_COLLATERAL_ADAPTER,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV2Avalanche.REPAY_WITH_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: AaveV2Avalanche.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV2Avalanche.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV2Avalanche.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV2Avalanche.COLLECTOR,
  //     V3_MIGRATOR: AaveV2Avalanche.MIGRATION_HELPER,
  //     DEBT_SWITCH_ADAPTER: AaveV2Avalanche.DEBT_SWAP_ADAPTER,
  //   },
  //   halIntegration: {
  //     URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
  //     marketName: 'aaveavalanche',
  //   },
  // },
  // v3
  // [CustomMarket.proto_sepolia_v3]: {
  //   marketTitle: 'Ethereum Sepolia',
  //   market: CustomMarket.proto_sepolia_v3,
  //   v3: true,
  //   chainId: ChainId.sepolia,
  //   enabledFeatures: {
  //     faucet: true,
  //   },
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Sepolia.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Sepolia.POOL,
  //     WETH_GATEWAY: AaveV3Sepolia.WETH_GATEWAY,
  //     FAUCET: AaveV3Sepolia.FAUCET,
  //     WALLET_BALANCE_PROVIDER: AaveV3Sepolia.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Sepolia.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Sepolia.UI_INCENTIVE_DATA_PROVIDER,
  //     GHO_TOKEN_ADDRESS: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
  //     GHO_UI_DATA_PROVIDER: '0x69B9843A16a6E9933125EBD97659BA3CCbE2Ef8A',
  //   },
  // },
  // [CustomMarket.proto_base_v3]: {
  //   marketTitle: 'Base',
  //   market: CustomMarket.proto_base_v3,
  //   v3: true,
  //   chainId: ChainId.base,
  //   enabledFeatures: {
  //     incentives: true,
  //     liquiditySwap: true,
  //     withdrawAndSwitch: true,
  //     collateralRepay: true,
  //     debtSwitch: true,
  //     switch: true,
  //   },
  //   // TODO: Need subgraph, currently not supported
  //   // subgraphUrl: '',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Base.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Base.POOL,
  //     WETH_GATEWAY: AaveV3Base.WETH_GATEWAY,
  //     WALLET_BALANCE_PROVIDER: AaveV3Base.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Base.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Base.UI_INCENTIVE_DATA_PROVIDER,
  //     L2_ENCODER: AaveV3Base.L2_ENCODER,
  //     COLLECTOR: AaveV3Base.COLLECTOR,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Base.REPAY_WITH_COLLATERAL_ADAPTER,
  //     SWAP_COLLATERAL_ADAPTER: AaveV3Base.SWAP_COLLATERAL_ADAPTER,
  //     // WALLET_BALANCE_PROVIDER: AaveV2Ethereum.WALLET_BALANCE_PROVIDER,
  //     WITHDRAW_SWITCH_ADAPTER: AaveV3Base.WITHDRAW_SWAP_ADAPTER,
  //     DEBT_SWITCH_ADAPTER: AaveV3Base.DEBT_SWAP_ADAPTER,
  //   },
  // },
  // [CustomMarket.proto_arbitrum_sepolia_v3]: {
  //   marketTitle: 'Arbitrum Sepolia',
  //   market: CustomMarket.proto_arbitrum_sepolia_v3,
  //   v3: true,
  //   permitDisabled: true,
  //   chainId: ChainId.arbitrum_sepolia,
  //   //subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-arbitrum-goerli',  needs re-deployment
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3ArbitrumSepolia.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3ArbitrumSepolia.POOL,
  //     WETH_GATEWAY: AaveV3ArbitrumSepolia.WETH_GATEWAY,
  //     // FAUCET: AaveV3ArbitrumSepolia.FAUCET,
  //     WALLET_BALANCE_PROVIDER: AaveV3ArbitrumSepolia.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3ArbitrumSepolia.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3ArbitrumSepolia.UI_INCENTIVE_DATA_PROVIDER,
  //     L2_ENCODER: AaveV3ArbitrumSepolia.L2_ENCODER,
  //   },
  // },

  // [CustomMarket.proto_arbitrum_v3]: {
  //   marketTitle: 'Arbitrum',
  //   market: CustomMarket.proto_arbitrum_v3,
  //   v3: true,
  //   chainId: ChainId.arbitrum_one,
  //   enabledFeatures: {
  //     incentives: true,
  //     liquiditySwap: true,
  //     collateralRepay: true,
  //     debtSwitch: true,
  //     withdrawAndSwitch: true,
  //     switch: true,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-arbitrum',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Arbitrum.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Arbitrum.POOL,
  //     WETH_GATEWAY: AaveV3Arbitrum.WETH_GATEWAY,
  //     WALLET_BALANCE_PROVIDER: AaveV3Arbitrum.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Arbitrum.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Arbitrum.UI_INCENTIVE_DATA_PROVIDER,
  //     L2_ENCODER: AaveV3Arbitrum.L2_ENCODER,
  //     COLLECTOR: AaveV3Arbitrum.COLLECTOR,
  //     SWAP_COLLATERAL_ADAPTER: AaveV3Arbitrum.SWAP_COLLATERAL_ADAPTER,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Arbitrum.REPAY_WITH_COLLATERAL_ADAPTER,
  //     DEBT_SWITCH_ADAPTER: AaveV3Arbitrum.DEBT_SWAP_ADAPTER,
  //     WITHDRAW_SWITCH_ADAPTER: AaveV3Arbitrum.WITHDRAW_SWAP_ADAPTER,
  //   },
  //   halIntegration: {
  //     URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
  //     marketName: 'arbitrum',
  //   },
  // },
  // [CustomMarket.proto_base_sepolia_v3]: {
  //   marketTitle: 'Base Sepolia',
  //   market: CustomMarket.proto_arbitrum_sepolia_v3,
  //   v3: true,
  //   permitDisabled: true,
  //   chainId: ChainId.base_sepolia,
  //   //subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-arbitrum-goerli',  needs re-deployment
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3BaseSepolia.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3BaseSepolia.POOL,
  //     WETH_GATEWAY: AaveV3BaseSepolia.WETH_GATEWAY,
  //     // FAUCET: AaveV3ArbitrumSepolia.FAUCET,
  //     WALLET_BALANCE_PROVIDER: AaveV3BaseSepolia.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3BaseSepolia.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3BaseSepolia.UI_INCENTIVE_DATA_PROVIDER,
  //     L2_ENCODER: AaveV3BaseSepolia.L2_ENCODER,
  //   },
  // },
  // [CustomMarket.proto_avalanche_v3]: {
  //   marketTitle: 'Avalanche',
  //   market: CustomMarket.proto_avalanche_v3,
  //   v3: true,
  //   chainId: ChainId.avalanche,
  //   enabledFeatures: {
  //     liquiditySwap: true,
  //     incentives: true,
  //     collateralRepay: true,
  //     debtSwitch: true,
  //     withdrawAndSwitch: true,
  //     switch: true,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-avalanche',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Avalanche.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Avalanche.POOL,
  //     WETH_GATEWAY: AaveV3Avalanche.WETH_GATEWAY,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Avalanche.REPAY_WITH_COLLATERAL_ADAPTER,
  //     SWAP_COLLATERAL_ADAPTER: AaveV3Avalanche.SWAP_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: AaveV3Avalanche.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Avalanche.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Avalanche.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3Avalanche.COLLECTOR,
  //     DEBT_SWITCH_ADAPTER: AaveV3Avalanche.DEBT_SWAP_ADAPTER,
  //     WITHDRAW_SWITCH_ADAPTER: AaveV3Avalanche.WITHDRAW_SWAP_ADAPTER,
  //   },
  //   halIntegration: {
  //     URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
  //     marketName: 'avalanche',
  //   },
  // },
  // [CustomMarket.proto_fuji_v3]: {
  //   marketTitle: 'Avalanche Fuji',
  //   market: CustomMarket.proto_fuji_v3,
  //   v3: true,
  //   chainId: ChainId.fuji,
  //   enabledFeatures: {
  //     faucet: true,
  //     incentives: true,
  //   },
  //   //  subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-fuji',  needs re-deployment
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Fuji.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Fuji.POOL,
  //     WETH_GATEWAY: AaveV3Fuji.WETH_GATEWAY,
  //     FAUCET: AaveV3Fuji.FAUCET,
  //     WALLET_BALANCE_PROVIDER: AaveV3Fuji.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Fuji.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Fuji.UI_INCENTIVE_DATA_PROVIDER,
  //   },
  // },
  // [CustomMarket.proto_optimism_sepolia_v3]: {
  //   marketTitle: 'Optimism Sepolia',
  //   market: CustomMarket.proto_optimism_sepolia_v3,
  //   v3: true,
  //   permitDisabled: true,
  //   chainId: ChainId.optimism_sepolia,
  //   // subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-optimism-goerli',  needs re-deployment
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3OptimismSepolia.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3OptimismSepolia.POOL,
  //     WETH_GATEWAY: AaveV3OptimismSepolia.WETH_GATEWAY,
  //     // FAUCET: AaveV3OptimismSepolia.FAUCET,
  //     WALLET_BALANCE_PROVIDER: AaveV3OptimismSepolia.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3OptimismSepolia.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3OptimismSepolia.UI_INCENTIVE_DATA_PROVIDER,
  //     L2_ENCODER: AaveV3OptimismSepolia.L2_ENCODER,
  //   },
  // },
  // [CustomMarket.proto_scroll_sepolia_v3]: {
  //   marketTitle: 'Scroll Sepolia',
  //   market: CustomMarket.proto_scroll_sepolia_v3,
  //   v3: true,
  //   chainId: ChainId.scroll_sepolia,
  //   enabledFeatures: {
  //     faucet: true,
  //     incentives: true,
  //   },
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3ScrollSepolia.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3ScrollSepolia.POOL,
  //     WETH_GATEWAY: AaveV3ScrollSepolia.WETH_GATEWAY,
  //     FAUCET: AaveV3ScrollSepolia.FAUCET,
  //     WALLET_BALANCE_PROVIDER: AaveV3ScrollSepolia.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3ScrollSepolia.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3ScrollSepolia.UI_INCENTIVE_DATA_PROVIDER,
  //     L2_ENCODER: AaveV3ScrollSepolia.L2_ENCODER,
  //   },
  // },


  
  // [CustomMarket.proto_fantom_v3]: {
  //   marketTitle: 'Fantom',
  //   market: CustomMarket.proto_fantom_v3,
  //   v3: true,
  //   chainId: ChainId.fantom,
  //   enabledFeatures: {
  //     incentives: true,
  //     collateralRepay: true,
  //     liquiditySwap: true,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-fantom',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Fantom.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Fantom.POOL,
  //     WETH_GATEWAY: AaveV3Fantom.WETH_GATEWAY,
  //     SWAP_COLLATERAL_ADAPTER: AaveV3Fantom.SWAP_COLLATERAL_ADAPTER,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Fantom.REPAY_WITH_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: AaveV3Fantom.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Fantom.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Fantom.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3Fantom.COLLECTOR,
  //   },
  //   halIntegration: {
  //     URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
  //     marketName: 'fantom',
  //   },
  // },
  // [CustomMarket.proto_fantom_testnet_v3]: {
  //   marketTitle: 'Fantom Testnet',
  //   market: CustomMarket.proto_fantom_testnet_v3,
  //   v3: true,
  //   chainId: ChainId.fantom_testnet,
  //   enabledFeatures: {
  //     faucet: true,
  //     incentives: true,
  //   },
  //   // subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-fantom-testnet',  needs re-deployment
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3FantomTestnet.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3FantomTestnet.POOL,
  //     WETH_GATEWAY: AaveV3FantomTestnet.WETH_GATEWAY,
  //     FAUCET: AaveV3FantomTestnet.FAUCET,
  //     WALLET_BALANCE_PROVIDER: AaveV3FantomTestnet.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3FantomTestnet.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3FantomTestnet.UI_INCENTIVE_DATA_PROVIDER,
  //   },
  // },
  // [CustomMarket.proto_harmony_v3]: {
  //   marketTitle: 'Harmony',
  //   market: CustomMarket.proto_harmony_v3,
  //   v3: true,
  //   chainId: ChainId.harmony,
  //   enabledFeatures: {
  //     incentives: false,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-harmony',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Harmony.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Harmony.POOL,
  //     WETH_GATEWAY: AaveV3Harmony.WETH_GATEWAY,
  //     WALLET_BALANCE_PROVIDER: AaveV3Harmony.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Harmony.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Harmony.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3Harmony.COLLECTOR,
  //   },
  // },
  // [CustomMarket.proto_optimism_v3]: {
  //   marketTitle: 'Optimism',
  //   market: CustomMarket.proto_optimism_v3,
  //   v3: true,
  //   chainId: ChainId.optimism,
  //   enabledFeatures: {
  //     incentives: true,
  //     collateralRepay: true,
  //     liquiditySwap: true,
  //     debtSwitch: true,
  //     withdrawAndSwitch: true,
  //     switch: true,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-optimism',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Optimism.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Optimism.POOL,
  //     WETH_GATEWAY: AaveV3Optimism.WETH_GATEWAY,
  //     WALLET_BALANCE_PROVIDER: AaveV3Optimism.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Optimism.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Optimism.UI_INCENTIVE_DATA_PROVIDER,
  //     L2_ENCODER: AaveV3Optimism.L2_ENCODER,
  //     COLLECTOR: AaveV3Optimism.COLLECTOR,
  //     SWAP_COLLATERAL_ADAPTER: AaveV3Optimism.SWAP_COLLATERAL_ADAPTER,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Optimism.REPAY_WITH_COLLATERAL_ADAPTER,
  //     DEBT_SWITCH_ADAPTER: AaveV3Optimism.DEBT_SWAP_ADAPTER,
  //     WITHDRAW_SWITCH_ADAPTER: AaveV3Optimism.WITHDRAW_SWAP_ADAPTER,
  //   },
  // },
  // [CustomMarket.proto_polygon_v3]: {
  //   marketTitle: 'Polygon',
  //   market: CustomMarket.proto_polygon_v3,
  //   chainId: ChainId.polygon,
  //   v3: true,
  //   enabledFeatures: {
  //     liquiditySwap: true,
  //     incentives: true,
  //     collateralRepay: true,
  //     debtSwitch: true,
  //     withdrawAndSwitch: true,
  //     switch: true,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-polygon',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Polygon.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Polygon.POOL,
  //     WETH_GATEWAY: AaveV3Polygon.WETH_GATEWAY,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Polygon.REPAY_WITH_COLLATERAL_ADAPTER,
  //     SWAP_COLLATERAL_ADAPTER: AaveV3Polygon.SWAP_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: AaveV3Polygon.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Polygon.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Polygon.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3Polygon.COLLECTOR,
  //     DEBT_SWITCH_ADAPTER: AaveV3Polygon.DEBT_SWAP_ADAPTER,
  //     WITHDRAW_SWITCH_ADAPTER: AaveV3Polygon.WITHDRAW_SWAP_ADAPTER,
  //   },
  //   halIntegration: {
  //     URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
  //     marketName: 'polygon',
  //   },
  // },
  // [CustomMarket.proto_fuji]: {
  //   marketTitle: 'Avalanche Fuji',
  //   market: CustomMarket.proto_fuji,
  //   chainId: ChainId.fuji,
  //   enabledFeatures: {
  //     faucet: true,
  //     incentives: true,
  //   },
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2-fuji',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV2Fuji.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV2Fuji.POOL,
  //     WETH_GATEWAY: AaveV2Fuji.WETH_GATEWAY,
  //     FAUCET: AaveV2Fuji.FAUCET,
  //     WALLET_BALANCE_PROVIDER: AaveV2Fuji.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV2Fuji.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV2Fuji.UI_INCENTIVE_DATA_PROVIDER,
  //   },
  // },
  // [CustomMarket.proto_metis_v3]: {
  //   marketTitle: 'Metis',
  //   market: CustomMarket.proto_metis_v3,
  //   chainId: ChainId.metis_andromeda,
  //   v3: true,
  //   enabledFeatures: {
  //     incentives: true,
  //   },
  //   subgraphUrl: 'https://metisapi.0xgraph.xyz/subgraphs/name/aave/protocol-v3-metis',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Metis.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Metis.POOL,
  //     WETH_GATEWAY: '0x0', // not applicable for Metis
  //     WALLET_BALANCE_PROVIDER: AaveV3Metis.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Metis.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Metis.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3Metis.COLLECTOR,
  //   },
  //   halIntegration: {
  //     URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
  //     marketName: 'polygon',
  //   },
  // },
  // [CustomMarket.proto_gnosis_v3]: {
  //   marketTitle: 'Gnosis',
  //   market: CustomMarket.proto_gnosis_v3,
  //   chainId: ChainId.xdai,
  //   v3: true,
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-gnosis',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Gnosis.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Gnosis.POOL,
  //     WETH_GATEWAY: AaveV3Gnosis.WETH_GATEWAY,
  //     WALLET_BALANCE_PROVIDER: AaveV3Gnosis.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Gnosis.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Gnosis.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3Gnosis.COLLECTOR,
  //   },
  // },
  // [CustomMarket.proto_bnb_v3]: {
  //   marketTitle: 'BNB Chain',
  //   market: CustomMarket.proto_bnb_v3,
  //   chainId: ChainId.bnb,
  //   v3: true,
  //   subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-bnb',
  //   enabledFeatures: {
  //     liquiditySwap: true,
  //     collateralRepay: true,
  //     debtSwitch: true,
  //     withdrawAndSwitch: true,
  //     switch: true,
  //   },
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3BNB.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3BNB.POOL,
  //     WETH_GATEWAY: AaveV3BNB.WETH_GATEWAY,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV3BNB.REPAY_WITH_COLLATERAL_ADAPTER,
  //     SWAP_COLLATERAL_ADAPTER: AaveV3BNB.SWAP_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: AaveV3BNB.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3BNB.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3BNB.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3BNB.COLLECTOR,
  //     DEBT_SWITCH_ADAPTER: AaveV3BNB.DEBT_SWAP_ADAPTER,
  //     WITHDRAW_SWITCH_ADAPTER: AaveV3BNB.WITHDRAW_SWAP_ADAPTER,
  //   },
  // },
  // [CustomMarket.proto_scroll_v3]: {
  //   marketTitle: 'Scroll',
  //   market: CustomMarket.proto_scroll_v3,
  //   chainId: ChainId.scroll,
  //   v3: true,
  //   subgraphUrl:
  //     'https://api.goldsky.com/api/public/project_clk74pd7lueg738tw9sjh79d6/subgraphs/aave-v3-scroll/1.0.0/gn',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Scroll.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Scroll.POOL,
  //     WETH_GATEWAY: AaveV3Scroll.WETH_GATEWAY,
  //     WALLET_BALANCE_PROVIDER: AaveV3Scroll.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Scroll.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Scroll.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3Scroll.COLLECTOR,
  //   },
  // },


  [CustomMarket.proto_magma_v3]: {
    marketTitle: 'Magma',
    market: CustomMarket.proto_magma_v3,
    v3: true,
  
    chainId: 6969696969,
    enabledFeatures: {
      faucet: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0x7d3087231F11ca4c00f4b7aF7383413626FC7B00',
      LENDING_POOL: '0x27b469f2407cEf758Ca4Aa25Bd5E4382A44b121D',
      WETH_GATEWAY: '0x9befb15F9143914d771F9790F9d063E5f7fb7b17',
      // FAUCET: '0x2a5F1543641D12B8d76BfA94865867922B6B7b8E',
      WALLET_BALANCE_PROVIDER:'0x38D87783f45862b45007eB3287184fc5766b57CD',
      UI_POOL_DATA_PROVIDER: '0x61D024179861027eB7193B501673cbf252500297',
      UI_INCENTIVE_DATA_PROVIDER: '0x8366e50C1B597fB70ea067F91057Ee73C02Bf3aF',
      // L2_ENCODER: AaveV3Magma.L2_ENCODER,
    },
  },
} as const;
