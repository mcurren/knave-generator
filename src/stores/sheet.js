import { reactive } from "vue";
import { defineStore } from "pinia";

export const useCharacterStore = defineStore("character", () => {
  const sheet = reactive({
    name: "",
    level: 1,
    maxHp: false,
    armor: {
      defense: 11,
      bonus: 1,
    },
    traits: [
      {
        id: "physique",
        label: "physique",
        value: false,
      },
      {
        id: "face",
        label: "face",
        value: false,
      },
      {
        id: "skin",
        label: "skin",
        value: false,
      },
      {
        id: "hair",
        label: "hair",
        value: false,
      },
      {
        id: "clothing",
        label: "clothing",
        value: false,
      },
      {
        id: "virtue",
        label: "virtue",
        value: false,
      },
      {
        id: "vice",
        label: "vice",
        value: false,
      },
      {
        id: "speech",
        label: "speech",
        value: false,
      },
      {
        id: "background",
        label: "background",
        value: false,
      },
      {
        id: "misfortune",
        label: "misfortune",
        value: false,
      },
      {
        id: "alignment",
        label: "alignment",
        value: false,
      },
    ],
    abilities: [
      {
        id: "strength",
        label: "Strength",
        bonus: false,
      },
      {
        id: "dexterity",
        label: "Dexterity",
        bonus: false,
      },
      {
        id: "constitution",
        label: "Constitution",
        bonus: false,
      },
      {
        id: "intelligence",
        label: "Intelligence",
        bonus: false,
      },
      {
        id: "wisdom",
        label: "Wisdom",
        bonus: false,
      },
      {
        id: "charisma",
        label: "Charisma",
        bonus: false,
      },
    ],
    canSwapAbility: true,
    inventory: [],
  });

  function changeSheet(key, value) {
    sheet[key] = value;
  }

  function changeTrait(key, value) {
    sheet.traits.find(({ id }) => id === key).value = value;
  }

  function changeAbility(key, value) {
    sheet.abilities.find(({ id }) => id === key).bonus = value;
  }

  function swapAbilities(thisId, targetId) {
    const thisBonus = sheet.abilities.find(({ id }) => id === thisId).bonus;
    const targetBonus = sheet.abilities.find(({ id }) => id === targetId).bonus;

    sheet.abilities.find(({ id }) => id === thisId).bonus = targetBonus;
    sheet.abilities.find(({ id }) => id === targetId).bonus = thisBonus;

    sheet.canSwapAbility = false;
  }

  function addToInventory(value, toTop = false) {
    if (toTop) {
      sheet.inventory.unshift(value);
    } else {
      sheet.inventory.push(value);
    }
  }

  return {
    sheet,
    changeSheet,
    changeTrait,
    changeAbility,
    swapAbilities,
    addToInventory,
  };
});
