import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import cloudGardenerTheme from "@cloudgardener/typography-theme-cloudgardener"
cloudGardenerTheme.overrideThemeStyles = () => ({
  a: {
    color: "var(--textLink)",
  },
  "a:hover": {
    color: "var(--textLinkHover)",
  },
  "a.anchor": {
    boxShadow: "none",
  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  hr: {
    background: "var(--hr)",
  },
})

cloudGardenerTheme.plugins = [new CodePlugin()]

const typography = new Typography(cloudGardenerTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
