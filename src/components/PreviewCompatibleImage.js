import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => (
  <StaticQuery
    query={graphql`
      query allLocalImages {
        allImageSharp {
          edges {
            node {
              internal {
                contentDigest
              }
              original {
                src
              }
              fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={imagedata => {
      const allImages = imagedata.allImageSharp.edges ? imagedata.allImageSharp.edges : []
      const imageStyle = { borderRadius: '5px' }
      const { alt = '', childImageSharp, image } = imageInfo


      const imageItem = allImages.find(item => {
        const node = item.node
        const hashID = '-' + node.internal.contentDigest
        const imgName = node.original.src.replace(hashID, '').replace('/static/', '/img/')
        // console.log(imgName)
        // console.log(image);
        // console.log('===========================');
        return imgName === image
      })

      const _image = imageItem ? imageItem.node : null

      if(!!_image){
        return (
          <Img style={imageStyle} fluid={_image.fluid} alt={alt} />
        )
      }

      if (!!image && !!image.childImageSharp) {
        return (
          <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
        )
      }

      if (!!childImageSharp) {
        return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
      }

      if (!!image && typeof image === 'string')
        return <img style={imageStyle} src={image} alt={alt} />

      return null
    }}
  />
)

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
