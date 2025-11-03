const generatedIDs = new Set<string>();
export const generateUniqueID = (): string => {
    let id: string;
    do {
        id = Math.random().toString(36).substring(2, 15);
    } while (generatedIDs.has(id));
    generatedIDs.add(id);
    return id;
};
