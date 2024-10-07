export function get_total_buffer_size(sizes_vector : string[]) : number {
    let total : number = 0;
    for (const object in sizes_vector) {
        const separated = object.split(" kb");
        if (separated.length > 0) {
            total += Number.parseInt(separated[0])
        }
    }
    return total
}