/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.packs,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].packstransactionlog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].packstransactionlog,
            charadex.page.packs.relatedData['packs transaction log']
          );
        }

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].packsactivitylog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].packsactivitylog,
            charadex.page.packs.relatedData['packs activity log']
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});