import React, { FC, useState } from 'react'

import { Alert, Container, Row, Col, FormControl, Badge } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

import { HOWTO_DEFAULT_VIEW_MODE, HOWTO_ITEM_TYPE_CATEGORY, HOWTO_ITEM_TYPE_HOWTO } from '../constants'
import { HowToItem } from '../models/HowToItem'
import { SearchResult } from '../models/SearchResult'
import { HowToContainerProps, FileManagerViewMode } from '../types'
import { createSearchIndex } from '../utils/createSearchIndex'
import { parsePathAndSetContent } from '../utils/parsePathAndSetContent'
import { searchArchive } from '../utils/searchArchive'
import { toggleFmViewMode } from '../utils/toggleFmViewMode'
import { FileManager } from './FileManager'
import { PathBreadcrumb } from './PathBreadcrumb'
import { ViewModeChanger } from './ViewModeChanger'

import './HowToContainer.css'

export const HowToContainer: FC<HowToContainerProps> = ({
    rootCategory,
    requestedPath,
    viewMode,
    events
}: HowToContainerProps) => {
    // states
    const [searchResult, setSearchResult] = useState<SearchResult | null>(null)
    const [fmViewMode, setFmViewMode] = useState<FileManagerViewMode>(viewMode)

    // constants
    const searchIndex = createSearchIndex(rootCategory)
    const parsedUrl = parsePathAndSetContent(rootCategory, requestedPath)

    // events
    const viewModeToggleEventHandler = () => {
        if (events.viewModeToggleEventHandler) {
            events.viewModeToggleEventHandler()
        } else {
            const newViewMode = toggleFmViewMode(fmViewMode)
            // console.log(fmViewMode)
            setFmViewMode(newViewMode)
        }
    }

    // helpers
    const showError = (errMsg: string | JSX.Element) => (
        <Container>
            <Alert key={1} variant="danger">
                {errMsg}
            </Alert>
        </Container>
    )

    if (!parsedUrl.categoryFoundFlag) {
        const beutifiedPath = parsedUrl.folderPath.replace('/howto/', '')
        return showError(
            <div>
                Category <b>{beutifiedPath + ' '}</b>
                not found in path.
                <br />
                <div onClick={() => events.itemSelectEventHandler(HOWTO_ITEM_TYPE_CATEGORY, '/howto')}>
                    Go to root directory
                </div>
            </div>
        )
    }

    const selectedCategory = parsedUrl?.parsedContent?.selectedCategory

    //TODO: move them to util class
    const getFileMagnerCategoryItemList = (): Array<HowToItem> => {
        if (!selectedCategory) {
            return []
        }
        const categoryList = selectedCategory.subCategoryList
        return Object.keys(categoryList).map((catName) => {
            const category = categoryList[catName]
            return {
                name: category.name,
                path: `${parsedUrl.folderPath}/${category.name}`,
                type: HOWTO_ITEM_TYPE_CATEGORY
            }
        })
    }
    const getFileMagnerHowToItemList = (): Array<HowToItem> => {
        if (!selectedCategory) {
            return []
        }
        const howToList = selectedCategory.howtoList
        return Object.keys(howToList).map((howToName) => {
            const howTo = howToList[howToName]
            return {
                name: howTo.label,
                path: `${parsedUrl.folderPath}/${howTo.label}`,
                type: HOWTO_ITEM_TYPE_HOWTO
            }
        })
    }

    const pathBreadcrumElements = parsedUrl.categoryNames
    if (parsedUrl.selectedHowtoName) {
        pathBreadcrumElements.push(parsedUrl.selectedHowtoName)
    }

    return (
        <div>
            <Row>
                <Col md="7">
                    <PathBreadcrumb
                        items={pathBreadcrumElements}
                        itemSelectEventHandler={events.itemSelectEventHandler}
                    />
                    {searchResult !== null && (
                        <div className="search-result-div">
                            <span className="mr-3">Search Result for :</span>
                            <Badge pill variant="dark">
                                {searchResult.query}
                            </Badge>
                        </div>
                    )}
                </Col>
                <Col md="2" sm="3" className="mb-2 mb-sm-0">
                    <div className="d-flex bd-highlight mb-3">
                        <div className="ml-auto mr-4"></div>

                        {!parsedUrl.howtoSelectedFlag && (
                            <ViewModeChanger
                                viewMode={fmViewMode}
                                viewModeToggleEventHandler={viewModeToggleEventHandler}
                            />
                        )}
                    </div>
                </Col>
                <Col md="3" sm="9">
                    <FormControl
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                        value={searchResult ? searchResult.query : ''}
                        onChange={(event) => {
                            const searchQuery = event.target.value
                            if (searchQuery) {
                                const searchResult = searchArchive(searchIndex, searchQuery)
                                setSearchResult(searchResult)
                            } else {
                                setSearchResult(null)
                            }
                        }}
                    />
                </Col>
            </Row>
            <hr />
            {!searchResult && parsedUrl.howtoSelectedFlag && !parsedUrl.howToFoundFlag && (
                <Alert key={1} variant="danger">
                    <b>Whopps {parsedUrl.selectedHowtoName}</b> not found in <b>{selectedCategory?.name}</b> folder.
                    <br />
                    {/* <Link to={parsedUrl.folderPath}>Go to {selectedCategory?.name} category</Link> */}
                </Alert>
            )}
            {!searchResult && parsedUrl.howToFoundFlag ? (
                <ReactMarkdown source={parsedUrl?.parsedContent?.selectedHowto?.markdownContent} />
            ) : (
                <FileManager
                    itemSelectedEventHandler={events.itemSelectEventHandler}
                    viewMode={fmViewMode}
                    categoryList={searchResult ? searchResult.categoryHits : getFileMagnerCategoryItemList()}
                    howToList={searchResult ? searchResult.howtoHits : getFileMagnerHowToItemList()}
                />
            )}
        </div>
    )
}

HowToContainer.defaultProps = {
    viewMode: HOWTO_DEFAULT_VIEW_MODE
}