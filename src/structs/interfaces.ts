interface RuleObject {
    sentence : string
}

interface ImageDataTableSample {
    extracted : string[]
}

interface ImageToDeletePost {
    file_to_delete : string
}

interface ImageData {
    index: string;
    name: string;
    category: string;
    format: string;
}

interface AuthorizationBody {
    isAuthorized : boolean,
    userLogin : string,
    userPassword : string
}
interface AuthorizationPostRequest {
    login : string,
    password : string
}
export {RuleObject, ImageToDeletePost, ImageData, AuthorizationBody, AuthorizationPostRequest}

