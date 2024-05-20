export default function findSurroundingTitles(titles: string[], searchString: string): { previous: string | null, next: string | null } {
    const index = titles.indexOf(searchString);
    const length = titles.length;

    if (index === -1) {
        return { previous: null, next: null };
    }

    const previousIndex = (index - 1 + length) % length;
    const nextIndex = (index + 1) % length;

    return {
        previous: titles[previousIndex],
        next: titles[nextIndex]
    };
}