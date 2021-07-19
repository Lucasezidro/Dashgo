import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSession } from "./NavSession";

export function SideBarNav(){
    return(
        <Stack spacing="12" align="flex-start">
            <NavSession title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiContactsLine} href="/users">Usuarios</NavLink>
            </NavSession>

            <NavSession title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} href="/forms">Formularios</NavLink>
                <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
            </NavSession>
        </Stack>
    )
}