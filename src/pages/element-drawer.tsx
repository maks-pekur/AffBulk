import { ActionBar } from "@/components/action-bar";
import { ErrorList } from "@/components/error-list";
import { FormatGuide } from "@/components/format-guide";
import { Header } from "@/components/header";
import { LivePreviewPanel } from "@/components/live-preview-panel";
import { SpecEditor } from "@/components/spec-editor";
import { useFormSpec } from "@/hooks/use-form-spec";
import { useSpecParser } from "@/hooks/use-spec-parser";

export default function Test1() {
  const { input } = useFormSpec();
  const { elements, errors } = useSpecParser(input);

  return (
    <main className="p-6">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="flex items-end">
          <Header />
          <ActionBar />
        </div>

        <FormatGuide />

        <div className="grid gap-8 lg:grid-cols-2">
          <SpecEditor placeholder="Example: 1;1;First Name;TEXT_INPUT;Enter your first name" />
          <LivePreviewPanel elements={elements} />
        </div>

        <ErrorList errors={errors} />
      </div>
    </main>
  );
}
