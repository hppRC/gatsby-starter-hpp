// please refer to this article: https://qiita.com/Takepepe/items/f66c7e2e1d22b431f148

import React from 'react';

declare module 'react' {
  type FCX<P = {}> = React.FunctionComponent<P & { className?: string }>;
}
