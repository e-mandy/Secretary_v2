"use-client"

import { type ColumnDef } from "@tanstack/react-table"
import type { ProfessorType } from "../schemas/professor.schema"

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
    }
]