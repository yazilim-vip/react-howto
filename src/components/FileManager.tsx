import React, { FC } from 'react'

import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListGroup, Container, Col, Row } from 'react-bootstrap'

import { HOWTO_ITEM_TYPE_CATEGORY, HOWTO_VIEW_MODE_GRID_VIEW, HOWTO_VIEW_MODE_LIST_VIEW } from '../constants'
import { HowToItem } from '../models/HowToItem'
import { FileManagerViewMode, HowToComponentProps, HowToItemType } from '../types'
import { TooltipElement } from './TooltipElement'
export interface FileManagerProps extends HowToComponentProps {
    viewMode: FileManagerViewMode
    categoryList: Array<HowToItem> | null
    howToList: Array<HowToItem> | null
}

export const FileManager: FC<FileManagerProps> = ({ viewMode, categoryList, howToList, events }: FileManagerProps) => {
    const publishItemSelectEvent = (type: HowToItemType, path: string) => {
        const itemSelectedEvent = events?.itemSelected
        if (itemSelectedEvent) {
            itemSelectedEvent(type, path)
        }
    }

    const renderItems = (items: Array<HowToItem>) => {
        if (!items) {
            return null
        }

        return Object.keys(items).map((value: string, index: number) => {
            const howToItem = items[index]
            const howToItemType = howToItem.type

            const icon = howToItemType === HOWTO_ITEM_TYPE_CATEGORY ? faFolder : faFileAlt
            const color = howToItemType === HOWTO_ITEM_TYPE_CATEGORY ? '#50a4d4' : '#494d52'

            const name = howToItem.name
            const link = howToItem.path
            if (viewMode === HOWTO_VIEW_MODE_LIST_VIEW) {
                return (
                    <div
                        className="file-manager-item"
                        key={link}
                        onClick={() => {
                            publishItemSelectEvent(howToItemType, link)
                        }}
                    >
                        <ListGroup.Item>
                            <FontAwesomeIcon icon={icon} className="mr-3" color={color} />
                            {name}
                        </ListGroup.Item>
                    </div>
                )
            } else if (viewMode === HOWTO_VIEW_MODE_GRID_VIEW) {
                return (
                    <Col xs={4} sm={3} md={3} lg={2} className="py-4 text-center" key={link}>
                        <TooltipElement placement="bottom-end" tooltipElement={link}>
                            <div
                                className="file-manager-item"
                                onClick={() => {
                                    publishItemSelectEvent(howToItemType, link)
                                }}
                            >
                                <FontAwesomeIcon icon={icon} className="pb-1" size="4x" color={color} />
                                <br />
                                {name}
                            </div>
                        </TooltipElement>
                    </Col>
                )
            } else {
                return null
            }
        })
    }

    const categoryItems = (categoryList && renderItems(categoryList)) || undefined
    const howToItems = (howToList && renderItems(howToList)) || undefined
    return (
        <Container fluid>
            {viewMode === HOWTO_VIEW_MODE_LIST_VIEW && (
                <ListGroup>
                    {categoryItems}
                    {howToItems}
                </ListGroup>
            )}
            {viewMode === HOWTO_VIEW_MODE_GRID_VIEW && (
                <Row>
                    {categoryItems}
                    {howToItems}
                </Row>
            )}
        </Container>
    )
}

FileManager.defaultProps = {
    events: undefined
}
