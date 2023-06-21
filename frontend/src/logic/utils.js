
export const dataToGroups = (data) => {
    const groups = data.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
    }, []);
    return groups;
}