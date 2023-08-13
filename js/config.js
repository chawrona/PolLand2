// NUMBER OF ROWS AND COLUMNS VISIBLE IN THE GAME CONTAINER
const visibleRows = 15
const visibleColumns = 30

// NUMBER OF ALL GENERATED ROWS AND COLUMNS 
// (always add same even number to both variables)

// # no moving the map
// const rows = 17
// const columns = 32

// #moving the map 
const rows = 31 // (ALWAYS MUST BE 17 + 2K for k e N)
const columns = 46 // (ALWAYS MUST BE 32 + 2K for k e N)

// NUMBER OF FIELDS IN EACH DIRECTION BEHIND THE MAP
const layersOfFieldsAroundY = (columns - visibleColumns - 2) / 2
const layersOfFieldsAroundX = (rows - visibleRows - 2) / 2

// STRING WITH VARIABLES FOR A GRID CONTAINER TO IMPOSE NUMBER OF COLUMNS AND ROWS 
// GONNA BE USED IN OTHER STRING THAT ASSIGN OTHER VARIABLES TO THE CONTAINER INLINE STYLE
const containerGridNumber = `--rows: ${rows}; --columns: ${columns};`

// BUILDINGS
const everyBuilding = [
    "house", "worker", "town_center", "church",
    "fisherman", "farmland", "mill", "bakery", "cotton_field", "hunters_hut", "granary", 
    "lumberjack","sawmill","mine","well","geologist", "rope_and_thread_factory",
    "barracks","wall","stable","border_tower", "castle",
    "armory","smithy","warehouse","ironworks","charcoal", "marketplace"
]
// UI
const housesSections = [
    ["house", "worker", "town_center","church","stable", "marketplace","border_tower"],
    ["fisherman", "cotton_field", "farmland", "mill", "bakery", "hunters_hut", "well"],
    ["lumberjack","sawmill","mine","geologist","rope_maker", "charcoal"],
    ["granary", "warehouse","armory","smithy","ironworks", "barracks"]
]

// BUILDINS WITH DIALOG
const dialogBuildings = [
    "town_center", "mill", "bakery", "hunters_hut",
    "sawmill", "rope_maker", "barracks","stable",
    "smithy","ironworks","charcoal", "marketplace"
]

// FIGHTING MECHANIC
const warriorsCost = {
    axeWarrior: 2,
    bowWarrior: 4,
    swordsWarrior: 4,
    horseWarrior: 6
}

const warriorsStatistics = {
    axeWarrior: {
        hp: 4,
        damage: [1,1,2]
    },
    bowWarrior: {
        hp: 3,
        damage: [1,1,2,3]
    },
    swordsWarrior: {
        hp: 5,
        damage: [1,2,2,3]
    },
    horseWarrior: {
        hp: 12,
        damage: [2,3,3,4,4]
    },
};


// HORSES WHEAT EATING AMOUNT
const requiredWheat = 2

// MARKETPLACE ECONOMY
const economy = [
    // resource, buy value min, buy value max, sell value min, sell value max, min amount, max amount
    ["planks", 1, 3, 1, 2, 3, 4],
    ["planks", 1, 3, 1, 2, 3, 4],
    ["wood", 1, 3, 1, 2, 3, 4],
    ["wood", 1, 3, 1, 2, 3, 4],
    ["stone", 1, 3, 1, 2, 3, 4],
    ["stone", 1, 3, 1, 2, 3, 4],
    ["coal", 2, 2, 1, 1, 3, 4],
    ["coal", 2, 2, 1, 1, 3, 4],

    ["iron_ore", 2, 2, 1, 2, 1, 3],
    ["iron_ore", 2, 2, 1, 2, 1, 3],
    ["iron_bar", 3, 3, 2, 3, 1, 3],
    ["iron_bar", 3, 3, 2, 3, 1, 3],
    ["food", 2, 2, 2, 3, 8, 12],
    ["food", 2, 2, 2, 3, 8, 12],
    ["flour", 2, 2, 1, 2, 2, 5],
    ["flour", 2, 2, 1, 2, 2, 5],
    ["wheat", 1, 3, 1, 1, 10, 12],
    ["wheat", 1, 3, 1, 1, 10, 12],
    ["cotton", 1, 3, 1, 1, 2, 4],
    ["cotton", 1, 3, 1, 1, 2, 4],
    ["string", 4, 6, 2, 2, 3, 3],
    ["string", 4, 6, 2, 2, 3, 3],
    ["rope", 6, 8, 2, 3, 1, 2],
    ["rope", 6, 8, 2, 3, 1, 2],
    ["leather", 2, 3, 1, 1, 4, 8],
    ["leather", 2, 3, 1, 1, 4, 8],
    
    ["swords", 6, 10, 6, 10, 1, 2],
    ["bow", 6, 10, 6, 10, 1, 5],
    ["fishing_rod", 6, 10, 6, 10, 1, 2],
    ["pickaxe", 6, 10, 6, 10, 2, 2],
    ["axe", 6, 10, 6, 10, 2, 2],
    ["hammer", 6, 10, 6, 10, 1, 2],
    ["saw", 6, 10, 6, 10, 1, 2],

    ["horse", 8, 10, 5, 7, 1, 2],
]


