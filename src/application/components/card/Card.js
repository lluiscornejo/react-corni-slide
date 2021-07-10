import { Root, Image } from './Card.styled';

const Card = ({ title, description }) => (
  <Root>
    <Image src="https://picsum.photos/300/200" alt="random" />
    <h3>{title}</h3>
    <p>{description}</p>
  </Root>
);
export default Card;
