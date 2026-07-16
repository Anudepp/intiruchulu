import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="relative max-w-xl mx-auto">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={value}
          placeholder="Search products..."
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            rounded-full
            border
            border-gray-300
            bg-white
            py-3
            pl-12
            pr-4
            text-sm
            shadow-sm
            transition-all
            duration-200
            focus:border-orange-500
            focus:outline-none
            focus:ring-2
            focus:ring-orange-200
          "
        />
      </div>
    </div>
  );
}