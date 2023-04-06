/**
 * Remove the "Built with Sphinx using a theme provided by Read The Docs" text from the footer
 */
$(document).ready(function () {
  (function (d) {
    // Get a copy of the good elements
    const footerNav = document.querySelector(".rst-footer-buttons").outerHTML;
    const contentInfo = document.querySelector(
      "div[role='contentinfo']"
    ).outerHTML;

    // Empty the footer, add back the good elements
    $(".rst-content footer").html(`${footerNav} <hr> ${contentInfo}`);
  })(document);
});
