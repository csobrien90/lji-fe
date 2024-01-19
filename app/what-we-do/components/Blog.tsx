import { BlogProps } from "../../types"
import BlogPost from "./BlogPost"

const Blog = ({ blogPosts }: BlogProps) => {
	console.log(blogPosts)
	return (
		<section id="blog">
			<h2>Blog</h2>
			<BlogPost />
		</section>
	)
}

export default Blog