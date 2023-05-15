import BlogPost from "./BlogPost"

const Blog = (props: any) => {
	console.log(props)
	return (
		<section id="blog">
			<h3>Blog</h3>
			<BlogPost />
		</section>
	)
}

export default Blog