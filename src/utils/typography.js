import Typography from "typography"

const fontFamily = [
  "BlinkMacSystemFont",
  "-apple-system",
  "YuGothic",
  "Meiryo",
  "serif",
]
const typography = new Typography({
  headerFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
