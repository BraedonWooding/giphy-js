import { Carousel, renderCarousel } from '../src'
import { IGif } from 'f-giphy-pfft-js-types'
import { h, render as preactRender, Component } from 'preact'
import { GiphyFetch } from 'f-giphy-pfft-js-fetch-api'

const gf = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 4 })

export namespace PreactCarousel {
    type State = {
        gifs: IGif[]
    }
    type Props = {}
    class Test extends Component<Props, State> {
        render() {
            return <Carousel gifHeight={200} user={{}} gutter={6} fetchGifs={fetchGifs} />
        }
    }
    export const render = (mountNode) => preactRender(<Test />, mountNode, mountNode.lastChild as Element)
}

export const vanillaJSCarousel = (mountNode: HTMLElement) => {
    const onGifClick = (gif: IGif) => {
        window.open(gif.url)
    }
    renderCarousel(
        {
            gifHeight: 200,
            onGifClick,
            user: {},
            fetchGifs,
            gutter: 6,
        },
        mountNode
    )
}
