import React from 'react';
import { KyberSwapWidget } from '@kyberswap/widgets';
import { Card } from './ui/Card';

const MEGA_TOKEN_ADDRESS = '0xc06bF3589345A81f0C2845E4Db76bdb64BBBbc9D';

export default function SwapWidget() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <KyberSwapWidget
        theme={{
          primary: '#00F0FF',
          secondary: '#000F2E',
          text: '#FFFFFF',
          subText: '#9CA3AF',
          interactive: '#1F2937',
          dialog: '#000F2E',
          stroke: '#374151',
        }}
        tokenList={[
          {
            address: MEGA_TOKEN_ADDRESS,
            chainId: 1,
            name: 'MEGA',
            symbol: 'MEGA',
            decimals: 18,
          }
        ]}
        defaultTokenOut={MEGA_TOKEN_ADDRESS}
        width="100%"
        height="460px"
        enableRoute={true}
        enableTokenInfo={true}
        feeSetting={{
          feeAmount: 0,
          feeReceiver: '',
          chargeFeeBy: 'currency_in',
        }}
      />
    </Card>
  );
}