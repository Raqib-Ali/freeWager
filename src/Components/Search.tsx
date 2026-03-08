import { SearchIcon } from "lucide-react";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";

const Search = () => {
  return (
    <div className="rounded-[8px] w-full bg-gray-600 flex items-center gap-2.5 p-2 text-white">
      <div className="flex items-center gap-2 flex-[1] min-w-[100px] border-r-2 border-r-gray-300">
        <SearchIcon className="w-5 cursor-pointer" />

        <input
          placeholder="Search..."
          type="text"
          className="outline-0 w-full"
        />
      </div>
      <div className="flex-[0.8]">
        <Select>
          <SelectTrigger className="border-0 w-full outline-0 data-placeholder:text-white!">
            <SelectValue className="text-white" placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end">
        <div className="bg-emerald-300 rounded-[8px] aspect-square w-[35px] flex items-center justify-center cursor-pointer">
          <SearchIcon className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default Search;
