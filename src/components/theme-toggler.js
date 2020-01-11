import React from "react"
import { rhythm } from "../utils/typography"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class CustomThemeToggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1.0),
            }}
          >
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />{" "}
              Dark mode
            </label>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default CustomThemeToggler
