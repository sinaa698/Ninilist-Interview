import Input from "../common/input/index";

const SearchBox = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (searchInput: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Input label="Search" name="search" value={value} onChange={onChange} />
  );
};

export default SearchBox;
