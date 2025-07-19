/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Charadex",
  url: "https://lokivirart.github.io/SurvivalARPG/",
  description: `A closed species ARPG about group survival !`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "1bzDVed_31khANVYCauDfqEcwozGkxFlLTw1tvbC31FU",

  pages: {
    masterlist:             "masterlist",
    masterlistLog:          "masterlist log",
    activityLog:            "activity log",
    packs:                  "packs",
    packsTransactionLog:    "packs transaction log",
    packsActivityLog:       "packs activity log",
    inventory:              "inventory",
    inventoryLog:           "inventory log",
    items:                  "items",
    traits:                 "traits",
    prompts:                "prompts",
    faq:                    "faq",
    staff:                  "staff",
  },

  options: {

    designTypes: ['All', 'Official Design', 'Guest Design', 'MYO Slot', 'MYO Design'],
    species: ['All', 'Sp1', 'Sp2', 'Sp3'],
    rarity: ['All', 'Common', 'Uncommon', 'Rare'],
    speciesGroup: ['All', 'G1', 'G2', 'G3'],
    itemTypes: ['All', 'Currency', 'MYO Slot', 'Trait', 'Misc'],
    traitTypes: ['All', 'Ears', 'Eyes', 'Body', 'Limbs', 'Tails', 'Misc', 'Mutations'],

  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};


/* Item Catalogue
/* --------------------------------------------------------------- */
charadex.page.items = {

  sheetPage: charadex.sheet.pages.items,
  sitePage: 'items',
  dexSelector: 'charadex',
  profileProperty: 'item',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: true,
  },

};


/* Traits
/* --------------------------------------------------------------- */
charadex.page.traits = {

  sheetPage: charadex.sheet.pages.traits,
  sitePage: 'traits',
  dexSelector: 'charadex',
  profileProperty: 'trait',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.traitTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.traitTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Trait', 'Rarity']
  },

  prevNext: {
    toggle: true,
  },

};


/* Prompts
/* --------------------------------------------------------------- */
charadex.page.prompts = {

  sheetPage: charadex.sheet.pages.prompts,
  sitePage: 'prompts',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "enddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};


/* Staff
/* --------------------------------------------------------------- */
charadex.page.staff = {

  sheetPage: charadex.sheet.pages.staff,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};


/* FAQ
/* --------------------------------------------------------------- */
charadex.page.faq = {

  sheetPage: charadex.sheet.pages.faq,
  sitePage: 'faq',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Question', 'Answer', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

}



/* Masterlist
/* --------------------------------------------------------------- */
charadex.page.masterlist = {

  sheetPage: charadex.sheet.pages.masterlist,
  sitePage: 'masterlist',
  dexSelector: 'charadex',
  profileProperty: 'design',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Species': charadex.sheet.options.species,
      'Rarity': charadex.sheet.options.rarity,
      'Design Type': charadex.sheet.options.designTypes,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'SpeciesGroup',
    parameters: charadex.sheet.options.speciesGroup,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Design', 'Owner', 'Designer', 'Artist', 'Traits']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.masterlistLog]: {

      sheetPage: charadex.sheet.pages.masterlistLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "date",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },

    [charadex.sheet.pages.activityLog]: {

      sheetPage: charadex.sheet.pages.activityLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'activity',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "date",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    }

  }

};

/* Packs
/* --------------------------------------------------------------- */
charadex.page.packs = {

  sheetPage: charadex.sheet.pages.packs,
  sitePage: 'packs',
  dexSelector: 'charadex',
  profileProperty: 'design',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Packs',
    parameters: charadex.sheet.options.packs,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Design', 'Owner', 'Artist']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.packsTransactionLog]: {

      sheetPage: charadex.sheet.pages.packsTransactionLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "date",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },

    [charadex.sheet.pages.packsActivityLog]: {

      sheetPage: charadex.sheet.pages.packsActivityLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'activity',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "date",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    }

  }

};

/* Inventory
/* --------------------------------------------------------------- */
charadex.page.inventory = {

  // Dex Set Up
  sheetPage: charadex.sheet.pages.inventory,
  sitePage: 'players',
  dexSelector: 'charadex',
  profileProperty: 'username',

  // Dex Options
  sort: {
    toggle: true,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },


  // Related Data
  relatedData: {

    [charadex.sheet.pages.inventoryLog]: {

      sheetPage: charadex.sheet.pages.inventoryLog,
      sitePage: 'inventories',
      primaryProperty: 'username',
      relatedProperty: 'username',
      dexSelector: 'log',
      profileProperty: 'id',
      profileToggle: false,

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },
    

    [charadex.sheet.pages.masterlist]: {

      // This imports the config from the masterlist
      // So you dont have to repeat yourself
      ...charadex.page.masterlist, 

      sheetPage: charadex.sheet.pages.masterlist,
      sitePage: 'masterlist',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'designs',
      profileProperty: 'design',
      profileToggle: false,

    }

  },

  
  // This is a special config for their inventory
  inventoryConfig: {

    sheetPage: charadex.sheet.pages.items,
    sitePage: 'items',
    dexSelector: 'inventory',
    profileProperty: 'item',
    profileToggle: false,

    sort: {
      toggle: true,
      sortProperty: "item",
      order: "asc",
      parametersKey: 'type', 
      parameters: charadex.sheet.options.itemTypes
    },

    search: {
      toggle: true,
      filterToggle: false,
      parameters: ['Item']
    },

    filters: {
      toggle: true,
      parameters: {
        'Type': charadex.sheet.options.itemTypes,
      }
    },

  }

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  prompts: {
    ... charadex.page.prompts,
    dexSelector: 'prompt',
    amount: 3,
  },

  staff: {
    ... charadex.page.staff,
    dexSelector: 'staff',
    amount: 6,
  },

  designs: {
    ... charadex.page.masterlist,
    dexSelector: 'design',
    amount: 4,
  },

  packs: {
    ... charadex.page.packs,
    dexSelector: 'pack',
    amount: 4,
  }

};


export { charadex };