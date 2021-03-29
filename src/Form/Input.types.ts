
export default interface InputProps {
    InputName: string;
    InputLabel: string;
    valueChanged?: Function;
    old?: any;
    errorText?: string,
    error?: Boolean
    placeholder?: string,
}