import React from 'react'
import { AiTwotoneUpSquare, AiTwotoneDownSquare } from "react-icons/ai";

export default function Logo() {
  return (
    <div style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "0" }}>
        <AiTwotoneUpSquare />
        <AiTwotoneUpSquare />
      </div>
      <div style={{ justifySelf: "center" }}><AiTwotoneDownSquare /></div>
    </div>
  )
}
