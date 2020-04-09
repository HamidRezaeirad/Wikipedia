const LanguageOptions = [
  { label: "English", value: "en", orginal: "English" },
  { label: "Deutsch", value: "de", orginal: "German" },
  { label: "Français", value: "fr", orginal: "French" },
  { label: "Español", value: "es", orginal: "Spanish" },
  { label: "Svenska", value: "se", orginal: "Swedish" },
  { label: "Türkçe", value: "tr", orginal: "Turkish" },
  { label: "Suomi", value: "fi", orginal: "Finnish" },
  { label: "Română", value: "ro", orginal: "Romanian" },
  { label: "Nederlands", value: "nl", orginal: "Dutch" },
  { label: "Ελληνικά", value: "el", orginal: "Greek" },
  { label: "Eesti", value: "et", orginal: "Estonian" },
  { label: "Português", value: "br", orginal: "Portuguese" },
];

const FullLanguageOptions = [
  {
    label: "Please select ...",
    value: "0",
  },
  ...LanguageOptions,
];

export { LanguageOptions, FullLanguageOptions };
