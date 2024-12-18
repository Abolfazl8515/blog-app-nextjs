function Table({ children }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto scrollbar">
      <table>{children}</table>
    </div>
  );
}

export default Table;

function THeader({ children }) {
  return <thead>{children}</thead>;
}

function TBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TRow({ children }) {
  return <tr className="title-row">{children}</tr>;
}

Table.Head = THeader;
Table.Body = TBody;
Table.Row = TRow;
