import './css/index.scss'
import templateFn from './template/index.pug'

const elemWrapper = document.createElement('div')

function info(message: string, duration: number) {
  return _toast({ type: 'info', message, duration })
}

function error(message: string, duration: number) {
  return _toast({ type: 'error', message, duration })
}

function success(message: string, duration: number) {
  return _toast({ type: 'success', message, duration })
}

function warning(message: string, duration: number) {
  return _toast({ type: 'warning', message, duration })
}

function loading(message: string, duration: number) {
  return _toast({ type: 'loading', message, duration })
}


interface ToastOption {
  type: 'info' | 'error' | 'success' | 'warning' | 'loading'
  message: string
  duration: number
}

function _toast(option: ToastOption) {
  elemWrapper.innerHTML = templateFn({
    message: option.message,
    type: option.type
  })

  document.body.appendChild(elemWrapper)

  setTimeout(() => document.body.removeChild(elemWrapper), 1e4 * option.duration)
}


export default { info, error, success, warning, loading }