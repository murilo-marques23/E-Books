
import {
  Card,
  CardBody,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { iProductCartProps } from "@/types/context";
import { useCart } from "@/contexts/CartContext";

const CartProduct: React.FC<iProductCartProps> = ({
  img,
  amount,
  nome,
  preco,
  id,
}) => {
  const { removeProduct } = useCart();
  return (
    <Card direction="row" justify="space-between" align="center" p="0 1rem">
      <Image
        src={img}
        alt={nome}
        width="50px"
        height="50px"
        objectFit="contain"
      />
      <Stack>
        <CardBody>
          <Text fontWeight="bold">{nome}</Text>
          <Text>Valor: R$ {preco}</Text>
          <Text>Quantidade: {amount}</Text>
        </CardBody>
      </Stack>
      <IconButton
        bgColor="transparent"
        aria-label="Remover"
        icon={<BiTrash />}
        onClick={() => removeProduct(id)}
      />
    </Card>
  );
};

export default CartProduct;


