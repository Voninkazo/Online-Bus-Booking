export function color(index: number) {
    let color;
    if (index % 2 === 0) {
        color = "pink-700";
    } else if (index % 3 === 0) {
        color = "green-500";
    } else if (index % 5 === 0) {
        color = "yellow-700";
    } else if (index % 7 === 0) {
        color = "red-700";
    } else if (index % 9 === 0) {
        color = "purple-700";
    } else {
        color = "black";
    }

    return color;
}
