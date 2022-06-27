import { FC, useRef, FormEvent } from "react";
import { SearchBarProps } from "../interfaces";
import "./SearchBar.scss";

const SearchBar: FC<SearchBarProps> = ({ searchHandler }): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const finderRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onFocusInput = (): void => {
    finderRef?.current?.classList?.add("active");
  };

  const onBlurInput = (): void => {
    if (inputRef?.current?.value?.length === 0) {
      finderRef?.current?.classList?.remove("active");
    }
  };

  const submit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
    e.preventDefault();
    const value = inputRef?.current?.value ?? "";
    searchHandler(value);
  };

  return (
    <div className="search">
      <form
        className="search-form"
        autoComplete="off"
        ref={formRef}
        onSubmit={(e) => submit(e)}
      >
        <div className="finder" ref={finderRef}>
          <div className="finder-outer">
            <div className="finder-inner">
              <button
                className="finder-icon"
                type="button"
                data-testid="search-button"
                onClick={(e) => submit(e)}
              ></button>
              <input
                className="finder-input"
                id="search"
                name="search"
                data-testid="search-input"
                type="search"
                pattern=".*\S.*"
                placeholder="Github Username..."
                ref={inputRef}
                onFocus={() => onFocusInput()}
                onBlur={() => onBlurInput()}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
