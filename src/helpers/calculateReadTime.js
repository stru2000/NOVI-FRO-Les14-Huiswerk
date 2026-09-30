// const inputTest = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium animi asperiores at autem commodi delectus doloremque dolores enim explicabo impedit ipsa laborum, laudantium, molestiae mollitia provident quam quia quibusdam rerum saepe sed similique unde velit! Corporis ea enim, fugiat in minima nesciunt officiis provident qui ratione reprehenderit, repudiandae sunt.`

export function calculateReadTime(input) {
    const words = input.split(' ').length;
    const readTime = (words/100)*0.3;

    if (readTime <= 1) {
        return Math.ceil(readTime);
    } else {
        return Math.round(readTime);
    }
}
// console.log(calculateReadTime(inputTest));