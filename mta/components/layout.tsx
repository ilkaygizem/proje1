import Header from "./header";
import Footer from "./footer";

export default function Layout(props: { children: any }) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
