

//Comments for Hasan Eyvazoff


// burda querySelectorAll da butun knopklari seçirik (ona gerede All yaziram)

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");

    // "forEach" butun kileksiyamizdan keçir və ona obrabotcik sobitiya klika verecek

tabsBtn.forEach(function(item) {

    // her "item" biz obrabotcik sobitiya klika veririk
    item.addEventListener("click", function() {
        // peremenniy yaratdiq "let"
        let currentBtn = item;


        // indi hamidan active classini çixaririq ve sonrada konkret buttona class active veririk (25 setir)
        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
      });
      // currentBtn-uçun class yaratdiq. Indi tablara basanda,ustune active classi goturur
      currentBtn.classList.add('active');
    });
});



