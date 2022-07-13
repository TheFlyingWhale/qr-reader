import { useState } from 'react';
import { Flex, VStack, Heading, Text } from '@chakra-ui/react';
import QrReader from 'react-qr-reader-es6';

function App() {
	const [data, setData] = useState<any>('No result');

	const handleError = () => {};

	const handleScan = () => {};

	return (
		<Flex p={20}>
			<VStack>
				<Heading>QR-Reader</Heading>

				<Text>{data}</Text>
			</VStack>
		</Flex>
	);
}

export default App;
