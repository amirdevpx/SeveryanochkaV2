import React from "react";
import "./Badge.css";

type PropsType = {
  children?: React.ReactNode;
  status?: "primary" | "success" | "error";
  isAbsolete?: boolean;
  positions?: { left?: string; top?: string; right?: string; bottom?: string };
};

function Badge({
  children,
  status = "primary",
  isAbsolete = false,
  positions = { left: "auto", top: "auto", right: "auto", bottom: "auto" },
}: PropsType) {
  if (!children) return null;

  return (
    <span
      className={"badge" + " " + status}
      style={isAbsolete ? { position: "absolute", ...positions } : {}}
    >
      {children}
    </span>
  );
}

export default Badge;
