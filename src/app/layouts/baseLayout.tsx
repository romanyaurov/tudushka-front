import { Layout } from "@tudushka/shared/ui/Layout";
import { Footer } from "@tudushka/widgets/footer";
import { Header } from "@tudushka/widgets/header";

export const baseLayout = (
  <Layout 
    header={<Header />}
    footer={<Footer />}
  />
)