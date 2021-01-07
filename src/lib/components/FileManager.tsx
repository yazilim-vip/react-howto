import React, { FC } from 'react'

import { faFileAlt, faFolder, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListGroup, Container, Col, Row } from 'react-bootstrap'

import { HOWTO_ITEM_TYPE_CATEGORY, HOWTO_VIEW_MODE_GRID_VIEW, HOWTO_VIEW_MODE_LIST_VIEW } from '../constants'
import { HowToItem } from '../models/HowToItem'
import { FileManagerProps, HowToItemType } from '../types'
import { TooltipElement } from './TooltipElement'

export const FileManager: FC<FileManagerProps> = ({
    viewMode,
    itemList,
    itemSelectedEventHandler
}: FileManagerProps) => {
    const getProps = (type: HowToItemType): { icon: IconDefinition; color: string } => {
        if (type === HOWTO_ITEM_TYPE_CATEGORY) {
            return {
                icon: faFolder,
                color: '#50a4d4'
            }
        } else {
            return {
                icon: faFileAlt,
                color: '#494d52'
            }
        }
    }

    return (
        <Container fluid>
            {viewMode === HOWTO_VIEW_MODE_LIST_VIEW && (
                <ListGroup>
                    {itemList?.map((item: HowToItem) => {
                        const props = getProps(item.type)
                        return (
                            <div
                                className="file-manager-item"
                                key={item.path}
                                onClick={() => {
                                    itemSelectedEventHandler(item.type, item.path)
                                }}
                            >
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={props.icon} className="mr-3" color={props.color} />
                                    {item.name}
                                </ListGroup.Item>
                            </div>
                        )
                    })}
                </ListGroup>
            )}
            {viewMode === HOWTO_VIEW_MODE_GRID_VIEW && (
                <Row>
                    {itemList?.map((item: HowToItem) => {
                        const props = getProps(item.type)
                        return (
                            <Col xs={4} sm={3} md={3} lg={2} className="py-4 text-center" key={item.path}>
                                <TooltipElement
                                    placement="bottom"
                                    tooltipElement={item.path.replace('/howto/', '').replace(/\//g, ' > ')}
                                >
                                    <div
                                        className="file-manager-item"
                                        onClick={() => {
                                            itemSelectedEventHandler(item.type, item.path)
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={props.icon}
                                            className="pb-1"
                                            size="4x"
                                            color={props.color}
                                        />
                                        <br />
                                        {item.name}
                                    </div>
                                </TooltipElement>
                            </Col>
                        )
                    })}
                </Row>
            )}
        </Container>
    )
}
