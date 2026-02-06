import { prisma } from "@pilates-hub/database";
import { revalidatePath } from "next/cache";

export default async function TestDbPage() {
    // Busca os estúdios direto do Postgres
    const studios = await prisma.studio.findMany();

    async function createStudio(formData: FormData) {
        "use server";
        const name = formData.get("name") as string;

        // Salva no Postgres usando o Prisma compartilhado
        await prisma.studio.create({
            data: {
                name,
                address: "Rua do Pilates, 123",
                contact: "11 99999-9999",
                capacity: 10,
            },
        });

        revalidatePath("/test-db");
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Teste de Conexão Postgres</h1>

            <form action={createStudio} className="mb-8">
                <input
                    name="name"
                    placeholder="Nome do Estúdio"
                    className="border p-2 mr-2 text-black"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Cadastrar Estúdio
                </button>
            </form>

            <ul>
                {studios.map((s) => (
                    <li key={s.id} className="border-b py-2">{s.name} - {s.address}</li>
                ))}
            </ul>
        </div>
    );
}