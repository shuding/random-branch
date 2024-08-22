import { showHUD, Clipboard, getPreferenceValues } from "@raycast/api";

interface Preferences {
  "branch-prefix"?: string;
  "suffix-length"?: string;
  "include-git-checkout-b"?: boolean;
}

export default async function main() {
  const preferences = getPreferenceValues<Preferences>();

  const prefix = preferences["branch-prefix"] ? preferences["branch-prefix"] + "/" : "";
  const length = parseInt(preferences["suffix-length"] || "4", 10);
  const gitCheckoutB = preferences["include-git-checkout-b"] ? "git checkout -b " : "";
  const id = (Math.random() * 1e20).toString(36).substring(0, length);

  const result = gitCheckoutB + prefix + id;
  await Clipboard.copy(result);
  await showHUD(`Copied to your clipboard: ${result}`);
}
