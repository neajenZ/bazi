import styles from './SearchAddress.module.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Location } from '@icons/Location.tsx';
import { Search } from '@icons/Search.tsx';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { compasses, ICompass } from '@widjets/Map/constants';
import { Button } from '@ui/Button/ui/Button';
import { AddPicture } from '@icons/AddPicture';
import { Upload } from '@ui/Upload';
import { useCompassPageStore } from '@providers/CompassPageProvider/ui/StoreProvider.tsx';
import { observer } from 'mobx-react-lite';

interface IProps {
  panTo: ({ lat: any, lng: any }) => void;
  selectedCompass: ICompass | null;
  setCompass: Dispatch<SetStateAction<ICompass | null>>;
}
export const SearchAddress = observer(({ panTo, selectedCompass, setCompass }: IProps) => {
  const [searchValue, setSearchValue] = useState('');
  const { setMainImage } = useCompassPageStore();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 33.6348792, lng: () => -117.7426695 },
      radius: 200 * 1000,
    },
  });

  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMainImage(e.target.files[0]);
    }
  };

  useEffect(() => {}, []);

  const handleClickSearch = async (address: any) => {
    const results = await getGeocode({ address: address.description });
    const { lat, lng } = getLatLng(results[0]);
    panTo({ lat, lng });
  };

  return (
    <>
      <div className={styles.inputBody}>
        <Location />
        <input
          placeholder={'Search'}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search
          className={styles.searchIco}
          onClick={() => {
            panTo;
            setValue(searchValue);
          }}
        />
      </div>
      {status === 'OK' && (
        <>
          <div className={styles.resultList}>
            <h4>Search Results</h4>
            <div className={styles.resultWrapper}>
              {data.map((value) => (
                <div className={styles.resultItem} key={value.place_id}>
                  <Search />
                  <div
                    onClick={() => handleClickSearch(value)}
                    className={styles.resultItemWrapper}
                  >
                    {value.terms.length === 1 ? (
                      <h3>{value.terms[0].value}</h3>
                    ) : (
                      <div>
                        <span>{value.terms[0].value}</span>
                        <h3>
                          {value.terms
                            .slice(1, value.terms.length)
                            .map((i, index, arr) =>
                              index === arr.length - 1 ? i.value : `${i.value}, `,
                            )}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className={styles.compasses}>
        <h4>Choose a compass</h4>
        <div className={styles.wrapper}>
          {compasses.map((i) => (
            <img
              src={i.path}
              className={selectedCompass?.id === i.id ? styles.selectedCompass : ''}
              key={i.id}
              onClick={() => setCompass(i)}
              alt=""
            />
          ))}
        </div>
      </div>

      <div className={styles.addPhotoBtn}>
        <Upload
          onChange={handleAddImage}
          as={<Button text="Add a photo" icon={<AddPicture />} />}
        />
      </div>
    </>
  );
});
