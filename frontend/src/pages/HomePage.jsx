import { Container, SimpleGrid, Text, VStack, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/products";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	console.log("products", products);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Productos Recientes 🚀
				</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<VStack spacing={2} textAlign="center" w="full">
						<Text fontSize='xl' fontWeight='bold' color='gray.500'>
							No hay productos disponibles 😢
						</Text>
						<Link to={"/create"}>
							<Text color='blue.500' _hover={{ textDecoration: "underline" }}>
								Crea un producto
							</Text>
						</Link>
					</VStack>
				)}
			</VStack>
		</Container>
	);
};
export default HomePage;