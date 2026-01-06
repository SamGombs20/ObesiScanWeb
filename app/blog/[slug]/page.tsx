import { formatDate } from "@/app/utils/common"
import style from "../../styles/blog.module.css"
import { getBlogBySlug, getBlogSlugs } from "@/app/actions/blog"

export const generateStaticParams = async () => {
    const slugs = await getBlogSlugs()
    return slugs.map((item) => ({
        slug: item.slug
    }))
}

const BlogDetailPage = async ({ params, }: { params: { slug: string } }) => {
    const { slug } = await params
    const blog = await getBlogBySlug(slug)

    return (
        <article className={style.article_page_container}>
            <p className={`${style.blog_title} title-text`}>{blog.title}</p>
            <div className={style.date_author}>
                <p>Published on: <span>{formatDate(blog.publishedAt)}</span></p>
                <p>Author: <span>{blog.author?.name}</span></p>
            </div>
            <div className={style.image_container}>
                <div className={`${style.article_image}`} style={{ backgroundImage: `url(${blog.mainImage?.asset.url})` }}></div>
            </div>
            <section className={style.article_content}>
                {blog.body?.map((block)=>block._type === 'block'?(
                    <div key={block._key}>
                        <p >{block.children?.map((child)=>child.text)}</p>
                        <br />
                    </div>
                    
                ):null)}
            </section>
            <footer>
                <p>{blog.author?.bio}</p>
            </footer>
        </article>
    )
}
export default BlogDetailPage;
export const revalidate = 60;