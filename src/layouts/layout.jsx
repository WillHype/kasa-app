import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function Layout({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;