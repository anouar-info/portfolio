// src/components/Sidebar.tsx
"use client";
import React from "react";

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <aside className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-100">
        Tags
      </h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-2 py-1 rounded-md transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-blue-800 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
