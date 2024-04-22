import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement
} from "@chakra-ui/react";
import {FiFile} from "react-icons/fi";
import {useController} from "react-hook-form";
import {useRef} from "react";
import axios from "axios"; // Import axios

// Assuming API_URL is defined somewhere
const API_URL = "https://your-api-url.com";

export const FileUpload = ({name, placeholder, acceptedFileTypes, control, children, isRequired = false}) => {
    const inputRef = useRef();
    const {
        field: {ref, onChange, value, ...inputProps},
        fieldState: {invalid, isTouched, isDirty},
    } = useController({
        name,
        control,
        rules: {required: isRequired},
    });

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", value); // Assuming value is the file object

            const response = await axios.post(`${API_URL}/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            console.log(response.data);
            // Handle successful upload response
        } catch (error) {
            console.error("Error uploading file:", error);
            // Handle error
        }
    };

    return (
        <FormControl isInvalid={invalid} isRequired={isRequired}>
            <FormLabel htmlFor={name}>{children}</FormLabel>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <Icon as={FiFile}/>
                </InputLeftElement>
                <input
                    type='file'
                    onChange={(e) => onChange(e.target.files[0])}
                    accept={acceptedFileTypes}
                    name={name}
                    ref={inputRef}
                    {...inputProps}
                    style={{display: 'none'}}/>
                <Input
                    placeholder={placeholder || "Your file ..."}
                    onClick={() => inputRef.current.click()}
                    readOnly={true}
                    value={value && value.name || ''}
                />
                <Button onClick={handleUpload} ml={2}>
                    Upload
                </Button>
            </InputGroup>
            <FormErrorMessage>
                {invalid && isTouched && `${children} is required`}
            </FormErrorMessage>
        </FormControl>
    );
}

FileUpload.defaultProps = {
    acceptedFileTypes: '',
    allowMultipleFiles: false,
};

export default FileUpload;