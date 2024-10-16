import { MockOffer } from '../../mocks/offers.ts';
import PlaceCard from '../cards/place-card.tsx';

export default function PlaceCardList(props: MockOffer[]) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.map((offer) => <PlaceCard key={offer.id} {...offer} />)}
    </div>
  );
}
