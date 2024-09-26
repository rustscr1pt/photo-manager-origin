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

export {RuleObject, ImageDataTableSample, ImageToDeletePost, ImageData}
