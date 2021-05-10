import Head from 'next/head'

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page-wrapper">
                {children}
            </div>
        </>
    )
}

export default Layout