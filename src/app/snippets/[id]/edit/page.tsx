import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnipppedEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnipppedEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="m-4">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
      </div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
