import Head from 'next/head';
import Menu from '../menu';
type Props = {
  pageTitle: string;
  children: React.ReactNode;
  menuActive?: string;
};

const Layout = ({ pageTitle, children, menuActive }: Props) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <Menu menuActive={menuActive} />
        {children}
      </div>
    </>
  );
};

export default Layout;
