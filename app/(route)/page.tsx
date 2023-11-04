import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/ui/billboard";

import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("e717cb7f-1956-47f8-9499-103573e72b4e");
  return (
    <Container>
      <div className="space-y-10 pb-10"></div>
      <Billboard data={billboard} />
    </Container>
  );
};

export default HomePage;
