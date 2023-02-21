import { IListCard } from "@/utils/types";
import Image from "next/image";
import ViewMoreIcon from "../../assets/icons/viewmore.svg";

const ListCard = ({
  listCardItems,
  title,
}: IListCard) => (
  <div className="list-card-container">
    {
      title && (
        <h3 className="list-card-title">{title}</h3>
      )
    }
    <div className="list-card-items">
      {
        listCardItems?.map(listItem => (
          <div className="list-card-item" key={listItem.key}>
            <div className="item-name">{listItem.name}</div>
            <div className="item-value">
              {listItem.value && (
                <label>{listItem.value}</label>
              )}
              <Image src={ViewMoreIcon} alt="icon" />
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default ListCard;
