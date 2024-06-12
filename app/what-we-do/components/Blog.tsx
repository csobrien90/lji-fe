import { BlogProps } from "../../types"
import BlogPost from "./BlogPost"

import useTranslate from "@/app/hooks/translation"

const Blog = ({ blogPosts }: BlogProps) => {
	const { t } = useTranslate()
	console.log(blogPosts)
	return (
		<section id="blog">
			<h2>{t("blogTitle")}</h2>
			<BlogPost />
		</section>
	)
}

export default Blog