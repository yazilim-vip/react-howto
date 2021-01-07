# react-howto
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
[Showcase](https://react-howto.yazilim.vip/showcase)
### Examples
* [Yazilim VIP HowTo Archive:](https://howto.yazilim.vip) 

## License

MIT © [Yazilim VIP](https://github.com/yazilim-vip/react-howto)
