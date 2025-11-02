"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "@/contextApi/ThemeContex";

interface CustomTextFieldProps {
  label: string;
   multiline?: boolean;
  rows?: number;
  placeholder?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, multiline, rows, ...props }) => {
  const { theme } = useTheme();

  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      size="small"
      multiline={multiline}  
      rows={rows}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: theme === "dark" ? "#e5e7eb" : "#111827",
          "& fieldset": {
            borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
          },
          "&:hover fieldset": {
            borderColor: theme === "dark" ? "#9ca3af" : "#6b7280",
          },
          "&.Mui-focused fieldset": {
            borderColor: theme === "dark" ? "#38bdf8" : "#2563eb",
          },
        },
        "& .MuiInputLabel-root": {
          color: theme === "dark" ? "#9ca3af" : "#374151",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme === "dark" ? "#38bdf8" : "#2563eb",
        },
        "& .MuiInputBase-input::placeholder": {
          color: theme === "dark" ? "#9ca3af" : "#6b7280",
          opacity: 1,
        },
      }}
      
      {...props}
    />
  );
};

export default CustomTextField;
