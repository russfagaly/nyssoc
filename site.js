/* Shared header + footer injection for all pages.
   Each page has <div id="site-header"></div> and <div id="site-footer"></div>
   and sets <body data-page="..."> for the active nav state. */

(function () {
  var NAV = [
    { id: "home",       label: "Home",                href: "Home.html" },
    { id: "about",      label: "About",               href: "About.html" },
    { id: "revolution", label: "The Revolution",      href: "The Revolution.html" },
    { id: "activities", label: "Activities",          href: "Activities.html" },
    { id: "toy",        label: "Teacher of the Year", href: "Teacher of the Year.html" },
    { id: "membership", label: "Membership",          href: "Membership.html" },
    { id: "news",       label: "News",                href: "News.html" },
    { id: "resources",  label: "Resources",           href: "Resources.html" }
  ];

  var page = document.body.getAttribute("data-page") || "";

  var navLinks = NAV.map(function (item) {
    var cls = item.id === page ? ' class="active"' : "";
    return '<a href="' + item.href + '"' + cls + ">" + item.label + "</a>";
  }).join("");

  var headerHTML =
    '<div class="ribbon"></div>' +
    '<div class="masthead-wrap">' +
    '<header class="masthead">' +
    '  <a class="brand" href="Home.html">' +
    '    <div class="seal">1783</div>' +
    '    <div class="brand-text">' +
    '      <span class="brand-kicker">Instituted June 9, 1783</span>' +
    '      <span class="brand-name">The New York State Society <em>of the</em> Cincinnati</span>' +
    "    </div>" +
    "  </a>" +
    '  <div class="mast-actions">' +
    '    <a class="btn btn-ghost" href="Members.html">Members</a>' +
    '    <a class="btn btn-primary" href="Contribute.html">Contribute</a>' +
    "  </div>" +
    "</header>" +
    '<nav class="mainnav"><div class="mainnav-inner">' + navLinks + "</div></nav>" +
    "</div>";

  var footerHTML =
    '<footer class="footer">' +
    '<div class="footer-ribbon"></div>' +
    '<div class="footer-inner">' +
    '  <div class="footer-col">' +
    '    <div class="seal">1783</div>' +
    '    <div class="footer-brand-name">The New York State Society <em>of the</em> Cincinnati</div>' +
    "    <p>Formed June 9, 1783 to keep alive the spirit and principles of the American Revolution, to honor the memory of George Washington, and to perpetuate the friendships of the officers of the Continental Line.</p>" +
    "  </div>" +
    '  <div class="footer-col"><h4>Explore</h4><ul>' +
    '    <li><a href="About.html">Our History</a></li>' +
    '    <li><a href="The Revolution.html">The Revolution</a></li>' +
    '    <li><a href="Activities.html">Activities</a></li>' +
    '    <li><a href="Resources.html">Resources</a></li>' +
    "  </ul></div>" +
    '  <div class="footer-col"><h4>Take Part</h4><ul>' +
    '    <li><a href="Membership.html">Membership</a></li>' +
    '    <li><a href="Teacher of the Year.html">Teacher of the Year</a></li>' +
    '    <li><a href="Contribute.html">Contribute</a></li>' +
    '    <li><a href="Members.html">Members Area</a></li>' +
    "  </ul></div>" +
    '  <div class="footer-col"><h4>Contact</h4><ul>' +
    '    <li><a href="mailto:Info@nycincinnati.org">Info@nycincinnati.org</a></li>' +
    '    <li><a href="https://www.mountgulian.org/" target="_blank" rel="noopener">Mount Gulian Historic Site</a></li>' +
    "  </ul></div>" +
    "</div>" +
    '<div class="footer-base">' +
    "  <span>\u00A9 2026 The New York State Society of the Cincinnati</span>" +
    '  <span><a href="#">Terms of Use</a></span>' +
    "</div>" +
    "</footer>";

  var headerMount = document.getElementById("site-header");
  var footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.innerHTML = headerHTML;
  if (footerMount) footerMount.innerHTML = footerHTML;
})();
