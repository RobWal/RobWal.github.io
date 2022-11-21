interface CrabPotArray {
    id: number, name: string, chance: number, unused: string, location: string, minSize: number, maxSize: number
};

let CrabPotData: CrabPotArray[] = [
{id: 372, name: "Clam", chance: .15, unused: "681 .35", location: "ocean", minSize: 1, maxSize: 5},
{id: 715, name: "Lobster", chance: .05, unused: "688 .45 689 .35 690 .35", location: "ocean", minSize: 2, maxSize: 20},
{id: 716, name: "Crayfish", chance: .35, unused: "682 .4", location: "freshwater", minSize: 1, maxSize: 8},
{id: 717, name: "Crab", chance: .1, unused: "684 .45", location: "ocean", minSize: 1, maxSize: 20},
{id: 718, name: "Cockle", chance: .3, unused: "680 .2", location: "ocean", minSize: 1, maxSize: 5},
{id: 719, name: "Mussel", chance: .35, unused: "683 .15", location: "ocean", minSize: 1, maxSize: 5},
{id: 720, name: "Shrimp", chance: .2, unused: "681 .35", location: "ocean", minSize: 1, maxSize: 3},
{id: 721, name: "Snail", chance: .25, unused: "680 .35", location: "freshwater", minSize: 1, maxSize: 5},
{id: 722, name: "Periwinkle", chance: .55, unused: "681 .35", location: "freshwater", minSize: 1, maxSize: 3},
{id: 723, name: "Oyster", chance: .15, unused: "682 .35", location: "ocean", minSize: 1, maxSize: 5},
];

export default CrabPotData;