import React from "react";
import "./glass.css";

export default function GlassBackground() {
  return (
    <div className="glass-background" aria-hidden="true">
      <div className="glass-bg-light" />
      <div className="glass-ribs" />
      <div className="glass-reflection" />
      <div className="glass-specular" />
      <div className="glass-vignette" />
      <div className="glass-grain" />
    </div>
  );
}