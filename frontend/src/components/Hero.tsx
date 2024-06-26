import {Box, Flex, Heading, Image, Stack} from "@chakra-ui/react";
import FileUpload from "./FileUpload.tsx";
import {useForm} from "react-hook-form";

export default function Hero({title, subtitle, image, ...rest}) {
    const {
        handleSubmit,
        register,
        setError,
        control,
        formState: {errors, isSubmitting},
    } = useForm()

    return (
        <Flex
            align="center"
            justify={{base: "center", md: "space-around", xl: "space-between"}}
            direction={{base: "column-reverse", md: "row"}}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
            {...rest}
        >
            <Stack
                spacing={4}
                w={{base: "80%", md: "40%"}}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={["center", "center", "left", "left"]}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    {subtitle}
                </Heading>
                <FileUpload name="file"
                            acceptedFileTypes="pdf"
                            isRequired={false}
                            placeholder="Your File"
                            control={control}>
                </FileUpload>
            </Stack>
            <Box w={{base: "80%", sm: "60%", md: "50%"}} mb={{base: 12, md: 0}}>
                <Image src={image} size="100%" rounded="1rem" shadow="2xl"/>
            </Box>
        </Flex>
    );
}
