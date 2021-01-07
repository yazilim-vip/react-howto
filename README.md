# react-howto

<!-- [![NPM](https://img.shields.io/npm/v/emresensen.svg)](https://www.npmjs.com/package/emresensen) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

## Install
Install with yarn
```yarn
npm install --save @yazilim-vip/react-howto
```
Install with npm
```bash
npm install --save @yazilim-vip/react-howto
```

## Usage

```tsx
import  from 'react'

import { HowToContainer } from '@yazilim-vip/react-howto'

export const  Example = () => (
    <HowToContainer
        rootCategory={howToData}
        requestedPath={requestedPath}
        events={{
            itemSelectEventHandler: (type, link) => {
                // handle item select event 
            }
        }}
    />
)
```

## License

MIT © [Yazilim VIP](https://github.com/yazilim-vip/react-howto)
