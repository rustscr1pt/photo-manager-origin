export default async function fetchImageSize(url : string) : Promise<string> {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentLength = response.headers.get('Content-Length');
        if (contentLength) {
            const sizeInKB = (Number.parseInt(contentLength) / 1024).toFixed(2); // Convert bytes to kilobytes
            return `${sizeInKB} kb`
        } else {
            return "0 kb"
        }
    }
    catch (err) {
        console.log(err)
        return `0 kb`
    }
}
