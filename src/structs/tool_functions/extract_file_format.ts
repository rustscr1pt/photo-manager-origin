export default function extract_file_format(source : string) : string {
    const split : string | undefined = source.split(".").pop();
    if (typeof split === "string") {
        return `.${split}`
    }
    else {
        return "Null"
    }
}
