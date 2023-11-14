import { BlogProps } from "../types"
import BlogPost from "./BlogPost"

const Blog = ({ blogPosts }: BlogProps) => {
	console.log(blogPosts)
	return (
		<section id="blog">
			<h3>Blog</h3>
			<BlogPost />
		</section>
	)
}

export default Blog