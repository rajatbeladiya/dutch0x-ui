import { IListCard } from '@/utils/types';
import ListCard from './ListCard';

const ListCardContainer = ({
  title, listCardItems
}: IListCard) => (
  <ListCard
    listCardItems={listCardItems}
    title={title}
  />
);

export default ListCardContainer;
