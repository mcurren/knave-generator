import { defineStore } from "pinia";

export const useStartingGearStore = defineStore("gear", () => {
  const armor = {
    label: "Armor",
    sheet: {
      id: "inventory",
      type: "array",
    },
    roll: {
      weighted: {
        min: 1,
        max: 20,
        valueType: "array",
      },
      count: 1,
    },
    items: [
      {
        results: [1, 2, 3],
        value: false,
      },
      {
        results: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        value: [
          {
            type: "armor",
            label: "Gambeson",
            defense: 12,
            slots: 1,
            quality: 3,
          },
        ],
      },
      {
        results: [15, 16, 17, 18, 19],
        value: [
          {
            type: "armor",
            label: "Brigandine",
            defense: 13,
            slots: 2,
            quality: 4,
          },
        ],
      },
      {
        results: [20],
        value: [
          {
            type: "armor",
            label: "Chain",
            defense: 14,
            slots: 3,
            quality: 5,
          },
        ],
      },
    ],
  };
  const helmetsShields = {
    label: "Helmets and Shields",
    sheet: {
      id: "inventory",
      type: "array",
    },
    roll: {
      weighted: {
        min: 1,
        max: 20,
        valueType: "array",
      },
      count: 1,
      modifier: {
        id: "armorBonus",
      },
    },
    items: [
      {
        results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        value: false,
      },
      {
        results: [14, 15, 16],
        value: [
          {
            type: "armorBonus",
            label: "Helmet",
            bonus: 1,
            slots: 1,
            quality: 1,
          },
        ],
      },
      {
        results: [17, 18, 19],
        value: [
          {
            type: "armorBonus",
            label: "Shield",
            bonus: 1,
            slots: 1,
            quality: 1,
          },
        ],
      },
      {
        results: [20],
        value: [
          {
            type: "armorBonus",
            label: "Helmet",
            bonus: 1,
            slots: 1,
            quality: 1,
          },
          {
            type: "armorBonus",
            label: "Shield",
            bonus: 1,
            slots: 1,
            quality: 1,
          },
        ],
      },
    ],
  };
  const weapons = {
    label: "Weapons",
    selectOptions: [
      {
        label:
          "Dagger, Cudgel, Sickle, Staff, etc. (d6 damage, 1 slot, 1 hand, 3 quality)",
        value: 0,
      },
      {
        label:
          "Spear, Sword, Mace, Axe, Flail, etc. (d8 damage, 2 slots, 1 hand, 3 quality)",
        value: 1,
      },
      {
        label:
          "Halberd, War Hammer, Long Sword, Battle Axe, etc. (d10 damage, 3 slots, 2 hands, 3 quality)",
        value: 2,
      },
      {
        label: "Sling (d4 damage, 1 slot, 1 hand, 3 quality)",
        value: 3,
      },
      {
        label: "Bow (d6 damage,  2 slots, 2 hands, 3 quality)",
        value: 4,
      },
      {
        label: "Crossbow (d8 damage, 3 slots, 2 hands, 3 quality)",
        value: 5,
      },
    ],
    sheet: {
      id: "inventory",
      type: "array",
    },
    roll: {
      weighted: false,
      count: 2,
    },
    items: [
      {
        type: "weapon",
        label: "Dagger, Cudgel, Sickle, Staff, etc.",
        damage: "d6",
        slots: 1,
        hands: 1,
        quality: 3,
      },
      {
        type: "weapon",
        label: "Spear, Sword, Mace, Axe, Flail, etc.",
        damage: "d8",
        slots: 2,
        hands: 1,
        quality: 3,
      },
      {
        type: "weapon",
        label: "Halberd, War Hammer, Long Sword, Battle Axe, etc.",
        damage: "d10",
        slots: 3,
        hands: 2,
        quality: 3,
      },
      {
        type: "weapon",
        label: "Sling",
        damage: "d4",
        slots: 1,
        hands: 1,
        quality: 3,
      },
      {
        type: "weapon",
        label: "Bow",
        damage: "d6",
        slots: 2,
        hands: 2,
        quality: 3,
      },
      {
        type: "weapon",
        label: "Crossbow",
        damage: "d8",
        slots: 3,
        hands: 2,
        quality: 3,
      },
    ],
  };
  const dungeonGear = {
    label: "Dungeoneering Gear",
    sheet: {
      id: "inventory",
      type: "array",
    },
    roll: {
      weighted: false,
      count: 2,
    },
    items: [
      {
        label: "Rope, 50ft",
        slots: 1,
      },
      {
        label: "Pulleys",
        slots: 1,
      },
      {
        label: "Candles, 5",
        slots: 1,
      },
      {
        label: "Chain, 10ft",
        slots: 1,
      },
      {
        label: "Chalk, 10",
        slots: 1,
      },
      {
        label: "Crowbar",
        slots: 1,
      },
      {
        label: "Tinderbox",
        slots: 1,
      },
      {
        label: "Grap. hook",
        slots: 1,
      },
      {
        label: "Hammer",
        slots: 1,
      },
      {
        label: "Waterskin",
        slots: 1,
      },
      {
        label: "Lantern",
        slots: 1,
      },
      {
        label: "Lamp oil",
        slots: 1,
      },
      {
        label: "Padlock",
        slots: 1,
      },
      {
        label: "Manacles",
        slots: 1,
      },
      {
        label: "Mirror",
        slots: 1,
      },
      {
        label: "Pole, 10ft",
        slots: 1,
      },
      {
        label: "Sack",
        slots: 1,
      },
      {
        label: "Tent",
        slots: 1,
      },
      {
        label: "Spikes, 5",
        slots: 1,
      },
      {
        label: "Torches, 5",
        slots: 1,
      },
    ],
  };
  const generalGear1 = {
    label: "General Gear 1",
    sheet: {
      id: "inventory",
      type: "array",
    },
    roll: {
      weighted: false,
      count: 1,
    },
    items: [
      {
        label: "Air bladder",
        slots: 1,
      },
      {
        label: "Bear trap",
        slots: 1,
      },
      {
        label: "Shovel",
        slots: 1,
      },
      {
        label: "Bellows",
        slots: 1,
      },
      {
        label: "Grease",
        slots: 1,
      },
      {
        label: "Saw",
        slots: 1,
      },
      {
        label: "Bucket",
        slots: 1,
      },
      {
        label: "Caltrops",
        slots: 1,
      },
      {
        label: "Chisel",
        slots: 1,
      },
      {
        label: "Drill",
        slots: 1,
      },
      {
        label: "Fish. rod",
        slots: 1,
      },
      {
        label: "Marbles",
        slots: 1,
      },
      {
        label: "Glue",
        slots: 1,
      },
      {
        label: "Pick",
        slots: 1,
      },
      {
        label: "Hourglass",
        slots: 1,
      },
      {
        label: "Net",
        slots: 1,
      },
      {
        label: "Tongs",
        slots: 1,
      },
      {
        label: "Lockpicks",
        slots: 1,
      },
      {
        label: "Metal file",
        slots: 1,
      },
      {
        label: "Nails",
        slots: 1,
      },
    ],
  };
  const generalGear2 = {
    label: "General Gear 2",
    sheet: {
      id: "inventory",
      type: "array",
    },
    roll: {
      weighted: false,
      count: 1,
    },
    items: [
      {
        label: "Incense",
        slots: 1,
      },
      {
        label: "Sponge",
        slots: 1,
      },
      {
        label: "Lens",
        slots: 1,
      },
      {
        label: "Perfume",
        slots: 1,
      },
      {
        label: "Horn",
        slots: 1,
      },
      {
        label: "Bottle",
        slots: 1,
      },
      {
        label: "Soap",
        slots: 1,
      },
      {
        label: "Spyglass",
        slots: 1,
      },
      {
        label: "Tar pot",
        slots: 1,
      },
      {
        label: "Twine",
        slots: 1,
      },
      {
        label: "Fake jewels",
        slots: 1,
      },
      {
        label: "Blank book",
        slots: 1,
      },
      {
        label: "Card deck",
        slots: 1,
      },
      {
        label: "Dice set",
        slots: 1,
      },
      {
        label: "Cook pots",
        slots: 1,
      },
      {
        label: "Face paint",
        slots: 1,
      },
      {
        label: "Whistle",
        slots: 1,
      },
      {
        label: "Instrument",
        slots: 1,
      },
      {
        label: "Quill & Ink",
        slots: 1,
      },
      {
        label: "Small bell",
        slots: 1,
      },
    ],
  };
  return {
    armor,
    helmetsShields,
    weapons,
    dungeonGear,
    generalGear1,
    generalGear2,
  };
});
