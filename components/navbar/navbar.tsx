import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/navbar/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarAction from "@/components/navbar/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div>
      <Container>
        <div className="relative h-16 flex items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
