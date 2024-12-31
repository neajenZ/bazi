import { CustomMap } from '@widjets/Map';
import { CompassPageProvider } from '@providers/CompassPageProvider/ui/StoreProvider.tsx';
import { compassPageStore } from '@providers/CompassPageProvider/store.ts';

const CompassPage = () => {
  return (
    <CompassPageProvider store={compassPageStore}>
      <CustomMap />
    </CompassPageProvider>
  );
};

export default CompassPage;
