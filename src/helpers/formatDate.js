
// const dateExample = "2023-09-20T11:45:00Z";

export function formatDate(dateString) {

    const date = new Date(dateString);
    const dateOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    }
    return date.toLocaleDateString('nl-NL', dateOptions);
}

// console.log(formatDate(dateExample))