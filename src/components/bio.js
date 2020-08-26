/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.0),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author}</strong> is a modern technology
        enthusiast, and Cloud Gardener at{" "}
        <a href={`https://vrgroup.fi/en`}>VR Group</a>. He is also
        the father of two magnificent girls, husband, indie music
        lover, guitarist, and photographer. He loves simplicity
        and values a great developer experience. Follow him at{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
