"use client";

import { AppShell, Container } from "@mantine/core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type props = {
  children?: React.ReactNode;
};
export default function LayoutProviders({ children }: props) {
  return (
    <AppShell header={{ height: 72 }} footer={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container
          size={"xl"}
          className="flex items-center justify-between h-full"
        >
          <Navbar />
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container size={"xl"}>{children}</Container>
      </AppShell.Main>
      <AppShell.Footer>
        <Container size={"xl"} className="flex items-center h-full">
          <Footer />
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