// TYPES OF THE FIELDS IN THE GAME 
const types = {
    0: "none",
    1: "forest",
    2: "hills",
    3: "plain",
    4: "swamp",
    5: "ore_field",
    6: "mountains",
    7: "rocks",
    8: "water",
}

// game information object
let game = {}

// GOALS
const goals = [
    // goal 1
    {
        type: "resourceGoal", 
        materials: [
            ["resources", "wood", 40],
            ["resources", "stone", 40],
        ],
        text: {title: "Well done, my Lord!", body: "Now we'll be able to allocate these resources for the construction of other, more vital infrastructures. I believe the upcoming winter is our foremost concern. Fields and fishermen cannot work in the snow, so we must gather supplies and rely on hunters. Collecting 60 units of food, 30 sacks of flour, and 30 wheat should ensure that no one will starve. We don't have much time, but I believe we can achieve it."},
        todo: "Gather 40 wood and 40 stones.",
        turns: 40,
    },
    // goal 2
    {
        type: "resourceGoal", 
        materials: [
            ["resources", "wheat", 30],
            ["resources", "flour", 30],
            ["resources", "food", 60],
        ],
        text: {title: "Excellent! Food supplies secured!", body: "Thanks to them, winter won't be a bigger problem for us. However, it's not the only thing to worry about. We've received news that new bandits roam the nearby forests. Probably upon hearing about the new settlement, they see it as an easy target and plan to rob us of our hard work. We cannot allow that! I suggest recruiting a small force of 7 knights and 4 archers. Given the situation, it would be wise to recruit a few Hewers in the meantime, but keep in mind our finances are limited. We could increase our income if only we had more inhabitants, churches, or gold mines..."},
        todo: "Collect 60 units of food, 30 sacks of flour, and 30 wheat.",
        turns: 25,
    },
    {
        type: "resourceGoal", 
        materials: [
            ["resources", "swordsWarrior", 7],
            ["resources", "bowWarrior", 4],
        ],
        text: {title: "I'm sorry to say, but I bring dire news...", body: "Our forces could easily deter common bandits. However, I regret to inform you that these are no ordinary miscreants. The royal scout reports that they are a much more dangerous, organized group. If we allow them to roam unchecked for too long, there's a chance we won't be able to repel their attack even with the help of all the local inhabitants. Therefore, we must execute a preemptive strike! According to the intelligence, their forces are located in three different camps; we need to find and destroy them! However, let's bear in mind that smaller groups of other marauders might harass us, taking advantage of our engagement..."},
        todo: "Find and destroy 3 bandit camps",
        turns: 25,
    },{
        turns: 30
    }
]

// BUILDINGS THAT USE GIF INSTEAD OF PNG
const gifs = ["mill", "bakery", "farmland", "sawmill", "mine", "charcoal"]

const resourcesDialogOrder = [
    "food",
    "wheat",
    "cotton",
    "flour",
    "wood",
    "stone",
    "coal",
    "iron_ore",
    "leather",
    "coins",
    "horse",
  ];

// SEASONS
const seasons = [
    ["spring", 8],
    ["summer", 8],
    ["autumn", 8],
    ["winter", 8]
] 

