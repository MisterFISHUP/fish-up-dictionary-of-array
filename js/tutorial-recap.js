$(document).on("click", ".test_blank", function () {
  $(this).toggleClass("mask");
});

// https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
function shuffle(blockID) {
  const block = document.getElementById(blockID);
  let temp = block.cloneNode(true);
  let i = temp.children.length + 1;
  while (i-- > 0) temp.appendChild(temp.children[Math.random() * i | 0]);
  block.parentNode.replaceChild(temp, block);
}
// for block test fss
shuffle("blockTestFSSNumber");
shuffle("blockTestFSS");
$("#togglePointOfView").click(function () {
  $(this).children().toggleClass("w3-hide");
  shuffle("blockTestFSSNumber");
  shuffle("blockTestFSS");
  $("#blockTestFSSNumber, #blockTestFSS").toggleClass("w3-hide");
  $("#blockTestFSSNumber").addClass("w3-animate-left");
  $("#blockTestFSS").addClass("w3-animate-right");
  $("#blockTestFSS .test_blank, #blockTestFSSNumber .test_blank").addClass("mask");
})
// for block test radical
$("#shuffleTestRadical").click(function () {
  shuffle("block_test_radical");
  $("#block_test_radical .test-radical .test_blank").addClass("mask");
});
$("#test_radical_show_all").click(function () {
  $("#block_test_radical .test-radical .test_blank").removeClass("mask");
});
$("#test_radical_hide_all").click(function () {
  $("#block_test_radical .test-radical .test_blank").addClass("mask");
});
$("#test_radical_show_all_radical_type").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_type").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).addClass("mask");
  })
});
$("#test_radical_show_all_radical_code").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_code").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).addClass("mask");
  })
});
$("#test_radical_show_all_radical_key").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_key").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).addClass("mask");
  })
});

// for block test radical sc
$("#shuffleTestRadicalSC").click(function () {
  shuffle("block_test_radical_sc");
  $("#block_test_radical_sc .test-radical .test_blank").addClass("mask");
});
$("#test_radical_sc_show_all").click(function () {
  $("#block_test_radical_sc .test-radical .test_blank").removeClass("mask");
});
$("#test_radical_sc_hide_all").click(function () {
  $("#block_test_radical_sc .test-radical .test_blank").addClass("mask");
});
$("#test_radical_sc_show_all_radical_type").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_type").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).addClass("mask");
  })
});
$("#test_radical_sc_show_all_radical_code").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_code").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).addClass("mask");
  })
});
$("#test_radical_sc_show_all_radical_key").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_key").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).addClass("mask");
  })
});
$(document).on("click", ".test_blank", function () {
  $(this).toggleClass("mask");
});

// https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
function shuffle(blockID) {
  const block = document.getElementById(blockID);
  let temp = block.cloneNode(true);
  let i = temp.children.length + 1;
  while (i-- > 0) temp.appendChild(temp.children[Math.random() * i | 0]);
  block.parentNode.replaceChild(temp, block);
}
// for block test fss
shuffle("blockTestFSSNumber");
shuffle("blockTestFSS");
$("#togglePointOfView").click(function () {
  $(this).children().toggleClass("w3-hide");
  shuffle("blockTestFSSNumber");
  shuffle("blockTestFSS");
  $("#blockTestFSSNumber, #blockTestFSS").toggleClass("w3-hide");
  $("#blockTestFSSNumber").addClass("w3-animate-left");
  $("#blockTestFSS").addClass("w3-animate-right");
  $("#blockTestFSS .test_blank, #blockTestFSSNumber .test_blank").addClass("mask");
})
// for block test radical
$("#shuffleTestRadical").click(function () {
  shuffle("block_test_radical");
  $("#block_test_radical .test-radical .test_blank").addClass("mask");
});
$("#test_radical_show_all").click(function () {
  $("#block_test_radical .test-radical .test_blank").removeClass("mask");
});
$("#test_radical_hide_all").click(function () {
  $("#block_test_radical .test-radical .test_blank").addClass("mask");
});
$("#test_radical_show_all_radical_type").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_type").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).addClass("mask");
  })
});
$("#test_radical_show_all_radical_code").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_code").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).addClass("mask");
  })
});
$("#test_radical_show_all_radical_key").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_key").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).addClass("mask");
  })
});

