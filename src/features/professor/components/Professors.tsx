import { DataTable } from "../../../components/data-table"
import { columns } from "../datas/columns"

const Professors = () => {
    const professors = [
        {
            id: "1",
            email: "jonhdoe@gmail.com",
            lastname: "DOE",
            firstname: "John"
        }
    ]
  return (
    <div className="w-full h-full">
        <div>
            <h1 className="text-3xl mb-2 font-bold">Professeurs</h1>
            <p className="">Ayez le contrôle sur l'ensemble des professeurs du système.</p>
        </div>
        <div className="py-10">
            <DataTable columns={columns} data={professors} />
        </div>
    </div>
  )
}

export default Professors
