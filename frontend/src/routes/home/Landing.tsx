import "./Landing.css";
import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Hero from "../../components/Hero.tsx";

export default function Landing(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      <Hero
        title="Upload your documents and get instant feedback"
        subtitle="Click the Upload button below to get started today"
        image="https://images.unsplash.com/photo-1513705153361-9bc726c8db67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Upload />
      <Footer />
    </Flex>
  );
}
