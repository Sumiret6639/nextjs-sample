import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";

import store from "app/store";
import Auth from "app/auth";

import { injectStore } from "api/axios";
import { Layout } from "components/layout";

import "styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

injectStore(store);
let persistor = persistStore(store);

const MyApp = ({ Component, pageProps }) => {
  //引入bootstrap
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Auth>
              <Component {...pageProps} />
            </Auth>
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
