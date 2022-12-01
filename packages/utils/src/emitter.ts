import mitt from 'mitt'
const Mitt = mitt
export const emitter: mitt.Emitter = new Mitt()

export const COMMON_EVENTS = {
  EVENT_EXPAND_SIDE_BAR: 'toggle-side-bar-expand'
}

export default emitter
