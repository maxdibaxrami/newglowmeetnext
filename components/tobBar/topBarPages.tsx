import {Navbar, NavbarBrand, Badge, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { FireIcon, BellIcon, BackMenu } from "../icons/topBar";
import Link from 'next/link'

const TopBarPages =() =>{


  return (
    <Navbar className="" disableAnimation isBordered>

      <NavbarContent justify="start">

            <NavbarItem>
            <Link href={'/'}>
            <Button  isIconOnly color="default" aria-label="Like">
                    <BackMenu />
                </Button> 
                                    </Link>
                
            </NavbarItem>

            <NavbarItem className="flex items-center justify-center">
                <FireIcon />
                <p className="font-bold text-inherit">Glow meet</p>
             </NavbarItem>

            
      </NavbarContent>



    </Navbar>
  );
}

export default TopBarPages