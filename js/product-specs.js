/* ==========================================================================
   Tradesmen Global — per-product hover specifications
   Replaces the (incorrectly duplicated "Hulled Sesame") hover tables with
   category-appropriate, industry-standard export specs.

   NOTE FOR THE OWNER: these are TYPICAL/PLACEHOLDER values to fix the broken
   "sesame on everything" bug — review and edit them to your actual contracted
   export grades. Edit `byProduct` (exact name overrides) and `byCategory`
   (fallback per section) below.
   ========================================================================== */
(function () {
  'use strict';

  // Fallback specs per category (class on the .item wrapper)
  var byCategory = {
    dry: [ // RICE
      ['Moisture', '12–13% max'],
      ['Broken', '1–2% max'],
      ['Purity', '95% min'],
      ['Damaged / discolored', '1% max'],
      ['Foreign matter', '0.1% max']
    ],
    grains: [ // GRAINS & SUGAR
      ['Moisture', '12–14% max'],
      ['Purity', '98% min'],
      ['Foreign matter', '1% max'],
      ['Admixture', '1% max']
    ],
    spices: [
      ['Purity', '99% min'],
      ['Moisture', '10% max'],
      ['Admixture', '1% max'],
      ['Total ash', '7% max']
    ],
    pulses: [
      ['Purity', '99% min'],
      ['Moisture', '12% max'],
      ['Splits / broken', '2% max'],
      ['Foreign matter', '0.5% max']
    ],
    fruits: [ // purees / concentrates
      ['Form', 'Aseptic puree'],
      ['Brix', '14–16°'],
      ['Acidity', '0.3–0.8%'],
      ['pH', '3.5–4.0']
    ],
    dehyd: [ // dehydrated vegetables / fruit
      ['Form', 'Flakes / powder'],
      ['Moisture', '5–7% max'],
      ['Purity', '99% min'],
      ['Mesh size', 'As required']
    ],
    dairy: [
      ['Milk fat', '— '],
      ['Moisture', '— '],
      ['Protein', '— ']
    ],
    feed: [
      ['Protein', '14–16%'],
      ['Moisture', '11% max'],
      ['Crude fiber', '10% max']
    ],
    SUPERFOOD: [
      ['Moisture', '10% max'],
      ['Purity', '98% min'],
      ['Grade', 'Premium export']
    ],
    cotton: [
      ['Grade', 'Export grade'],
      ['Moisture', '8% max'],
      ['Trash content', '2.5% max']
    ]
  };

  // Exact product-name overrides (case-insensitive, trimmed)
  var byProduct = {
    // Rice — average grain length differs by variety
    '1121':                  [['Avg grain length', '8.30 mm'], ['Moisture', '13% max'], ['Broken', '1% max'], ['Purity', '95% min'], ['Foreign matter', '0.1% max']],
    '1121 sella':            [['Avg grain length', '8.30 mm'], ['Moisture', '13% max'], ['Broken', '1% max'], ['Purity', '95% min'], ['Foreign matter', '0.1% max']],
    '1121 raw':              [['Avg grain length', '8.30 mm'], ['Moisture', '13% max'], ['Broken', '1% max'], ['Purity', '95% min'], ['Foreign matter', '0.1% max']],
    '1121 golden':           [['Avg grain length', '8.30 mm'], ['Moisture', '13% max'], ['Broken', '1% max'], ['Purity', '95% min'], ['Foreign matter', '0.1% max']],
    'pusa':                  [['Avg grain length', '7.20 mm'], ['Moisture', '13% max'], ['Broken', '2% max'], ['Purity', '95% min'], ['Foreign matter', '0.1% max']],
    'sona masoori parboiled':[['Avg grain length', '5.20 mm'], ['Moisture', '14% max'], ['Broken', '5% max'], ['Purity', '95% min'], ['Foreign matter', '0.2% max']],
    'sona massori raw':      [['Avg grain length', '5.20 mm'], ['Moisture', '14% max'], ['Broken', '5% max'], ['Purity', '95% min'], ['Foreign matter', '0.2% max']],

    // Grains & sugar
    'wheat':       [['Moisture', '12% max'], ['Protein', '11–12%'], ['Test weight', '78 kg/hl'], ['Foreign matter', '1% max']],
    'corn':        [['Moisture', '14% max'], ['Broken', '2% max'], ['Aflatoxin', '< 20 ppb'], ['Foreign matter', '1% max']],
    'icumsa 45':   [['ICUMSA', '45 max'], ['Polarization', '99.80% min'], ['Moisture', '0.04% max'], ['Color', 'Sparkling white']],
    's- 30':       [['ICUMSA', '100–150'], ['Polarization', '99.50% min'], ['Moisture', '0.06% max'], ['Color', 'White']],
    'jaggery':     [['Sucrose', '70% min'], ['Moisture', '5% max'], ['Form', 'Block / powder']],
    'sorghum':     [['Moisture', '12% max'], ['Purity', '98% min'], ['Foreign matter', '1% max']],
    'millet':      [['Moisture', '12% max'], ['Purity', '98% min'], ['Foreign matter', '1% max']],

    // Spices
    'turmeric':    [['Curcumin', '3–5%'], ['Moisture', '10% max'], ['Total ash', '7% max'], ['Purity', '99% min']],
    'red chillie': [['Heat (SHU)', '15,000–35,000'], ['Moisture', '10% max'], ['Admixture', '1% max']],
    'chillies':    [['Heat (SHU)', '15,000–35,000'], ['Moisture', '10% max'], ['Admixture', '1% max']],
    'black pepper':[['Bulk density', '550–600 g/l'], ['Moisture', '11% max'], ['Admixture', '1% max']],
    'cumin seeds': [['Purity', '99% min'], ['Moisture', '9% max'], ['Volatile oil', '2.5% min']],

    // Dairy
    'ghee':        [['Milk fat', '99.7% min'], ['Moisture', '0.3% max'], ['Free fatty acids', '2.5% max']],
    'cheese':      [['Milk fat', '25% min'], ['Moisture', '45% max'], ['Salt', '1.5–2%']],
    'milk powder': [['Protein', '34% min'], ['Milk fat', '26% (whole)'], ['Moisture', '3.5% max']],

    // Feed
    'wheat bran':  [['Protein', '14–16%'], ['Moisture', '11% max'], ['Crude fiber', '10% max']],
    'rice bran':   [['Protein', '12–14%'], ['Oil', '14–18%'], ['Moisture', '10% max']],
    'corn ddgs':   [['Protein', '26–28% min'], ['Fat', '8% min'], ['Moisture', '10% max']],

    // Superfood
    'foxnut(lotus seeds)': [['Size', '4–6 suta'], ['Moisture', '10% max'], ['Purity', '98% min']],
    'jackfruits':  [['Form', 'Dried / IQF'], ['Moisture', '10% max'], ['Grade', 'Premium']],

    // Fruit concentrates differ from purees
    'apple concentrate': [['Form', 'Concentrate'], ['Brix', '70°'], ['Acidity', '1.5–2.5%'], ['pH', '3.4–3.8']],

    // Cashew & cotton
    'raw cashew':        [['Grade', 'W320 / W240'], ['Moisture', '5% max'], ['Count', '300–320 / lb'], ['Broken', '5% max'], ['Foreign matter', 'Nil']],
    'cotton':            [['Staple length', '28–29 mm'], ['Micronaire', '3.8–4.5'], ['Strength', '28–30 g/tex'], ['Trash', '2.5% max'], ['Moisture', '8% max']],
    'cotton seed hulls': [['Crude fiber', '45–48%'], ['Protein', '4–6%'], ['Fat', '2% min'], ['Moisture', '10% max']]
  };

  var CATS = ['dry', 'grains', 'spices', 'pulses', 'fruits', 'dehyd', 'dairy', 'feed', 'SUPERFOOD', 'cotton'];

  function specsFor(card, item) {
    var title = (card.querySelector('.title') || {}).textContent || '';
    var key = title.trim().toLowerCase().replace(/\s+/g, ' ');
    if (byProduct[key]) return { title: title.trim(), rows: byProduct[key] };
    for (var i = 0; i < CATS.length; i++) {
      if (item.classList.contains(CATS[i])) return { title: title.trim(), rows: byCategory[CATS[i]] };
    }
    return { title: title.trim(), rows: byCategory.spices };
  }

  function render(spec) {
    var rows = spec.rows.map(function (r) {
      return '<li><span class="spk">' + r[0] + '</span><span class="spv">' + r[1] + '</span></li>';
    }).join('');
    return '<div class="spec-card">' +
             '<div class="spec-title">' + (spec.title || 'Specification') + '</div>' +
             '<div class="spec-sub">Typical export specification</div>' +
             '<ul class="spec-list">' + rows + '</ul>' +
           '</div>';
  }

  function run() {
    var items = document.querySelectorAll('.projects .item');
    for (var i = 0; i < items.length; i++) {
      var card = items[i].querySelector('.card');
      var hover = card && card.querySelector('.card-hover');
      if (!hover) continue;
      hover.innerHTML = render(specsFor(card, items[i]));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
