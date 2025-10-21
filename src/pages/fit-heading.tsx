import { TextContainer } from "@/components/text-container";

export default function Test2() {
  const containers = [
    {
      label: "Container 1: Short Words",
      heading: "Buy New Tech Now",
    },
    {
      label: "Container 2: Long Words (overflows)",
      heading: "Telecommunications Infrastructure Implementation",
    },
    {
      label: "Container 3: Very Long Words (overflows)",
      heading:
        "Psychoneuroendocrinological - highlights relationship between our minds and physical well-being",
    },
  ];

  return (
    <main className="min-h-screen w-full flex items-start justify-center p-6 ">
      <div className="grid grid-cols-1 gap-6">
        {containers.map(({ label, heading }) => (
          <TextContainer key={label} label={label} heading={heading} />
        ))}
      </div>
    </main>
  );
}
