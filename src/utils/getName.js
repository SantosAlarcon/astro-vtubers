import json from "../data/vtubers.json"
export const getName = (slug) => {
    const ocurrence = json.find(vtuber => vtuber.slug === slug);
    return ocurrence.name;
}
