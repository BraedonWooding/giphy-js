import { getPingbackId } from '@f-giphy-pfft/js-util'
import gl from './global'

gl.giphyRandomId = getPingbackId()

function sendPingbacks() {}

gl.addEventListener?.('beforeunload', sendPingbacks)

const pingback = (_: any) => {}

export default pingback
