import { GiphyFetch } from 'f-giphy-pfft-js-fetch-api'
import isPercy from '@percy-io/in-percy'
import { number, withKnobs } from '@storybook/addon-knobs'
import { useState } from '@storybook/addons'
import fetchMock from 'fetch-mock'
import * as React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { Carousel as CarouselComponent } from '../src'
import mockGifsResult from './mock-data/gifs.json'

const apiKey = 'sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh'
const gf = new GiphyFetch(apiKey)

export default {
    title: 'React Components/Carousel',
    decorators: [withKnobs, jsxDecorator],
}

export const SearchExample = () => {
    const [term, setTerm] = useState('dogs')
    const limit = number('limit', 5)
    const fetchGifs = async (offset: number) => {
        if (isPercy()) {
            fetchMock.restore().getOnce(`begin:https://api.giphy.com/v1/gifs/search?`, { body: mockGifsResult })
        }
        const result = await gf.search(term, { offset, limit })
        fetchMock.restore()
        return result
    }
    return (
        <>
            <input
                style={{ margin: 10 }}
                placeholder="type to search"
                onChange={({ target: { value } }) => setTerm(value)}
                value={term}
            />
            <CarouselComponent
                key={term}
                gifHeight={number('gif height', 200)}
                backgroundColor={isPercy() ? 'white' : undefined}
                gutter={6}
                fetchGifs={fetchGifs}
            />
        </>
    )
}