// for block test radical sc
$("#shuffleTestRadicalSC").click(function () {
  shuffle("block_test_radical_sc");
  $("#block_test_radical_sc .test-radical .test_blank").addClass("mask");
});
$("#test_radical_sc_show_all").click(function () {
  $("#block_test_radical_sc .test-radical .test_blank").removeClass("mask");
});
$("#test_radical_sc_hide_all").click(function () {
  $("#block_test_radical_sc .test-radical .test_blank").addClass("mask");
});
$("#test_radical_sc_show_all_radical_type").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_type").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).addClass("mask");
  })
});
$("#test_radical_sc_show_all_radical_code").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_code").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).addClass("mask");
  })
});
$("#test_radical_sc_show_all_radical_key").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_key").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).addClass("mask");
  })
});
$(document).on("click", ".test_blank", function () {
  $(this).toggleClass("mask");
});

// https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
function shuffle(blockID) {
  const block = document.getElementById(blockID);
  let temp = block.cloneNode(true);
  let i = temp.children.length + 1;
  while (i-- > 0) temp.appendChild(temp.children[Math.random() * i | 0]);
  block.parentNode.replaceChild(temp, block);
}
// for block test fss
shuffle("blockTestFSSNumber");
shuffle("blockTestFSS");
$("#togglePointOfView").click(function () {
  $(this).children().toggleClass("w3-hide");
  shuffle("blockTestFSSNumber");
  shuffle("blockTestFSS");
  $("#blockTestFSSNumber, #blockTestFSS").toggleClass("w3-hide");
  $("#blockTestFSSNumber").addClass("w3-animate-left");
  $("#blockTestFSS").addClass("w3-animate-right");
  $("#blockTestFSS .test_blank, #blockTestFSSNumber .test_blank").addClass("mask");
})
// for block test radical
$("#shuffleTestRadical").click(function () {
  shuffle("block_test_radical");
  $("#block_test_radical .test-radical .test_blank").addClass("mask");
});
$("#test_radical_show_all").click(function () {
  $("#block_test_radical .test-radical .test_blank").removeClass("mask");
});
$("#test_radical_hide_all").click(function () {
  $("#block_test_radical .test-radical .test_blank").addClass("mask");
});
$("#test_radical_show_all_radical_type").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_type").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).addClass("mask");
  })
});
$("#test_radical_show_all_radical_code").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_code").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).addClass("mask");
  })
});
$("#test_radical_show_all_radical_key").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).removeClass("mask");
  })
});
$("#test_radical_hide_all_radical_key").click(function () {
  $("#block_test_radical .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).addClass("mask");
  })
});

// for block test radical sc
$("#shuffleTestRadicalSC").click(function () {
  shuffle("block_test_radical_sc");
  $("#block_test_radical_sc .test-radical .test_blank").addClass("mask");
});
$("#test_radical_sc_show_all").click(function () {
  $("#block_test_radical_sc .test-radical .test_blank").removeClass("mask");
});
$("#test_radical_sc_hide_all").click(function () {
  $("#block_test_radical_sc .test-radical .test_blank").addClass("mask");
});
$("#test_radical_sc_show_all_radical_type").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_type").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(0).addClass("mask");
  })
});
$("#test_radical_sc_show_all_radical_code").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_code").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(1).addClass("mask");
  })
});
$("#test_radical_sc_show_all_radical_key").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).removeClass("mask");
  })
});
$("#test_radical_sc_hide_all_radical_key").click(function () {
  $("#block_test_radical_sc .test-radical").each(function () {
    $(this).find(".test_blank").eq(2).addClass("mask");
  })
});
