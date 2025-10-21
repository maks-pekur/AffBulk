export const FormatGuide = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="rounded-xl border border-dashed border-[#a1cf0c] p-3 mb-8">
        <div className="text-xs text-gray-300 mb-2">
          <span className="font-semibold">Format:</span>{" "}
          <code className="p-1 rounded border">
            rowNumber; columnNumber; inputLabel; inputType; inputOptions
          </code>
        </div>
        <ul className="text-xs text-gray-300 list-disc pl-4 space-y-1">
          <li>
            <span className="font-medium">rowNumber</span>,{" "}
            <span className="font-medium">columnNumber</span> – positive
            integers (1-based).
          </li>
          <li>
            <span className="font-medium">inputType</span> –{" "}
            <code>TEXT_INPUT</code> or <code>SELECT</code>.
          </li>
          <li>
            For <code>TEXT_INPUT</code> → <em>inputOptions</em> is a placeholder
            (e.g. <code>Enter your name</code>).
          </li>
          <li>
            For <code>SELECT</code> → <em>inputOptions</em> is a comma-separated
            list (e.g. <code>Small,Medium,Large</code>).
          </li>
        </ul>
      </div>
    </div>
  );
};
