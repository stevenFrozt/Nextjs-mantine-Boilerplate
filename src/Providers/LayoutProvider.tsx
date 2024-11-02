"use client";

import { AppShell, Container } from "@mantine/core";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <Footer />
    </AppShell>
  );
}
