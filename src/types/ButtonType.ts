
export default interface ButtonType{
    onPress?:(event: Object) => void;
    title:string;
    styleText?: object;
    styleButton?: object;
    testId?:string;

 }