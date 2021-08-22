import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <header>
                <Image src='/blog.png' alt='Logo' width={50} height={40}/>

                <Link href='/'>
                <a>
                    Главная
                </a>
                </Link>
            </header>

            <div className='container'>
                {children}
            </div>
            <footer>
                2021 &copy; Simple Blog Next.JS
            </footer>
        </div>
    )
}

export default Layout
