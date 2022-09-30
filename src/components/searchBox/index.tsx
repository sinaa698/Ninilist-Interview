import Input from "../common/input/index";

const SearchBox = ({
  onChange,
}: {
  onChange: (searchInput: string) => void;
}) => {
  return <Input label="Search" name="search" onChange={({target:{value}}) => onChange(value)} />;
};

export default SearchBox;
