import { FitHeading } from "./fit-heading";

export const TextContainer = ({
  label,
  heading,
}: {
  label: string;
  heading: string;
}) => {
  return (
    <section
      style={{
        width: 320,
        borderRadius: 16,
        border: "1px solid #e5e7eb",
        background: "#fff",
        padding: 16,
        overflow: "hidden",
        color: "#1f2937",
      }}
    >
      <div
        style={{
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#6b7280",
          marginBottom: 8,
        }}
      >
        {label}
      </div>

      <FitHeading text={heading} />
    </section>
  );
};
