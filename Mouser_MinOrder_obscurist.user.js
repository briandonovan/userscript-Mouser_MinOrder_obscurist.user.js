// ==UserScript==
// @name         Mouser Minimum Order > 1 obscurer
// @namespace    http://www.eatdirtshit.rocks/
// @version      0.01
// @downloadURL  http://eatdirtshit.rocks/userscripts/Mouser_MinOrder_obscurist.user.js
// @description  Makes components with minimum order quantities > 1 less prominent.
// @author       Brian Donovan
// @match       https://www.mouser.hk/*
// @grant        none
// ==/UserScript==
console.log = console.__proto__.log;
(function() {
  'use strict';
  var ndHtmlElemSearchResultsTable = document.getElementById('searchResultsTbl');
  if (typeof(ndHtmlElemSearchResultsTable) === 'undefined') { return false; }
  var ndlstHtmlDivsWithClassAttribMinQty = document.querySelectorAll('div[class="min-mult-qty"]');
  for (var i=0; i<ndlstHtmlDivsWithClassAttribMinQty.length; i++) {
      var ndHtmlElemSpanMinQty = ndlstHtmlDivsWithClassAttribMinQty[i].querySelector('span[data-min-qty]');
      if (ndHtmlElemSpanMinQty === null) {continue;}
      var numMinOrderQty = Number(ndHtmlElemSpanMinQty.getAttribute('data-min-qty'));
      if (isNaN(numMinOrderQty)) {continue;}
      if (numMinOrderQty > 1) {
      var ndHtmlElemOneSearchResultTr = ndlstHtmlDivsWithClassAttribMinQty[i].parentNode.parentNode;
      ndHtmlElemOneSearchResultTr.style.opacity = 0.15;
      }
  }
})();

