/**
 * A component that allows pages to be shared on social media platforms.
 *
 */

import React from "react"
import PropTypes from "prop-types"

import { TwitterShareButton, LinkedinShareButton } from "react-share"

import { IconContext } from "react-icons"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

const SocialShare = props => {
  const { url, title } = props

  const shareBlockProps = {
    url: url,
    title: title,
  }

  return (
    <IconContext.Provider
      value={{
        size: "1.5rem",
        className: "share",
        style: { marginRight: "0.5rem", marginBottom: "1.0rem" },
      }}
    >
      <div>
        <TwitterShareButton {...shareBlockProps}>
          <FaTwitter />
        </TwitterShareButton>
        <LinkedinShareButton {...shareBlockProps}>
          <FaLinkedin />
        </LinkedinShareButton>
      </div>
    </IconContext.Provider>
  )
}

SocialShare.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
}

SocialShare.defaultProps = {
  url: "https://cloudgardener.dev/",
  title: "Post with no title.",
}

export default SocialShare
