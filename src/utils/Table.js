import React from "react";

export function Table({ children }) {
  return (
    <table className="table w-100 table-bordered table-striped">
      {children}
    </table>
  );
}

export function TableHeader({ children }) {
  return (
    <thead>
      <tr className="text-center">{children}</tr>
    </thead>
  );
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableFooter({ children }) {
  return <tfoot>{children}</tfoot>;
}
