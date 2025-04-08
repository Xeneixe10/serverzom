// constants
const LOOT_MIN_AMOUNT = 1;
const LOOT_MAX_AMOUNT = 30;

// utility functions
const modifyEntityLoot = (entity, loot, chance) => {
    LootJS.modifiers((event) => {
        event
            .addEntityLootModifier(entity)
            .randomChance(chance)
            .addLoot(loot);
    });
};

const modifyTableLoot = (entity, loot, chance) => {
    LootJS.modifiers((event) => {
        event
            .addLootTableModifier(entity)
            .randomChance(chance)
            .addLoot(loot);
    });
};

const modifyTypeLoot = (entity, loot, chance) => {
    LootJS.modifiers((event) => {
        event
            .addLootTypeModifier(entity)
            .randomChance(chance)
            .addLoot(loot);
    });
};

const generateRandomLootAmount = () => {
    return Math.round(Math.random() * (LOOT_MAX_AMOUNT - LOOT_MIN_AMOUNT) + LOOT_MIN_AMOUNT);
};


// Vanilla containers loot table modifications
modifyTypeLoot(LootType.CHEST, 'projectarsenal:m9', 0.1);
modifyTypeLoot(LootType.CHEST, 'additionalguns:p250', 0.1);
modifyTypeLoot(LootType.CHEST, 'additionalguns:ak74', 0.1);
modifyTypeLoot(LootType.CHEST, 'minecraft:gunpowder', 0.1);
modifyTypeLoot(LootType.CHEST, '10x cgm:basic_bullet', 0.1);
modifyTypeLoot(LootType.CHEST, '10x additionalguns:bullet_long', 0.1);
modifyTypeLoot(LootType.CHEST, 'taccraft:assault_vest_helmet', 0.1);
modifyTypeLoot(LootType.CHEST, 'apocalypsenow:medicalkit', 0.1);
modifyTypeLoot(LootType.CHEST, '10x additionalguns:bullet_short', 0.1);
modifyTypeLoot(LootType.CHEST, 'taccraft:assault_vest_chestplate', 0.1);
modifyTypeLoot(LootType.CHEST, 'marbledsarsenal:black_plate_carrier_t1', 0.1);
modifyTypeLoot(LootType.CHEST, 'projectarsenal:akx', 0.1);
modifyTypeLoot(LootType.CHEST, '10x cgm:advanced_bullet', 0.1);
modifyTypeLoot(LootType.CHEST, 'apocalypsenow:mre', 0.1);
modifyTypeLoot(LootType.CHEST, '2x apocalypsenow:canned_food', 0.1);
modifyTypeLoot(LootType.CHEST, '2x apocalypsenow:canned_soup', 0.1);
modifyTypeLoot(LootType.CHEST, 'zombie_extreme:modern_axe', 0.1);
modifyTableLoot('minecraft:barrel', 'apocalypsenow:medicalkit', 0.1);

// Vanilla Mobs Loot Modifications
modifyTableLoot('minecraft:entities/creeper', 'scorchedguns:osgood_50', 0.1);

//Apocalypse Now Loot Modifications
modifyEntityLoot('apocalypsenow:looter_1', 'scorchedguns:lm_scoont', 0.2);
modifyEntityLoot('apocalypsenow:looter_1', '15x cgm:advanced_bullet', 0.2);
modifyEntityLoot('apocalypsenow:looter_2', 'scorchedguns:osgood_50', 0.2);
modifyEntityLoot('apocalypsenow:looter_2', '20x scorchedguns:experimental_round', 0.2);
modifyEntityLoot('apocalypsenow:looter_3', '20x scorchedguns:experimental_round', 0.2);
modifyEntityLoot('apocalypsenow:looter_3', 'scorchedguns:osgood_50', 0.2);
modifyEntityLoot('apocalypsenow:looter_4', 'additionalguns:awm', 0.2);
modifyEntityLoot('apocalypsenow:looter_4', 'additionalguns:bullet_long', 0.2);
modifyEntityLoot('apocalypsenow:looter_5', 'additionalguns:over_under', 0.2);
modifyEntityLoot('apocalypsenow:looter_5', '20x cgm:shell', 0.2);
modifyEntityLoot('apocalypsenow:soldiers', 'projectarsenal:famas', 0.2);
modifyEntityLoot('apocalypsenow:soldiers', 'projectarsenal:aa12', 0.2);
modifyEntityLoot('apocalypsenow:soldiers', '45x cgm:advanced_bullet', 0.2);
modifyEntityLoot('apocalypsenow:soldiers', '30x cgm:shell', 0.2);
modifyEntityLoot('apocalypsenow:military_01', 'additionalguns:m4a1s', 0.2);
modifyEntityLoot('apocalypsenow:military_01', 'zombie_extreme:military_suit_leggings', 0.2);
modifyEntityLoot('apocalypsenow:military_01', '30x cgm:shell', 0.2);
modifyEntityLoot('apocalypsenow:military_02', 'additionalguns:usas12', 0.2);
modifyEntityLoot('apocalypsenow:military_02', '30x additionalguns:bullet_medium', 0.2);
modifyEntityLoot('apocalypsenow:military_medic', '5x apocalypsenow:medicalkit', 0.2);
