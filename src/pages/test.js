import React from "react"

class Profile extends React.Component {
  render() {
    const mark = this.props.data.markdownRemark
    // const mark = useStaticQuery(
    //   graphql`
    //     query TestQuery {
    //       markdownRemark(frontmatter: { path: { eq: "/profile" } }) {
    //         html
    //         frontmatter {
    //           date(formatString: "MMMM DD, YYYY")
    //           path
    //           title
    //         }
    //       }
    //     }
    //   `
    // )
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: mark.html }} />
      </div>
    )
  }
}
export default Profile
export const pageQuery = graphql`
  query HogeQuery{
    markdownRemark(frontmatter: { path: { eq: "/profile" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
