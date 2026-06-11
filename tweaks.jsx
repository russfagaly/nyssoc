/* Tweaks panel shared across all pages of the redesign.
   Applies choices as data-attributes on <html>; styles.css responds. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "Powder & gold",
  "headline": "Caslon",
  "ribbon": true
}/*EDITMODE-END*/;

const PALETTE_ATTR = {
  "Powder & gold": "default",
  "Navy masthead": "navy",
  "Parchment": "parchment"
};
const HEADLINE_ATTR = {
  "Caslon": "caslon",
  "EB Garamond": "garamond",
  "Cormorant": "cormorant"
};

function ensureAltFonts(face) {
  if (face === "caslon") return;
  var id = "alt-font-" + face;
  if (document.getElementById(id)) return;
  var href =
    face === "garamond"
      ? "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400&display=swap"
      : "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400&display=swap";
  var link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function SiteTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-palette", PALETTE_ATTR[t.palette] || "default");
    const face = HEADLINE_ATTR[t.headline] || "caslon";
    root.setAttribute("data-headline", face);
    ensureAltFonts(face);
    root.setAttribute("data-ribbon", t.ribbon ? "on" : "off");
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Color" />
      <TweakSelect
        label="Palette"
        value={t.palette}
        options={["Powder & gold", "Navy masthead", "Parchment"]}
        onChange={(v) => setTweak("palette", v)}
      />
      <TweakSection label="Type" />
      <TweakSelect
        label="Headline face"
        value={t.headline}
        options={["Caslon", "EB Garamond", "Cormorant"]}
        onChange={(v) => setTweak("headline", v)}
      />
      <TweakSection label="Detail" />
      <TweakToggle
        label="Ribbon bands"
        value={t.ribbon}
        onChange={(v) => setTweak("ribbon", v)}
      />
    </TweaksPanel>
  );
}

(function mountTweaks() {
  var mount = document.createElement("div");
  mount.id = "tweaks-mount";
  document.body.appendChild(mount);
  ReactDOM.createRoot(mount).render(<SiteTweaks />);
})();
