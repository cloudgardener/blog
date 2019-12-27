import Typography from "typography"
import CodePlugin from 'typography-plugin-code'
import cloudGardenerTheme from "@cloudgardener/typography-theme-cloudgardener"

cloudGardenerTheme.plugins = [
  new CodePlugin(),
]

const typography = new Typography(cloudGardenerTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
