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
        onChange={(e) => {
          setValue(e.target.value);
          // setForm(prev => ({ ...form, lat: selected.lat, lng: selected.lng }))
        }}
        disabled={!ready}
        className="combobox-input"
        placeholder="Address"
        style={combobox}
      />
      <ComboboxPopover style={popover}>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

const combobox = {
  position: "relative",
  width: 492,
  height: 50,
  maxWidth: "100%",
  fontSize: "100%",
  borderRadius: 5,
  border: "1px solid #BDBDBD",
};

const popover = {
  zIndex: "2000",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  border: "1px solid #BDBDBD",
  borderTop: "none",
  fontSize: "100%",
};
