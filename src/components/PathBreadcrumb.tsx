import React, { FC } from 'react'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Breadcrumb } from 'react-bootstrap'
import { PathBreadcrumbProps, HowToItemType } from 'typings'

import { HOWTO_ITEM_TYPE_CATEGORY } from '../constants'

export const PathBreadcrumb: FC<PathBreadcrumbProps> = ({ items, events }: PathBreadcrumbProps) => {
    const publishItemSelectEvent = (type: HowToItemType, path: string) => {
        const itemSelectedEvent = events?.itemSelected
        if (itemSelectedEvent) {
            itemSelectedEvent(type, path)
        }
    }

    const getLink = (index: number) => {
        return '/howto/' + items.slice(0, index).join('/')
    }

    const breadcrumbItems = items.map((item, index) => {
        return (
            <Breadcrumb.Item
                key={item}
                active={index + 1 === items.length}
                onClick={() => publishItemSelectEvent(HOWTO_ITEM_TYPE_CATEGORY, getLink(index + 1))}
            >
                {item}
            </Breadcrumb.Item>
        )
    })

    return (
        <Breadcrumb>
            <Breadcrumb.Item key="root" onClick={() => publishItemSelectEvent(HOWTO_ITEM_TYPE_CATEGORY, '/howto')}>
                <span>
                    <FontAwesomeIcon icon={faHome} />
                </span>
            </Breadcrumb.Item>
            {breadcrumbItems}
        </Breadcrumb>
    )
}

PathBreadcrumb.defaultProps = {
    events: undefined
}
