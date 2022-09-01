import { showHUD, Clipboard, getPreferenceValues } from "@raycast/api";

interface Preferences {
  "branch-prefix"?: string;
  "suffix-length"?: string;
}

export default async function main() {
  const preferences = getPreferenceValues<Preferences>();

  const prefix = preferences["branch-prefix"];
  const length = parseInt(preferences["suffix-length"] || "4", 10);
  const id = (Math.random() * 1e20).toString(36).substring(0, length);

  await Clipboard.copy((prefix ? prefix + "/" : "") + id);
  await showHUD("Copied branch name to clipboard");
}
