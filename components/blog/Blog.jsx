import Link from 'next/link'


const Blog = ({title, description, id}) => {
    return (
        <div className='blog'>
            <h5>{title}</h5>
            <p>{description}</p>
            <Link href='/blog/[id]' as={`/blog/${id}`}>
                <a>
                    Прочитать
                </a>
            </Link>
        </div>
    )
}

export default Blog
