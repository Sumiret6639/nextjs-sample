import { FC, ReactNode } from "react";
import Header from "~/components/common/header";
import Footer from "~/components/common/footer";
import Alert from "~/components/common/alert";

import { AlertProvider } from "~/contexts/alertContext";

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <AlertProvider>
        <Alert />
        <div className="container">{children}</div>
      </AlertProvider>
      <Footer />
    </div>
  );
};

export default Layout;
