"use-client"

import { type ColumnDef } from "@tanstack/react-table"
import type { ProfessorType } from "../schemas/professor.schema"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "../../../components/ui/button";

export const columns: ColumnDef<ProfessorType>[] = [
    {
        accessorKey: "email",
        header: "Adresse email"
    },
    {
        accessorKey: "lastname",
        header: "Nom de famille"
    },
    {
        accessorKey: "firstname",
        header: "Prénom"
    },
    {
        id: "actions",
        cell: ({ row }) => {
            // Data from the professor type
            const professorData = row.original;
            
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" style={{
                        width: "10rem",
                        gap: "1rem"
                    }}>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <Eye/> Voir Professeur
                        </DropdownMenuItem>
                        <DropdownMenuItem><Edit /> Modifier</DropdownMenuItem>
                        <DropdownMenuItem><Trash /> Supprimer</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
]