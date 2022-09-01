import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const id = (Math.random() * 10000000).toString(36).substring(0, 4);
  await Clipboard.copy(`shu/${id}`);
  await showHUD("Copied branch name to clipboard");
}