// TAXES
const tax = {
    peopleNeededForTax: 15,
    taxAmount: 2,
}

// SAVES FOR THE GAME
const saves = {
    reset: {
        // DEFAULT STATE OF RESOURCES IN THE GAME
        resources: {
            axe: 2,
            bow: 1,
            coal: 5,
            coins: 18,
            cotton: 0,
            fishing_rod: 2,
            flour: 0,
            food: 15,
            hammer: 1,
            horse: 0,
            iron_bar: 0,
            iron_ore: 0,
            leather: 0,
            people: 11,
            pickaxe: 2,
            planks: 10,
            rope: 0,
            saw: 1,
            string: 0,
            stone: 10,
            swords: 0,
            unemployed: 10,
            wheat: 0,
            wood: 10,
            workers: 2,
            axeWarrior: 0,
            swordsWarrior: 1,
            bowWarrior: 0,
            horseWarrior: 0,
        },
        nextResources: {
            axe: 0,
            // beer: 54,
            bow: 0,
            // brick: 0,
            // clay: 0,
            coal: 0,
            coins: 0,
            cotton: 0,
            // drug: 0,
            fishing_rod: 0,
            flour: 0,
            food: 0,
            // gold_bar: 0,
            // gold_ore: 0,
            // gravel: 111,
            hammer: 0,
            // herbs: 0,
            horse: 0,
            iron_bar: 0,
            iron_ore: 0,
            leather: 0,
            people: 0,
            pickaxe: 0,
            planks: 0,
            rope: 0,
            saw: 0,
            string: 0,
            stone: 0,
            swords: 0,
            unemployed: 0,
            wheat: 0,
            wood: 0,
            workers: 2,
            axeWarrior: 0,
            swordsWarrior: 0,
            bowWarrior: 0,
            horseWarrior: 0,
        },
        maxResources: {
            axe: 2,
            // beer: 100,
            bow: 2,
            // brick: 100,
            // clay: 100,
            coal: 10,
            coins: 100000,
            cotton: 10,
            // drug: 100,
            fishing_rod: 2,
            flour: 10,
            food: 15,
            // gold_bar: 100,
            // gold_ore: 100,
            // gravel: 100,
            hammer: 2,
            // herbs: 100,
            horse: 0,
            iron_bar: 5,
            iron_ore: 8,
            leather: 8,
            people: 999,
            pickaxe: 2,
            planks: 15,
            rope: 4,
            saw: 2,
            string: 3,
            stone: 15,
            swords: 0,
            unemployed: 999,
            wheat: 15,
            wood: 20,
            workers: 2,
            axeWarrior: 999,
            swordsWarrior: 999,
            bowWarrior: 999,
            horseWarrior: 999,
        },
        currentDay: 0,
        lastFieldBuildedOn: 0,
        lastFieldBuildedOnListener: "none",
        currentChoosedBuilding: "none",
        lastBuildedBuilding: "none",
        changedThisTurn: [],
        cannotUndo: "nothing",
        map: [[2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [7,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [7,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [5,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [5,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [5,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [6,null,false,null],
        [8,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [5,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [4,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,true,null],
        [3,null,true,null],
        [1,null,true,null],
        [2,null,false,null],
        [7,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,true,null],
        [2,null,true,null],
        [2,null,true,null],
        [1,null,true,null],
        [1,null,true,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [4,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,true,null],
        [2,null,true,null],
        [1,null,true,null],
        [2,null,true,null],
        [2,null,true,null],
        [3,null,true,null],
        [3,null,true,null],
        [2,null,false,null],
        [3,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [8,null,false,null],
        [5,null,false,null],
        [8,null,false,null],
        [1,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [3,null,true,null],
        [2,null,true,null],
        [3,null,true,null],
        [2,"town_center", true, null],
        [2,null,true,null],
        [2,null,true,null],
        [3,null,true,null],
        [2,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [4,null,false,null],
        [7,null,false,null],
        [4,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,true,null],
        [1,null,true,null],
        [2,null,true,null],
        [2,null,true,null],
        [2,null,true,null],
        [5,null,true,null],
        [7,null,true,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [5,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,true,null],
        [1,null,true,null],
        [2,null,true,null],
        [1,null,true,null],
        [8,null,true,null],
        [8,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [6,null,true,null],
        [4,null,true,null],
        [8,null,true,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [5,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [5,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [5,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [4,null,false,null],
        [7,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [3,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [4,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [5,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [4,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [4,null,false,null],
        [5,null,false,null],
        [6,null,false,null],
        [7,null,false,null],
        [2,null,false,null],
        [6,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [4,null,false,null],
        [8,null,false,null],
        [8,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [3,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [7,null,false,null],
        [6,null,false,null],
        [1,null,false,null],
        [2,null,false,null],
        [1,null,false,null],
        [1,null,false,null],
        [5,null,false,null],
        [3,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null],
        [2,null,false,null]],
        production: {
            changedThisTurn: [],
            marketplace: {
                
            }
        },
        buildingsCosts: {
            "house": [[6, "planks"]],  
            "worker": [[1, "hammer"],[4,"wood"],[4,"planks"],[4, "stone"]], 
            "town_center": [[10, "wood"],[5, "planks"],[35, "stone"]],  
            "church":[[12, "coins"], [20, "stone"]],
            "stable": [ [ 15, "wood" ]],
            "marketplace": [ [ 3, "rope" ], [ 5, "wood" ],  [ 15, "planks" ] ],
        
            "fisherman": [[1,"fishing_rod"],[4, "wood"]],  
            "farmland": [[3, "planks"]], 
            "mill": [[5, "wood"], [15, "stone"]],  
            "bakery": [[1,"iron_bar"],[10, "planks"],[6, "stone"]], 
            "brewery": [[10, "wood"],[7, "stone"],[7, "planks"]],  
            "hunters_hut": [[1, "bow"],[8, "planks"]],  
            "granary": [[10, "planks"],[10, "stone"], [ 4, "iron_bar" ],[10, "wheat"]], 
            "cotton_field":[[4, "wood"]],
        
            "lumberjack": [ [ 1, "axe" ], [ 5, "wood" ]],     
            "sawmill": [ [ 1, "saw" ],  [ 8, "wood" ] ],        
            "mine": [ [1, "pickaxe"],[ 6, "planks" ], [ 6, "stone" ]],
            "well": [ [3, "rope"],[ 2, "wood" ], [ 2, "planks" ], [ 5, "stone" ] ],     
            "geologist": [[ 6, "coins" ]],           
            "rope_maker": [ [ 4, "leather" ], [ 4, "wood" ],  [ 6, "planks" ]],
            "border_tower": [ [ 8, "wood" ], [ 8, "planks" ]], 
        
            
            "armory": [ [ 5, "wood" ], [ 5, "planks" ],  [ 5, "stone" ], [ 5, "leather" ] ],
            "warehouse": [[ 1, "rope" ], [ 10, "wood" ], [ 10, "planks" ], [ 10, "stone" ]],
            "charcoal": [ [ 5, "wood" ], [ 5, "stone" ]],
            "smithy": [[1, "hammer"], [ 4, "wood" ], [ 4, "planks" ],  [ 4, "stone" ] ],
            "ironworks": [ [ 5, "wood" ], [ 2, "planks" ], [ 10, "stone" ] ],
            "barracks": [ [ 12, "wood" ], [ 5, "planks" ], [ 15, "stone" ]],       
        },
        marketplaces: 0,   
        trades: [], 
        armyCost: 0,
        maxArmy: 0,
        currentGoal: 0,
        spectatorMode: false,
        turns: goals[0].turns,
        currentSeason: 0,
        daysToNextSeason: 8,
        tax: tax.taxAmount,
        bandits: {
            banditCamp1: {
                swordsWarrior: 5,
                axeWarrior: 2,
                bowWarrior: 3,
            },
            banditCamp2: {
                horseWarrior: 5,
                swordsWarrior: 2,
                axeWarrior: 1
            },
            banditCamp3: {
                horseWarrior: 2,
                bowWarrior: 6,
                axeWarrior: 3
            }
        },
        destroyedCamps: [],
    }
}

const secondMap = [
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [7, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [7, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [8, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [5, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [8, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [5, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [5, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [5, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [5, null, false, null]
    [1, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [6, null, false, null]
    [8, null, false, null]
    [7, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [5, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [5, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [8, null, false, null]
    [1, null, false, null]
    [8, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [4, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [8, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [5, null, false, null]
    [4, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, true, null]
    [8, null, true, null]
    [1, null, true, null]
    [6, null, false, null]
    [3, null, false, null]
    [4, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [4, null, false, null]
    [1, null, true, null]
    [8, null, true, null]
    [3, null, true, null]
    [4, null, true, null]
    [3, null, true, null]
    [8, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [4, null, false, null]
    [2, null, true, null]
    [8, null, true, null]
    [4, null, true, null]
    [2, null, true, null]
    [8, null, true, null]
    [4, null, true, null]
    [3, null, true, null]
    [4, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [5, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [3, null, true, null]
    [3, null, true, null]
    [8, null, true, null]
    [3, "town_center", true, null]
    [4, null, true, null]
    [7, null, true, null]
    [6, null, true, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, true, null]
    [8, null, true, null]
    [5, null, true, null]
    [4, null, true, null]
    [3, null, true, null]
    [1, null, true, null]
    [8, null, true, null]
    [8, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [1, null, true, null]
    [2, null, true, null]
    [2, null, true, null]
    [3, null, true, null]
    [1, null, true, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, true, null]
    [6, null, true, null]
    [8, null, true, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [5, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [8, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [4, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [5, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [8, null, false, null]
    [8, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [5, null, false, null]
    [5, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [5, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [5, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [5, null, false, null]
    [7, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [8, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [5, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [4, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [3, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [2, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [8, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [3, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [2, null, false, null]
    [7, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [1, null, false, null]
    [1, null, false, null]
    [6, null, false, null]
    [6, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
    [2, null, false, null]
]

const randomNames = [
"four"
,"rabid"
,"large"
,"spicy"
,"hot"
,"envious"
,"nonchalant"
,"army"
,"arch"
,"instrument"
,"sun"
,"divide"
,"ducks"
,"wiry"
,"bitter"
,"print"
,"dress"
,"pine"
,"colossal"
,"well-groomed"
,"melodic"
,"crowded"
,"subdued"
,"nice"
,"rock"
,"far-flung"
,"hulking"
,"skin"
,"agreement"
,"own"
,"open"
,"berry"
,"pause"
,"glistening"
,"test"
,"grieving"
,"chop"
,"valuable"
,"reward"
,"mass"
,"super"
,"murky"
,"industrious"
,"bird"
,"attempt"
,"attach"
,"stare"
,"mix"
,"grandfather"
,"expert"
,"zealous"
,"relax"
,"plant"
,"brick"
,"bubble"
,"shelter"
,"stamp"
,"soggy"
,"believe"
,"bone"
,"mind"
,"gorgeous"
,"try"
,"encourage"]

const nameAndDescription = [
    ["house.png", "A haven for many, providing shelter and employment for the unemployed."],
    ["worker.png", "Transforms the unemployed into industrious workers, enabling the construction of additional buildings each day."],
    ["town_center.png", "A hub of information and the catalyst for marketplaces to thrive within its vicinity."],
    ["church.png", "Finds its prime in the midst of dwellings, town's heart, marketplaces, yet mindful not to nestle too close to another holy spire."],
    ["stable.png", "Home to noble steeds, where horses can be acquired and cared for."],
    ["marketplace.png", "The Marketplace be where ye trade and haggle yer goods, forging bonds of coin and commerce."],
    ["fisherman.png", "Casting nets to ensure a steady supply of fish for sustenance."],
    ["cotton_field.png", "Thriving on swamps, yielding precious cotton for various purposes."],
    ["farmland.gif", "Fertile grounds for cultivating wheat, which can later be transformed into flour and sustain horses. Ideal near swamps and neighboring crops."],
    ["mill.gif", "Transforms wheat into flour, thriving near other mills, water sources, and farmlands."],
    ["bakery.gif", "Flour finds purpose in this establishment, requiring access to water and proximity to mills."],
    ["hunters_hut.png", "Flourishing in vast forests, reaping the rewards of nature's bounty. The more forested, the better."],
    ["granary.png", "Expands storage capacity for wheat, food, and flour, ensuring ample supply."],
    ["lumberjack.png", "Flourishes within forests, though productivity diminishes when surrounded by fellow lumberjacks."],
    ["sawmill.png", "Flourishes when placed near lumberjacks and forests, while avoiding hills and swamps."],
    ["mine.gif", "Seek guidance from a geologist to uncover hidden resources beneath the surface. Flourishes near mountains and other mines."],
    ["well.png", "Provides vital water when there is none nearby, supplying other buildings within its range."],
    ["geologist.png", "Uncover the mysteries hidden deep underground, but exercise caution as their work cannot be undone. Buildings can be placed atop their findings."],
    ["rope_maker.png", "Performs optimally in swampy cotton fields, but struggles on stony terrain."],
    ["border_tower.png", "Expands territorial reach, allowing for the construction of more buildings. Limited by obstructing mountains."],
    ["warehouse.png", "Adjusts storage capacity based on neighboring buildings and their requirements."],
    ["armory.png", "staunch protector of tools, weaponry, and implements, ensconced within its stout walls. Storage capacity influenced by neighboring buildings."],
    ["charcoal.png", "Utilizes wood to produce charcoal, ideally placed near lumberjacks and forests."],
    ["smithy.png", "A forge of essential tools and swords for soldiers. Flourishes near charcoal production and ironworks."],
    ["ironworks.png", "Transforms ore from mines into valuable iron ingots, thriving on fields with underlying coal deposits."],
    ["barracks.png", "Trains and houses an army, but requires regular coin supply to sustain. Prudent financial management is crucial."],
  ];
  
const requirements = [
    ["./src/resources/food.png"],
    ["./src/resources/unemployed.png"],
    ["./src/resources/none.png"],
    ["./src/resources/none.png"],
    ["./src/resources/coins.png", "./src/resources/wheat.png"],
    ["./src/buildings/town_center.png"],
    [ "./src/fields/water.gif"],
    ["./src/fields/water.gif"],
    ["./src/fields/water.gif"],
    ["./src/resources/wheat.png"],
    ["./src/resources/flour.png", "./src/fields/water.gif"],
    ["./src/resources/horse.png"],
    ["./src/resources/buildings.png"],
    ["./src/resources/none.png"],
    ["./src/resources/wood.png"],
    ["./src/resources/none.png"],
    ["./src/resources/none.png"],
    ["./src/resources/none.png"],
    ["./src/resources/cotton.png", "./src/resources/leather.png", "./src/fields/water.gif"],
    ["./src/resources/none.png"],
    ["./src/resources/none.png"],
    ["./src/resources/none.png"],
    ["./src/resources/wood.png"],
    ["./src/resources/coal.png", "./src/resources/planks.png", "./src/resources/iron_bar.png", "./src/fields/water.gif"],
    ["./src/resources/coal.png", "./src/resources/iron_ore.png", "./src/fields/water.gif"],
    ["./src/resources/coins.png", "./src/resources/axe.png", "./src/resources/swords.png", "./src/resources/bow.png", "./src/resources/horse.png"],
];
  
const production = [
    "once/automatic",
    "once",
    "once",
    "automatic",
    "once/automatic",
    "manual",
    "automatic",
    "automatic",
    "automatic",
    "manual",
    "manual",
    "automatic/manual",
    "once",
    "automatic",
    "manual",
    "automatic",
    "automatic",
    "once",
    "manual",
    "once",
    "once",
    "once",
    "manual",
    "manual",
    "manual",
    "manual/automatic",
];
  
const produces = [
    ["./src/resources/people.png", "./src/resources/unemployed.png"],
    ["./src/resources/workers.png"],
    ["./src/buildings/marketplace.png"],
    ["./src/resources/coins.png"],
    ["./src/resources/horse.png"],
    ["./src/resources/random.png"],
    ["./src/resources/food.png"],
    ["./src/resources/cotton.png"],
    ["./src/resources/wheat.png"],
    ["./src/resources/flour.png"],
    ["./src/resources/food.png"],
    ["./src/resources/food.png", "./src/resources/leather.png"],
    ["./src/resources/max_space.png"],
    ["./src/resources/wood.png"],
    ["./src/resources/planks.png"],
    ["./src/resources/coal.png", "./src/resources/stone.png", "./src/resources/iron_ore.png", "./src/resources/coins.png"],
    ["./src/buildings/well.png", "./src/fields/water.gif"],
    ["./src/resources/information.png"],
    ["./src/resources/string.png", "./src/resources/rope.png", "./src/resources/fishing_rod.png", "./src/resources/bow.png"],
    ["./src/resources/vision.png"],
    ["./src/resources/max_space.png"],
    ["./src/resources/max_space.png"],
    ["./src/resources/coal.png"],
    ["./src/resources/pickaxe.png", "./src/resources/axe.png", "./src/resources/hammer.png", "./src/resources/saw.png", "./src/resources/swords.png"],
    ["./src/resources/iron_bar.png"],
    ["./src/resources/axeWarrior.png", "./src/resources/swordsWarrior.png", "./src/resources/bowWarrior.png", "./src/resources/horseWarrior.png"],
];
  
  const storyIntroduction = {
    title: "Welcome, Lord,<br> to your new lands",
    text: "I was delighted to hear that you have been granted these neglected fields for your merits in battle. The King has entrusted you with the challenging task of building a settlement, and I am confident you will excel at it! However, before this place becomes one of the grandest in the country, we must start with small things. Let us begin by gathering 40 wood and 40 stones to have resources for more concrete plans.",
  }

const tutorialTitles = [
    "Winning and Losing Conditions",
    "Seasonal Challenges",
    "Workforce Management",
    "Buildings",
    "Town Center and Undo Feature",
    "Shortcuts"
    ]

const tutorialTexts = [
    "Winning condition is the fulfillment of all objectives. You have a specified number of turns to complete each of them; if you fail to accomplish the assigned task within this time, you lose. You can track the remaining number of turns in the clock located in the bottom right corner. <br><br>Another condition for losing is when, after clicking the next turn button, your food indicator drops below zero or the amount of coal needed to heat up houses in winter will not be provided.<br> Every 10 days, you must pay a tax - the number of coins equal to the number of houses you possess",
    "During the winter, the farmlands, cotton fields, and fishermen do not work. Remember to gather the necessary supplies before this period.<br><br> You start in the spring; to know how many turns are left until the next season, click on the clock in the bottom right corner. When you do this, it will turn around to show the remaining turns.",
    "To construct a building, you will need (in addition to the required resources) one unemployed person (second icon from the top in the upper right corner) and one builder (third icon from the top in the upper right corner).<br><br> To increase number of unemployed, build houses, but remember that each person requires one unit of food per turn. Builders can construct only one building per day. After clicking the next turn button, they will be ready to work again. You can increase their numbers by constructing worker huts.",
    "Buildings in the town are divided into two types. The first type consists of automatically functioning structures, while the second type requires manual interaction. Automatic buildings are highlighted in blue on the bottom bar, while manual ones appear in yellow. <br><br>Certain buildings require water to operate effectively. Therefore, it is essential to construct them near water sources, such as fields with water or within the vicinity of a well that irrigates fields in a two-tile radius.",
    "Information about the buildings can be found by clicking on the town center. There, you can find details about the building types, their production output, and the requirements for their proper functioning. The descriptions provide useful information about each building.<br><br> There is a possibility to undo the construction of a building, but only one, provided that no prior interaction has occurred with it. The exception to this rule includes markets and geologists, whose constructions cannot be undone.",
    "Q - New Turn<br>WASD - Map Movement<br>C - Center Map <br>E - Undo Building<br>R - Settings<br>1, 2, 3, 4 - Switching Buildings Sections"]

const fightFieldsDescription = {
    hills: "Defending units get 1 hp",
    plains: "Cavalry deals 1 extra damage",
    swamp: "Hewers deal 2 extra damage",
    ore_field: "Cavalry deals 2 less damage",
    rocks: "Knights deal 2 extra damage"
}
const banditCamp1SpawnArea = [1108,237,1090,1300,681]
const banditCamp2SpawnArea = [1202,162,408,824,1282]
const banditCamp3SpawnArea = [372,121,1316,1209,546]