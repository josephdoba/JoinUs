import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const FormBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& > :not(style)": { m: 1, width: "100%" },
};

export default function Search({ setForm, form, setSelected, selected }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={e => {
          setValue(e.target.value)
          // setForm(prev => ({ ...form, lat: selected.lat, lng: selected.lng }))
          
        }}
        disabled={!ready}
        className="combobox-input"
        placeholder="Address"
        // style={{  position: 'relative', width: 300, maxWidth: "90%" }}

        style={FormBoxStyles}
      />
      <ComboboxPopover
      style={{zIndex: '2000'}}
      >
        <ComboboxList >
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
