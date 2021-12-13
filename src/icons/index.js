// svg图标组件
import SvgIcon from '@/components/SvgIcon'

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

export const iconsGlobalComponents = app => {
  // 注册svg图标全局组件
  app.component('svg-icon', SvgIcon)
  requireAll(req)
}
