import { createTheme } from '@mui/material'
import colors from 'core/constants/color'
import baseTheme from 'core/theme/base'

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: 'dark',
    background: {
      paper: colors.githubDarkAccent,
      default: colors.githubDark,
    },
  },
})

export default darkTheme
