import React from "react"
import { Link, useStaticQuery } from "gatsby"

export default aa => {
  console.log(aa)
  const mark = useStaticQuery(
    graphql`
      query TestQuery{
        markdownRemark(frontmatter: { path: { eq: "/test" } }) {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    `
  )
  console.log(mark, aa)
  return (
    <div style={{ color: `teal` }}>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
      <Link to="/">Home</Link>
      <div dangerouslySetInnerHTML={{ __html: mark.markdownRemark.html }} />
    </div>
  )
}

// export const pageQuery = graphql`
//   query HogeQuery{
//     markdownRemark(frontmatter: { path: { eq: "/introduction" } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `
