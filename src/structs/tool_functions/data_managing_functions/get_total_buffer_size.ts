export function get_total_buffer_size(sizes_vector : string[]) : number {
    let total : number = 0;
    for (const object of sizes_vector) {
        const separated = object.split(" ");
        if (separated.length > 0) {
            total += Number.parseInt(separated[0])
        }
    }
    return total
}