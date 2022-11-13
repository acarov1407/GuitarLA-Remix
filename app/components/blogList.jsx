import BlogEntry from "./blogEntry"

function BlogList({ blogs }) {
    return (
        <>
            <h2 className="blog__heading">Blog</h2>
            <div className="blog__content">
                {
                    blogs.map(blog => (
                        <BlogEntry
                            key={blog.id}
                            blog={blog}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default BlogList