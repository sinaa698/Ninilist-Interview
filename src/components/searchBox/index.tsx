import Input from "../common/input/index";

const SearchBox = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return <Input label="search" name="search" value={value} onChange={onChange} />;
};

export default SearchBox;
