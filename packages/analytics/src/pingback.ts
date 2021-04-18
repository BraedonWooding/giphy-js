import { getPingbackId, Logger } from '@giphy/js-util'
import { debounce } from 'throttle-debounce'
import gl from './global'
import { sendPingback } from './send-pingback'
import { Pingback, PingbackEvent } from './types'

let queuedPingbackEvents: PingbackEvent[] = []

gl.giphyRandomId = getPingbackId()

let loggedInUserId = ''

function sendPingbacks() {
}

const debouncedPingbackEvent = debounce(1000, sendPingbacks)

gl.addEventListener?.('beforeunload', sendPingbacks)

const pingback = ({
    userId,
    eventType,
    actionType,
    attributes,
    queueEvents = true,
    analyticsResponsePayload,
}: Pingback) => {
}

export default pingback
